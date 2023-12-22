import { articleCards } from "@/constant";
import { carousel2 } from "@/public";
import Image from "next/image";
import Link from "next/link";

export default function ArticleCardHome() {
  return (
    <section className="relative w-full mt-[320px] xxs:mt-[370px] sm:mt-[450px] md:mt-0 mb-[150px]">
      <div className="flex justify-between w-fit m-auto flex-col gap-[20px]">
        <h1 className="font-bold text-h4 md:text-h1 text-black">Artikel Populer Kami</h1>
        <div className="w-[95%] m-auto h-[5px] md:h-[10px] bg-themeRed rounded-[50px]"></div>
      </div>

      {/* article card container */}
      <div className="w-full md:w-[80%] m-auto mt-[60px] grid md:grid-cols-3 sm:grid-cols-2 place-items-center gap-[60px]">
        {articleCards.map((article, i) => (
          <Link
            href={"/artikel/" + article.title}
            key={i}
            className="bg-themeGray rounded-[20px] shadow-[4px_8px_30px_rgba(0,0,0,.45)] w-[70%] md:w-[340px] md:h-[400px] "
          >
            <Image src={article.img} alt="pic" width={360} className="rounded-[20px]" />
            <div>
              <div className="px-[30px] py-[20px]">
                <h1 className="font-bold text-h5 md:text-h5 text-white">{article.title}</h1>
              </div>
              <div className="px-[30px] pb-[30px]">
                <div className="text-fontSecondary flex gap-3 items-center text-h7 md:text-h6 font-medium">
                  <h2>{article.author}</h2> <div className="bg-fontSecondary w-[6px] h-[6px] rounded-full"></div>
                  <h1>{article.date}</h1>
                </div>

                <h1 className="font-medium text-h7 md:text-h6 text-themeRed">
                  {article.tag?.map((tag, i) => (
                    <p key={i}>{tag}</p>
                  ))}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
