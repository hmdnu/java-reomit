import { gallery } from "@/constant";
import Image from "next/image";

export default function Kesenian() {
  return (
    <div className="columns-3 gap-5 mx-auto space-y-3">
      {gallery.map((gallery, i) => (
        <div key={i} className="grid gap-5">
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
