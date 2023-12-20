import { gallery } from "@/constant";
import Image from "next/image";

export default function Kesenian() {
  return (
    <div className="columns-2 sm:columns-3 lg:columns-3 gap-5 space-y-1">
      {gallery.map((gallery, i) => (
        <div key={i} className="flex flex-wrap gap-5">
          {gallery.kesenian?.img.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={gallery.kesenian?.altImg[i]}
              className="break-inside-avoid rounded-lg"
            ></Image>
          ))}
        </div>
      ))}
    </div>
  );
}
