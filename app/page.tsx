import { ArticleCardHome, CarouselHome, CategoryCulture, QuoteHomepage } from "@/components";
import { stats } from "@/constant";

export const metadata = {
  title: "Beranda",
};

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <CarouselHome />
      {/* stats */}
      <section>
        <div className="flex w-full">
          {stats.map((stat, i) => (
            <div className="w-[200px] sm:w-full text-white" key={i}>
              <div className={`${i % 2 == 0 ? "bg-themeGray" : "bg-themeRed"} p-[20px] sm:p-[48px] w-full`}>
                <h1 className="text-h2 sm:text-h1 font-bold mb-1">{stat.heading}</h1>
                <h2 className="text-h7 sm:text-h4 font-bold">{stat.sub}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CategoryCulture />
      <QuoteHomepage />
      <ArticleCardHome />
    </main>
  );
}
