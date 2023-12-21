"use client";
import { search } from "@/public";
import Image from "next/image";

export default function SearchBarEvent({ classValue }: { classValue?: string }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex gap-[10px] border sm:rounded-[10px] rounded-[5px] border-fontSecondary items-center sm:px-[24px] px-[18px]"
    >
      <Image src={search} alt="search" className="sm:w-[20px] w-[12px]" />
      <input
        type="text"
        className="sm:text-h5 text-h7 font-medium rounded-none outline-none placeholder:text-fontPrimary sm:w-[300px] sm:h-[40px] w-[100px] h-[25px]"
        placeholder="Cari..."
      />
    </form>
  );
}
