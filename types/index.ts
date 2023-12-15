import { StaticImageData } from "next/image";

export interface CarouselHome {
  name: string;
  heading: string;
  paragraph: string;
}

export interface ArticleCardTypes {
  imgAuthor: StaticImageData;
  author: string;
  date: string;
  category: string;
  title: string;
  contentPreview?: string;
  img: StaticImageData;
  imgAlt: string;
  detail?: {
    tag?: [string];
  };
}

export interface ArticleDetail extends ArticleCardTypes {
  content: string;
}

export interface Stats {
  heading: string;
  sub: string;
}
