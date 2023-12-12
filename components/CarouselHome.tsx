"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselHome } from "@/constant";

export default function CarouselHome() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    <div>
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
          <div key={i} className={`bg-${carousel.name} bg-cover w-full h-screen flex items-center`}>
            <div className="w-[80%] m-auto">
              <div className="w-[55%]">
                <h1 className="text-h2 font-bold mb-5">{carousel.heading}</h1>
                <p className="text-h5 font-normal">{carousel.paragraph}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
