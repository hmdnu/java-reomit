import { eventCardDetail } from "@/constant";
import { EventDetailSeeMore, EventDetailShedule, AsideEventDetail } from "@/components";

interface props {
  params: {
    title: string;
  };
}

export function generateMetadata({ params }: props) {
  const title = params.title.split("%20").join(" ");

  return {
    title,
  };
}

export default function page({ params }: { params: { title: string } }) {
  const eventTitle = params.title.split("%20").join(" ");

  const event = eventCardDetail.find((event) => event.title === eventTitle);

  return (
    <section className="w-[80%] mt-[100px] m-auto">
      <div className={`bg-carousel3 rounded-[20px] bg-center w-full h-[478px] bg-cover bg-no-repeat relative`}>
        <h1 className="bg-white text-fontPrimary w-fit px-6 py-2 font-bold text-h6 bottom-[30px] left-[34px] absolute rounded-[8px]">
          {event?.isGratis ? "Gratis" : "Berbayar"}
        </h1>
      </div>
      {/* info of event */}
      <div className="mt-[40px] flex justify-between">
        {/* title desc etc */}
        <div className="w-[60%]">
          <div className="text-h3 font-semibold text-themeRed flex gap-5">
            <h1>{event?.date}</h1>
            <span>|</span>
            <h1>{event?.time} WIB</h1>
          </div>
          {event ? <EventDetailSeeMore event={event} /> : null}
          {/* schedule etc */}
          {event ? <EventDetailShedule event={event} /> : null}
        </div>

        {/* aside */}
        <AsideEventDetail />
      </div>
    </section>
  );
}
