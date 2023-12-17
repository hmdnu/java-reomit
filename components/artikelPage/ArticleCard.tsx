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
      className="grid gap-5 border-t-2 cursor-pointer"
    >
      {/* <Link href={{ pathname: "/article/detail", query: { name: articleContent.title } }}> */}
      <div className="flex gap-3 mt-8">
        <Image src={articleContent.imgAuthor} width={40} height={40} alt="profile" />
        <div>
          <div className="flex gap-1">
            <h3 className="text-h6 font-semibold">{articleContent.author}</h3>
            <h3 className="text-h6 text-gray-500">{articleContent.date}</h3>
          </div>
          <h4 className="text-h7 text-themeRed">{articleContent.category}</h4>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="grid gap-2 max-w-lg mt-5">
          <h1 className="responsive-h1">{articleContent.title}</h1>
          <p className="text-h7 line-clamp-3">{articleContent.contentPreview}</p>
          <Link
            className="text-h7 text-themePrimary"
            href={{ pathname: "/artikel/detail", query: { name: articleContent.title } }}
          >
            Baca Selengkapnya
          </Link>
        </div>
        <div>
          <Image src={articleContent.img} alt={articleContent.imgAlt} width={700} className="rounded-lg" />
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
}
