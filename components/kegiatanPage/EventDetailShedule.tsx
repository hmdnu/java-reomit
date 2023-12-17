"use client";
import { EventCardDetailTypes } from "@/types";
import { useRef, useState } from "react";
import { schedule } from "@/constant";
import { JadwalAcara, RincianTambahan, Sponsor } from "./schedule";

export default function EventDetailShedule({ event }: { event: EventCardDetailTypes }) {
  const [scheduleBtn, setScheduleBtn] = useState("Susunan Acara");
  const [activeBtn, setActiveBtn] = useState<number | null>(null);
  const buttonRef = useRef<Array<HTMLButtonElement | null>>([]);

  function handleScheduleButton(index: number) {
    setActiveBtn(index);
    setScheduleBtn(buttonRef.current[index]?.innerHTML ?? "");
  }
  return (
    <div className="mt-[77px]">
      <div className="border-b pb-[14px] border-[#C0C0C0] text-h4 font-bold text-fontBlue flex gap-[62px]">
        {schedule.map((item, i) => (
          <button
            key={i}
            ref={(e) => (buttonRef.current[i] = e)}
            onClick={() => handleScheduleButton(i)}
            className="relative focus:after:opacity-100 after:opacity-0 after:content-[''] after:bg-fontBlue after:absolute after:h-[3px] after:w-full after:bottom-[-14px] after:left-0"
          >
            {item}
          </button>
        ))}
      </div>
      <div>
        {scheduleBtn == "Susunan Acara" ? event && <JadwalAcara event={event} /> : null}
        {scheduleBtn == "Sponsor" ? <Sponsor /> : null}
        {scheduleBtn == "Rincian Tambahan" ? <RincianTambahan /> : null}
      </div>
    </div>
  );
}
