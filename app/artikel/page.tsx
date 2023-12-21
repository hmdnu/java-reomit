import { ArticleCard } from "@/components";
import { articleCards } from "@/constant";

export const metadata = {
  title: "Artikel",
};

export default function Page() {
  return (
    <main className="mt-32 mb-10 sm:w-[75%] w-[100%] m-auto grid gap-8">
      {articleCards.map((articleContent, index) => (
        <ArticleCard key={index} articleContent={articleContent} />
      ))}
    </main>
  );
}
