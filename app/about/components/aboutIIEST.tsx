'use client';

import Image from "next/image";
import AnimatedSection from "./ui/AnimatedSection"
import Section from "./ui/Section";

export default function AboutIIEST() {
  return (
    <Section >
      <div className="max-w-7xl mx-auto  md:grid-cols-2 gap-16 items-center">
      <AnimatedSection>
        <div className="max-w-5xl mx-auto text-center">

          {/* Logo */}
          <div className="relative w-28 h-28 mx-auto mb-8">
            <Image
              src="/iiest_logo.png"
              alt="IIEST Shibpur Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Headings */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            IIEST SHIBPUR
          </h1>

          <h2 className="mt-2 text-sm md:text-xl tracking-[0.3em] uppercase text-amber-500">
            170 Years of Excellence
          </h2>

          {/* Timeline */}
          <div className="relative mt-16 grid md:grid-cols-2 gap-12 text-left">
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-amber-500/20" />

            <AnimatedSection delay={0.1}>
              <div>
                <h3 className="text-lg font-semibold border-b border-amber-500/30 inline-block pb-1">
                  History
                </h3>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  Founded in 1856, IIEST Shibpur is the second-oldest engineering
                  college in India. From Civil Engineering College to BESU,
                  it has stood for academic excellence for over a century.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <h3 className="text-lg font-semibold border-b border-amber-500/30 inline-block pb-1">
                  Today
                </h3>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  An Institute of National Importance, IIEST ranks among India’s
                  premier institutions, driving innovation through research and
                  a strong global alumni network.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
      </div>
    </Section>
  );
}