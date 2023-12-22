import React from "react";
import { gallery } from "@/constant";
import Image, { StaticImageData } from "next/image";
import { iconDownload } from "@/public";
import { RecomendCategory } from "@/components/galeriPage/budaya";

interface imgProps {
  img: StaticImageData;
  altImg: string;
}

interface props {
  params: {
    detail: string;
  };
}

export function generateMetadata({ params }: props) {
  const title = decodeURIComponent(params.detail).split(",").join(" | ");

  return {
    title,
  };
}

export default function Page({ params }: { params: { detail: string } }) {
  const imgName = params.detail[1];

  const kuliner = gallery.kuliner?.find((e) => e.altImg === imgName);
  const kesenian = gallery.kesenian?.find((e) => e.altImg === imgName);
  const tradisi = gallery.tradisi?.find((e) => e.altImg === imgName);

  const images: imgProps[] = [kuliner, kesenian, tradisi]
    .filter((e): e is imgProps => !!e)
    .map((item) => item as imgProps);

  return (
    <section className="m-auto mt-[100px]">
      <div className="flex flex-col justify-center items-center w-full">
        {images.map((img, i) => (
          <div key={i} className="relative">
            <Image src={img?.img} alt={img?.altImg} className="w-auto h-auto" />
            <button className="sm:w-[138px] sm:h-[43px] w-[100px] h-[30px] bg-themeRed text-white sm:text-h6 text-h8 flex justify-center items-center gap-2 rounded-[20px] font-medium absolute sm:bottom-7 bottom-4 sm:right-7 right-4">
              <Image src={iconDownload} alt="icon download" className="sm:w-[18px] w-[12px]" />
              <h1> Unduh</h1>
            </button>
          </div>
        ))}
      </div>
      <RecomendCategory imgName={imgName} />
    </section>
  );
}
