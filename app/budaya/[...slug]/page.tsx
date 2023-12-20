import Image from "next/image";
import { profile } from "@/public";
import { categoryBudaya } from "@/constant";
import { nasiGoreng } from "@/public";

interface Props {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: Props) {
  const category = params.slug[0];
  const title = params.slug[1].split("%20").join(" ");

  return {
    title: `${category} | ${title}`,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const title = decodeURIComponent(params.slug[1]);
  const categoryName = params.slug[0];

  const tradisi = categoryBudaya.tradisi.find((e) => e.title === title);
  const kuliner = categoryBudaya.kuliner.find((e) => e.title === title);
  const kesenian = categoryBudaya.kesenian.find((e) => e.title === title);

  const categories = [tradisi, kuliner, kesenian].filter((e) => e !== undefined);

  return (
    <main className="mt-24">
      {categories.map((category, i) => (
        <div key={i}>
          <Image src={nasiGoreng} alt="leak" className="w-full h-[400px] object-cover" />
          <div className="w-[68%] m-auto my-[60px]">
            <h1 className="text-h2 font-bold">{category?.title}</h1>
            <div className="flex gap-3 mt-8">
              <Image
                src={profile}
                width={40}
                height={40}
                alt="profile"
                className="rounded-full object-cover object-center"
              />
              <div>
                <div className="flex gap-1">
                  <h3 className="text-h6 font-semibold">John Doe</h3>
                  <h3 className="text-h6 text-gray-500">• Agustus 2023</h3>
                </div>
                <h4 className="text-h7 text-themeRed">{categoryName}</h4>
              </div>
            </div>
            <p className="text-h5 mt-5 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vel esse, doloribus expedita delectus
              tempora natus similique! Ipsam quibusdam, molestias quasi omnis modi autem placeat optio sapiente possimus
              id, ut harum. Soluta perspiciatis autem minus, tempore magni maxime obcaecati qui eius recusandae! Saepe
              doloribus eveniet ipsa, nemo labore aperiam modi ratione, placeat, recusandae reprehenderit odit dolor.
              Minima, vitae! Quasi, magni aperiam officia praesentium reiciendis quos enim iusto totam odit, accusantium
              numquam laboriosam cupiditate consequuntur fuga vitae veritatis delectus! Quos, quam doloremque numquam
              pariatur culpa deserunt exercitationem aut ut dolorum. Dolorum incidunt fugit consequatur deleniti
              voluptatum itaque nemo iusto officiis natus odit. Eligendi suscipit molestiae modi quod, est tempore,
              explicabo nostrum illo ipsa similique fugiat blanditiis doloribus sit nobis possimus magni.
            </p>
          </div>
        </div>
      ))}
    </main>
  );
}
