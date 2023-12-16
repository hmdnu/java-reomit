import { location, clock } from "@/public";
import { carousel3 } from "@/public";
import Image from "next/image";

export default function EventCard({ key }: { key: number }) {
  return (
    <div key={key} className="w-[306px] h-fit bg-themeGray rounded-[20px] shadow-xl hover:bg-[#545454]">
      <Image src={carousel3} alt="event card" className="rounded-[20px]" />
      <div className="py-7 px-5 flex flex-col gap-[5px] justify-center">
        <h1 className="text-h6 font-bold text-white">Festival Budaya Nusantara (FBN) VI Tahun 2023</h1>
        <div className="flex gap-[10px]">
          <Image src={clock} alt="clock" width={14} />
          <div className="text-fontGray text-h7 font-medium flex gap-3">
            <h1>10 Des 2023</h1>
            <span>|</span>
            <h1>09.00 WIB</h1>
          </div>
        </div>
        <div className="text-fontGray text-h7 font-medium flex gap-3 items-start">
          <Image src={location} width={12} alt="location" className="mt-[3px]" />
          <p>Gedung Graha Cakrawala, Universitas Negeri Malang, Sumbersari, Kec. Lowokwaru </p>
        </div>
      </div>
    </div>
  );
}
