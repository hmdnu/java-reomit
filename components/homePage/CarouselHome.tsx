"use client";
import { carouselHome } from "@/constant";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CarouselHome() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mt-20">
      <Carousel
        removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}
        infinite={true}
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={5000}
        showDots={true}
        draggable={false}
      >
        {carouselHome.map((carousel, i) => (
          <Image
            key={i}
            src={carousel.img}
            alt="banner"
            className={`${carousel.img} bg-contain w-full flex items-center`}
          />
        ))}
      </Carousel>
    </div>
  );
}
