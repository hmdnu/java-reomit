import ArticleContent from "@/components/ArticleContent";
import { articleDetail } from "@/constant";

export default function DetailArticle() {
  return (
    <main className="mt-24">
      {articleDetail.map((articleDetail, index) => (
        <ArticleContent key={index} articleDetail={articleDetail} />
      ))}
    </main>
  );
}
