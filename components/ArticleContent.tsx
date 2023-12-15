import { ArticleDetail } from "@/types";
import { articleDetail } from "@/constant";
import Image from "next/image";

export default function ArticleContent({ articleTitle }: { articleTitle: string }) {
  const articles = articleDetail.filter((article) => article.title === articleTitle);

  return (
    <div className="h-[400px]">
      {articles.map((article: ArticleDetail, i: number) => (
        <div key={i}>
          <Image src={article.img} alt={article.imgAlt} className="w-full h-full object-cover" />
          <div className="main-layout mt-5">
            <h1 className="text-h2 font-semibold">{article.title}</h1>
            <div className="flex gap-3 mt-8">
              <Image src={article.imgAuthor} width={40} height={40} alt="profile"></Image>
              <div>
                <div className="flex gap-1">
                  <h3 className="text-h6 font-semibold">{article.author}</h3>
                  <h3 className="text-h6 text-gray-500">{article.date}</h3>
                </div>
                <h4 className="text-h7 text-themeRed">{article.category}</h4>
              </div>
            </div>
            <p className="text-h7 mt-5 text-justify">{article.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
