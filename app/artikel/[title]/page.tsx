import ArticleContent from "@/components/artikelPage/ArticleContent";

export default function Page({ params }: { params: { title: string } }) {
  const articleTitle = params.title.split("%20").join(" ");
  return (
    <main className="mt-24">
      <ArticleContent articleTitle={articleTitle} />
    </main>
  );
}
