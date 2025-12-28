import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, ArrowRight, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full text-white pt-10 pb-5 bg-[#050505] overflow-hidden">
      
      {/* --- THE MARKINGS --- */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-sm" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black -z-10" />

      {/* Main Content */}
      <div className="w-full px-10 md:px-24 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-10">
          
          {/* 1. BRANDING BLOCK */}
          <div className="flex flex-col items-center md:items-start space-y-4 order-1">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold tracking-tighter text-white/90">
                IMPETUS 9.0
              </h2>
              <p className="text-xs text-gray-500 tracking-widest uppercase mt-2 font-medium">
                IIEST Shibpur • Dept of Mechanical Engineering
              </p>
            </div>

            <div className="flex gap-6 pt-2">
               <SocialIcon href="https://facebook.com" icon={<Facebook size={24} />} />
               <SocialIcon href="https://instagram.com" icon={<Instagram size={24} />} />
               <SocialIcon href="https://linkedin.com" icon={<Linkedin size={24} />} />
               <SocialIcon href="https://youtube.com" icon={<Youtube size={24} />} />
            </div>
          </div>

          {/* 2. MEET THE TEAM BLOCK */}
          <div className="flex flex-col items-center justify-center w-full order-3 md:order-2">
            <Link 
              href="/teams" 
              className="group relative px-8 py-4 rounded-full bg-white/5 border border-white/10 overflow-hidden transition-all hover:border-blue-500/50 hover:bg-blue-900/10 shadow-lg"
            >
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:w-full group-hover:animate-shine" />
              <div className="flex items-center gap-3 text-base font-medium text-gray-300 group-hover:text-white">
                <span>Meet the Team</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <p className="text-[10px] text-zinc-600 mt-2 md:mt-5 tracking-wide">
                © 2026 Impetus. All rights reserved.
            </p>
            
            <div className="flex items-center justify-center md:justify-start gap-1 text-[10px] text-[#0a0a0a] mt-0 hover:text-[#111] select-none cursor-default transition-colors duration-300">
                 <span>Made by Absie with</span>
                 <Heart size={10} fill="currentColor" /> 
            </div>
          </div>

          {/* 3. COORDINATORS BLOCK */}
          <div className="flex flex-col items-center md:items-end space-y-3 mb-0 md:mb-7 order-2 md:order-3 w-full md:w-auto">
             <h3 className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-2">
                Main Coordinators
             </h3>
             {/* Container for the two lines */}
             <div className="w-full max-w-[300px] md:max-w-none space-y-2 md:space-y-3 px-2">
                <CoordinatorRow name="Akshat Gupta" phone="+91 7548071485" />
                <CoordinatorRow name="Akash S" phone="+91 9444265824" />
             </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

// --- Components ---

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-white hover:scale-110 transition-all duration-200"
  >
    {icon}
  </a>
);

const CoordinatorRow = ({ name, phone }) => (
  /* Mobile: flex-row + justify-between ensures Name is far left, Phone is far right.
     Desktop: md:flex-row + justify-end + gap-3 keeps them together on the right.
  */
  <div className="flex flex-row items-center justify-between md:justify-end md:gap-3 text-sm">
    {/* Name: Left-aligned on mobile */}
    <span className="text-gray-200 font-medium whitespace-nowrap text-left">
      {name}
    </span>
    
    {/* Divider: Desktop only */}
    <span className="hidden md:block w-px h-3 bg-gray-700"></span>
    
    {/* Phone: Right-aligned on mobile */}
    <span className="font-mono text-gray-400 tracking-tight whitespace-nowrap text-right">
      {phone}
    </span>
  </div>
);

export default Footer;