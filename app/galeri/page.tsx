import { Gallery } from "@/components";

export const metadata = {
  title: "Galeri",
};

export default function Page() {
  return (
    <main className="main-layout grid gap-8">
      <div>
        <Gallery />
      </div>
    </main>
  );
}
