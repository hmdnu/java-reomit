import { gallery } from "@/constant";
import { iconLaunch } from "@/public";
import Image from "next/image";
import Link from "next/link";

export default function Kesenian() {
  return (
    <div className="relative columns-2 sm:columns-2 md:columns-3 gap-5 sm:gap-8">
      {gallery[1].kesenian?.map((kesenian, i) => (
        <div key={i}>
          <div className="group relative">
            <Image src={kesenian.img} alt={kesenian.altImg} className="rounded-lg mb-5 sm:mb-8" />
            <Link
              href={`/galeri/${kesenian.altImg}`}
              className="group-hover:opacity-100 max-sm:opacity-100 opacity-0 bg-[#F4F4F4] absolute bottom-3 left-3 transition-all sm:text-h7 text-h8 text-fontPrimary rounded-[20px] font-medium px-3 py-2 flex items-center gap-2 hover:bg-[#d8d6d6]"
            >
              <Image src={iconLaunch} alt="icon launch" className="sm:w-[15px] w-[10px]" />
              <h1 className="max-sm:hidden">Lihat Gambar</h1>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
