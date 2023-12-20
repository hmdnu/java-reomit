import { FilterDropdown, EventCard, SearchBar } from "@/components";
import { eventCard } from "@/constant";

export const metadata = {
  title: "Kegiatan",
};

export default function page() {
  return (
    <section className="mt-32 w-[75%] m-auto">
      <div>
        <div className="text-fontPrimary flex gap-[32px] items-center">
          <h1 className="text-h2 font-bold ">Event</h1>
          <SearchBar />

          <FilterDropdown title={"Semua"}>
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
          </FilterDropdown>
        </div>

        {/* event card */}
        <div className="grid place-items-center my-10 grid-cols-3 gap-[50px]">
          {eventCard.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
