import { ArticleCardHome, CarouselHome, CategoryCulture, QuoteHomepage, Stats } from "@/components";

export const metadata = {
  title: "Beranda",
};

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <CarouselHome />
      <Stats />
      <CategoryCulture />
      <QuoteHomepage />
      <ArticleCardHome />
    </main>
  );
}
