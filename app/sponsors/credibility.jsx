import Image from "next/image";
import campusImg from "./campus.png";

export default function Credibility() {
  return (
    <div>
      {/* Institution Credibility */}
 
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* LEFT: TEXT */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Institutional Credibility
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl">
                Powered by Legacy,
                <br />
                <span className="text-cyan-400">Trusted by Industry</span>
              </h2>

              <p className="text-lg leading-relaxed text-gray-300">
                IIEST Shibpur, founded in 1856, is India’s second-oldest
                engineering institution and an{" "}
                <span className="text-white">
                  Institute of National Importance
                </span>
                . Ranked among the{" "}
                <span className="text-white">
                  top 12 NITs (NIRF Engineering 2025)
                </span>
                , it represents a legacy of academic excellence and a strong
                global alumni network.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-gray-300">
                <span className="text-white">IMPETUS</span> also hosts flagship
                <span className="text-white">
                  {" "}
                  industry–academia interactions
                </span>
                , enabling sponsors to engage directly with students,
                researchers, and faculty through meaningful collaborations that
                extend well beyond the event itself.
              </p>
            </div>

            {/* RIGHT: IMAGE */}
            <div className="relative h-[300px] overflow-hidden rounded-3xl md:h-[420px]">
              <Image
                src={campusImg}
                alt="IIEST Shibpur Campus"
                fill
                className="object-cover"
                priority
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
