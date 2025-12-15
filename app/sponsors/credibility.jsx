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
                Institutional Legacy
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl">
                Backed by a Legacy of
                <br />
                <span className="text-cyan-400">Excellence & Trust</span>
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
                , it hosts a global alumni network and a legacy of academic and
                technological excellence.
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

              {/* subtle overlay for consistency */}
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
