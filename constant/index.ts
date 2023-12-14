import carousel2 from "@/public/images/carousel2.png";
import profile from "@/public/images/profile.png";
import { ArticleContentProps } from "@/types";

export const navLinks = [
  {
    name: "Beranda",
    link: "/",
  },
  {
    name: "Artikel",
    link: "/artikel",
  },
  {
    name: "Galeri",
    link: "/galeri",
  },
  {
    name: "Kegiatan",
    link: "/kegiatan",
  },
];

export const articleContents: ArticleContentProps[] = [
  {
    imgAuthor: profile,
    author: "John Doe",
    date: "• Agustus 2023",
    category: "Kesenian",
    title: "Sejarah Pertunjukan Reog Ponorogo dikalangan Masyarakat Jawa Timur",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt placeat quod voluptates, laborum magni ipsum cupiditate aliquid totam aut optio incidunt expedita debitis libero, consequuntur eligendi odit adipisci dolorum officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt placeat quod voluptates, laborum magni ipsum cupiditate aliquid totam aut optio incidunt expedita debitis libero, consequuntur eligendi odit adipisci dolorum officiis.",
    img: carousel2,
    imgAlt: "karapan-sapi",
  },
  {
    imgAuthor: profile,
    author: "Lavina",
    date: "• Agustus 2023",
    category: "Kuliner",
    title: "Daya Tarik Kesenian Bantengan Terhadap Masyarakat di Berbagai Kalangan Usia",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt placeat quod voluptates, laborum magni ipsum cupiditate aliquid totam aut optio incidunt expedita debitis libero, consequuntur eligendi odit adipisci dolorum officiis.",
    img: carousel2,
    imgAlt: "karapan-sapi",
  },
];

export const articleDetail: ArticleContentProps[] = [
  {
    imgAuthor: profile,
    author: "John Doe",
    date: "• Agustus 2023",
    category: "Kesenian",
    title: "Sejarah Pertunjukan Reog Ponorogo dikalangan Masyarakat Jawa Timur",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt placeat quod voluptates,Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.  laborum magni ipsum cupiditate aliquid totam aut optio incidunt expedita debitis libero, consequuntur eligendi odit adipisci dolorum officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt placeat quod voluptates, laborum magni ipsum cupiditate aliquid totam aut optio incidunt expedita debitis libero, consequuntur eligendi odit adipisci dolorum officiis.",
    img: carousel2,
    imgAlt: "karapan-sapi",
  },
];

// export const article: ArticleContentProps[] = articleContents.map((item)) => ({
//   ...item,
//   detail: {
//     tag: ["#Kuliner"],
//   },
// });
