import { ArticleCard } from "@/components";
import { articleContents } from "@/constant";

export default function Article() {
  return (
    <main className="main-layout grid gap-8">
      {articleContents.map((articleContent, index) => (
        <ArticleCard key={index} articleContent={articleContent} />
      ))}
    </main>
  );
}
