import { gallery } from "@/constant";
import Image from "next/image";

export default function Kuliner() {
  return (
    <div className="columns-2 sm:columns-3 lg:columns-3 gap-5 space-y-8">
      {gallery.map((gallery, i) => (
        <div key={i} className="flex flex-wrap gap-5">
          {gallery.kuliner?.img.map((img, i) => (
            <Image key={i} src={img} alt={gallery.kuliner?.altImg[i]} className="rounded-lg"></Image>
          ))}
        </div>
      ))}
    </div>
  );
}
