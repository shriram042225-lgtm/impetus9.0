import Image from "next/image";

// Sponsor Logos


import indianoil from "../../sponsors/images/indianoil.png";
import lalbaba from "../../sponsors/images/lalbaba.png";

// Sponsor Data
const sponsors = [
  
  { name: "Indian Oil", logo: indianoil },
  { name: "Lalbaba", logo: lalbaba },
];

export default function SponsorCard() {
  return (
    <div className="pl-12 pr-12 grid grid-cols-2 gap-8 ">
      {sponsors.map((sponsor, index) => (
        <div
          key={index}
          className="group flex h-32 items-center justify-center rounded-3xl
                 bg-white p-6 shadow-lg
                 transition-all duration-300 ease-out
                 hover:scale-[1.05] hover:shadow-2xl"
        >
          <Image
            src={sponsor.logo}
            alt={sponsor.name}
            priority={index < 6}
            className="h-30 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
