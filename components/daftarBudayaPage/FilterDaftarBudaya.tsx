"use client";
import { arrDown } from "@/public";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { DaftarKesenian, DaftarKuliner, DaftarTradisi } from "..";

export default function FilterDaftarBudaya() {
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
    <div className="relative">
      <div>
        <button
          id="drop-btn"
          onClick={() => isDropDown((prev) => !prev)}
          className="border rounded-[6px] border-fontSecondary font-medium text-h7 md:text-h5 px-[13px] py-[10px] flex gap-8 items-center"
        >
          Kabupaten / Kota
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
          <button>button 1</button>
          <button>button 2</button>
          <button>button 3</button>
        </div>
      ) : null}
    </div>
  );
}

export function MenuKategoriBudaya() {
  const Kategori = () => {
    const [kategori, setkategori] = useState("Kesenian");
    let budayaComponent;

    if (kategori == "Kesenian") {
      budayaComponent = <DaftarKesenian />;
    } else if (kategori == "Kuliner") {
      budayaComponent = <DaftarKuliner />;
    } else if (kategori == "Tradisi") {
      budayaComponent = <DaftarTradisi />;
    }

    return (
      <div className="mt-8">
        <nav className="mb-8">
          <ul className="flex gap-5 justify-center">
            <button
              onClick={() => setkategori("Kesenian")}
              className="font-semibold grid gap-5 border-b-2 cursor-pointer hover:border-red-400 focus:border-red-400"
            >
              Kesenian
            </button>
            <button
              onClick={() => setkategori("Kuliner")}
              className="font-semibold grid gap-5 border-b-2 cursor-pointer hover:border-red-400 focus:border-red-400"
            >
              Kuliner
            </button>
            <button
              onClick={() => setkategori("Tradisi")}
              className="font-semibold grid gap-5 border-b-2 cursor-pointer hover:border-red-400 focus:border-red-400"
            >
              Tradisi
            </button>
          </ul>
        </nav>
        <div>{budayaComponent}</div>
      </div>
    );
  };

  return (
    <main className="mx-10">
      <Kategori />
    </main>
  );
}
