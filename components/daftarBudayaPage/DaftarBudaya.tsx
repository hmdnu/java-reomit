import CarouselDaftarBudaya from "./CarouselDaftarBudaya";
import FilterDaftarBudaya, { MenuKategoriBudaya } from "./FilterDaftarBudaya";

export default function DaftarBudaya() {
  return (
    <div>
      <div className="grid sm:flex sm:gap-5 md:flex gap-8 main-layout">
        <div>
          <h1 className="font-semibold text-h5 md:text-h3">Jelajahi Budaya</h1>
          <p className="text-h7 mt-2">
            Pilih kabupaten/kota untuk menemukan<br></br> warisan budaya di Jawa Timur
          </p>
        </div>
        <div className="flex gap-5">
          <FilterDaftarBudaya />
          <button className="w-[100px] md:w-[135px] h-[40px] md:h-[48px] rounded-[6px] bg-themeRed font-medium text-h7 md:text-h5 text-white px-[13px] py-[10px]">
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
