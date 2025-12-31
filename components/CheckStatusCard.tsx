"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import { Search, ShieldCheck, User, Users, ChevronDown, X, Phone, Hash, Copy, CheckCircle } from "lucide-react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA SOURCE ---
export const eventsData = {
  preEvents: {
    title: "Pre-Events",
    events: [
      { title: "BGMI", backendValue: "BGMI" },
      { title: "LIFE IN A LENS", backendValue: "Photo" },
      { title: "POSTER MAKING", backendValue: "Poster" }
    ]
  },
  day1: {
    title: "Day 01", 
    events: [
      { title: "MECHANICAL TRIATHLON", backendValue: "Mechanical Triathlon" },
      { title: "CADATHON", backendValue: "Cadathon" },
      { title: "SCRAPYARD", backendValue: "ScrapYard" },
      { title: "YANTRASEARCH", backendValue: "YantraSearch" }
    ]
  },
  day2: {
    title: "Day 02",
    events: [
      { title: "VALORANT", backendValue: "Valorant" },
      { title: "IQ IGNITION", backendValue: "IQ Ignition" },
      { title: "DEATHRACE", backendValue: "Death Race" },
      { title: "DRONE PURSUIT", backendValue: "Drone Pursuit" },
      { title: "CONTROL CRAFT", backendValue: "Control Craft" }
    ]
  }
};

