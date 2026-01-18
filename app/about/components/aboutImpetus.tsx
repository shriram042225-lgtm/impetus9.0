'use client';

import AnimatedSection from "./ui/AnimatedSection";
import Section from "./ui/Section";
import SplitLayout from "./ui/SplitLayout";
import SectionHeading from "./ui/SectionHeading";
import LogoGlow from "./ui/LogoGlow";

export default function AboutImpetus() {
  return (
    <Section>
      <SplitLayout>
        {/* 40% — Logo */}
        <AnimatedSection>
          <div className="flex h-full w-full basis-2/5 items-center justify-center">
            <LogoGlow
              src="/impetusLogo.png"
              alt="IMPETUS Logo"
              glowColor="amber"
            />
          </div>
        </AnimatedSection>

        {/* 60% — Text */}
        <AnimatedSection delay={0.15}>
          <div className="basis-3/5 space-y-6 text-left">
            <SectionHeading title="ABOUT" highlight="IMPETUS" />

            <p className="border-l-2 border-amber-500/40 pl-4 italic text-gray-400">
              Theoretical knowledge finds its true value only when combined with
              skill and real-world experience.
            </p>

            <p className="text-gray-300 leading-relaxed">
              IMPETUS is an initiative to bridge the gap between industry and
              academia by bringing real-world engineering exposure to students
              of IIEST, Shibpur. It is organized annually by the Society of
              Mechanical Engineers (SME) on behalf of the Department of
              Mechanical Engineering.
            </p>

            <p className="text-gray-300 leading-relaxed">
              The fest serves as a common platform where experts from industry
              and academia converge, offering students the opportunity to learn
              from both perspectives through carefully designed technical
              events.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Every participant leaves IMPETUS with enhanced skills, meaningful
              exposure, and a distinct professional edge.
            </p>
          </div>
        </AnimatedSection>
      </SplitLayout>
    </Section>
  );
}
