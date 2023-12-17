"use client";
import { clock, location } from "@/public";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { EventCardTypes } from "@/types";

export default function EventCard({ key, event }: { key: number; event: EventCardTypes }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/kegiatan/${event.title}`)}
      key={key}
      className="w-[306px] h-fit bg-themeGray rounded-[20px] shadow-xl hover:bg-[#545454] cursor-pointer"
    >
      <Image src={event.imgPath} alt="event card" className="rounded-[20px]" />
      <div className="py-7 px-5 flex flex-col gap-[5px] justify-center">
        <h1 className="text-h6 font-bold text-white">{event.title}</h1>
        <div className="flex gap-[10px]">
          <Image src={clock} alt="clock" width={14} />
          <div className="text-fontGray text-h7 font-medium flex gap-3">
            <h1>{event.date}</h1>
            <span>|</span>
            <h1>{event.time}</h1>
          </div>
        </div>
        <div className="text-fontGray text-h7 font-medium flex gap-3 items-start">
          <Image src={location} width={12} alt="location" className="mt-[3px]" />
          <p>{event.location}</p>
        </div>
      </div>
    </div>
  );
}
