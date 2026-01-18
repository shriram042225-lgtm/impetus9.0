"use client";

import { useEffect, useRef, useState } from "react";
import AboutImpetus from "./components/aboutImpetus";
import AboutDepartmentSME from "./components/aboutSME";
import AboutIIEST from './components/aboutIIEST'

export default function AboutPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [muted] = useState(true);
  const [propertyValue, setPropertyValue] =
    useState<React.CSSProperties["position"]>("absolute");

  const [topValue, setTopValue] = useState("45vh");
  const [heightValue, setHeightValue] = useState("50%");

  // Note: This style object is defined but was not used in the original JSX return.
  // Kept here to preserve logic structure.
  const videoStyle: React.CSSProperties = {
    position: propertyValue,
    top: topValue,
    width: "100%",
    height: heightValue,
    objectFit: "cover",
    zIndex: 1,
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 900) {
        setPropertyValue("relative");
        setTopValue("0");
        setHeightValue("40vw");
        videoRef.current?.pause();
      } else {
        setPropertyValue("absolute");
        setTopValue("45vh");
        setHeightValue("50%");
        videoRef.current?.play().catch(() => {});
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      videoRef.current?.pause();
    };
  }, []);

  return (
    <div>
      {/* <div style={{ height: "100vh", position: "relative", overflow: "hidden" }}>
        <video
          ref={videoRef}
          muted
          autoPlay
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "80%",
            objectFit: "cover",
          }}
        >
          <source src="/images/about/teaser.mp4" type="video/mp4" />
        </video>
      </div> */}
      <AboutIIEST />
      <AboutImpetus />
      <AboutDepartmentSME />
      <p className="text-center text-gray-500 italic py-2">
        Engineering the future, rooted in legacy.
      </p>
    </div>
  );
}