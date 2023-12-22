import { EventCard, SearchBar } from "@/components";
import { FilterButton, FilterDropdown } from "@/components/FilterDropdown";
import { eventCard } from "@/constant";

export const metadata = {
  title: "Kegiatan",
};

export default function page() {
  return (
    <section className="mt-24 max-sm:mt-40 md:mt-32 w-full md:w-[75%] m-auto">
      <div>
        <div className="text-fontPrimary m-auto mx-6 sm:mx-16 md:mx-0 sm:justify-between md:justify-start flex md:gap-[32px] items-center">
          <h1 className="hidden sm:text-h2 font-bold ">Event</h1>
          <SearchBar />

          <FilterDropdown classValue="sm:py-[7px] py-[4px] px-3 sm:text-h6 text-h7" title={"Kesenian"}>
            <FilterButton>Button 1</FilterButton>
            <FilterButton>Button 2</FilterButton>
            <FilterButton>Button 3</FilterButton>
          </FilterDropdown>
        </div>

        {/* event card */}
        <div className="grid place-items-center sm:mx-16 md:mx-0 my-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[50px]">
          {eventCard.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
