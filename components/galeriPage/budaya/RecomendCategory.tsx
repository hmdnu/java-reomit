"use client";
import { usePathname } from "next/navigation";
import { Tradisi, Kesenian, Kuliner } from "@/components/galeriPage/budaya";

export default function RecomendCategory({ imgName }: { imgName: string }) {
  const pathname = usePathname();
  return (
    <div className="w-[80%] mx-auto mt-24">
      <h1 className="text-center font-semibold text-h4 mb-10">Lihat Yang Lain</h1>
      {pathname === "/galeri/kuliner/" + imgName && <Kuliner />}
      {pathname === "/galeri/tradisi/" + imgName && <Tradisi />}
      {pathname === "/galeri/kesenian/" + imgName && <Kesenian />}
    </div>
  );
}
