import { StaticImageData } from "next/image";

export interface CarouselHome {
  carousel: string;
  heading: string;
  paragraph: string;
}

export interface ArticleContentProps {
  imgAuthor: StaticImageData;
  author: string;
  date: string;
  category: string;
  title: string;
  content: string;
  img: StaticImageData;
  imgAlt: string;
}
