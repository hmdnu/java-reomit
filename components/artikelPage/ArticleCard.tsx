"use client";
import { ArticleCardTypes } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ArticleCard({ articleContent }: { articleContent: ArticleCardTypes }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/artikel/${articleContent.title}`)}
      className="cursor-pointer border-b-[1.5px] last:border-none pb-5 flex hover:bg-slate-200 rounded-lg transition-[1s] p-5 max-sm:flex gap-5 justify-between"
    >
      <div>
        {/* author container */}
        <div className="max-lg:flex max-lg:items-center max-lg:gap-3 sm:mb-[14px] mb-[10px]">
          <Image
            src={articleContent.imgAuthor}
            alt="profile"
            className="sm:w-[45px] sm:h-[45px] h-[30px] w-[30px] rounded-full object-cover object-left"
          />
          <div>
            <div className="flex gap-1">
              <h3 className="sm:text-h6 text-h8 font-semibold">{articleContent.author}</h3>
              <h3 className="sm:text-h6 text-h8 text-gray-500">{articleContent.date}</h3>
            </div>
            <h4 className="sm:text-h6 text-h8 text-themeRed">{articleContent.category}</h4>
          </div>
        </div>
        {/* title and desc article */}
        <div className="flex sm:gap-[80px] gap-[10px] justify-between items-center">
          <div className="mt-1 sm:w-[70%]">
            <h1 className="sm:text-h4 text-h7 font-bold mb-[5px]">{articleContent.title}</h1>
            <p className="sm:text-h6 font-normal text-h8 max-sm:hidden">{articleContent.contentPreview}</p>
            <Link
              className="sm:text-h7 text-h8 text-themePrimary"
              href={{ pathname: "/artikel/detail", query: { name: articleContent.title } }}
            >
              Baca Selengkapnya
            </Link>
          </div>
          <Image
            src={articleContent.img}
            alt={articleContent.imgAlt}
            className="rounded-lg sm:w-[328px] sm:h-auto w-[131px] h-[125px] max-sm:object-cover object-right sm:block hidden"
          />
        </div>
      </div>
      <Image
        src={articleContent.img}
        alt={articleContent.imgAlt}
        className="sm:hidden block rounded-lg sm:w-[328px] sm:h-auto w-[131px] h-[125px] max-sm:object-cover object-right"
      />
    </div>
  );
}
