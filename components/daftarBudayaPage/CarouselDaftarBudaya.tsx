"use client";
import { bujangGanong, nyadran, tariMuang } from "@/public/images/galeri";
import Image from "next/image";
import Carousel from "react-multi-carousel";

export default function CarouselDaftarBudaya() {
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

  const image = [tariMuang, bujangGanong, nyadran];

  return (
    <Carousel
      removeArrowOnDeviceType={["tablet", "mobile"]}
      infinite={true}
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={5000}
      showDots={true}
      draggable={false}
    >
      {image.map((img, i) => (
        <Image key={i} src={img} alt="image" className="w-full h-[360px] object-cover rounded-[20px]" />
      ))}
    </Carousel>
  );
}
