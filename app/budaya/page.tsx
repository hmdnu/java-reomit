import CarouselDaftarBudaya from "@/components/daftarBudayaPage/CarouselDaftarBudaya";
import { FilterDropdown, BudayaCategory } from "@/components";

export const metadata = {
  title: "Budaya",
};

export default function DaftarBudaya() {
  return (
    <section className="mt-32 w-[88%] m-auto">
      <div className="flex items-center gap-8 justify-start mb-10 ">
        <div>
          <h1 className="font-semibold text-h3">Jelajahi Budaya</h1>
          <p className="text-h6 mt-2">
            Pilih kabupaten/kota untuk menemukan<br></br> warisan budaya di Jawa Timur
          </p>
        </div>
        <div className="flex items-center gap-8">
          <FilterDropdown title={"Kabupaten/Kota"}>
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
          </FilterDropdown>

          <button className="w-[135px] py-[10px] rounded-[6px] bg-themeRed font-medium text-h5 text-white">Cari</button>
        </div>
      </div>

      <CarouselDaftarBudaya />
      <BudayaCategory />
    </section>
  );
}
