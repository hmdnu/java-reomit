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
      className="cursor-pointer border-b-[1.5px] last:border-none pb-5"
    >
      <div className="flex items-center gap-3 sm:mb-5 mb-3">
        <Image
          src={articleContent.imgAuthor}
          alt="profile"
          className="sm:w-[45px] sm:h-[45px] h-[30px] w-[30px] rounded-full object-cover object-left"
        />
        {/* author */}
        <div>
          <div className="flex gap-1">
            <h3 className="sm:text-h6 text-h8 font-semibold">{articleContent.author}</h3>
            <h3 className="sm:text-h6 text-h8 text-gray-500">{articleContent.date}</h3>
          </div>
          <h4 className="sm:text-h6 text-h8 text-themeRed">{articleContent.category}</h4>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="grid gap-2 max-w-lg mt-1">
          <h1 className="sm:text-h4 text-h7 font-bold">{articleContent.title}</h1>
          <p className="sm:text-h6 font-normal text-h8 max-sm:hidden">{articleContent.contentPreview}</p>
          <Link
            className="sm:text-h7 text-h8 text-themePrimary"
            href={{ pathname: "/artikel/detail", query: { name: articleContent.title } }}
          >
            Baca Selengkapnya
          </Link>
        </div>
        <div>
          <Image
            src={articleContent.img}
            alt={articleContent.imgAlt}
            className="rounded-lg sm:w-[300px] sm:h-auto w-[150px] h-[130px]"
          />
        </div>
      </div>
    </div>
  );
}
