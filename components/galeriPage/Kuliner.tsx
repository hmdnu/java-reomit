import { gallery } from "@/constant";
import Image from "next/image";

export default function Kuliner() {
  return (
    <div className="columns-2 sm:columns-2 md:columns-3 space-y-10 md:space-y-0">
      {gallery.map((gallery, i) => (
        <div key={i} className="grid gap-5">
          <div className="flex flex-wrap gap-5">
            {gallery.kuliner?.img.map((img, i) => (
              <Image key={i} src={img} alt={gallery.kuliner?.altImg[i]} className="rounded-lg"></Image>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
