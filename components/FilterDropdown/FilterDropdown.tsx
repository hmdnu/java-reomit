"use client";
import { arrDown } from "@/public";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Props {
  title: string | number;
  children: Array<JSX.Element> | JSX.Element;
  classValue?: string;
}

export default function FilterDropdown({ title, children, classValue }: Props) {
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
        <div
          id="drop-btn"
          onClick={() => isDropDown((prev) => !prev)}
          className={`px-[10px] py-2 sm:px-3 sm:py-[14px] sm:w-[200px] sm:justify-between cursor-pointer border rounded-[10px] border-fontSecondary font-medium flex gap-8 items-center ${classValue}`}
        >
          {title}
          <Image
            id="arrow-btn"
            src={arrDown}
            alt="arrow down"
            width={10}
            className={`${dropDown ? "rotate-180" : "rotate-0"}`}
          />
        </div>
      </div>

      {/* dropdown container */}
      {dropDown ? (
        <div
          ref={dropDownContainer}
          id="container-dropdown"
          className="w-full bg-white border rounded-[6px] px-[13px] py-[10px] mt-3 border-fontSecondary flex gap-5 flex-col absolute"
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
