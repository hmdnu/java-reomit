import { gallery } from "@/constant";
import Image from "next/image";

export default function Kesenian() {
  return (
    <div className="columns-2 sm:columns-2 md:columns-3">
      {gallery.map((gallery, i) => (
        <div key={i} className="flex flex-wrap gap-5">
          {gallery.kesenian?.img.map((img, i) => (
            <Image key={i} src={img} alt={gallery.kesenian?.altImg[i]} className="rounded-lg"></Image>
          ))}
        </div>
      ))}
    </div>
  );
}
