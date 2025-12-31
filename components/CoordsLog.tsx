"use client";
import { useState, useMemo } from "react";
import { eventsData } from "@/data/events";

interface SuccessData {
  message: string;
  excelBase64: string;
  vcf: string | null;
}
export default function CoordsLog() {
  const allEvents = useMemo(() => {
    return Object.values(eventsData).flatMap((day: any) => day.events);
  }, []);

  const [formData, setFormData] = useState({
    eventName: "",
    coordinatorName: "",
    passkey: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successData, setSuccessData] = useState<SuccessData | null>(null);
  const [view, setView] = useState("form");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 1. Helper for EXCEL (Base64)
  const downloadBase64File = (base64Data: string, filename: string, mimeType: string) => {
    if (!base64Data) return;
    try {
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: mimeType });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.error("Base64 Download Error:", e);
    }
  };
   
  // 2. Helper for VCF (Text)
  const downloadTextFile = (textData: string, filename: string, mimeType: string) => {
    if (!textData) return;
    const blob = new Blob([textData], { type: mimeType });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle Excel Download
  const handleDownloadExcel = () => {
    if (!successData?.excelBase64) return;
    const eventTitle = allEvents.find((e) => e.backendValue === formData.eventName)?.title || "Event";
    downloadBase64File(
      successData.excelBase64,
      `${eventTitle}_Registrations.xlsx`,
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
  };

  // Handle Contacts Download (WITH UNESCAPE FIX)
  const handleDownloadContacts = () => {
    if (!successData?.vcf) return;

    // FIX: Unescape literal "\n" characters to make real newlines
    const formattedVcf = successData.vcf.replace(/\\n/g, "\n");
    downloadTextFile(formattedVcf, "contacts.vcf", "text/vcard");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!formData.eventName) {
      setError("Please select an event.");
      setLoading(false);
      return;
    }

    // Find the coordsValue for the Passkey check
    const selectedEventObj = allEvents.find(e => e.backendValue === formData.eventName);
    const coordsKey = selectedEventObj ? selectedEventObj.coordsValue : "";

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API || 'http://localhost:5000/api'}/coordinator/download`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventName: formData.eventName, // Database Search
          coordsValue: coordsKey,        // Passkey Check
          coordinatorName: formData.coordinatorName,
          passkey: formData.passkey,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessData({
          message: data.message,
          excelBase64: data.excelBase64,
          vcf: data.vcf,
        });
        setView("success");
      } else {
        setError(data.message || "Verification failed. Check credentials.");
      }
    } catch (err) {
      console.error(err);
      setError("Server connection failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ eventName: "", coordinatorName: "", passkey: "" });
    setSuccessData(null);
    setView("form");
  };
  const renderMessage = (msg: string) => {
    if (!msg.includes("*")) return msg;

    const parts = msg.split("*");
    return (
      <span>
        {parts[0]}
        <span className="font-extrabold text-white underline decoration-white/30 underline-offset-4 mx-1">
          {parts[1]}
        </span>
        <span className="mt-0 font-medium opacity-90">
           {parts[2]}
        </span>
      </span>
    );
  };
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden p-8">
        
        {/* VIEW 1: FORM */}
        {view === "form" && (
          <>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Coordinator Portal
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-neutral-400">Select Event</label>
                <select
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  className="w-full bg-neutral-800 text-white p-3 rounded-lg border border-neutral-700 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                >
                  <option value="" disabled>-- Choose Event --</option>
                  {allEvents.map((event, index) => (
                    <option key={index} value={event.backendValue}>
                      {event.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-neutral-400">Coordinator Name</label>
                <input
                  type="text"
                  name="coordinatorName"
                  placeholder="Enter your name"
                  value={formData.coordinatorName}
                  onChange={handleChange}
                  className="w-full bg-neutral-800 text-white p-3 rounded-lg border border-neutral-700 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-neutral-400">Secret Passkey</label>
                <input
                  type="password"
                  name="passkey"
                  placeholder="Enter the Passkey"
                  value={formData.passkey}
                  onChange={handleChange}
                  className="w-full bg-neutral-800 text-white p-3 rounded-lg border border-neutral-700 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm text-center bg-red-500/10 p-2 rounded">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-neutral-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
              >
                {loading ? "Verifying..." : "View Data"}
              </button>
            </form>
          </>
        )}

        {/* VIEW 2: SUCCESS DASHBOARD */}
        {view === "success" && successData && (
          <div className="text-center space-y-6 py-4">
            
            <div className={`p-4 rounded-lg border ${
                successData.vcf 
                  ? "bg-green-500/10 border-green-500/20 text-green-400" 
                  : "bg-red-500/10 border-red-500/20 text-red-500 font-bold animate-pulse"
              }`}>
              <h3 className="text-lg mb-1">
                {successData.vcf ? "✓ Access Granted" : "Only Excel Sheet Available"}
              </h3>
              <div className="text-sm leading-relaxed">
                   {renderMessage(successData.message)}
              </div>
            </div>

            <p className="text-neutral-500 text-xs uppercase tracking-widest font-semibold">
              Available Files
            </p>

            <div className="space-y-3">
              <button
                onClick={handleDownloadExcel}
                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-900/20"
              >
                Download Excel Sheet
              </button>

              {successData.vcf && (
                <button
                  onClick={handleDownloadContacts}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
                >
                  Download Contacts (VCF)
                </button>
              )}
            </div>

            <button
              onClick={handleReset}
              className="mt-6 text-neutral-400 text-sm hover:text-white transition-colors underline decoration-neutral-700 hover:decoration-white"
            >
              ← Verify Another Event
            </button>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-6 text-zinc-500 text-sm">
        <p> Facing Issues? Call admin: <span className="text-zinc-400">9959387572</span></p>
      </div>
    </div>
  );
}