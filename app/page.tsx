import { ArticleCardHome, CarouselHome, CategoryCulture, QuoteHomepage, Stats } from "@/components";

export const metadata = {
  title: "Beranda",
};

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <div>
        <CarouselHome />
        <Stats />
      </div>
      <CategoryCulture />
      <QuoteHomepage />
      <ArticleCardHome />
    </main>
  );
}
