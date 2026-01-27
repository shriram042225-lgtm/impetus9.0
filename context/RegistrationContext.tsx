"use client";
import { createContext, useContext } from "react";

// The shape of your context data
interface RegistrationContextType {
  // --- STATE ---
  step: number;
  totalSteps: number;
  isInternal: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  receiptId: string;
  errorMsg: string;
  setErrorMsg: (msg: string) => void;
  
  // Data
  teamName: string;
  captain: { name: string; phone: string; roll: string };
  members: Array<{ name: string; phone: string; roll: string }>;
  event: any;
  minMembers: number;
  captchaToken: string | null;
  setCaptchaToken: (token: string | null) => void;

  // --- NEW: PAYMENT STATE (Add these 4 lines) ---
  paymentDetails: { transactionId: string };
  updatePaymentDetails: (field: string, val: string) => void;
  paymentFile: File | null;
  setPaymentFile: (file: File | null) => void;

  // --- ACTIONS ---
  toggleInternal: () => void;
  setTeamName: (val: string) => void;
  updateCaptain: (field: string, val: string) => void;
  updateMember: (index: number, field: string, val: string) => void;
  handleNext: () => void;
  handlePrev: () => void;
  handleSubmit: () => void;
  downloadReceipt: () => void;
  closeForm: () => void;
}

export const RegistrationContext = createContext<RegistrationContextType | null>(null);

// The Hook
export const useRegistrationContext = () => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error("useRegistrationContext must be used within a RegistrationProvider");
  }
  return context;
};