"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactCard from "@/components/ContactCard";
import { teamsData } from "@/data/teams";

export default function TeamPage() {
  const [value, setValue] = useState(0);
  const [mobileSelected, setMobileSelected] = useState(false);

  const teamsList = teamsData.teams;
  const currentTeam = teamsList[value];

  const handleMobileSelect = (idx) => {
    setValue(idx);
    setMobileSelected(true);
  };

  // Separate roles for spatial hierarchy
  const heads = currentTeam.members.filter(
    (m) =>
      m.post.toLowerCase().includes("head") ||
      m.post.toLowerCase() === "coordinator"
  );

  const staff = currentTeam.members.filter(
    (m) =>
      !m.post.toLowerCase().includes("head") &&
      m.post.toLowerCase() !== "coordinator"
  );

  return (
    <div className="bg-black min-h-screen pb-32">
      
      {/* =========================================
          DESKTOP HEADER (Hidden on Mobile) 
      ========================================= */}
      <div className="hidden md:block pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-7 gap-y-4">
          {teamsList.map((team, idx) => {
            const isActive = value === idx;

            return (
              <button
                key={team.slug}
                onClick={() => setValue(idx)}
                className={`
                  relative
                  text-[11px]
                  uppercase
                  tracking-widest
                  font-semibold
                  transition-all
                  duration-300
                  ${isActive
                    ? "text-yellow-400"
                    : "text-zinc-500 hover:text-zinc-300"
                  }
                `}
              >
                {team.teamName}

                <span
                  className={`
                    absolute
                    left-1/2
                    -bottom-2
                    h-px
                    bg-yellow-400
                    transition-all
                    duration-300
                    ${isActive
                      ? "w-full -translate-x-1/2 opacity-100"
                      : "w-0 -translate-x-1/2 opacity-0"
                    }
                  `}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================
          MOBILE HEADER / SELECTION LOGIC 
      ========================================= */}
      
      {/* 1. Mobile Initial Selection Screen */}
      <AnimatePresence>
        {!mobileSelected && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            className="md:hidden flex flex-col items-center justify-center min-h-[80vh] px-4 pt-32"
          >
            <h2 className="text-xl font-bold text-zinc-100 uppercase tracking-widest mb-8 text-center">
              Choose Team
            </h2>
            
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              {teamsList.map((team, idx) => (
                <button
                  key={team.slug}
                  onClick={() => handleMobileSelect(idx)}
                  className="
                    w-full py-4 px-2
                    border border-zinc-800 rounded-xl 
                    bg-zinc-900/50 hover:bg-zinc-800 
                    text-zinc-300 hover:text-yellow-400
                    uppercase text-[10px] font-bold tracking-widest
                    truncate
                    transition-all duration-300
                  "
                >
                  {team.teamName}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Mobile Sticky Header Bar */}
      <div className="md:hidden">
        <AnimatePresence>
          {mobileSelected && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              // FIXED top-0: Surface touches top of screen
              // pt-20: Pushes text below your navbar circles
              className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-b border-zinc-800 pt-20 pb-4"
            >
              <div className="relative w-full flex justify-center items-center">
                
                {/* VISUAL LAYER: Clean text + Arrow (No Pill/Border) */}
                <div className="flex items-center gap-2">
                  <span className="text-zinc-100 text-xs uppercase tracking-[0.15em] font-bold">
                    {teamsList[value].teamName}
                  </span>
                  
                  {/* Yellow Arrow Immediately Next to Text */}
                  <svg className="w-4 h-4 text-yellow-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {/* FUNCTIONAL LAYER: Invisible Select Overlay */}
                <select
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  className="
                    absolute inset-0 w-full h-full
                    opacity-0 cursor-pointer
                    appearance-none
                  "
                >
                  {teamsList.map((team, idx) => (
                    <option key={team.slug} value={idx}>
                      {team.teamName}
                    </option>
                  ))}
                </select>
                
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* =========================================
          MAIN CONTENT AREA 
      ========================================= */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${!mobileSelected ? 'hidden md:block' : ''}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            // Padding top to clear the taller sticky header
            className="pt-44 md:pt-0" 
          >
            {/* SECTION 1: HEADS */}
            <div className="flex flex-wrap justify-center gap-16 mb-24">
              {heads.map((person, idx) => (
                <ContactCard key={`head-${idx}`} person={person} />
              ))}
            </div>

            {/* Spatial divider */}
            {staff.length > 0 && (
              <div className="flex items-center justify-center mb-16">
                <div className="w-12 h-px bg-zinc-800" />
              </div>
            )}

            {/* SECTION 2: STAFF */}
            <div className="flex flex-wrap justify-center gap-8">
              {staff.map((person, idx) => (
                <ContactCard key={`staff-${idx}`} person={person} />
              ))}
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}