import { CarouselHome, Stats, ArticleContentProps } from "@/types";
import { profile, carousel2 } from "@/public";

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

export const carouselHome: CarouselHome[] = [
  {
    name: "bg-carousel1",
    heading: "Ini Heading Tolong Jangan Hujat Saya Karena Tulisan “Saksikan” yang Sebelumnya",
    paragraph:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    name: "bg-carousel2",
    heading: "Ini Heading Tolong Jangan Hujat Saya Karena Tulisan “Saksikan” yang Sebelumnya",
    paragraph:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
];

export const stats: Stats[] = [
  { heading: "80+", sub: "Situs Budaya" },
  { heading: "80+", sub: "Situs Budaya" },
  { heading: "80+", sub: "Situs Budaya" },
];

export const articleContents: ArticleContentProps[] = [
  {
    imgAuthor: profile,
    author: "John Doe",
    date: "• Agustus 2023",
    category: "Kesenian",
    title: "Sejarah Pertunjukan Reog Ponorogo dikalangan Masyarakat Jawa Timur",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt placeat quod voluptates, laborum magni ipsum cupiditate aliquid totam aut optio incidunt expedita debitis libero, consequuntur eligendi odit adipisci dolorum officiis.",
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
