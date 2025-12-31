"use client";

import { useRef, useState } from "react";
import { useScroll, useTransform, motion, MotionValue, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, ChevronDown } from "lucide-react";
import { eventsData } from "@/data/events";
import EventRegistrationForm from "@/components/EventRegistrationForm";
import PreEventsCard from "@/components/PreEventsCard";
import { createPortal } from "react-dom";

/* ---------------- PAGE ---------------- */
export default function CascadingEventsPage() {
  const { scrollYProgress } = useScroll();
  const downOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="bg-black text-white min-h-screen relative">
      <style jsx global>{`
<<<<<<< HEAD
        body::-webkit-scrollbar {
          display: none;
        }
        body {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
=======
        body::-webkit-scrollbar { display: none; }
        body { -ms-overflow-style: none; scrollbar-width: none; }
        html { scroll-behavior: smooth; }
>>>>>>> upstream/master
      `}</style>
      <section className="relative z-10 pb-2 border-b border-zinc-900/50">
         <PreEventsCard />
      </section>
      <DaySection
        dayTitle={eventsData.day1.title}
        dayDate={eventsData.day1.date}
        events={eventsData.day1.events}
        isReversed={false}
      />

      <DaySection
        dayTitle={eventsData.day2.title}
        dayDate={eventsData.day2.date}
        events={eventsData.day2.events}
        isReversed={true}
      />

      {/* --- SCROLL DOWN HINT --- */}
      <motion.div
        style={{ opacity: downOpacity }}
        className="fixed bottom-6 mb-20 md:mb-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-400 text-xs pointer-events-none z-50 mix-blend-difference"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
        
      </motion.div>
    </div>
  );
}

