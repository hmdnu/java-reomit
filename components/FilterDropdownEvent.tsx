"use client";
import { arrDown } from "@/public";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function FilterDropdownEvent() {
  const [dropDown, isDropDown] = useState(false);
  const dropDownContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.onclick = (event) => {
      const target = event.target as HTMLElement;

      if (!target.matches("#drop-btn")) {
        isDropDown(true);

        if (!target.matches("#container-dropdown")) {
          isDropDown(false);
        }
      }
    };
  }, []);

  function test() {
    console.log(dropDownContainer.current);
  }

  return (
    <div className="relative">
      <button
        id="drop-btn"
        onClick={() => isDropDown((prev) => !prev)}
        className="border rounded-[6px] border-fontSecondary font-medium text-h5 px-[13px] py-[10px] flex gap-8 items-center"
      >
        Semua
        <Image src={arrDown} alt="arrow down" width={12} className={`${dropDown ? "rotate-180" : "rotate-0"}`} />
      </button>

      {/* dropdown container */}
      {dropDown ? (
        <div
          ref={dropDownContainer}
          id="container-dropdown"
          className="bg-white border rounded-[6px] px-[13px] py-[10px] mt-3 border-fontSecondary w-full flex gap-5 flex-col absolute"
        >
          <button>button 1</button>
          <button>button 2</button>
          <button>button 3</button>
        </div>
      ) : null}
    </div>
  );
}
