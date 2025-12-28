"use client";
import { useState,useEffect } from "react";
import { jsPDF } from 'jspdf';
import { RegistrationContext } from "./RegistrationContext";
import FingerprintJS from '@fingerprintjs/fingerprintjs';

const mobileRegex = /^[6-9]\d{9}$/;
const rollRegex = /^[0-9]{4}[A-Z]{3}[0-9]{3}$/;

export const RegistrationProvider = ({ children, event, onClose }: any) => {
  // --- CONFIG ---
  const maxMembers = event.teamSize.max - 1; 
  const minMembers = Math.max(0, event.teamSize.min - 1);
  const totalSteps = 1 + maxMembers;

  // --- STATE ---
  const [step, setStep] = useState(0);
  const [isInternal, setIsInternal] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [receiptId, setReceiptId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [deviceFingerprint, setDeviceFingerprint] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [teamName, setTeamName] = useState("");
  const [captain, setCaptain] = useState({ name: "", phone: "", roll: "" });
  const [members, setMembers] = useState(
    Array.from({ length: maxMembers }).map(() => ({ name: "", phone: "", roll: "" }))
  );
  useEffect(() => {
    const setFp = async () => {
      try {
        const fp = await FingerprintJS.load();
        const { visitorId } = await fp.get();
        setDeviceFingerprint(visitorId);
        console.log("Device Fingerprint:", visitorId);
      } catch (e) {
        console.error("Fingerprint failed", e);
      }
    };
    setFp();
  }, []);
  // --- ACTIONS ---
  const updateCaptain = (field: string, val: string) => {
    setCaptain(prev => ({ ...prev, [field]: field === 'roll' ? val.toUpperCase() : val }));
  };

  const updateMember = (index: number, field: string, value: string) => {
    const newMembers = [...members];
    // @ts-ignore
    newMembers[index][field] = field === 'roll' ? value.toUpperCase() : value;
    setMembers(newMembers);
  };

  // --- VALIDATION (Exact Logic Preserved) ---
  const validateStep = (currentStep: number) => {
    setErrorMsg("");
    
    // Step 0: Captain
    if (currentStep === 0) {
      if (!teamName.trim()) return "Team Name is required.";
      if (!captain.name.trim()) return "Captain Name is required.";
      if (!mobileRegex.test(captain.phone)) return "Invalid Captain Phone (Indian 10-digit).";
      if (isInternal && !rollRegex.test(captain.roll)) return "Invalid Captain Roll (e.g., 2023MEB025).";
      return null;
    }

    // Step > 0: Members
    const memberIndex = currentStep - 1;
    const member = members[memberIndex];
    const isMandatory = memberIndex < minMembers;

    if (isMandatory) {
      if (!member.name.trim()) return `Member ${memberIndex + 1} Name is required.`;
      if (!mobileRegex.test(member.phone)) return `Invalid Member ${memberIndex + 1} Phone.`;
      if (isInternal && !rollRegex.test(member.roll)) return `Invalid Member ${memberIndex + 1} Roll.`;
    } 
    else if (member.name || member.phone || member.roll) {
       if (!member.name.trim()) return "Name is required if adding a member.";
       if (!mobileRegex.test(member.phone)) return "Invalid Phone Number.";
       if (isInternal && !rollRegex.test(member.roll)) return "Invalid Roll Number.";
    }
    return null;
  };

  const handleNext = () => {
    const error = validateStep(step);
    if (error) { setErrorMsg(error); return; }
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => { 
    setErrorMsg("");
    setCaptchaToken(null);
    setStep((prev) => prev - 1);
 };

  // --- API SUBMISSION ---
  const handleSubmit = async () => {
    const error = validateStep(step);
    if (error) { setErrorMsg(error); return; }
    if (!captchaToken) {
      setErrorMsg("Please complete the hCaptcha verification.");
      return;
    }
    setIsLoading(true);
    setErrorMsg("");

    const validMembers = members
      .filter((m) => m.name.trim() !== "")
      .map((m) => ({
        memName: m.name.trim(),
        memPhone: m.phone.trim(),
        ...(isInternal && { memRoll: m.roll.trim() }),
      }));

    const payload = {
      eventName: event.backendValue,
      teamName: teamName.trim(),
      capName: captain.name.trim(),
      capPhone: captain.phone.trim(),
      ...(isInternal && { capRoll: captain.roll.trim() }),
      participantType: isInternal ? "INTERNAL" : "EXTERNAL",
      teamMembers: validMembers,
      captchaToken: captchaToken,       // hCaptcha token
      deviceFingerprint: deviceFingerprint,
    };
    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_API || 'http://localhost:5000/api'}/register`
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || data.message || "Server Error"); 
      }
      setReceiptId(data.receiptId);
      setIsSuccess(true);
      
    } catch (err: any) {
      console.error("Registration Error:", err);
      setErrorMsg(err.message || "Something went wrong. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  // --- PDF GENERATION (Exact Logic Preserved) ---
  const downloadReceipt = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    const centerText = (text: string, y: number, size: number = 12) => {
      doc.setFontSize(size);
      const textWidth = doc.getTextWidth(text);
      doc.text(text, (pageWidth - textWidth) / 2, y);
    };

    // 1. Header
    doc.setFillColor(20, 20, 20);
    doc.rect(0, 0, pageWidth, 40, "F");
    
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    centerText("IMPETUS 9.0 REGISTRATION", 18, 20);
    doc.setFont("helvetica", "normal");
    centerText("IIEST Shibpur", 28, 10);

    // 2. Receipt Details
    doc.setTextColor(0, 0, 0);
    doc.setFont("courier", "bold");
    doc.setFontSize(14);
    doc.text(`Receipt ID: ${receiptId}`, 20, 60);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Event: ${event.title}`, 20, 75);
    doc.text(`Team Name: ${teamName}`, 20, 85);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 95);

    // 3. Captain Section
    doc.setDrawColor(200, 200, 200);
    doc.line(20, 105, pageWidth - 20, 105);
    
    doc.setFont("helvetica", "bold");
    doc.text("Captain Details:", 20, 115);
    doc.setFont("helvetica", "normal");
    doc.text(`Name: ${captain.name}`, 30, 125);
    doc.text(`Phone: ${captain.phone}`, 30, 135);
    if (isInternal) {
      doc.text(`Roll No: ${captain.roll}`, 30, 145);
    }

    // 4. Team Members Section
    const validMembers = members.filter(m => m.name.trim() !== "");
    if (validMembers.length > 0) {
      doc.line(20, 155, pageWidth - 20, 155);
      doc.setFont("helvetica", "bold");
      doc.text("Team Members:", 20, 165);
      doc.setFont("helvetica", "normal");

      validMembers.forEach((member, index) => {
        const yPos = 175 + (index * 20);
        doc.text(`${index + 1}. ${member.name}`, 30, yPos);
        doc.text(`   Phone: ${member.phone}`, 30, yPos + 6);
        if (isInternal && member.roll) {
           doc.text(`   Roll: ${member.roll}`, 30, yPos + 12);
        }
      });
    }

    // 5. Footer
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    centerText("Please carry this recept for a suprise event/gift", 280, 10);

    doc.save(`${teamName}_Receipt.pdf`);
  };

  return (
    <RegistrationContext.Provider value={{
      step, totalSteps, isInternal, isLoading, isSuccess, receiptId, errorMsg, setErrorMsg,
      teamName, captain, members, event, minMembers, captchaToken, setCaptchaToken,
      toggleInternal: () => setIsInternal(!isInternal),
      setTeamName, updateCaptain, updateMember,
      handleNext, handlePrev, handleSubmit, downloadReceipt, closeForm: onClose
    }}>
      {children}
    </RegistrationContext.Provider>
  );
};