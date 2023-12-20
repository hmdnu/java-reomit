import { gallery } from "@/constant";
import Image from "next/image";

export default function Tradisi() {
  return (
    <div className="columns-2 sm:columns-3 lg:columns-3 space-y-0">
      {gallery.map((gallery, i) => (
        <div key={i} className="flex flex-wrap gap-5">
          {gallery.tradisi?.img.map((img, i) => (
            <Image key={i} src={img} alt={gallery.tradisi?.altImg[i]} className="break-inside-avoid rounded-lg"></Image>
          ))}
        </div>
      ))}
    </div>
  );
}
