import Image from "next/image";
import sponsorImg from "./sponsorImg.jpg"; 

export default function SponsorshipTiers() {
  return (
    <div>
      {/* Sponsorship Tiers */}

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* HEADER */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Sponsorship Opportunities
            </p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Choose the Right{" "}
              <span className="text-cyan-400">Sponsorship Tier</span>
            </h2>
            <p className="mt-4 text-gray-300">
              Simple, transparent sponsorship tiers designed to maximize brand
              value and engagement.
            </p>
          </div>

          {/* PRICING CARDS */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* TITLE SPONSOR */}
            <div className="relative rounded-3xl border-2 border-cyan-400 bg-cyan-400/10 p-8 shadow-xl shadow-cyan-500/20">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-4 py-1 text-sm font-semibold text-black">
                Most Impactful
              </span>

              <h3 className="mb-2 text-xl font-bold text-white">
                🥇 Title Sponsor
              </h3>
              <p className="mb-6 text-3xl font-extrabold text-cyan-400">
                ₹1,75,000
              </p>

              <ul className="space-y-3 text-gray-200">
                <li>• Prime logo placement across all platforms</li>
                <li>• Maximum on-ground & digital visibility</li>
                <li>• Leadership & keynote positioning</li>
              </ul>

              <button className="mt-8 w-full rounded-xl bg-cyan-400 py-3 font-semibold text-black transition hover:bg-cyan-300">
                Become Title Sponsor
              </button>
            </div>

            {/* CO-SPONSOR */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:shadow-xl hover:shadow-white/10">
              <h3 className="mb-2 text-xl font-bold text-white">
                🥈 Co-Sponsor
              </h3>
              <p className="mb-6 text-3xl font-extrabold text-white">
                ₹1,25,000
              </p>

              <ul className="space-y-3 text-gray-300">
                <li>• Strategic brand placement</li>
                <li>• Repeated mentions across events</li>
                <li>• Strong on-site presence</li>
              </ul>

              <button className="mt-8 w-full rounded-xl border border-white/20 py-3 font-semibold text-white transition hover:bg-white/10">
                Choose Co-Sponsor
              </button>
            </div>

            {/* IAM SPONSOR */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:shadow-xl hover:shadow-white/10">
              <h3 className="mb-2 text-xl font-bold text-white">
                🏛 IAM Sponsor
              </h3>
              <p className="mb-6 text-3xl font-extrabold text-white">
                ₹1,00,000
              </p>

              <ul className="space-y-3 text-gray-300">
                <li>• Exclusive IAM branding rights</li>
                <li>• Logo on mementos & delegate kits</li>
                <li>• Dedicated IAM recognition</li>
              </ul>

              <button className="mt-8 w-full rounded-xl border border-white/20 py-3 font-semibold text-white transition hover:bg-white/10">
                Choose IAM Sponsor
              </button>
            </div>
          </div>

          {/* IMAGE STRIP */}
          <div className="relative mt-20 h-[280px] overflow-hidden rounded-3xl">
            <Image
              src={sponsorImg}
              alt="Sponsor logos and event branding"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-lg font-semibold text-white">
                Event Branding • Sponsor Logos • On-Ground Visibility
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
