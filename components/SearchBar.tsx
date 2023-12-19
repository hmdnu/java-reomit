"use client";
import { search } from "@/public";
import Image from "next/image";

export default function SearchBarEvent() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex gap-[10px] border rounded-[10px] border-fontSecondary w-[300px] h-[45px] items-center px-[24px] py-[18px]"
    >
      <Image src={search} alt="search" width={20} />
      <input
        type="text"
        className="text-h5 font-medium rounded-none outline-none placeholder:text-fontPrimary"
        placeholder="Cari..."
      />
    </form>
  );
}
