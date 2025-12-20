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
        </div>
  );

}


