"use client";

import { Box } from "@mui/system";
import Image from "next/image";
// import Carousel  from "react-elastic-carousel";
import ReactElasticCarousel from "react-elastic-carousel";

import { useRef } from "react";
import { Typography } from "@mui/material";

export default function CarouselComp() {
  // type CarouselHandle = {
  //   goTo: (index: number) => void;
  // };

// const carousel = useRef<any>(null);
const carousel = useRef<CarouselRef | null>(null);
const Carousel = (props: CarouselProps) => {
  return <ReactElasticCarousel {...props} />;
};


type CarouselProps = any;        // relax props typing
type CarouselRef = {
  goTo: (index: number) => void; // what you actually use
};


  const handleEnd = ({ index }: { index: number }) => {
    if (index === 5) {
      setTimeout(() => {
        carousel.current?.goTo(0);
      }, 1000);
    }
  };

  const urls = [
    "/iam/iam1.jpg",
    "/iam/iam2.jpg",
    "/iam/iam3.jpg",
    "/iam/iam4.jpg",
    "/iam/iam5.jpg",
    "/iam/iam6.jpg",
    // "/images/iam/caraousel/img7.jpg",
    // "/images/iam/caraousel/img8.jpg",
    // "/images/iam/caraousel/img9.jpg",
  ];

  const styles = {
    position: "relative",
    width: "100vw",
    aspectRatio: {
      lg: "2/1",
      md: "1/1",
      sm: "4/5",
      xs: "4/5",
    },
    maxWidth: "800px",
    maxHeight: "90vh",
  };

  const styles2 = {
    width: "100vw",
    mt: "120px",
  };

  // return (
  //   <Box sx={styles2} className="center1">
  //     <Carousel
  //       ref={carousel}
  //       showArrows={false}
  //       enableAutoPlay={true}
  //       onNextEnd={handleEnd}
  //       autoPlaySpeed={3500}
  //       enableMouseSwipe={false}
  //       pagination={false}
  //     >
  //       {urls.map((url) => (
  //         <Box key={url} sx={styles}>
  //           <Image
  //             src={url}
  //             alt="iamIMG"
  //             layout="fill"
  //             objectFit="cover"
  //             key={url}
  //           />
  //         </Box>
  //       ))}
  //     </Carousel>
  //   </Box>
  // );

  return (
  <Box sx={styles2} className="center1">
    <Carousel
      ref={carousel as any}          // ref forwarded as any
      showArrows={false}
      enableAutoPlay={true}
      onNextEnd={handleEnd}
      autoPlaySpeed={3500}
      enableMouseSwipe={false}
      pagination={false}
    >
      {urls.map((url) => (
        <Box key={url} sx={styles}>
          <Image
            src={url}
            alt="iamIMG"
            layout="fill"
            objectFit="cover"
          />
        </Box>
      ))}
    </Carousel>
  </Box>
);

}
