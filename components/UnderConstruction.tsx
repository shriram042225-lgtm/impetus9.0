"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link"; 
import { Rocket, ArrowLeft } from "lucide-react";

interface UnderConstructionProps {
  title?: string;
  subtitle?: string;
  progress?: number;
  onSecretUnlock?: () => void;
}

export default function UnderConstruction({
  title = "System Update in Progress",
  subtitle = "We are currently pushing the latest build. Access will be restored shortly.",
  progress = 75,
  onSecretUnlock,
}: UnderConstructionProps) {
  const [clicks, setClicks] = useState(0);

  const handleSecretClick = () => {
    const newCount = clicks + 1;
    setClicks(newCount);
    // Trigger on 5th click
    if (newCount === 5 && onSecretUnlock) {
      onSecretUnlock();
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#050505] text-white overflow-hidden selection:bg-cyan-500/30">
      
      {/* 1. BACKGROUND: Subtle Grid & Lighting */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cyan-500 opacity-20 blur-[100px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md p-8"
      >
        {/* 2. MAIN CARD CONTENT */}
        <div className="text-center space-y-8">
          
          {/* Animated Icon */}
          <div className="flex justify-center">
            <div className="relative p-5 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-2xl">
              <Rocket className="w-10 h-10 text-white" />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-base text-gray-400 leading-relaxed max-w-[95%] mx-auto">
              {subtitle}
            </p>
          </div>

          {/* 3. PROGRESS BAR SECTION */}
          {progress !== undefined && (
            <div className="pt-2 space-y-3">
              <div className="flex justify-between items-end text-xs font-mono tracking-wider">
                <span className="text-gray-500 uppercase">Progress:</span>
                
                {/* --- THE SECRET TRIGGER IS HERE --- */}
                <span 
                    onClick={handleSecretClick}
                    className="text-cyan-400 font-bold text-sm cursor-default select-none transition-colors active:text-white"
                >
                    {progress}%
                </span>
                {/* ---------------------------------- */}
              </div>
              
              <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 relative"
                >
                  <div className="absolute inset-0 bg-white/30 w-full -translate-x-full animate-[shimmer_2s_infinite]" />
                </motion.div>
              </div>
            </div>
          )}

          {/* 4. FOOTER: Back to Home Button */}
          <div className="pt-6 flex justify-center">
             <Link 
                href="/" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-gray-300 transition-all hover:text-white"
             >
                <ArrowLeft className="w-4 h-4" />
                Go Back to Home
             </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}