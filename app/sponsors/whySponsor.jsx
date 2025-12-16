import Image from "next/image";
import { Eye, Users, Lightbulb, Handshake } from "lucide-react";
import sponsorImg from "./impetus.jpg"; // replace with brand-stalls image if available

export default function WhyPartnerSection() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      {/* HEADER */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Why Partner with <span className="text-cyan-400">IMPETUS 9.0</span>
        </h2>

        <p className="mt-4 text-gray-300">
          IMPETUS 9.0 offers brands a powerful platform to connect with future
          engineers, industry leaders, and academic experts through high-impact
          technical events and industry interactions.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* CARD 1 */}
        <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10">
          <Eye className="mb-4 h-10 w-10 text-cyan-400" />
          <h3 className="mb-2 text-lg font-semibold text-white">
            Massive Brand Visibility
          </h3>
          <p className="text-sm text-gray-300">
            Logos across banners, kits, stalls, digital promotions & extensive
            media coverage.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10">
          <Users className="mb-4 h-10 w-10 text-cyan-400" />
          <h3 className="mb-2 text-lg font-semibold text-white">
            Direct Talent Access
          </h3>
          <p className="text-sm text-gray-300">
            Engage directly with top-performing engineering students from a
            premier NIT.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10">
          <Lightbulb className="mb-4 h-10 w-10 text-cyan-400" />
          <h3 className="mb-2 text-lg font-semibold text-white">
            Industry–Academia Exposure
          </h3>
          <p className="text-sm text-gray-300">
            Showcase innovation at India’s leading Industry–Academia technical
            meet.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10">
          <Handshake className="mb-4 h-10 w-10 text-cyan-400" />
          <h3 className="mb-2 text-lg font-semibold text-white">
            Custom Brand Engagement
          </h3>
          <p className="text-sm text-gray-300">
            High-impact stalls, product demos, workshops, and interactive brand
            activations.
          </p>
        </div>
      </div>

      {/* IMAGE STRIP */}
      <div className="relative mt-20 h-[300px] overflow-hidden rounded-3xl">
        <Image
          src={sponsorImg}
          alt="Brand stalls and audience engagement at Impetus"
          fill
          className="object-cover"
          priority
        />
        {/* Darker overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Highlighted text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p
            className="
 relative
      text-white text-xl md:text-2xl font-semibold tracking-wide
      drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]"
          >
            Brand Stalls • Interaction Booths • Audience Engagement
          </p>
        </div>
      </div>
    </div>
  );
}