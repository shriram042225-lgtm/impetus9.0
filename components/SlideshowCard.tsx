import React, { useState, useEffect } from 'react';
import { ArrowUpRight, PlayCircle } from 'lucide-react';

export default function SlideshowCard() {
   const slideshowImages = [
      "/home/impetus8/cad.webp",
      "/home/impetus8/deathrace.webp",
      "/home/impetus8/heato.webp",
      "/home/impetus8/scrap.webp",
      "/home/impetus8/iam1.webp",
      "/home/impetus8/impetus.webp",
      "/home/impetus8/inaug.webp",
      "/home/impetus8/iq.webp",
      "/home/impetus8/valo.webp",
   ];

   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
      }, 3000);
      return () => clearInterval(interval);
   }, [slideshowImages.length]);

   return (
      <div className="md:col-span-3 md:row-span-2 row-span-4 relative group overflow-hidden rounded-3xl border border-zinc-800 p-8 flex flex-col justify-end">
         {/* JS-BASED IMAGE SLIDESHOW */}
         <div className="absolute inset-0 bg-zinc-900">
            {slideshowImages.map((img, index) => (
               <img
                  key={index}
                  src={img}
                  alt={`Highlight ${index}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
                  ${index === currentIndex ? "opacity-60 group-hover:opacity-80" : "opacity-0"}
               `}
               />
            ))}
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
         <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
               <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">
                  IMPETUS 8.0
               </h3>
               <p className="text-sm md:text-base text-zinc-500 font-medium">
                  A look back at our past success.
               </p>
            </div>

            <a
               href="YOUR_YOUTUBE_LINK_HERE"
               target="_blank"
               rel="noopener noreferrer"
               className="hidden md:flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-zinc-800 hover:border-zinc-700 hover:text-white transition-all duration-300 group/btn"
            >
               <PlayCircle className="w-5 h-5 text-gray-200 group-hover/btn:text-white transition-colors" />
               <span className="font-medium text-sm tracking-wide text-gray-100">Watch Aftermovie</span>
               <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
            </a>
         </div>
      </div>
   );
}