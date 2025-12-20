use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnchorWheel from '@/components/AnchorWheels';
import BentoGrid from '@/components/BentoGrid';
const eras = [
  {
    id: 'mechanism',
    label: 'The Gear',
    colors: 'from-amber-900 via-yellow-900 to-black',
    accent: 'text-amber-500',
    dot: 'bg-amber-500',
    subtext: 'The Age of Mechanisms',
  },
  {
    id: 'propulsion',
    label: 'The Turbine',
    colors: 'from-orange-900 via-slate-800 to-black',
    accent: 'text-orange-500',
    dot: 'bg-orange-500',
    subtext: 'The Age of Power',
  },
  {
    id: 'automation',
    label: 'The Matrix',
    colors: 'from-cyan-900 via-blue-900 to-black',
    accent: 'text-cyan-400',
    dot: 'bg-cyan-400',
    subtext: 'The Age of Automation',
  },
  {
    id: 'simulation',
    label: 'The Grid',
    colors: 'from-emerald-900 via-teal-900 to-black',
    accent: 'text-emerald-400',
    dot: 'bg-emerald-400',
    subtext: 'The Age of Simulation',
  },
];

export default function HeroSection() {
  const [currentEraIndex, setCurrentEraIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEraIndex((prev) => (prev + 1) % eras.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentEra = eras[currentEraIndex];

  return (
    <main className="w-full bg-black text-white">
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">

      {/* Background Gradient Transition */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentEra.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className={`absolute inset-0 bg-gradient-to-br ${currentEra.colors} opacity-60`}
        />
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/90" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full w-full px-4 mt-6">
        
        {/* Spinning Wheel Background */}
        <div className="absolute inset-0 mb-4 flex items-center justify-center">
          <div className="scale-[1.6] opacity-20">
            <AnchorWheel eraIndex={currentEraIndex} />
          </div>
        </div>

        {/* Text Content */}
        <motion.div
          key={currentEra.label}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-20 text-center flex flex-col items-center"
        >
          {/* 1. Top Eyebrow Text */}
          {/* <h4 className="text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase text-white/50 mb-2 md:mb-4">
            Annual Techfest of Department of Mechanical Engineering
          </h4> */}

          {/* Main Title */}
          <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter flex items-baseline gap-4 justify-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
              IMPETUS
            </span>
            <span className={`text-4xl md:text-8xl ${currentEra.accent}`}>
              9.0
            </span>
          </h1>

          {/* Subtitle */}
          <h3 className="text-sm md:text-base font-bold tracking-[0.3em] uppercase mt-2 text-white/70">
            Chronicles of Innovation
          </h3>

          {/* 2. Date and Location (Creative Divider) */}
          <div className="flex items-center gap-3 md:gap-4 mt-3 text-xs md:text-sm font-medium tracking-wider text-white/80">
            <span>IIEST Shibpur</span>
            {/* The separator dot changes color with the era */}
            <span className={`w-1.5 h-1.5 rounded-full ${currentEra.dot} shadow-[0_0_10px_currentColor]`}></span>
            <span>13th - 15th February</span>
          </div>

          {/* Changing Era Text */}
          <p className={`text-lg md:text-xl mt-12 font-medium tracking-widest uppercase ${currentEra.accent}`}>
            {currentEra.subtext}
          </p>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce pointer-events-none select-none">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-medium">
          Scroll Down
        </span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-5 h-5 text-white/70"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      
      </div>
    </div> 
    <BentoGrid />
    </main>
  );
}