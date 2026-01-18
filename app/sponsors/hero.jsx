"use client";

import Image from "next/image";

export default function SponsorHero() {
  return (
    <section className="relative min-h-screen bg-black text-white">
      {/* Background Image (Right-focused) */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero2.jpg"
          alt="IMPETUS 9.0"
          fill
          priority
          className="object-cover"
        />

        {/* Left-to-right black fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-screen-xl items-center px-6 md:px-12">
        <div className="max-w-2xl">
          <span className="mb-2 inline-block text-xs tracking-widest text-white/70">
            SPONSORSHIP OPPORTUNITY
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Sponsor <span className="text-blue-500">IMPETUS 9.0</span>
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/75">
            Engage with India’s next generation of engineers.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a
              href="/pdf/SponsorshipBrochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-700"
            >
              View Brochure
            </a>

            <span className="text-sm text-white/60">
              13–15 Feb 2026 • IIEST Shibpur
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
