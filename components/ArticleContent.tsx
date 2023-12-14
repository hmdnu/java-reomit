import { ArticleContentProps } from "@/types";
import Image from "next/image";

export default function ArticleContent({ articleDetail }: { articleDetail: ArticleContentProps }) {
  return (
    <div className="h-[400px]">
      <Image src={articleDetail.img} alt={articleDetail.imgAlt} className="w-full h-full object-cover" />
      <div className="main-layout mt-5">
        <h1 className="text-h2 font-semibold">{articleDetail.title}</h1>
        <div className="flex gap-3 mt-8">
          <Image src={articleDetail.imgAuthor} width={40} height={40} alt="profile"></Image>
          <div>
            <div className="flex gap-1">
              <h3 className="text-h6 font-semibold">{articleDetail.author}</h3>
              <h3 className="text-h6 text-gray-500">{articleDetail.date}</h3>
            </div>
            <h4 className="text-h7 text-themeRed">{articleDetail.category}</h4>
          </div>
        </div>
        <p className="text-h7 mt-5 text-justify">{articleDetail.content}</p>
      </div>
    </div>
  );
}
