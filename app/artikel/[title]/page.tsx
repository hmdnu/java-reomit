import ArticleContent from "@/components/artikelPage/ArticleContent";

interface props {
  params: {
    title: string;
  };
}

export function generateMetadata({ params }: props) {
  const title = decodeURIComponent(params.title);

  return {
    title,
  };
}

export default function Page({ params }: { params: { title: string } }) {
  const articleTitle = decodeURIComponent(params.title);
  return (
    <main className="mt-24">
      <ArticleContent articleTitle={articleTitle} />
    </main>
  );
}
