"use client";

import React from "react";
import { gallery } from "@/constant";
import Image, { StaticImageData } from "next/image";
import { iconDownload } from "@/public";
import { Tradisi, Kesenian, Kuliner } from "@/components/galeriPage/budaya";
import { usePathname } from "next/navigation";

interface imgProps {
  img: StaticImageData;
  altImg: string;
}

export default function Page({ params }: { params: { detail: string } }) {
  const pathname = usePathname();
  const imgName = params.detail[1];

  const kuliner = gallery.kuliner?.find((e) => e.altImg === imgName);
  const kesenian = gallery.kesenian?.find((e) => e.altImg === imgName);
  const tradisi = gallery.tradisi?.find((e) => e.altImg === imgName);

  const images: imgProps[] = [kuliner, kesenian, tradisi]
    .filter((e): e is imgProps => !!e)
    .map((item) => item as imgProps);

  return (
    <section className="w-[80%] m-auto mt-[100px]">
      <div className="flex flex-col justify-center items-center">
        {images.map((img, i) => (
          <div key={i} className="relative">
            <Image src={img?.img} alt={img?.altImg} className="w-auto h-auto rounded-[20px]" />
            <button className="w-[138px] h-[43px] bg-themeRed text-white text-h6 flex justify-center items-center gap-2 rounded-[20px] font-medium absolute bottom-7 right-7">
              <Image src={iconDownload} alt="icon download" width={18} />
              <h1> Unduh</h1>
            </button>
          </div>
        ))}
      </div>
      <div className="mt-24">
        <h1 className="text-center font-semibold text-h4 mb-10">Lihat Yang Lain</h1>
        {pathname === "/galeri/kuliner/" + imgName && <Kuliner />}
        {pathname === "/galeri/tradisi/" + imgName && <Tradisi />}
        {pathname === "/galeri/kesenian/" + imgName && <Kesenian />}
      </div>
    </section>
  );
}
