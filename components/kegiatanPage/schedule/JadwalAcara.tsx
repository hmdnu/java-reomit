import { EventCardDetailTypes } from "@/types";

export default function JadwalAcara({ event }: { event: EventCardDetailTypes }) {
  const lastIndex = event.eventShedule.length - 1;

  return (
    <div className="mt-[43px]">
      <h1 className="text-h4 font-medium">Jadwal Acara</h1>
      <div className="mt-[35px] pl-3">
        {event.eventShedule.map((event, i) => (
          <div key={i} className="flex gap-5">
            {/* circle */}
            <div
              className={`w-[40px] h-[40px] bg-[#D9D9D9] rounded-full relative after:content-[''] after:w-[1px] after:h-[34px] after:absolute after:bottom-[-34px] after:left-[50%] after:bg-[#C0C0C0] mb-[21px] ${
                i === lastIndex && "after:opacity-0"
              }`}
            ></div>
            <div className="text-fontBlue">
              <h1 className="text-h5 font-bold">{event.name}</h1>
              <h2 className="text-h7 font-normal">
                {event.startTime} - {event.endTime} WIB
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
