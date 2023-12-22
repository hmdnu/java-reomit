import { AsideEventDetail, EventDetailSeeMore, EventDetailShedule } from "@/components";
import { eventCardDetail } from "@/constant";
import { iconIg, iconLink, iconWa } from "@/public";
import Image from "next/image";

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
      <div
        className={`bg-carousel3 rounded-[20px] bg-center w-full h-[300px] md:h-[478px] bg-cover bg-no-repeat relative`}
      >
        <h1 className="bg-white text-fontPrimary w-fit px-6 py-2 font-bold text-h7 md:text-h6 bottom-[30px] left-[34px] absolute rounded-[8px]">
          {event?.isGratis ? "Gratis" : "Berbayar"}
        </h1>
      </div>
      <div className="flex md:hidden mt-5 gap-[21px] justify-end">
        <h1 className="font-bold text-h7  ">Bagikan : </h1>
        <div className="flex gap-[21px]">
          <Image src={iconWa} alt="wa" width={18} />
          <Image src={iconIg} alt="wa" width={18} />
          <Image src={iconLink} alt="wa" width={18} />
        </div>
      </div>
      {/* info of event */}
      <div className="mt-5 md:mt-[40px] md:flex md:justify-between">
        {/* title desc etc */}
        <div className="w-full md:w-[60%]">
          <div className="text-h7 md:text-h3 font-semibold text-themeRed flex gap-5">
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
