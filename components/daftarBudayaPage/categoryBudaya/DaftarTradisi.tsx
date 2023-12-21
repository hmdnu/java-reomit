import { categoryBudaya } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import LoadMore from "../LoadMore";

export default function DaftarTradisi({ category }: { category: string }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-4 w-full gap-5">
        {categoryBudaya.tradisi.map((item, i) => (
          <Link href={`/budaya/${category}/${item.title}`} className="w-full" key={i}>
            <Image src={item.img} alt={item.altImg} className="rounded-lg w-full h-[210px] object-cover" />
            <p className="mt-3 font-semibold w-it">{item.title}</p>
          </Link>
        ))}
      </div>
      <div className="text-center mt-10">
        <LoadMore />
      </div>
    </div>
  );
}
