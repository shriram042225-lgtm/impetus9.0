// components/Loading.jsx
"use client"; // Required for useState/useEffect

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Loading() {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev + 1) % 4); // Cycles 0, 1, 2, 3
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black h-screen w-screen">
      
      {/* 1. The Image */}
      {/* Make sure loading.gif is inside your public/images/ folder */}
      <div className="relative w-[300px] h-[300px] mb-4">
        <Image
          src="/loading.gif"
          alt="Loading..."
          fill
          className="object-contain"
          priority // Loads immediately
        />
      </div>

      {/* 2. The Text with Dots */}
      <div className="flex flex-row items-end text-white text-2xl font-mono tracking-widest uppercase">
        <p>Loading</p>
        <div className="w-12 text-left">
            {/* Renders dots based on state */}
            {dots === 0 && ""}
            {dots === 1 && "."}
            {dots === 2 && ".."}
            {dots === 3 && "..."}
        </div>
      </div>
    </div>
  );
}