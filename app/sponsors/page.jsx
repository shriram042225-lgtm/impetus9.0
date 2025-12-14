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
    
      <Hero />
      <br />  
      <WhySponsor />
      <br />
      <Credibility />
      <br/>
      <FlagshipEvent />
      <br />
      <SponsorshipTiers />
      <br />
      <Partnership />
      <br/>
      <PastSponsors />
      <br />
      <Final />
    </div>
  );
}