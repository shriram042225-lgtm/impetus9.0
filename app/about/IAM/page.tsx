"use client";

import { Typography, useTheme } from "@mui/material";
import { Box, display } from "@mui/system";
import CarouselComp from "../components/CarouselComp";
import ContactCard from "../components/ContactCard";

import Image from "next/image";
import SponsorCard from "../components/SponsorCard";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import TakeawayTimeline from "../components/TkeawayTimeline";
import BenifitsTimeline from "../components/BenifitsTimeline";


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
const speakersNew = [
  {
    name: "Dr.Sudeb Datta",
    description: "Technical Director water and gas utilities, M.N. Dastur",
    img: "iam/sudebDutta.jpeg",
  },
  {
    name: "Amar Misra",
    description: "Chief Shared Services, Tata Steel",
    img: "iam/amar.jpeg",
  },
  {
    name: "Arkadeb Banerjee",
    description: "Scientist F at DRDO ",
    img: "iam/arkadeep.jpeg",
  },
  {
    name: "Swapan Kumar Mondal",
    description: "Top Educator at Unacademy",
    img: "iam/skMondal.jpeg",
  },
  {
    name: "Ramanuj Bhattacharya",
    description: "Joint General Manager, MoD, ‎ Government of India",
    img: "iam/ramanuj.jpeg",
  },

  {
    name: "Sarbajit Rakshit",
    description: "Master Innovator At IBM",
    img: "iam/rakshit.jpeg",
  },
  /* {
    name:"",
    description:"",
    img:"",
  } */
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
    description: "Joint General Manager, MoD, ‎ Government of India",
    img: "ramanuj.jpeg",
  },

  {
    name: "Sarbajit Rakshit",
    description: "Master Innovator At IBM",
    img: "rakshit.jpeg",
  },
  {
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
    description: "Managing Director, Kolkata Ventures",
    img: "MrAvelo.jpg",
  },
];
export default function IAMPage() {
  const theme = useTheme();

  const styles = {
    width: "100vw",
    ">*": {
      zIndex: "3",
    },
    h1: {
      m: "50px 0",
      fontSize: "60px",
      textAlign: "center",
    },
    h2: {
      mt: "20px",
      mb: "15px",
    },
    ".content": {
      zIndex: "3",
      maxWidth: "1000px",
      mt: "30px",
      p: {
        textIndent: "50px",
        textAlign: "justify",
        margin: "30px",
      },
    },
    ".contact": {
      width: "100%",
      maxWidth: "1000px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      mb: "50px",
    },
    ".benefits": {
      maxWidth: "1000px",
      mt: "30px",
      ml: "10px",
      mr: "10px",
      div: {
        margin: "60px 0",
      },
    },
    ".pattern": {
      display: "flex",
      maxWidth: "90vw",
    },
    ".patternR": {
      maxWidth: "90vw",
      display: "flex",
      flexDirection: "row-reverse",
      flexGrow: "1",
    },
    ".pattern, .patternR": {
      alignItems: "center",
      justifyContent: "center",
    },
    ".patimg, .pattext": {
      width: "600px",
      height: "auto",
      maxWidth: "80vw",
      maxHeight: "600px",
      margin: "50px",
    },
    ".pattext": {
      textAlign: "justify",
    },
    ".pattext h3": {
      margin: "30px 0",
      fontSize: "32px",
      fontWeight: "600px",
    },
    [theme.breakpoints.down("md")]: {
      ".patimg, .pattext": {
        margin: "0",
      },
    },
    ".bulletArrow li": {
      textIndent: "0",
      paddingLeft: "40px",
    },
    ".bulletBox": {
      position: "relative",
    },
  };
  const person = {
    person1: {},
    person2: {},
  };

  const sponsor = {
    sponsor1: { imgname: "IOCL.jpg", link: "https://iocl.com/" },
    sponsor2: { imgname: "lal.jpeg", link: "https://lalbabagroup.com/" },
  };
  const sponsorNew = {
    sponsor1: { imgname: "", link: "" },
    sponsor2: { imgname: "", link: "" },
  };
  return (
    <section className="bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-.svg')]">
      <CarouselComp />

      <div className="pt-8 mt-4 px-4 mx-auto max-w-screen-xl text-center  z-10 relative">
        <h1
          className="text-2xl md:text-3xl font-extrabold tracking-tight leading-none text-gray-50 md:text-4xl lg:text-5xl"
          style={{
            fontSize: "4rem",
            fontFamily: "Bebas Neue",
            letterSpacing: "2px",
          }}
        >
          INDUSTRY-ACADEMIA MEET
        </h1>
        <p
          className=" text-lg font-normal text-gray-400 lg:text-xl sm:px-16 lg:px-48 "
          style={{
            fontSize: "1.25rem",
            // color: "#fff",
            lineHeight: "1.75rem",
            fontFamily: "Bebas Neue,sans-serif",
            letterSpacing: "2px",
            paddingTop: "0.5rem",
          }}
        >
          9th February, 2025 - 9AM to 6PM
          {/* Venue- Institute Hall, IIEST Shibpur. */}
        </p>
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          pt: 8,
          mt: 4,
          px: 4,
          mx: "auto",
          maxWidth: "1200px",
          // textAlign: "left",
          zIndex: 10,
          position: "relative",
        }}
      >
        {/*  <h1
          className="text-3xl md:text-4xl py-1 font-bold"
          style={{
            textAlign: "center",
            marginTop: "10px",
            fontFamily: "Rowdies",
            marginBottom: "-50px",
          }}
        >
          Sponsors
        </h1>
        <Box className="cards" style={{ width: "100%" }}>
          <SponsorCard sponsor={sponsorNew.sponsor1} />
          <SponsorCard sponsor={sponsorNew.sponsor2} />
        </Box> */}
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: "2rem",
              fontFamily: "Bebas Neue, sans-serif",
              justifyContent: "flex-start",
              mb: 2,
            }}
          >
            <span style={{ color: "white" }}>
              {">>"}Academia meets Industry
            </span>{" "}
            <span style={{ color: "#ff7000" }}>- Insights that matter</span>
          </Typography>
          <Typography
            sx={{
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
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h2"
            sx={{
              color: "rgb(24, 66, 255)",
              fontSize: "2rem",
              fontFamily: "Bebas Neue, sans-serif",
              mb: 2,
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
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "1rem",
              lineHeight: "1.6",
              fontFamily: "Roboto, sans-serif",
              letterSpacing: "1px",
              textAlign: "left",
              // textAlign: "justify",
              padding: "15px",
            }}
          >
            We are honored to host a distinguished panel of speakers at the
            Industry-Academia Meet, bringing together leading industry experts
            and renowned academicians to share their insights, experiences, and
            expertise.
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "2.5rem",
              lineHeight: "1.5",
              textAlign: "center",
              fontFamily: "Rowdies",
              paddingTop: "15px",
              marginTop: "2em",
            }}
          >
            Speakers
          </Typography>
        </Box>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center"
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            gap: "100px",
            marginTop: "-60px",
          }}
        >
          {speakersNew.map((x) => {
            return (
              <div key={x.name} className="w-full max-w-sm  rounded-lg shadow ">
                <div className="flex justify-end px-4 pt-4"></div>
                <div className="flex flex-col items-center ">
                  <Image
                    className="rounded-full "
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
                    className="text-md  text-center text-gray-400"
                    style={{ width: "80%" }}
                  >
                    {x.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <Box
          sx={{
            display: "flex",

            flexDirection: "column",
            gap: "50px",
          }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              fontFamily: "Bebas Neue, sans-serif",
              mb: 2,
              textAlign: "left",
              color: "white",
            }}
          >
            {">>"}Our Aim at{" "}
            <span style={{ color: "#02A5EE" }}>IMPETUS 9.0</span>
          </Typography>
          <Box
            sx={{
              maxWidth: "900px",
              margin: "0 auto",
              marginTop: "-40px",
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              gap: "20px",
              padding: "20px",
            }}
          >
            {aim.map((x, index) => (
              <Box
                key={index}
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "10px",
                  boxShadow: "0 2px 6px rgba(255, 255, 255, 0.2)",
                  padding: "15px",
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  height: "200px",
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 6px 12px rgba(255, 255, 255, 0.3)",
                    height: "auto", // Expands card on hover
                  },
                  "&:hover .description": {
                    opacity: 1,
                    maxHeight: "200px",
                    transition: "opacity 0.3s ease, max-height 0.3s ease",
                  },
                }}
              >
                <Box
                  sx={{
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
                </Box>

                <Typography
                  sx={{
                    marginTop: "12px",
                    fontFamily: "Nunito",
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  {x.head}
                </Typography>

                {/* Description hidden by default, appears on hover */}
                <Typography
                  className="description"
                  sx={{
                    marginTop: "8px",
                    color: "#ddd",
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    fontFamily: "Roboto, sans-serif",
                    letterSpacing: "0.5px",
                    opacity: 0,
                    maxHeight: 0,
                    overflow: "hidden",
                  }}
                >
                  {x.des}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "center",
            gap: "175px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: "2rem",
                fontFamily: "Bebas Neue, sans-serif",
                mb: 2,
                textAlign: "left",
              }}
            >
              {">>"} <span style={{ color: "#02A5EE" }}>Takeaways </span>
              <span style={{ color: "white" }}>for the corporate</span>
            </Typography>
            <TakeawayTimeline />
          </div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: { xs: "-100px", md: "0px" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: "2rem",
                fontFamily: "Bebas Neue, sans-serif",
                mb: 2,
                textAlign: "right",
              }}
            >
              <span style={{ color: "#02A5EE" }}>Benifits</span>{" "}
              <span style={{ color: "white" }}>for the institution {"<<"}</span>
            </Typography>
            <BenifitsTimeline />
          </Box>
        </Box>

        <h1
          className="text-3xl md:text-4xl py-1 font-bold"
          style={{
            textAlign: "center",
            marginTop: "10px",
            fontFamily: "Rowdies",
            marginBottom: "-50px",
          }}
        >
          Past Sponsors
        </h1>
        <Box className="cards" style={{ width: "100%" }}>
          <SponsorCard/>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              sm: "column",
              xs: "column",
              gap: "75px",
            },
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "2.5rem",
              lineHeight: "1.5",
              textAlign: "center",
              fontFamily: "Rowdies",
              paddingTop: "15px",
            }}
          >
            Past Speakers
          </Typography>
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
                  className="w-full max-w-sm  rounded-lg shadow "
                >
                  <div className="flex justify-end px-4 pt-4"></div>
                  <div className="flex flex-col items-center ">
                    <Image
                      className="rounded-full "
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
                      className="text-md  text-center text-gray-400"
                      style={{ width: "100%" }}
                    >
                      {x.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Box>
      </Box>
    </section>
  );
}
