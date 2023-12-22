import { ArticleDetail } from "@/types";
import { articleDetail } from "@/constant";
import Image from "next/image";

export default function ArticleContent({ articleTitle }: { articleTitle: string }) {
  const articles = articleDetail.filter((article) => article.title === articleTitle);
  console.log(articleTitle);

  return (
    <div>
      {articles.map((article: ArticleDetail, i: number) => (
        <div key={i}>
          <Image
            src={article.img}
            alt={article.imgAlt}
            className="w-full h-[400px] object-cover max-sm:object-right mb-[20px] sm:mb-[65px]"
          />
          <div className="sm:w-[68%] w-[75%] m-auto mb-[60px] flex flex-col gap-[20px] sm:gap-[36px]">
            <h1 className="sm:text-h2 text-h5 font-bold">{article.title}</h1>
            <div className="flex gap-3">
              <Image src={article.imgAuthor} width={40} height={40} alt="profile" className="rounded-full" />
              <div>
                <div className="flex gap-1">
                  <h3 className="text-h6 font-semibold">{article.author}</h3>
                  <h3 className="text-h6 text-gray-500">{article.date}</h3>
                </div>
                <h4 className="text-h7 text-themeRed">{article.category}</h4>
              </div>
            </div>
            <p className="sm:text-h5 text-h7 text-justify">{article.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
