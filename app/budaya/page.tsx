import { BudayaCategory } from "@/components";
import { FilterButton, FilterDropdown } from "@/components/FilterDropdown";
import CarouselDaftarBudaya from "@/components/daftarBudayaPage/CarouselDaftarBudaya";

export const metadata = {
  title: "Budaya",
};

export default function DaftarBudaya() {
  return (
    <section className="mt-28 sm:mt-32 w-[88%] m-auto">
      <div className="grid sm:flex items-center gap-8 justify-between mb-10 ">
        <div>
          <h1 className="font-semibold sm:text-h3">Jelajahi Budaya</h1>
          <p className="text-h6 mt-2 w-[90%] sm:w-[70%]">
            Pilih kabupaten/kota untuk menemukan warisan budaya di Jawa Timur
          </p>
        </div>
        <div className="flex items-center gap-3 sm:gap-8">
          <FilterDropdown classValue="py-[10px] px-[15px] text-h6" title={"Kabupaten/Kota"}>
            <FilterButton classValue="hover:bg-slate-500">Button 1</FilterButton>
            <FilterButton classValue="hover:bg-slate-500">Button 1</FilterButton>
            <FilterButton classValue="hover:bg-slate-500">Button 1</FilterButton>
          </FilterDropdown>

          <button className="w-[125px] py-[10px] rounded-[6px] bg-themeRed font-medium text-h6 sm:text-h5 text-white">
            Cari
          </button>
        </div>
      </div>

      <CarouselDaftarBudaya />
      <BudayaCategory />
    </section>
  );
}
