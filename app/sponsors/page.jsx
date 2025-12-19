import Hero from "./hero";
import WhySponsor from "./whySponsor";
import Credibility from "./credibility";
import FlagshipEvent from "./flagshipEvent";
import SponsorshipTiers from "./sponsorshipTiers";
import Partnership from "./partnership";
import PastSponsors from "./pastSponsors";
import Final from "./final";

export default function Sponsors() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-black">
        {/* Impetus watermark */}
        <div className="absolute inset-0 bg-[url('/impetus.png')] bg-center bg-no-repeat bg-contain opacity-[0.04]" />

        {/* Abstract tech overlay */}
        <div className="absolute inset-0 bg-[url('/impetus-logo.png')] bg-cover bg-center opacity-10" />

        {/* Your content goes here */}
        <div className="relative z-10">
          {/* ... */}

          <Hero />
          <br />
          <WhySponsor />
          <br />
          {/* <Credibility /> */}
          <br />
          {/* <FlagshipEvent /> */}
          {/* <br /> */}
          {/* <SponsorshipTiers /> */}
          <br />
          {/* <Partnership /> */}
          <br />
          <PastSponsors />
          <br />
          {/* <Final /> */}
        </div>
      </section>
    </div>
  );
}
