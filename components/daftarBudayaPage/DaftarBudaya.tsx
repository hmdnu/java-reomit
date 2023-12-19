import { FilterDaftarBudaya } from "..";
import CarouselDaftarBudaya from "./CarouselDaftarBudaya";
import { MenuKategoriBudaya } from "./FilterDaftarBudaya";

export default function DaftarBudaya() {
  return (
    <div>
      <div className="flex gap-8 main-layout">
        <div>
          <h1 className="font-semibold text-h3">Jelajahi Budaya</h1>
          <p className="text-h6 mt-2">
            Pilih kabupaten/kota untuk menemukan<br></br> warisan budaya di Jawa Timur
          </p>
        </div>
        <div className="flex gap-8">
          <FilterDaftarBudaya />
          <button className="w-[135px] h-[48px] rounded-[6px] bg-themeRed font-medium text-h5 text-white px-[13px] py-[10px]">
            Cari
          </button>
        </div>
      </div>
      <div>
        <CarouselDaftarBudaya />
        <MenuKategoriBudaya />
      </div>
    </div>
  );
}
