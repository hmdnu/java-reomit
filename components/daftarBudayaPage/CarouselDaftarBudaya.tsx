import { carousel1 } from "@/public";
import Image from "next/image";

export default function CarouselDaftarBudaya() {
  return (
    <div>
      <Image src={carousel1} alt="leak" className="w-full h-[400px] object-cover" />
    </div>
  );
}
