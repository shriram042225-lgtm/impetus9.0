"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEra } from "@/context/EraContext"; // Import the hook

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentEraIndex } = useEra(); // Consume the global state

  const closeMenu = () => setIsMenuOpen(false);

  // --- SYNC LOGIC ---
  // These correspond to: Mechanism (Amber), Propulsion (Orange), Automation (Cyan), Simulation (Emerald)
  // Matching the "eras" array in your HeroSection
  const borderColors = [
    "border-amber-500/60 shadow-amber-900/20",   // Era 0
    "border-orange-500/60 shadow-orange-900/20", // Era 1
    "border-cyan-400/60 shadow-cyan-900/20",     // Era 2
    "border-emerald-400/60 shadow-emerald-900/20" // Era 3
  ];

  const currentBorderStyle = borderColors[currentEraIndex] || borderColors[0];

  // Common style for the mobile floating buttons
  const mobileIconPillStyle = `h-14 w-14 bg-white/10 backdrop-blur-xl border ${currentBorderStyle} shadow-lg rounded-full flex items-center justify-center transition-all duration-1000 active:scale-95`;

  // Full list for Desktop
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Teams", href: "/teams" },
    { name: "Gallery", href: "/gallery" },
    { name: "IAM", href: "/IAM" },
  ];

  // Filter links
  const mobileBottomTabs = navLinks.filter((link) =>
    ["Home", "Events", "IAM"].includes(link.name)
  );
  const mobileDropdownLinks = navLinks.filter((link) =>
    !["Home", "Events", "IAM"].includes(link.name)
  );

  return (
    <>
      {/* --- DESKTOP NAVBAR (Floating Pill) --- */}
      <nav
        className={`
          h-15 z-100
          bg-white/5 
          backdrop-blur-xl 
          border 
          ${currentBorderStyle} 
          shadow-2xl
          fixed top-4 left-4 right-4 md:left-16 md:right-16 z-50
          rounded-full
          hidden md:flex items-center justify-between px-6
          transition-all duration-1000 ease-in-out hover:bg-white/10
          font-roboto
        `}
      >
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="relative h-14 w-14 ml-8">
            <Image
              src="/impetusLogo.png"
              alt="Impetus Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="flex gap-9 text-white text-[17px] items-center mr-8 font-display">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`hover:text-cyan-400 transition-colors ${
                link.name === "IAM" ? "font-bold text-cyan-300" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* ================= MOBILE LAYOUT ================= */}

      {/* 1. Top Left: Logo Button */}
      <Link
        href="/"
        onClick={closeMenu}
        className={`
          ${mobileIconPillStyle}
          fixed top-4 left-4 z-50
          md:hidden
        `}
      >
        <Image
          src="/impetusLogo.png"
          alt="Logo"
          width={32}
          height={32}
          priority
        />
      </Link>

      {/* 2. Top Right: Hamburger Toggle */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`
          ${mobileIconPillStyle}
          fixed top-4 right-4 z-50
          md:hidden text-white
        `}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* 3. Hamburger Dropdown */}
      {isMenuOpen && (
        <div
          className={`
            md:hidden
            fixed top-20 left-4 right-4 z-40
            bg-white/10 
            backdrop-blur-xl 
            border ${currentBorderStyle}
            shadow-2xl
            rounded-2xl
            p-6
            animate-in fade-in slide-in-from-top-4 duration-200
            transition-colors duration-1000
            font-roboto
          `}
        >
          <div className="flex flex-col items-center gap-6 text-white text-lg font-medium">
            {mobileDropdownLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={
                  link.name === "IAM" ? "text-cyan-300 font-bold" : ""
                }
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 4. Bottom Tab Bar */}
      <div
        className={`
        md:hidden
        fixed bottom-6 left-6 right-6 z-50
        h-16
        bg-white/10 
        backdrop-blur-xl 
        border ${currentBorderStyle}
        shadow-2xl
        rounded-full
        flex items-center justify-around
        px-2
        transition-colors duration-1000
        font-roboto
      `}
      >
        {mobileBottomTabs.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={closeMenu}
            className={`
              flex flex-col items-center justify-center w-full h-full gap-1
              active:scale-95 transition-transform
              ${link.name === "IAM" ? "text-cyan-300" : "text-white"}
            `}
          >
            {link.name === "Home" && <HomeIcon />}
            {link.name === "Events" && <EventsIcon />}
            {link.name === "IAM" && <IamIcon />}

            <span className="text-[10px] uppercase tracking-wider font-semibold">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}

// --- ICONS (Unchanged) ---
function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
  );
}
function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
  );
}
function HomeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M11.47 3.84a.75.75 0 011.06 0l8.635 8.635a.75.75 0 01-1.06 1.06l-.315-.315V20.25a.75.75 0 01-.75.75H14.25a.75.75 0 01-.75-.75V14.25H10.5v6a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V13.22l-.315.315a.75.75 0 01-1.06-1.06l8.635-8.635z" /></svg>
  );
}
function EventsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" /></svg>
  );
}
function IamIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 002.576-2.576l.813-2.846A.75.75 0 019 4.5zM9 15a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5A.75.75 0 019 15z" clipRule="evenodd" /></svg>
  );
}