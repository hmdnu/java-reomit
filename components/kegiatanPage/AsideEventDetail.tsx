import Image from "next/image";
import { iconLink, iconIg, iconWa } from "@/public";

export default function AsideEventDetail() {
  return (
    <aside className="w-[34%]">
      <div className="flex gap-[21px] justify-end">
        <h1 className="font-bold text-h4">Bagikan : </h1>
        <div className="flex gap-[21px]">
          <Image src={iconWa} alt="wa" width={23} />
          <Image src={iconIg} alt="wa" width={23} />
          <Image src={iconLink} alt="wa" width={23} />
        </div>
      </div>
      <div>
        <button className="bg-themeRed text-h5 text-white px-16 py-4 mt-[46px] rounded-[8px] font-medium">Tiket</button>
        <div className="mt-[39px] border-y border-[#C0C0C0] py-[25px]">
          <h1 className="font-bold text-h4 text-fontPrimary mb-[15px]">RSVP</h1>
          <div className="flex items-center justify-evenly">
            <div className="gradient rounded-full w-[140px] h-[140px] grid place-items-center relative before:content-[''] before:absolute before:h-[85%] before:w-[85%] before:bg-white before:rounded-full">
              <h1 className="absolute text-h3">75%</h1>
            </div>
            <div>
              <div className="text-fontPrimary mb-[18px]">
                <h1 className="font-bold text-h4">975</h1>
                <h2>Undangan Terkirim</h2>
              </div>
              <div>
                <h1 className="font-bold text-h4">600</h1>
                <h2>Undangan Diterima</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
