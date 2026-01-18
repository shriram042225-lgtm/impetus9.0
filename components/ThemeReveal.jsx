"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// --- Timer Digit Component ---
const TimerBlock = ({ value, label }) => (
  <div className="flex flex-col items-center mx-2 md:mx-6 relative z-10 group">
    {/* Mechanical housing for numbers */}
    <div className="relative bg-black/80 border border-neutral-700 px-4 py-2 rounded-sm overflow-hidden">
      {/* Scanline effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-30 pointer-events-none" />
      
      <div className="text-5xl md:text-8xl font-mono font-bold text-amber-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
        {String(value).padStart(2, "0")}
      </div>
    </div>
    
    {/* Label plate */}
    <div className="mt-2 bg-neutral-900 border border-neutral-800 px-2 py-1">
      <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-neutral-400 font-mono">
        {label}
      </div>
    </div>
    
    {/* Connection wires (decorative) */}
    <div className="absolute -top-4 left-1/2 w-[1px] h-4 bg-neutral-700" />
  </div>
);

// --- Spinning Gear Component (Pure CSS/SVG) ---
const Gear = ({ size, duration, reverse, className }) => (
  <motion.div
    animate={{ rotate: reverse ? -360 : 360 }}
    transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
    className={`absolute opacity-20 border-neutral-600 rounded-full flex items-center justify-center ${className}`}
    style={{ width: size, height: size, borderStyle: "dashed", borderWidth: "2px" }}
  >
    {/* Inner spokes */}
    <div className="absolute inset-0 border-2 border-neutral-700 rounded-full scale-50 opacity-50 border-dotted" />
    <div className="w-full h-[1px] bg-neutral-800 absolute" />
    <div className="h-full w-[1px] bg-neutral-800 absolute" />
  </motion.div>
);

export default function ThemeReveal({ targetDate, onUnlock }) {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        if (onUnlock) onUnlock();
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setRemainingTime({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, onUnlock]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 2, // ZOOM THROUGH effect on exit
        filter: "blur(20px)",
        transition: { duration: 0.8, ease: "circIn" },
      }}
      className="absolute inset-0 z-30 flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* --- BACKGROUND FACTORY LAYER --- */}
      {/* This container scales up slowly to create the "camera zooming in" feel */}
      <motion.div
        animate={{ scale: [1, 1.2] }}
        transition={{ duration: 60, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0 flex items-center justify-center"
      >
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,30,30,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(30,30,30,0.5)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_90%)] z-10" />

        {/* --- Rotating Gears --- */}
        <Gear size={600} duration={40} className="border-amber-900/20" />
        <Gear size={450} duration={25} reverse className="border-neutral-700/30" />
        <Gear size={300} duration={15} className="border-amber-700/20" />
        
        {/* Decorative Pipes/Lines */}
        <div className="absolute top-0 left-10 w-[1px] h-full bg-gradient-to-b from-transparent via-neutral-800 to-transparent opacity-50" />
        <div className="absolute top-0 right-10 w-[1px] h-full bg-gradient-to-b from-transparent via-neutral-800 to-transparent opacity-50" />
        
        {/* Fog/Steam */}
        <div className="absolute inset-0 bg-neutral-900 mix-blend-color-dodge opacity-20 animate-pulse" />
      </motion.div>

      {/* --- FOREGROUND CONTENT --- */}
      <div className="relative z-20 flex flex-col items-center">
        
        {/* Header with Hazard Stripes */}
        <div className="mb-10 flex flex-col items-center">
          <div className="w-full h-2 bg-[repeating-linear-gradient(45deg,#f59e0b,#f59e0b_10px,#000_10px,#000_20px)] opacity-50 mb-4 rounded-full" />
          
          <motion.h1 
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-4xl md:text-5xl font-black tracking-tighter text-neutral-200 uppercase"
          >
            Impetus <span className="text-amber-500">9.0</span>
          </motion.h1>
          
          <p className="text-xs tracking-[0.5em] text-neutral-500 mt-2 uppercase font-mono">
            System Initialization
          </p>
        </div>
        <div className="mb-4 flex items-center gap-4 text-xs font-mono text-neutral-500 bg-neutral-900/50 px-4 py-2 rounded-full border border-neutral-800">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          Theme Reveal In:
        </div>
        {/* The Timer */}
        <div className="flex items-start md:scale-100 scale-80 justify-center p-8 bg-black/40 backdrop-blur-sm border border-white/5 rounded-xl shadow-2xl relative">
          {/* Corner accents */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-amber-500" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-amber-500" />
          
          <TimerBlock value={remainingTime.days} label="Days" />
          <div className="text-4xl md:text-7xl text-neutral-700 font-mono mt-2 animate-pulse">:</div>
          <TimerBlock value={remainingTime.hours} label="Hours" />
          <div className="text-4xl md:text-7xl text-neutral-700 font-mono mt-2 animate-pulse">:</div>
          <TimerBlock value={remainingTime.minutes} label="Mins" />
          <div className="text-4xl md:text-7xl text-neutral-700 font-mono mt-2 animate-pulse">:</div>
          <TimerBlock value={remainingTime.seconds} label="Secs" />
        </div>

        {/* Footer Status */}
        
      </div>
      
      {/* Overlay noise for grit */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
    </motion.div>
  );
}