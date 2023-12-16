import { FilterDropdownEvent, EventCard } from "@/components";

export default function page() {
  return (
    <section className="mt-32 w-[75%] m-auto">
      <div>
        <div className="text-fontPrimary flex gap-16 items-center">
          <h1 className="text-h2 font-bold ">Event</h1>
          {/* dropdown */}
          <FilterDropdownEvent />
        </div>

        {/* event card */}
        <div className="grid place-items-center my-10 grid-cols-3 gap-[50px]">
          {[...Array(6)].map((e, i) => (
            <EventCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
