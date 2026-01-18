"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEra } from "@/context/EraContext";
import Loading from "@/components/Loading";
import AnchorWheel from "@/components/AnchorWheels";
import BentoGrid from "@/components/BentoGrid";

const eras = [
  {
    id: "mechanism",
    label: "The Gear",
    colors: "from-amber-900 via-yellow-900 to-black",
    accent: "text-amber-500",
    dot: "bg-amber-500",
    subtext: "The Age of Mechanisms",
  },
  {
    id: "propulsion",
    label: "The Turbine",
    colors: "from-orange-900 via-slate-800 to-black",
    accent: "text-orange-500",
    dot: "bg-orange-500",
    subtext: "The Age of Power",
  },
  {
    id: "automation",
    label: "The Matrix",
    colors: "from-cyan-900 via-blue-900 to-black",
    accent: "text-cyan-400",
    dot: "bg-cyan-400",
    subtext: "The Age of Automation",
  },
  {
    id: "simulation",
    label: "The Grid",
    colors: "from-emerald-900 via-teal-900 to-black",
    accent: "text-emerald-400",
    dot: "bg-emerald-400",
    subtext: "The Age of Simulation",
  },
];

export default function HeroSection() {
  const { currentEraIndex, setCurrentEraIndex } = useEra();
  const [showSplash, setShowSplash] = useState(true);

  /* Splash Screen Logic */
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedImpetus");
    if (hasVisited) {
      setShowSplash(false);
    } else {
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("hasVisitedImpetus", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (showSplash) {
    return <Loading />;
  }

  const currentEra = eras[currentEraIndex];

  return (
    <main className="w-full bg-black text-white">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Gradient */}
        <AnimatePresence mode="wait">
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

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          {/* Anchor Wheel */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="scale-[1.6] opacity-20">
              <AnchorWheel eraIndex={currentEraIndex} />
            </div>
          </div>

          {/* Text */}
          <motion.div
            key={currentEra.label}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-20 text-center flex flex-col items-center"
          >
            <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter flex items-baseline gap-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                IMPETUS
              </span>
              <span className={`text-4xl md:text-8xl ${currentEra.accent}`}>
                9.0
              </span>
            </h1>

            <h3 className="text-sm md:text-base font-bold tracking-[0.3em] uppercase mt-2 text-white/70">
              Chronicles of Innovation
            </h3>

            <div className="flex items-center gap-3 mt-3 text-xs md:text-sm tracking-wider text-white/80">
              <span>IIEST Shibpur</span>
              <span
                className={`w-1.5 h-1.5 rounded-full ${currentEra.dot} shadow-[0_0_10px_currentColor]`}
              />
              <span>13th – 15th February</span>
            </div>

            <p
              className={`text-lg md:text-xl mt-12 font-medium tracking-widest uppercase ${currentEra.accent}`}
            >
              {currentEra.subtext}
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>

      <BentoGrid />
    </main>
  );
}