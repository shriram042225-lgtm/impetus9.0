"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ onComplete }) {
  // We use a separate state to control the exit animation before unmounting
  const [isVisible, setIsVisible] = useState(true);

  // Customize for Impetus
  const title = "IMPETUS 9.0";
  const subtitle = "IIEST SHIBPUR";
  const letters = Array.from(title);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";

    // Sequence:
    // 1. Wait for text animation to finish reading (2s)
    // 2. Trigger exit animation (setIsVisible false)
    // 3. Wait for exit animation to finish (0.8s) before unblocking scroll
    
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2200); // Start exit at 2.2s

    const unmountTimer = setTimeout(() => {
      document.body.style.overflow = "auto";
      if (onComplete) onComplete(); // Optional callback if you want to notify parent
    }, 3000); // Total duration 3s

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(unmountTimer);
      document.body.style.overflow = "auto";
    };
  }, [onComplete]);

  // VARIANTS --------------------------------------------
  
  // 1. The Curtain (Background)
  const containerVariants = {
    initial: { clipPath: "inset(0% 0 0% 0)" },
    exit: { 
      clipPath: "inset(0% 0 100% 0)", // Wipes up like a curtain
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } // "Hop" ease
    },
  };

  // 2. The Text Container
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
    exit: { opacity: 0, transition: { duration: 0.3 } } // Fade text out fast before curtain moves
  };

  // 3. Individual Letters (Blur + Y-axis)
  const letterVariants = {
    hidden: { 
      y: 100, 
      opacity: 0, 
      filter: "blur(10px)" 
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200, // Higher stiffness for "tech" feel
      },
    },
  };

  // 4. Subtitle Animation
  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 0.7, 
        y: 0,
        transition: { delay: 1.2, duration: 0.8 }
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
          initial="initial"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          {/* Main Title */}
          <motion.div
            className="flex overflow-hidden text-5xl md:text-8xl font-black tracking-tighter uppercase"
            variants={textContainerVariants}
          >
            {letters.map((letter, index) => (
              <motion.span variants={letterVariants} key={index} className="inline-block">
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Subtitle / Department Name */}
          <motion.p 
            className="mt-4 text-sm md:text-xl font-light tracking-[0.5em] text-gray-400 uppercase"
            variants={subtitleVariants}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}