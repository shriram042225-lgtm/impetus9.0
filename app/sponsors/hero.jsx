export default function Hero() {
  return (

      <div className="relative z-10 flex min-h-screen items-center justify-start px-12 text-white">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-5xl font-bold">SPONSOR IMPETUS 9.0</h1>


          <h2 className="mb-3 text-xl font-semibold">
            Partner with Innovation & Shape the Future of Engineering
          </h2>

          <p className="mb-6 text-lg opacity-75">
            Annual Technical Fest of Mechanical Engineering
            <br />
            IIEST Shibpur | 13–15 February 2026
          </p>

          <a

            href="/pdf/SponsorshipBrochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 transition hover:bg-blue-700"
          >
            View Brochure
          </a>
        </div>


    <div>
      <section class="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-black">
        {/* <!-- Impetus watermark --> */}
        <div class="absolute inset-0 bg-[url('/impetus.png')] bg-center bg-no-repeat bg-contain opacity-[0.04]"></div>

      {/* Abstract tech overlay */}
      <div className="absolute inset-0 bg-[url('/impetus-logo.png')] bg-cover bg-center opacity-10" />

        {/* <!-- Content --> */}
        <div class="relative z-10 flex items-center justify-center min-h-screen text-center text-white px-6">
          <div>
            <h1 class="text-5xl font-bold mb-4">SPONSOR IMPETUS 9.0</h1>
            <h2 class="font-bold">Partner with Innovation & Shape the Future of Engineering</h2>
            <p class="text-lg opacity-75 mb-6">
              Annual Technical Fest of Mechanical Engineering
              <br />
              IIEST Shibpur | 13–15 February 2026
            </p>
            <button class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
              Become a Sponsor
            </button>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}