export default function CheckStatusCard() {
  const allEvents = useMemo(() => Object.values(eventsData).flatMap((day: any) => day.events), []);

  const initialFormState = { eventName: "", searchField: "RollNo", searchValue: "" };
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resultData, setResultData] = useState<any>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  
  // 1. Create a Ref for the Captcha
  const captchaRef = useRef<HCaptcha>(null);

  // Lock Body Scroll
  useEffect(() => {
    document.body.style.overflow = resultData ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [resultData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setFormData(initialFormState);
    setResultData(null);
    setCaptchaToken(null);
    setError("");
    
    // 2. FORCE RESET the visual widget
    if (captchaRef.current) {
        captchaRef.current.resetCaptcha();
    }
  };

  const handleSubmit = async () => {
    if (!formData.eventName) { setError("Please select an event."); return; }
    if (!formData.searchValue || !captchaToken) { setError("Please fill all fields and captcha."); return; }
    
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API || 'http://localhost:5000/api'}/checkstatus`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventName: formData.eventName,
          searchField: formData.searchField,
          searchValue: formData.searchValue,
          captchaToken,
          deviceFingerprint: "fingerprint_skipped_for_search"
        })
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Not found");
      
      setResultData(json.data); 
    } catch (err: any) {
      setError(err.message);
      setCaptchaToken(null);
      // Reset captcha on error too
      if (captchaRef.current) captchaRef.current.resetCaptcha();
    } finally {
      setLoading(false);
    }
  };

  const getEventTitle = (val: string) => allEvents.find(e => e.backendValue === val)?.title || val;

  return (
    <>
      {/* ================= 1. SEARCH FORM ================= */}
      <div className="w-full max-w-2xl mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col relative z-10">
        <div className="p-5 space-y-4">
            <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Select Event</label>
                <div className="relative">
                    <select 
                        name="eventName" value={formData.eventName} onChange={handleChange}
                        className="w-full appearance-none bg-zinc-800 border border-zinc-700 text-white p-3 rounded-lg focus:border-yellow-500 outline-none cursor-pointer text-base font-medium"
                    >
                        <option value="" disabled>-- Choose Event --</option>
                        {allEvents.map((ev, index) => (
                            <option key={index} value={ev.backendValue}>{ev.title}</option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" size={18} />
                </div>
            </div>

            <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Your Details</label>
                <div className="flex gap-3">
                    <select 
                        name="searchField" value={formData.searchField} onChange={handleChange}
                        className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 text-white text-base font-medium focus:border-yellow-500 outline-none cursor-pointer"
                    >
                        <option value="RollNo">Roll No</option>
                        <option value="receiptID">Receipt ID</option>
                    </select>
                    <input 
                        type="text" name="searchValue"
                        placeholder={formData.searchField === "RollNo" ? "Ex: 2023MEB025" : "Ex: ROB-A1B2C3"}
                        value={formData.searchValue} onChange={handleChange}
                        className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white text-base font-medium focus:border-yellow-500 outline-none placeholder:text-zinc-600"
                    />
                </div>
            </div>

            <div className="flex justify-center scale-90 origin-center pt-1">
                <HCaptcha 
                    ref={captchaRef} // 3. Attach Ref Here
                    sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || ""} 
                    onVerify={(t) => setCaptchaToken(t)} theme="dark" 
                />
            </div>

            {error && <div className="text-red-500 text-sm bg-red-500/10 p-2 rounded-lg border border-red-500/20 text-center animate-pulse">{error}</div>}

            <button 
                onClick={handleSubmit} disabled={loading}
                className="w-full bg-white text-black font-bold py-3 text-lg rounded-full hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 mt-1"
            >
                {loading ? "Searching..." : <><Search size={20} /> Find Registration</>}
            </button>
        </div>
      </div>

      {/* ================= 2. RESULT OVERLAY ================= */}
      <AnimatePresence>
        {resultData && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 md:mt-20 md:pb-0 pb-12 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 10 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 10 }}
              className="w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
            >
                {/* --- HEADER --- */}
                <div className="p-8 pb-4 flex justify-between items-start border-b border-zinc-900">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
                             <span className="text-green-500 text-xs font-bold uppercase tracking-widest">Verified Registration</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none">
                            {getEventTitle(resultData.eventName)}
                        </h2>
                    </div>
                </div>

                {/* --- BODY --- */}
                <div className="p-8 overflow-y-auto custom-scrollbar flex-1">
                    
                    {/* Top Row: Team & ID */}
                    <div className="flex flex-col md:flex-row gap-8 mb-10">
                        <div className="flex-1">
                            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Team Name</p>
                            <p className="text-4xl font-bold text-white">{resultData.teamName}</p>
                        </div>
                        <div className="md:text-right">
                             <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Receipt ID</p>
                             <div className="inline-flex items-center gap-3 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg">
                                <span className="text-2xl font-mono font-bold text-yellow-500 tracking-wider">{resultData.receiptId}</span>
                                <Copy size={16} className="text-zinc-600" />
                             </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-zinc-900 w-full mb-10" />

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        
                        {/* Column 1: Captain */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="p-2 bg-yellow-500/10 rounded-lg">
                                    <User size={20} className="text-yellow-500" />
                                </div>
                                <span className="text-sm font-bold text-white uppercase tracking-widest">Captain</span>
                            </div>

                            <div className="space-y-6 pl-2">
                                <div>
                                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider mb-1">Full Name</p>
                                    <p className="text-xl text-zinc-200 font-medium">{resultData.capName}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider mb-1">Phone</p>
                                        <p className="text-lg text-zinc-400 font-mono">{resultData.capPhone}</p>
                                    </div>
                                    {resultData.capRoll && (
                                        <div>
                                            <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider mb-1">Roll No</p>
                                            <p className="text-lg text-zinc-400 font-mono">{resultData.capRoll}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Members */}
                        {resultData.teamMembers?.length > 0 && (
                            <div>
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="p-2 bg-zinc-800 rounded-lg">
                                        <Users size={20} className="text-zinc-400" />
                                    </div>
                                    <span className="text-sm font-bold text-white uppercase tracking-widest">Team Members</span>
                                </div>

                                <div className="space-y-4 pl-2">
                                    {resultData.teamMembers.map((m: any, i: number) => (
                                        <div key={i} className="group flex items-center justify-between py-2 border-b border-zinc-900 last:border-0">
                                            <div className="flex items-center gap-3">
                                                <span className="text-zinc-600 font-mono text-sm">0{i + 1}</span>
                                                <span className="text-lg text-zinc-300 group-hover:text-white transition-colors">{m.memName}</span>
                                            </div>
                                            <span className="text-sm text-zinc-600 font-mono">{m.memPhone}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* --- FOOTER --- */}
                <div className="p-6 border-t border-zinc-900 bg-zinc-950 text-center">
                    <button 
                        onClick={handleClose}
                        className="text-zinc-500 hover:text-white text-sm transition-colors underline decoration-zinc-800 hover:decoration-white"
                    >
                        Check another registration
                    </button>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}