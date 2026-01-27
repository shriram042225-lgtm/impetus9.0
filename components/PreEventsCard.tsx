"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Calendar, ArrowUpRight, Users, ChevronRight, ChevronLeft, BookOpen, Trophy } from "lucide-react";
import { eventsData } from "@/data/events";
import EventRegistrationForm from "@/components/EventRegistrationForm";

export default function PreEventsCombined() {
  // Shared State
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [mounted, setMounted] = useState(false);

  // Mobile Specific State
  const [[currentIndex, direction], setPage] = useState([0, 0]);

  const preEvents = eventsData.preEvents.events;

  useEffect(() => {
    setMounted(true);
  }, []);

  // --- MOBILE LOGIC (Slider) ---
  const paginate = (newDirection: number) => {
    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex < preEvents.length) {
      setPage([newIndex, newDirection]);
    }
  };

  const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -10000) {
      paginate(1); // Next
    } else if (swipe > 10000) {
      paginate(-1); // Prev
    }
  };

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  // Animation variants for the slider
  const sliderVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <>
      {/* =========================================
          MOBILE VIEW (Horizontal Slider) 
          Visible only on small screens
      ========================================= */}
      <div className="block md:hidden relative w-full mt-2 h-[100dvh] bg-black overflow-hidden flex flex-col">

        {/* 1. Header & Progress (Top 15%) */}
        <div className="pt-8 px-6 pb-2 z-20 w-full flex-none">
          <div className="text-center mb-6">
            <span className="bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 border border-white/10">
              {eventsData.preEvents.title}
            </span>
          </div>

          {/* Linear Progress Bar */}
          <div className="relative w-full max-w-xs mx-auto">
            <div className="flex justify-between mb-2">
              {preEvents.map((_, i) => (
                <span
                  key={i}
                  className={`text-[10px] font-mono transition-colors duration-300 ${i === currentIndex ? "text-yellow-500 font-bold" : "text-zinc-700"}`}
                >
                  0{i + 1}
                </span>
              ))}
            </div>
            {/* Track */}
            <div className="h-[2px] w-full bg-zinc-800 rounded-full overflow-hidden">
              {/* Fill */}
              <motion.div
                className="h-full bg-yellow-500"
                initial={false}
                animate={{ width: `${((currentIndex + 1) / preEvents.length) * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
          </div>
        </div>

        {/* 2. Slider Area (Middle 75%) */}
        <div className="relative flex-grow w-full flex items-center justify-center overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={sliderVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={handleDragEnd}
              className="absolute w-[85%] max-w-[360px] h-[70dvh] bg-zinc-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl touch-none"
            >
              {/* Card Content */}
              <MobileSliderCard
                event={preEvents[currentIndex]}
                onRegister={() => setSelectedEvent(preEvents[currentIndex])}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows (Visual Hints) */}
          {currentIndex > 0 && (
            <button onClick={() => paginate(-1)} className="absolute left-2 z-10 p-2 text-white/20 hover:text-white transition-colors">
              <ChevronLeft size={32} />
            </button>
          )}
          {currentIndex < preEvents.length - 1 && (
            <button onClick={() => paginate(1)} className="absolute right-2 z-10 p-2 text-white/20 hover:text-white transition-colors">
              <ChevronRight size={32} />
            </button>
          )}
        </div>

        {/* 3. Bottom Spacer (Bottom 10%) */}
        <div className="h-[10dvh] flex-none w-full" />
      </div>


      {/* =========================================
          DESKTOP VIEW (Grid Design) 
          Visible only on md screens and up
          *Spacing preserved exactly as requested*
      ========================================= */}
      <div className="hidden md:block relative w-full max-w-6xl mx-auto px-4 py-16">
        {/* Section Header */}
        <div className="sticky top-20 mb-4 z-20 text-center">
          <span className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm font-mono uppercase tracking-widest text-white border border-white/10 shadow-lg inline-block mb-2">
            {eventsData.preEvents.title}
          </span>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {preEvents.map((event, index) => (
            <DesktopEventCard
              key={index}
              event={event}
              onRegister={() => setSelectedEvent(event)}
            />
          ))}
        </div>
      </div>

      {/* Shared Modal Portal */}
      {mounted && selectedEvent && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <EventRegistrationForm
            event={{
              title: selectedEvent.title,
              backendValue: selectedEvent.backendValue,
              teamSize: selectedEvent.teamSize,
              ExtFee: selectedEvent.ExtFee || 0
            }}
            onClose={() => setSelectedEvent(null)}
          />
        </div>,
        document.body
      )}
    </>
  );
}


// ============================================
// SUB-COMPONENT: MOBILE SLIDER CONTENT
// ============================================
function MobileSliderCard({ event, onRegister }: any) {
  const isClosed = new Date() > new Date(event.deadline);

  return (
    <div className="flex flex-col h-full w-full">
      {/* 55% Image Height */}
      <div className="relative h-[70%] w-full">
        <Image
          src={event.src}
          alt={event.title}
          fill
          className="object-cover pointer-events-none select-none"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />

        {/* Top Left Overlay: Date AND Size */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {/* Date Badge */}
          <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 text-[10px] font-mono text-zinc-300 shadow-lg">
            <Calendar size={12} className="text-yellow-500" /> {event.date}
          </div>

          {/* Size Badge */}
          <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 text-[10px] font-mono text-zinc-300 shadow-lg">
            <Users size={12} className="text-yellow-500" />
            <span className="text-[10px] font-mono text-white">Size: {event.teamSize.max}</span>
          </div>
        </div>
        {event.prizepool && (
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-yellow-500 text-black px-3 py-1.5 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(234,179,8,0.4)] border border-yellow-400">
              <Trophy size={12} className="fill-black/20" />
              <span className="text-[10px] font-black font-mono uppercase tracking-wide">
                {event.prizepool}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* 45% Content Height */}
      <div className="p-6 flex flex-col h-[30%]">
        <h3 className="text-2xl font-black uppercase text-white mb-2 leading-none tracking-tight">
          {event.title}
        </h3>
        <p className="text-zinc-500 text-xs leading-relaxed line-clamp-4 mb-4 select-none">
          {event.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-2 border-t border-white/5 gap-2">

          {/* Rulebook Button */}
          {event.rulebook ? (
            <a
              href={event.rulebook}
              target="_blank"
              rel="noreferrer"
              onPointerDown={(e) => e.stopPropagation()}
              className="relative z-20 flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-300 text-[10px] font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors"
            >
              <BookOpen size={14} />
              <span>Rulebook</span>
            </a>
          ) : <div />}

          {/* Register Button */}
          {isClosed ? (
            <button
              disabled
              className="relative z-20 bg-zinc-800 text-zinc-500 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider cursor-not-allowed border border-zinc-700"
            >
              Closed
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRegister();
              }}
              className="group/btn relative z-20 flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-lg"
            >
              Register
              <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}


// ============================================
// SUB-COMPONENT: DESKTOP CARD (Standard Grid)
// ============================================
function DesktopEventCard({ event, onRegister }: { event: any; onRegister: () => void }) {
  const isClosed = new Date() > new Date(event.deadline);

  return (
    <div className="group relative flex flex-col bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden hover:border-yellow-500/50 transition-all duration-500 h-full">

      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={event.src}
          alt={event.title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />

        {/* Top Left Overlay: Date AND Size (Matched Mobile) */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {/* Date Badge */}
          <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 text-[10px] font-mono text-zinc-300 shadow-lg">
            <Calendar size={12} className="text-yellow-500" /> {event.date}
          </div>

          {/* Size Badge */}
          <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 text-[10px] font-mono text-zinc-300 shadow-lg">
            <Users size={12} className="text-yellow-500" />
            <span className="text-[10px] font-mono text-white">Size: {event.teamSize.max}</span>
          </div>
        </div>
        {event.prizepool && (
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-yellow-500 text-black px-3 py-1.5 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(234,179,8,0.4)] border border-yellow-400">
              <Trophy size={12} className="fill-black/20" />
              <span className="text-[10px] font-black font-mono uppercase tracking-wide">
                {event.prizepool}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow mt-2 p-6 md:p-8">
        <h3 className="text-2xl font-black uppercase text-white mb-3 leading-none">
          {event.title}
        </h3>

        <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
          {event.description}
        </p>

        {/* Footer Info (Matched Mobile Layout) */}
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">

          {/* Left: Rulebook Button */}
          {event.rulebook ? (
            <a
              href={event.rulebook}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-300 text-[10px] font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors"
            >
              <BookOpen size={14} />
              <span>Rulebook</span>
            </a>
          ) : <div />}

          {/* Right: Register Button */}
          {isClosed ? (
            <button
              disabled
              className="px-6 py-2 rounded-full bg-zinc-800 text-zinc-500 text-xs font-bold uppercase tracking-wider cursor-not-allowed border border-zinc-700"
            >
              Closed
            </button>
          ) : (
            <button
              onClick={onRegister}
              className="group/btn flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-lg"
            >
              Register
              <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}