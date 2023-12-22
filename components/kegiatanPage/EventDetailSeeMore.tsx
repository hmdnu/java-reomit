"use client";
import { EventCardDetailTypes } from "@/types";
import { useState } from "react";

export default function EventDetailSeeMore({ event }: { event: EventCardDetailTypes }) {
  const [viewSeeMore, setViewSeeMore] = useState(false);
  return (
    <div className="text-fontPrimary mt-[6px]">
      <h1 className="text-h4 md:text-h2 font-bold">{event?.title}</h1>
      {viewSeeMore ? (
        <p className="text-h7 md:text-h5 text-normal mt-[8px]">
          {event?.description}{" "}
          <span onClick={() => setViewSeeMore((prev) => !prev)} className="text-[#4196D4] cursor-pointer">
            See less...
          </span>
        </p>
      ) : (
        <p className="text-h7 md:text-h5 text-normal mt-[8px]">
          {event?.decsriptionPreview}{" "}
          <span onClick={() => setViewSeeMore((prev) => !prev)} className="text-[#4196D4] cursor-pointer">
            See more...
          </span>
        </p>
      )}
    </div>
  );
}
