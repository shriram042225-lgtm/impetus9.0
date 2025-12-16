import { Mail, Phone, MapPin } from "lucide-react";

export default function Final() {
  return (
    <div>
      {/* Final CTA */}

      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-gray-900 to-black px-10 py-16 shadow-xl">
            {/* HEADLINE */}
            <h2 className="mb-6 text-center text-3xl font-bold text-white md:text-4xl">
              Join Us in Empowering the
              <br />
              <span className="text-cyan-400">
                Next Generation of Engineers
              </span>
            </h2>

            {/* CONTACT GRID */}
            <div className="mx-auto mt-12 grid max-w-4xl gap-6 text-gray-300 md:grid-cols-2">
              {/* LEFT */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <span>contactimpetus.sme@gmail.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <span>Akash S – +91 94442 65824</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <span>Akshat Gupta – +91 75480 71485</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-cyan-400" />
                  <span>IIEST Shibpur</span>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