/* ---------------- DAY SECTION ---------------- */
const DaySection = ({
  dayTitle,
  dayDate,

  events,
  isReversed,
}: {
  dayTitle: string;

  dayDate: string;
  events: any[];
  isReversed: boolean;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const anchorRefs = useRef<(HTMLDivElement | null)[]>([]);


  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const [activeStep, setActiveStep] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const stepSize = 1 / events.length;
    let currentStep = Math.floor(latest / stepSize);

    if (currentStep === events.length - 1) {
      const lastSectionStart = (events.length - 1) * stepSize;
      if (latest < lastSectionStart + stepSize / 2) {
        currentStep = events.length - 2;
      }
    }
    const clampedStep = Math.max(0, Math.min(currentStep, events.length - 1));

    if (clampedStep !== activeStep) {
      setActiveStep(clampedStep);
    }
  });

  const scrollToAnchor = (index: number) => {
    setActiveStep(index);
    const anchor = anchorRefs.current[index];
    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (

    <div
      ref={container}
      className={`relative min-h-[300vh] ${!isReversed ? "mb-8" : ""}`}
    >
      {/* --- INVISIBLE ANCHOR TRACK --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {events.map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              anchorRefs.current[i] = el;
            }}
            className={
              i === events.length - 1 ? "scroll-mt-[-10px]" : "scroll-mt-[-30px]"
            }
            style={{
              position: "absolute",
              top: `${(i / events.length) * 100}%`,
              height: `${100 / events.length}%`,
              width: "100%",
            }}
          />
        ))}
      </div>

      {/* ------------------------------------------------
        UPDATED STICKY HEADER WITH MOBILE INDICATOR
        ------------------------------------------------
      */}
      <div className="sticky top-4 md:top-20 z-30 flex flex-col items-center pointer-events-none">
        {/* Title Badge */}
        <span className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm font-mono uppercase tracking-widest text-white border border-white/10 shadow-lg mb-2">

          {dayTitle}
        </span>

        {/* MOBILE ONLY: Progress Pills */}
        <div className="flex md:hidden gap-1.5 pointer-events-auto p-2 rounded-full bg-black/20 backdrop-blur-sm">
          {events.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToAnchor(i)}
              className="relative h-1.5 rounded-full transition-all duration-300 ease-out"
              style={{
                width: activeStep === i ? "24px" : "6px", // Active is wide, inactive is dot
                backgroundColor: activeStep === i ? "#EAB308" : "#52525B", // Yellow-500 vs Zinc-600
              }}
              aria-label={`Go to event ${i + 1}`}
            />
          ))}
        </div>
      </div>


      <div
        className={`flex ${
          isReversed ? "flex-row-reverse" : "flex-row"
        } relative z-10`}
      >
        {/* Timeline Container (Desktop) */}
        <div
          className={`w-[15%] md:w-[20%] hidden md:flex relative ${
            isReversed ? "items-start pl-6" : "items-start left-14"
          }`}
        >
          <div className="h-screen sticky top-0 flex flex-col justify-center w-full max-w-[220px]">
            <Timeline
              activeStep={activeStep}
              progress={scrollYProgress}
              events={events}
              onSelect={scrollToAnchor}
              side={isReversed ? "right" : "left"}
            />
          </div>
        </div>

        {/* Cards */}
        <div className="w-full md:w-[80%] px-4 md:px-6">
          {events.map((event, i) => {

            const targetScale = 1 - (events.length - i) * 0.05;
            return (
              <Card
                key={i}
                i={i}
                {...event}
                progress={scrollYProgress}
                range={[i * (1 / events.length), 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};


/* ---------------- TIMELINE ---------------- */
const Timeline = ({
  progress,
  activeStep,
  events,
  onSelect,
  side = "left",
}: {
  progress: MotionValue<number>;
  activeStep: number;
  events: any[];
  onSelect: (i: number) => void;
  side?: "left" | "right";
}) => {
  const isLeft = side === "left";


  return (
    <div 
      className={`
        relative flex flex-col gap-16 
        ${isLeft ? "border-r pr-8 text-right items-end" : "border-l pl-8 text-left items-start"}
        border-zinc-800
      `}
    >
      <motion.div
        className={`absolute top-0 w-[3px] bg-yellow-500 origin-top ${isLeft ? "right-[-1.5px]" : "left-[-1.5px]"}`}
        style={{ height: "100%", scaleY: progress }}
      />

      {events.map((event, i) => {

        const isActive = i <= activeStep;
        return (
          <motion.button
            key={i}
            onClick={() => onSelect(i)}
            animate={{ opacity: isActive ? 1 : 0.3 }}
            whileHover={{ 
                scale: 1.2,                
                x: isLeft ? -10 : 10,      
                opacity: 1                 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`group cursor-pointer flex flex-col gap-1 ${isLeft ? "items-end" : "items-start"}`}
          >
           <span
              className={`block text-xs font-mono uppercase tracking-wider flex items-center gap-2 
                ${isLeft ? "flex-row-reverse" : "flex-row"} 
                ${isActive ? "text-yellow-500" : "text-zinc-600"} 
                transition-colors duration-300`}
            >
              {event.time}
            </span>
            <span
              className="block text-sm font-bold uppercase text-white"
            >
              {event.title}
            </span>
          </motion.button>

        );
      })}
    </div>
  );
};


/* ---------------- CARD COMPONENT ---------------- */

const Card = ({
  i,
  title,
  description,
  src,
  date,
  time,
  color,
  progress,
  range,
  targetScale,

  backendValue,
  teamSize,
  deadline
}: any) => {

  const scale = useTransform(progress, range, [1, targetScale]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isClosed = new Date() > new Date(deadline);

  return (

    <>
      {isModalOpen && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
           <EventRegistrationForm 
              event={{ title, backendValue, teamSize }} 
              onClose={() => setIsModalOpen(false)} 
           />
        </div>,
        document.body
      )}

      <div className="min-h-screen flex items-start justify-center sticky top-0">
        <motion.div
          style={{ 
            scale, 
            backgroundColor: color,
            top: `calc(75px + ${i * 8}px)`, // Kept stacking logic identical
          }}
          /* CHANGE 2: Card Height
            - h-[75vh]: Makes cards 75% of screen height on Mobile (Taller)
            - md:h-[580px]: Keeps them fixed size on Laptop (Unchanged)
          */
          className="relative w-full max-w-4xl h-[85vh] md:h-[580px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl origin-top"
        >
          <div className="flex flex-col md:flex-row h-full">
            <div className="w-full h-[60%] md:h-full md:w-[45%] p-8 md:p-12 flex flex-col justify-between z-10 relative">
              <div>
                 <div className="flex items-center gap-3 text-xs font-mono uppercase mb-6">
                  <span className="flex items-center gap-1 text-zinc-400">
                    <Calendar size={12} /> {date}
                  </span>
                  <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                  <span className="flex items-center gap-1 text-yellow-500">
                    <Clock size={12} /> {time}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] mb-6 text-white">
                  {title}
                </h2>

                <p className="text-zinc-400 text-base md:text-lg leading-relaxed line-clamp-4">
                  {description}
                </p>
                
                <div className="mt-4 flex items-center gap-2 text-xs font-mono text-zinc-500 border border-zinc-700 w-fit px-2 py-1 rounded">
                   <span>Team Size: {teamSize.min === teamSize.max ? teamSize.max : `${teamSize.min}-${teamSize.max}`}</span>
                </div>

              </div>

              {isClosed ? (
                <button 
                  disabled 
                  className="w-fit bg-zinc-800 text-zinc-500 px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs cursor-not-allowed border border-zinc-700"
                >
                  Registration Closed
                </button>
              ) : (
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-fit flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-yellow-400 transition-colors"
                >
                  Register <ArrowUpRight size={16} />
                </button>
              )}
            </div>


            <div className="relative w-full md:w-[55%] h-[40%] md:h-full overflow-hidden group">
               <div className="absolute inset-0 bg-zinc-900" />
               <img
                 src={src}
                 alt={title}
                 className="w-full h-full object-cover grayscale scale-105 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-black/60" />
             </div>
          </div>
        </motion.div>
      </div>
    </>

  );
};
