import Image from "next/image";

// Sponsor Logos
import tega from "./images/tega.png";
import faradic from "./images/faradic.jpg";
import edugraph from "./images/edugraph.jpg";
import eda from "./images/eda.png";
import gems from "./images/gems.png";
import ime from "./images/ime.png";
import evepaper from "./images/evepaper.png";
import ims from "./images/ims.png";
import cognitive from "./images/cognitive.png";
import interviewbuddy from "./images/interviewbuddy.png";
import gainwell from "./images/gainwell.jpg";
import mahr from "./images/mahr.png";
import dastur from "./images/dastur.webp";
import imperial from "./images/imperial.webp";
import unacademy from "./images/unacademy.png";
import tatasteel from "./images/tatasteel.png";
import ibm from "./images/ibm.png";
import indianoil from "./images/indianoil.png";
import spices from "./images/7Spices.png";
import alobus from "./images/Alo bus.png";
import aswawa from "./images/Asawa insulation.png";
import bancharam from "./images/Bancharam.png";
import blackbird from "./images/BLACKBIRDROBOTIX.png";
import haldiram from "./images/Haldirams.png";
import hero from "./images/Hero motocorp.webp";
import hyundai from "./images/Hyundai.png";
import idp from "./images/idp.jpg";
import iic from "./images/iic.jpg";
import jsw from "./images/JSW-steel.png";
import mcpro from "./images/McPro.png";
import thinkagain from "./images/ThinkAgainLab.jpg";

// Sponsor Data
const sponsors = [
  { name: "Tega", logo: tega },
  { name: "Faradic", logo: faradic },
  { name: "Edugraph", logo: edugraph },
  { name: "EDA Global", logo: eda },
  { name: "GEMS", logo: gems },
  { name: "IME Shibpur", logo: ime },
  { name: "Evepaper", logo: evepaper },
  { name: "IMS", logo: ims },
  { name: "Cognitive Engineering", logo: cognitive },
  { name: "Interview Buddy", logo: interviewbuddy },
  { name: "Gainwell", logo: gainwell },
  { name: "Mahr", logo: mahr },
  { name: "Dastur", logo: dastur },
  { name: "Imperial", logo: imperial },
  { name: "Unacademy", logo: unacademy },
  { name: "Tata Steel", logo: tatasteel },
  { name: "IBM", logo: ibm },
  { name: "Indian Oil", logo: indianoil },
  { name: "spices", logo: spices },
  { name: "alobus", logo: alobus },
  { name: "aswawa", logo: aswawa },
  { name: "bancharam", logo: bancharam },
  // { name: "blackbird", logo: blackbird },
  { name: "haldiram", logo: haldiram },
  { name: "hero", logo: hero },
  { name: "hyundai", logo: hyundai },
  { name: "idp", logo: idp },
  { name: "iic", logo: iic },
  { name: "jsw", logo: jsw },
  { name: "mcpro", logo: mcpro },
  { name: "thinkagain", logo: thinkagain },
];

export default function PastSponsors() {
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-6">

      {/* Logo Grid */}
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="group flex h-28 items-center justify-center rounded-2xl
                 bg-white p-6 shadow-md
                 transition-all duration-300 ease-out
                 hover:scale-[1.05] hover:shadow-xl"
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              priority={index < 6}
              className="h-25 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
