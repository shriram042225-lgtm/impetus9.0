'use client';

import AnimatedSection from "./ui/AnimatedSection";
import Section from "./ui/Section";
import SplitLayout from "./ui/SplitLayout";
import SectionHeading from "./ui/SectionHeading";
import LogoGlow from "./ui/LogoGlow";

export default function AboutDepartmentSME() {
  return (
    <Section>
      <SplitLayout>
        {/* 60% — Text */}
        <AnimatedSection>
          <div className="basis-3/5 space-y-6 text-left">
            <SectionHeading
              title="DEPARTMENT &"
              highlight="SME"
              highlightColor="cyan"
              subtitle="Forging Mechanical Excellence Since 1921"
            />

            <p className="text-gray-300 leading-relaxed">
              The Department of Mechanical Engineering began its journey on
              <span className="text-white font-medium"> 4th March 1921 </span>
              with a diploma programme, followed by undergraduate studies in
              <span className="text-white font-medium"> 1930</span> and
              postgraduate programmes in
              <span className="text-white font-medium"> 1954</span>.
            </p>

            <p className="text-gray-300 leading-relaxed">
              With a strong emphasis on structured teaching and impactful
              research, the department has built a reputation for producing
              competent engineers and influential researchers.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Academic and cultural activities are led by the
              <span className="text-white font-medium">
                {" "}Society of Mechanical Engineers (SME)
              </span>, supported by student chapters of SAE, ASME, and ISHRAE,
              ensuring global exposure and industry relevance.
            </p>
          </div>
        </AnimatedSection>

        {/* 40% — Logo */}
        <AnimatedSection delay={0.15}>
          <div className="flex h-full w-full basis-2/5 items-center justify-center">
            <LogoGlow
              src="/SMEwhite.png"
              alt="SME Logo"
              glowColor="cyan"
              size={300}
            />
          </div>
        </AnimatedSection>
      </SplitLayout>
    </Section>
  );
}
