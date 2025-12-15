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
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">

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
              className="group flex h-24 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={160}
                height={80}
                sizes="(min-width: 1024px) 160px, (min-width: 768px) 140px, 120px"
                className="object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}