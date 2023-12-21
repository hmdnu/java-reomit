import React from "react";
import { gallery } from "@/constant";

export default function page({ params }: { params: { img: string } }) {
  const imgName = params.img;

  const kuliner = gallery[0].kuliner?.find((e) => e.altImg === imgName);
  const kesenian = gallery[1].kesenian?.find((e) => e.altImg === imgName);
  const tradisi = gallery[2].tradisi?.find((e) => e.altImg === imgName);

  const img = [kuliner, kesenian, tradisi].filter((e) => e !== undefined);

  return (
    <div className="">
      <div></div>
    </div>
  );
}
