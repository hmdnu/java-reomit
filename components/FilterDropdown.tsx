"use client";
import { arrDown } from "@/public";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Props {
  title: string | number;
  children: Array<JSX.Element>;
}

export default function FilterDropdown({ title, children }: Props) {
  const [dropDown, isDropDown] = useState(false);
  const dropDownContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.onclick = (event) => {
      const target = event.target as HTMLElement;

      if (!target.matches("#drop-btn") && !target.matches("#arrow-btn")) {
        isDropDown(true);

        if (!target.matches("#container-dropdown")) {
          isDropDown(false);
        }
      }
    };
  }, []);

  return (
    <div className="relative z-10">
      <div>
        <button
          id="drop-btn"
          onClick={() => isDropDown((prev) => !prev)}
          className="border rounded-[10px] border-fontSecondary font-medium text-h5 px-[13px] py-[10px] flex gap-8 items-center"
        >
          {title}
          <Image
            id="arrow-btn"
            src={arrDown}
            alt="arrow down"
            width={12}
            className={`${dropDown ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>

      {/* dropdown container */}
      {dropDown ? (
        <div
          ref={dropDownContainer}
          id="container-dropdown"
          className="bg-white border rounded-[6px] px-[13px] py-[10px] mt-3 border-fontSecondary w-full flex gap-5 flex-col absolute"
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
