import { StaticImageData } from "next/image";

export interface CarouselHome {
  name: string;
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
  detail?: {
    tag?: [string];
  };
}

export interface Stats {
  heading: string;
  sub: string;
}
