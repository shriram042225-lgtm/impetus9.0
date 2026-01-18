import React from 'react';

import { ArrowUpRight } from 'lucide-react';
import SlideshowCard from './SlideshowCard'; // Make sure the path matches where you saved the file above

export default function BentoGrid() {
   return (
      <section className="bg-black text-white py-20 px-4 md:px-8">
         <div className="max-w-7xl mx-auto">
            <div className="mb-8 border-b border-zinc-800 pb-4">
               <h2 className="text-sm leading-relaxed md:text-xl">
                  <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider md:text-sm">IMPETUS 9.0</span>
                  <span className="mx-2 text-zinc-700 md:mx-3">-</span>
                  <span className="font-bold text-zinc-100">Annual Technical Fest</span>
                  <span className="ml-1 text-zinc-500"> organised by </span>
                  <span className="block font-medium text-zinc-400 sm:inline sm:ml-1.5">
                     the Department of Mechanical Engineering, IIEST Shibpur
                  </span>
               </h2>
            </div>
            <div className="grid grid-cols-1 grid-rows-21 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[800px]">
               <div className="md:col-span-1 md:row-span-3 row-span-8 relative group overflow-hidden rounded-3xl border border-zinc-800 p-6 flex flex-col justify-between">
                  <img
                     src="/clockcroped.jpeg"
                     alt="IIEST Clocktower"
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="relative z-10 mt-auto font-nunito">
                     <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-200 rounded-full text-xs font-bold mb-3 border border-blue-500/20">
                        EST. 1856
                     </span>
                     <h3 className="text-2xl font-bold leading-tight text-white ">
                        IIEST, Shibpur
                     </h3>
                     <p className="text-zinc-400 text-xs mt-3 leading-relaxed border-t border-white/10 pt-3">
                        Founded in 1856, it stands as the 2nd oldest engineering college in India and an
                        <span className="text-zinc-200 font-medium"> Institute of National Importance</span>.
                        Ranked among the top 12 premier NITs (NIRF 2025), it boasts a global alumni network and a continuing legacy of excellence in education and research.
                     </p>
                     <a
                        href="https://www.iiests.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                     >
                        Visit Official Website
                        <ArrowUpRight className="w-3 h-3" />
                     </a>
                  </div>
               </div>

               {/* REPLACED THE SLIDESHOW BLOCK WITH THE COMPONENT */}
               <SlideshowCard />

               <div className="md:col-span-1 md:row-span-1 row-span-4 relative group overflow-hidden rounded-3xl border border-zinc-800 p-6 flex flex-col justify-between">
                  <div className="absolute inset-0 flex items-start justify-center md:pt-2 pt-1 opacity-100">
                     <img
                        src="/SME.png"
                        alt="SME Logo"
                        className="md:w-52 md:h-52 w-55 h-55 "
                     />
                  </div>
                  <div className="relative z-10 mt-auto text-left">
                     <h3 className="text-[20px] font-bold leading-tight text-white">
                        Society of Mechanical Engineers, IIEST Shibpur
                     </h3>
                     <a
                        href="/about/aboutpage"
                        className="inline-flex items-center gap-2 mt-4 text-xs font-medium text-orange-400 hover:text-orange-300 transition-colors"
                     >
                        Know more about us
                        <ArrowUpRight className="w-3 h-3" />
                     </a>
                  </div>
               </div>
               <div className="md:col-span-1 md:row-span-1 row-span-4 relative group overflow-hidden rounded-3xl border border-zinc-800 p-6 flex flex-col justify-between">
                  <img
                     src="/home/impetus8/iampanel.webp"
                     alt="Industry Academia Meet"
                     className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <div className="relative z-10 mt-auto text-left">
                     <h3 className="text-[20px] font-bold leading-tight text-white">
                        Industry Academia Meet
                     </h3>
                     <p className="text-sm md:text-base text-zinc-500 font-medium">
                        Flagship Event Of IMPETUS.
                     </p>
                     <a
                        href="/about/IAM"
                        className="inline-flex items-center gap-2 mt-4 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors"
                     >
                        Visit IAM Page
                        <ArrowUpRight className="w-3 h-3" />
                     </a>
                  </div>
               </div>

               <div className="md:col-span-1 md:row-span-1 row-span-1 flex items-center justify-center bg-black">
                  <a
                     href="/sponsors"
                     className="w-full max-w-[240px] py-4 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] group px-14"
                  >
                     <span className="text-[15px] font-black italic tracking-tight uppercase whitespace-nowrap">
                        Want to Sponsor?
                     </span>
                     <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" strokeWidth={3} />
                  </a>
               </div>

            </div>
         </div>
      </section>
   );
  }