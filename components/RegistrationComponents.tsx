"use client";
import { useEffect, useRef } from "react";
import { X, ChevronRight, ChevronLeft, Download, CheckCircle, AlertCircle, Users,Clock,QrCode,Smartphone,Upload } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useRegistrationContext } from "../context/RegistrationContext";

// --- HELPER COMPONENT ---
const InputField = ({ label, value, onChange, required, placeholder }: any) => (
    <div className="space-y-1">
        <label className="text-xs uppercase font-bold text-zinc-500">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white focus:outline-none focus:border-yellow-500 transition-colors placeholder:text-zinc-600"
            placeholder={placeholder || ""}
        />
    </div>
);

// --- 1. ERROR NOTIFICATION ---
export const ErrorNotification = () => {
    const { errorMsg, setErrorMsg } = useRegistrationContext();

    useEffect(() => {
        if (errorMsg) {
            const timer = setTimeout(() => setErrorMsg(""), 3000);
            return () => clearTimeout(timer);
        }
    }, [errorMsg, setErrorMsg]);

    return (
        <AnimatePresence>
            {errorMsg && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm"
                >
                    <div className="bg-red-500 text-white px-4 py-3 rounded-xl shadow-lg shadow-red-500/20 flex items-center gap-3 text-sm font-medium">
                        <AlertCircle size={18} className="shrink-0" />
                        <p>{errorMsg}</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// --- UPDATED SUCCESS VIEW ---
export const SuccessView = () => {
    const { 
        teamName, event, receiptId, downloadReceipt, 
        closeForm, isInternal 
    } = useRegistrationContext();

    // 1. EXTERNAL USER SUCCESS VIEW (Pending Verification)
    if (!isInternal) {
        return (
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl max-w-md w-full text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-yellow-500" />
                <Clock className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-2">Request Submitted</h2>
                <p className="text-zinc-400 mb-6 text-sm">
                    Thank you for registering team <span className="text-white font-mono">{teamName}</span>.
                </p>

                <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-800 mb-6 text-left space-y-2">
                    <p className="text-sm text-zinc-300">
                        <CheckCircle size={14} className="inline mr-2 text-green-500"/>
                        Details Received
                    </p>
                    <p className="text-sm text-zinc-300">
                        <CheckCircle size={14} className="inline mr-2 text-green-500"/>
                        Payment Proof Uploaded
                    </p>
                    <div className="h-px bg-zinc-800 my-2" />
                    <p className="text-xs text-zinc-500 leading-relaxed">
                        <span className="text-yellow-500 font-bold uppercase">Next Step:</span> Our coordinators will verify your payment details. You will be contacted on your registered number shortly with the final confirmation and receipt.
                    </p>
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={closeForm}
                    className="w-full bg-zinc-800 text-white font-bold py-3 rounded-full hover:bg-zinc-700 transition-colors"
                >
                    Close & Wait for Verification
                </motion.button>
            </div>
        );
    }

    // 2. INTERNAL USER SUCCESS VIEW (Immediate Receipt)
    return (
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl max-w-md w-full text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-green-500" />
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Registration Successful!</h2>
            <p className="text-zinc-400 mb-6">
                Your team <span className="text-white font-mono">{teamName}</span> has been registered for {event.title}.
            </p>

            <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-800 mb-2">
                <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Receipt ID</p>
                <p className="text-xl font-mono text-yellow-500">{receiptId}</p>
            </div>
            
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadReceipt}
                className="w-full bg-white text-black font-bold py-3 mt-6 rounded-full flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
            >
                <Download size={18} /> Download Receipt
            </motion.button>

            <button onClick={closeForm} className="mt-6 text-zinc-500 text-sm underline hover:text-white">
                Close
            </button>
        </div>
    );
};

// --- 3. HEADER (UPDATED WITH TEAM SIZE) ---
// --- HEADER ---
export const FormHeader = () => {
    const { event, isInternal, toggleInternal, step, totalSteps, teamName, closeForm, members } = useRegistrationContext();
    const filledCount = 1 + members.filter((m: any) => m.name.trim().length > 0).length;
    const isTeamValid = filledCount >= event.teamSize.min && filledCount <= event.teamSize.max;
    return (
        <div className="p-6 border-b border-zinc-800 bg-zinc-950">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h2 className="text-xl font-black uppercase text-white tracking-wide">{event.title}</h2>
                    {step === 0 ? (
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-xs text-zinc-400">Are you from IIEST?</span>
                            <button
                                onClick={toggleInternal}
                                className={`text-xs px-2 py-0.5 rounded border ${isInternal ? 'bg-yellow-500/20 text-yellow-500 border-yellow-500' : 'bg-zinc-800 text-zinc-400 border-zinc-700'}`}
                            >
                                {isInternal ? "YES (Internal)" : "NO (External)"}
                            </button>
                        </div>
                    ) : (
                        <p className="text-yellow-500 font-mono text-sm mt-1">{teamName}</p>
                    )}
                </div>
                {/* TEAM SIZE INDICATOR (MOVED HERE) */}
                <div className="text-right relative mt-3 scale-100">
                    <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider block">Team Size</span>
                    <div className={`text-2xl font-mono font-bold leading-none flex items-center justify-end gap-1 ${isTeamValid ? "text-green-500" : "text-red-500"}`}>
                        <Users size={18} className="mb-1" />
                        {filledCount}<span className="text-lg text-zinc-600">/{event.teamSize.max}</span>
                    </div>
                </div>
                <button onClick={closeForm} className="text-zinc-500 hover:text-white"><X size={24} /></button>

            </div>
            <div className="flex gap-1 h-1 w-full">
                {Array.from({ length: totalSteps }).map((_, i) => (
                    <div key={i} className={`h-full flex-1 rounded-full transition-colors ${i <= step ? "bg-yellow-500" : "bg-zinc-800"}`} />
                ))}
            </div>
        </div>
    );
};
// --- 4. STEPS ---
export const StepCaptain = () => {
    const { teamName, setTeamName, captain, updateCaptain, isInternal } = useRegistrationContext();
    return (
        <>
            <div className="space-y-1">
                <label className="text-xs uppercase font-bold text-zinc-500">Team Name <span className="text-red-500">*</span></label>
                <input
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="Enter cool team name"
                />
            </div>
            <div className="flex items-center gap-2 my-2">
                <div className="h-px bg-zinc-800 flex-1" />
                <span className="text-xs text-zinc-500 uppercase">Captain Details</span>
                <div className="h-px bg-zinc-800 flex-1" />
            </div>
            <InputField label="Captain Name" value={captain.name} onChange={(v: any) => updateCaptain("name", v)} required />
            <InputField label="Phone Number" value={captain.phone} onChange={(v: any) => updateCaptain("phone", v)} required placeholder="10-digit mobile" />
            {isInternal && (
                <InputField label="Roll Number" value={captain.roll} onChange={(v: any) => updateCaptain("roll", v)} required placeholder="202XMEBXXX" />
            )}
        </>
    );
};

export const StepMember = () => {
    const { step, members, updateMember, minMembers, isInternal } = useRegistrationContext();
    const currentMemberIndex = step - 1;
    const member = members[currentMemberIndex] || { name: "", phone: "", roll: "" };
    const isMandatory = currentMemberIndex < minMembers;

    if (!members[currentMemberIndex] && step > 0) return null;

    return (
        <>
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Member {currentMemberIndex + 1} Details</h3>
                {isMandatory ? (
                    <span className="text-xs bg-red-500/10 text-red-500 px-2 py-1 rounded border border-red-500/20">Compulsory</span>
                ) : (
                    <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">Optional</span>
                )}
            </div>
            <InputField label="Full Name" value={member.name} onChange={(v: any) => updateMember(currentMemberIndex, "name", v)} required={isMandatory} />
            <InputField label="Phone Number" value={member.phone} onChange={(v: any) => updateMember(currentMemberIndex, "phone", v)} required={isMandatory} />
            {isInternal && <InputField label="Roll Number" value={member.roll} onChange={(v: any) => updateMember(currentMemberIndex, "roll", v)} required={isMandatory} />}
        </>
    );
};

// --- 5. FOOTER (UPDATED LAYOUT) ---
export const FormFooter = () => {
    const { step, totalSteps, handlePrev, handleNext, handleSubmit, isLoading, members, event, setCaptchaToken } = useRegistrationContext();

    const filledCount = 1 + members.filter(m => m.name.trim().length > 0).length;
    const isTeamValid = filledCount >= event.teamSize.min && filledCount <= event.teamSize.max;
    const isLastStep = step === totalSteps - 1;

    return (
        <div className="p-4 border-t border-zinc-800 bg-zinc-950 flex items-center justify-between h-[88px]">

            {/* LEFT SIDE: CAPTCHA (Only shows if Team Size is GREEN and on Last Step) */}
            <div className="flex-1 flex md:mr-0 -mr-20 justify-start">
                {isLastStep && isTeamValid && (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="origin-left scale-[0.65] ml-3 sm:scale-90" // Scaled down to fit
                    >
                        <HCaptcha
                            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || ""}
                            onVerify={(token) => setCaptchaToken(token)}
                            theme="dark"
                        />
                    </motion.div>
                )}

                {/* Placeholder if Captcha is hidden (optional, keeps layout stable if needed) */}
                {isLastStep && !isTeamValid && (
                    <span className="text-xs text-red-500 italic flex items-center h-full">
                        Team size insufficient
                    </span>
                )}
            </div>

            {/* RIGHT SIDE: BUTTONS */}
            <div className="flex gap-3 items-center mr-6">
                {step > 0 && (
                    <button onClick={handlePrev} className="px-3 py-2 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition-colors">
                        <ChevronLeft size={20} />
                    </button>
                )}

                {step < totalSteps - 1 ? (
                    <button onClick={handleNext} className="flex items-center gap-2 px-6 py-2 bg-white text-black rounded-full font-bold hover:bg-yellow-400 transition-colors">
                        Next <ChevronRight size={18} />
                    </button>
                ) : (
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(234, 179, 8, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSubmit}
                        disabled={isLoading || !isTeamValid} // Disable if team size is red
                        className="flex items-center gap-2 px-6 py-2 bg-yellow-500 text-black rounded-full font-bold disabled:opacity-50 disabled:shadow-none whitespace-nowrap"
                    >
                        {isLoading ? "..." : "Register"}
                    </motion.button>
                )}
            </div>
        </div>
    );
};
export const StepPayment = () => {
    const { 
        event, 
        paymentDetails, 
        updatePaymentDetails, 
        paymentFile, 
        setPaymentFile 
    } = useRegistrationContext();
    const fileInputRef = useRef<HTMLInputElement>(null);

    // 1. GLOBAL CONFIG (From .env)
    const merchantVPA = process.env.NEXT_PUBLIC_UPI_ID || "impetus@sbi";
    const merchantName = process.env.NEXT_PUBLIC_PAYEE_NAME || "IMPETUS IIEST";

    // 2. EVENT SPECIFIC FEE
    // We still need the specific fee from the event object
    const amount = event.ExtFee || 0;

    // 3. GENERATE SMART LINK (Mobile)
    const upiLink = `upi://pay?pa=${merchantVPA}&pn=${encodeURIComponent(merchantName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(event.title)}`;
    return (
        <div className="space-y-6">
            <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 text-center space-y-4">
                
                {/* Amount Header */}
                <div>
                    <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Registration Fee</p>
                    <h3 className="text-3xl font-mono text-yellow-500 font-bold">₹{amount}</h3>
                </div>
                
                {/* Universal QR Image */}
                <div className="relative mx-auto bg-white p-2 rounded-xl w-52 h-52 flex items-center justify-center shadow-2xl shadow-black/50 overflow-hidden">
                   {/* We use an img tag pointing to the Google Drive URL */}
                   <img 
                       src={"/pre_events.jpg"} 
                       alt="Payment QR" 
                       className="w-full h-full object-contain"
                       // Add a key to force reload if amount changes (optional but good practice)
                       key={amount} 
                   />
                </div>
                
                {/* Smart Button */}
                <div className="space-y-3">
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider">
                        Paying via Mobile?
                    </p>
                    <a 
                        href={upiLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-full text-sm font-bold transition-transform active:scale-95 shadow-lg shadow-yellow-500/20"
                    >
                        <Smartphone size={18} /> 
                        Tap to Pay ₹{amount}
                    </a>
                </div>
            </div>
            {/* D. Upload Proof Section (Standard) */}
            <div className="space-y-4 pt-4 border-t border-zinc-800">
                <div className="space-y-1">
                    <label className="text-xs uppercase font-bold text-zinc-500">Transaction ID (UTR) <span className="text-red-500">*</span></label>
                    <input
                        value={paymentDetails.transactionId}
                        onChange={(e) => updatePaymentDetails("transactionId", e.target.value)}
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white focus:outline-none focus:border-yellow-500 font-mono placeholder:text-zinc-600"
                        placeholder="e.g. 321890XXXXXX"
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-xs uppercase font-bold text-zinc-500">Payment Screenshot <span className="text-red-500">*</span></label>
                    <div 
                        onClick={() => fileInputRef.current?.click()}
                        className={`border-2 border-dashed rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition-colors ${paymentFile ? "border-green-500/50 bg-green-900/10" : "border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800"}`}
                    >
                        <input 
                            type="file" 
                            accept="image/*" 
                            ref={fileInputRef} 
                            className="hidden" 
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setPaymentFile(e.target.files[0]);
                                }
                            }} 
                        />
                        {paymentFile ? (
                            <div className="text-center">
                                <CheckCircle className="mx-auto text-green-500 mb-2" size={24} />
                                <p className="text-sm text-green-400 font-medium truncate max-w-[200px]">{paymentFile.name}</p>
                                <p className="text-xs text-zinc-500 mt-1">Tap to change</p>
                            </div>
                        ) : (
                            <div className="text-center text-zinc-500">
                                <Upload className="mx-auto mb-2 opacity-50" size={24} />
                                <p className="text-sm">Tap to upload screenshot</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};