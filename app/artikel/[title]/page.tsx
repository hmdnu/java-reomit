import ArticleContent from "@/components/artikelPage/ArticleContent";

interface props {
  params: {
    title: string;
  };
}

export function generateMetadata({ params }: props) {
  const title = params.title.split("%20").join(" ");

  return {
    title,
  };
}

export default function Page({ params }: { params: { title: string } }) {
  const articleTitle = params.title.split("%20").join(" ");
  return (
    <main className="mt-24">
      <ArticleContent articleTitle={articleTitle} />
    </main>
  );
}
