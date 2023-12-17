import { ArticleCard } from "@/components";
import { articleCards } from "@/constant";

export const metadata = {
  title: "Artikel",
};

export default function Page() {
  return (
    <main className="main-layout grid gap-8">
      {articleCards.map((articleContent, index) => (
        <ArticleCard key={index} articleContent={articleContent} />
      ))}
    </main>
  );
}
