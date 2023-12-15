import { FilterDropdownEvent } from "@/components";

export default function page() {
  return (
    <section className="mt-32 h-screen w-[75%] m-auto">
      <div>
        <div className="text-fontPrimary flex gap-16 items-center">
          <h1 className="text-h2 font-bold ">Event</h1>
          {/* dropdown */}
          <FilterDropdownEvent />
        </div>
      </div>
    </section>
  );
}
