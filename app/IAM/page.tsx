"use client";

import CarouselComp from "./components/CarouselComp";
import Image from "next/image";
import TakeawayTimeline from "./components/TkeawayTimeline";
import BenifitsTimeline from "./components/BenifitsTimeline";

const aim = [
  {
    head: "Interactive Industry-Academia Engagement",
    des: "Fostering strong communication between industry leaders, academicians, and students while streamlining campus engagement processes. This enables collaborative opportunities, addresses mutual needs effectively, and bridges the gap between academia and industry.",
    img: "intComms.png",
  },
  {
    head: "Expert-Led Insights & Holistic Learning",
    des: "Offering expert-led discussion panels and meaningful interactions to provide a comprehensive understanding of diverse industry and academic needs. Through scenario-based discussions, participants gain valuable insights and a deeper learning experience.",
    img: "camEng.png",
  },
  {
    head: "Innovative Practices for Future Growth",
    des: "Encouraging the adoption of innovative practices to meet the evolving demands of the academic and industrial landscape. By integrating real-world perspectives, participants are empowered to navigate industry changes and drive impactful solutions.",
    img: "holPersp.png",
  },
];

const speakers = [
  {
    name: "Dr.Sudeb Datta",
    description: "Technical Director water and gas utilities, M.N. Dastur",
    img: "sudebDutta.jpeg",
  },
  {
    name: "Amar Misra",
    description: "Chief Shared Services, Tata Steel",
    img: "amar.jpeg",
  },
  {
    name: "Arkadeb Banerjee",
    description: "Scientist F at DRDO ",
    img: "arkadeep.jpeg",
  },
  {
    name: "Swapan Kumar Mondal",
    description: "Top Educator at Unacademy",
    img: "skMondal.jpeg",
  },
  {
    name: "Ramanuj Bhattacharya",
    description: "Joint General Manager, MoD, Government of India",
    img: "ramanuj.jpeg",
  },

  {
    name: "Sarbajit Rakshit",
    description: "Master Innovator At IBM",
    img: "rakshit.jpeg",
  },
  /* {
    name: "Debajyoti Dhar",
    description: "Deputy Director, Space Application Center, Ahmedabad (ISRO)",
    img: "debojyothidhar.jpg",
  },
  {
    name: "Sarojkant Singh",
    description:
      "Associate Vice President,Business Strategy, Power Plant Engineers Ltd.",
    img: "Twoo.jpeg",
  },
  {
    name: "Kousik Maiti",
    description: "Director, PWC",
    img: "Threee.jpeg",
  },
  {
    name: "Dr.Sudeb Datta",
    description: "Technical Director water and gas utilities, M.N. Dastur",
    img: "fourrrr.jpeg",
  },
  {
    name: "Mr. Tatababu Botsa",
    description:
      "Deputy General Manager, Garden Reach Shipbuilders & Engineers Ltd.",
    img: "MrTatababu.jpg",
  },
  {
    name: "Mr. Abhijit Paliya",
    description:
      "Vice President (Operations)and Plant Head, Lalbaba Engineering Group",
    img: "MrAbhijit.jpg",
  },
  {
    name: "Mr. Sambhu Prasad Adak",
    description: "Partner, Purahsara Strategist LLP",
    img: "MrSambhu.jpeg",
  },
  {
    name: "Mr. Deepayan Das",
    description: "Managing Director, Mahr Metrology Pvt Ltd",
    img: "MrDeepayan.jpeg",
  },
  {
    name: "Mr. Avelo Roy",
    description: "Managing Director, Kolkata Ventures",
    img: "MrAvelo.jpg",
  }, */
];

