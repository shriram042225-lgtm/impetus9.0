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
];

export default function PastSponsors() {
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-6">
      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Our <span className="text-cyan-400">Past Sponsors</span>
        </h2>
        <p className="mt-4 text-gray-300">
          Trusted by leading brands across previous editions of IMPETUS
        </p>
      </div>

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