import { StaticImageData } from "next/image";

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