export default function IAMPage() {
  return (
    <main className="bg-black min-h-screen relative overflow-hidden">
      
      <div className="relative z-10">
        <section >
      <div className="mt-30 ml-2">
        <CarouselComp /></div>
      <div className="relative z-10 mx-auto max-w-screen-xl px-6 pt-12 md:pt-8 text-center">
        <h1
          className="
      font-display
      font-bold
      text-xl
      sm:text-2xl
      md:text-3xl
      tracking-widest
      text-gray-100
      whitespace-nowrap
    "
        >
          INDUSTRY–ACADEMIA MEET
        </h1>

        <p className="font-body mt-3 text-sm sm:text-base md:text-lg tracking-wide text-gray-400">
          12 February 2025 • 9:00 AM – 6:00 PM
        </p>
      </div>
      <div className="relative z-10 mx-auto mt-8 max-w-screen-xl px-6 pt-16 flex flex-col gap-10">
        {/* Intro Section 1 */}
        <div>
          <h2
            style={{
              fontSize: "2rem",
              fontFamily: "Bebas Neue, sans-serif",
              justifyContent: "flex-start",
              marginBottom: "16px",
            }}
          >
            <span style={{ color: "white" }}>
              {">>"}Academia meets Industry
            </span>{" "}
            <span style={{ color: "#ff7000" }}>- Insights that matter</span>
          </h2>
          <p
            style={{
              color: "#fff",
              fontSize: "1rem",
              lineHeight: "1.6",
              fontFamily: "Roboto",
              letterSpacing: "1px",
              textAlign: "justify",
              padding: "15px",
            }}
          >
            The Industrial Academia Meet in IMPETUS is designed to establish a
            collaborative platform for meaningful engagement between industry
            and academia. This initiative emphasizes the exchange of knowledge
            and innovative ideas, fostering thought-provoking discussions around
            best practices, employability trends across diverse engineering
            domains, and strategies to identify and nurture talent during campus
            recruitment. It also seeks to bridge the gap between academic
            learning and industrial expectations, ensuring students are equipped
            with real-world insights and skills. With a lineup of esteemed
            speakers from leading industries, this event promises to be a
            treasure trove of wisdom and inspiration. Get ready to meet the
            visionaries who will ignite your curiosity and redefine your
            perspective!
          </p>
        </div>

        {/* Intro Section 2 */}
        <div>
          <h2
            style={{
              color: "rgb(24, 66, 255)",
              fontSize: "2rem",
              fontFamily: "Bebas Neue, sans-serif",
              marginBottom: "16px",
              textAlign: "left",
            }}
          >
            <span style={{ color: "white" }}>
              {">>"}From Innovation to Interaction
            </span>{" "}
            <span style={{ color: "#ff7000" }}>
              {" "}
              – Dive Deep with Industry Experts
            </span>
          </h2>
          <p
            style={{
              color: "#fff",
              fontSize: "1rem",
              lineHeight: "1.6",
              fontFamily: "Roboto, sans-serif",
              letterSpacing: "1px",
              textAlign: "left",
              padding: "15px",
            }}
          >
            We are honored to host a distinguished panel of speakers at the
            Industry-Academia Meet, bringing together leading industry experts
            and renowned academicians to share their insights, experiences, and
            expertise.
          </p>
        </div>

        {/* Speakers Grid */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "75px",
          }}
        >
          <p
            style={{
              color: "#fff",
              fontSize: "2.5rem",
              lineHeight: "1.5",
              textAlign: "center",
              fontFamily: "Bebas Neue, sans-serif",
              paddingTop: "15px",
            }}
          >
            Past Speakers
          </p>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center"
            style={{
              maxWidth: "850px",
              margin: "0 auto",
              gap: "100px",
              marginTop: "-60px",
              marginBottom: "150px",
            }}
          >
            {speakers.map((x) => {
              return (
                <div
                  key={x.name}
                  className="w-full max-w-sm rounded-lg shadow"
                >
                  <div className="flex justify-end px-4 pt-4"></div>
                  <div className="flex flex-col items-center ">
                    <Image
                      className="rounded-full"
                      src={"/images/" + x.img}
                      alt="speaker1"
                      width="250"
                      height="250"
                    />
                    <h5
                      className="mb-1 text-xl font-medium text-gray-900 dark:text-white"
                      style={{ marginTop: "16px" }}
                    >
                      {x.name}
                    </h5>
                    <span
                      className="text-md text-center text-gray-400"
                      style={{ width: "100%" }}
                    >
                      {x.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Aim Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "50px",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontFamily: "Bebas Neue, sans-serif",
              marginBottom: "16px",
              textAlign: "left",
              color: "white",
            }}
          >
            {">>"}Our Aim at{" "}
            <span style={{ color: "#02A5EE" }}>IMPETUS 9.0</span>
          </h2>

          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              marginTop: "-40px",
              padding: "20px",
            }}
            className="flex flex-col sm:flex-row gap-5"
          >
            {/* CSS for hover effects on Aim Cards */}
            <style jsx>{`
              .aim-card {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 10px;
                box-shadow: 0 2px 6px rgba(255, 255, 255, 0.2);
                padding: 15px;
                text-align: center;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                height: 200px;
                overflow: hidden;
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              }
              .aim-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 6px 12px rgba(255, 255, 255, 0.3);
                height: auto;
              }
              .aim-card .description {
                opacity: 0;
                max-height: 0;
                overflow: hidden;
                margin-top: 8px;
                color: #ddd;
                font-size: 0.9rem;
                line-height: 1.4;
                font-family: Roboto, sans-serif;
                letter-spacing: 0.5px;
                transition: opacity 0.3s ease, max-height 0.3s ease;
              }
              .aim-card:hover .description {
                opacity: 1;
                max-height: 200px;
              }
            `}</style>

            {aim.map((x, index) => (
              <div key={index} className="aim-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    filter: "grayscale(1)",
                    width: "55px",
                  }}
                >
                  <Image
                    src={"/images/" + x.img}
                    alt="Icons"
                    width="80"
                    height="80"
                    style={{ borderRadius: "6px" }}
                  />
                </div>

                <div
                  style={{
                    marginTop: "12px",
                    fontFamily: "Nunito",
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  {x.head}
                </div>

                <div className="description">{x.des}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Timelines Section */}
        <div
          className="flex flex-col md:flex-row justify-center gap-50 md:gap-[175px]"
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontFamily: "Bebas Neue, sans-serif",
                marginBottom: "16px",
                textAlign: "left",
              }}
            >
              {">>"} <span style={{ color: "#02A5EE" }}>Takeaways </span>
              <span style={{ color: "white" }}>for the corporate</span>
            </h2>
            <TakeawayTimeline />
          </div>

          <div
            className="flex flex-col mt-[-100px] md:mt-0"
          >
            <h2
              style={{
                fontSize: "2rem",
                fontFamily: "Bebas Neue, sans-serif",
                marginBottom: "16px",
                textAlign: "right",
              }}
            >
              <span style={{ color: "#02A5EE" }}>Benifits</span>{" "}
              <span style={{ color: "white" }}>for the institution {"<<"}</span>
            </h2>
            <BenifitsTimeline />
          </div>
        </div>
      </div>
    </section>
    </div>
    </main>
  );
}