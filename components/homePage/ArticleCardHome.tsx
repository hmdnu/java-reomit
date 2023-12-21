import { articleCardHome } from "@/constant";
import { carousel2 } from "@/public";
import Image from "next/image";

export default function ArticleCardHome() {
  return (
    <section className="relative w-full mt-[300px] xxs:mt-[350px] md:mt-0 mb-[150px]">
      <div className="flex justify-between w-fit m-auto flex-col gap-[20px]">
        <h1 className="font-bold text-h4 md:text-h1 text-black">Artikel Populer Kami</h1>
        <div className="w-[95%] m-auto h-[5px] md:h-[10px] bg-themeRed rounded-[50px]"></div>
      </div>

      {/* article card container */}
      <div className="w-full md:w-[80%] m-auto mt-[60px] grid md:grid-cols-3 sm:grid-cols-2 place-items-center gap-[60px]">
        {articleCardHome.map((article, i) => (
          <div
            key={i}
            className="bg-themeGray rounded-[20px] shadow-[4px_8px_30px_rgba(0,0,0,.45)] w-[70%] md:w-[340px]"
          >
            <Image src={carousel2} alt="pic" width={360} className="rounded-[20px]" />
            <div>
              <div className="px-[30px] py-[20px]">
                <h1 className="font-bold text-h4 md:text-h3 text-white">{article.title}</h1>
              </div>
              <div className="px-[30px] pb-[30px]">
                <div className="text-fontSecondary flex gap-3 items-center text-h6 md:text-h5 font-medium">
                  <h2>{article.creator}</h2> <div className="bg-fontSecondary w-[6px] h-[6px] rounded-full"></div>
                  <h1>{article.dateCreated}</h1>
                </div>

                <h1 className="font-medium text-h6 md:text-h5 text-themeRed">
                  {article.tag.map((tag, i) => (
                    <p key={i}>{tag}</p>
                  ))}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
