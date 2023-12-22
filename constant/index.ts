// import {
//   carousel1,
//   carousel2,
//   carousel3,
//   jaranKepang,
//   karapanSapi,
//   kasada,
//   keboan,
//   kedukBeji,
//   larungSembonyo,
//   lontongBalap,
//   ludruk,
//   profile,
//   rawon,
//   reog,
//   rujak,
//   soto,
//   tariGandrung,
//   tariRemo,
// } from "@/public";

import { quote, quoteImg, kesenian, kuliner, tradisi, jaranKepang, kasada, tariRemo } from "@/public/images/beranda";
import { profile1, profile2, profile3 } from "@/public/images/artikel";
import {
  kedukBeji,
  pecelTumpangKediri,
  karapanSapi,
  ludruk,
  reog,
  lontongBalap,
  rawon,
  rujak,
  soto,
  keboan,
  larungSembonyo,
} from "@/public/images/budaya";

import {
  bujangGanong,
  gulatOkol,
  jaranBodhag,
  jaranJenggo,
  jaranPegon,
  tariAmbarang,
  tariBeskalan,
  tariGandrung,
  tariBruto,
  tariKuda,
  tariKuntulan,
  tariMuang,
  ayamLodho,
  bakso,
  bebek,
  brem,
  gethuk,
  krengseng,
  sate,
  tahuCampur,
  tahuTek,
  manten,
  nyadran,
  undukan,
  yadyna,
} from "@/public/images/galeri";

import { carousel1, nasiGoreng } from "@/public/images";

import {
  ArticleCardTypes,
  ArticleDetail,
  CarouselHome,
  CategoryBudayaTypes,
  EventCardDetailTypes,
  EventCardTypes,
  Stats,
} from "@/types";

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
    name: "Budaya",
    link: "/budaya",
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
  {
    heading: "80",
    sub: "Situs Budaya",
  },
  {
    heading: "80",
    sub: "Situs Budaya",
  },
  {
    heading: "80",
    sub: "Situs Budaya",
  },
];

export const articleCards: ArticleCardTypes[] = [
  {
    imgAuthor: profile1,
    author: "John Doe",
    date: "• Agustus 2023",
    category: "Kesenian",
    title: "Sejarah Pertunjukan Reog Ponorogo dikalangan Masyarakat Jawa Timur",
    contentPreview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt placeat quod voluptates, laborum magni ipsum cupiditate aliquid totam aut optio incidunt expedita debitis libero, consequuntur eligendi odit adipisci dolorum officiis.",
    img: jaranKepang,
    imgAlt: "karapan-sapi",
  },
  {
    imgAuthor: profile2,
    author: "Lavina",
    date: "• Agustus 2023",
    category: "Kuliner",
    title: "Daya Tarik Kesenian Bantengan Terhadap Masyarakat di Berbagai Kalangan Usia",
    contentPreview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt placeat quod voluptates, laborum magni ipsum cupiditate aliquid totam aut optio incidunt expedita debitis libero, consequuntur eligendi odit adipisci dolorum officiis.",
    img: kasada,
    imgAlt: "karapan-sapi",
  },
  {
    imgAuthor: profile3,
    author: "Lavina",
    date: "• Agustus 2023",
    category: "Kuliner",
    title: "Daya Tarik Kesenian Bantengan Terhadap Masyarakat di Berbagai Kalangan Usia",
    contentPreview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt placeat quod voluptates, laborum magni ipsum cupiditate aliquid totam aut optio incidunt expedita debitis libero, consequuntur eligendi odit adipisci dolorum officiis.",
    img: tariRemo,
    imgAlt: "karapan-sapi",
  },
];

export const articleDetail: ArticleDetail[] = [
  {
    imgAuthor: profile1,
    author: "John Doe",
    date: "• Agustus 2023",
    category: "Kesenian",
    title: "Sejarah Pertunjukan Reog Ponorogo dikalangan Masyarakat Jawa Timur",
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. ",
    img: reog,
    imgAlt: "reog",
  },
  {
    imgAuthor: profile2,
    author: "Lavina",
    date: "• september 2023",
    category: "Kesenian",
    title: "Daya Tarik Kesenian Bantengan Terhadap Masyarakat di Berbagai Kalangan Usia",
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. ",
    img: karapanSapi,
    imgAlt: "karapan-sapi",
  },
];

export const categoryHome = [
  {
    img: kesenian,
    heading: "Ragam Kesenian",
  },
  {
    img: tradisi,
    heading: "Berbagai Tradisi",
  },
  {
    img: kuliner,
    heading: "Kuliner Otentik",
  },
];

export const eventCard: EventCardTypes[] = [
  {
    title: "Festival Budaya Nusantara (FBN) VI Tahun 2023",
    date: "10 Des 2023",
    time: "09.00 WIB",
    location: "Gedung Graha Cakrawala, Universitas Negeri Malang, Sumbersari, Kec. Lowokwaru",
    imgPath: carousel1,
  },
  {
    title: "Festival Budaya Nusantara (FBN) VI Tahun 2023",
    date: "10 Des 2023",
    time: "09.00 WIB",
    location: "Gedung Graha Cakrawala, Universitas Negeri Malang, Sumbersari, Kec. Lowokwaru",
    imgPath: carousel1,
  },
  {
    title: "Festival Budaya Nusantara (FBN) VI Tahun 2023",
    date: "10 Des 2023",
    time: "09.00 WIB",
    location: "Gedung Graha Cakrawala, Universitas Negeri Malang, Sumbersari, Kec. Lowokwaru",
    imgPath: carousel1,
  },
  {
    title: "Festival Budaya Nusantara (FBN) VI Tahun 2023",
    date: "10 Des 2023",
    time: "09.00 WIB",
    location: "Gedung Graha Cakrawala, Universitas Negeri Malang, Sumbersari, Kec. Lowokwaru",
    imgPath: carousel1,
  },
  {
    title: "Festival Budaya Nusantara (FBN) VI Tahun 2023",
    date: "10 Des 2023",
    time: "09.00 WIB",
    location: "Gedung Graha Cakrawala, Universitas Negeri Malang, Sumbersari, Kec. Lowokwaru",
    imgPath: carousel1,
  },
  {
    title: "Festival Budaya Nusantara (FBN) VI Tahun 2023",
    date: "10 Des 2023",
    time: "09.00 WIB",
    location: "Gedung Graha Cakrawala, Universitas Negeri Malang, Sumbersari, Kec. Lowokwaru",
    imgPath: carousel1,
  },
];

export const eventCardDetail: EventCardDetailTypes[] = [
  {
    title: "Festival Budaya Nusantara (FBN) VI Tahun 2023",
    date: "10 Des 2023",
    time: "09.00 - 13.30",
    location: "Gedung Graha Cakrawala, Universitas Negeri Malang, Sumbersari, Kec. Lowokwaru",
    fullAdress: "Gedung Graha Cakrawala, Universitas Negeri Malang, Sumbersari, Kec. Lowokwaru Jawa Timur",
    imgPath: "/images/carousel3.jpeg",

    decsriptionPreview:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",

    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
    eventShedule: [
      {
        name: "Registrasi & Open Gate",
        startTime: "09.00",
        endTime: "10.00",
      },
      {
        name: "Opening Ceremony",
        startTime: "10.00",
        endTime: "10.05",
      },
      {
        name: "Sambutan - Sambutan",
        startTime: "10.05",
        endTime: "10.20",
      },
      {
        name: "Lomba Seni Lukis",
        startTime: "10.20",
        endTime: "11.20",
      },
      {
        name: "Tari Remo & Yosakai",
        startTime: "10.20",
        endTime: "11.20",
      },
      {
        name: "ISHOMA",
        startTime: "11.20",
        endTime: "13.00 ",
      },
      {
        name: "Penutupan",
        startTime: "13.00",
        endTime: "13.30",
      },
    ],
    sponsor: ["Amazon", "Apple", "Google", "Meta"],
    rincianTambahan: [{}],
    isGratis: true,
  },
];

export const schedule: Array<string> = ["Susunan Acara", "Sponsor", "Rincian Tambahan"];

export const categoryBudaya: CategoryBudayaTypes = {
  kuliner: [
    {
      img: soto,
      altImg: "Soto",
      title: "Harmoni Rasa Indonesia dalam Sebatang Mangkok Soto",
    },
    {
      img: rawon,
      altImg: "Rawon",
      title: "Hitamnya Rawon, Kelezatan Tradisi Jawa Timur",
    },
    {
      img: lontongBalap,
      altImg: "Lontong Balap",
      title: "Petualangan Rasa Lontong Balap Surabaya",
    },
    {
      img: rujak,
      altImg: "Rujak",
      title: "Rujak Segar dalam Goyangan Rasa yang Mencengangkan",
    },
  ],

  kesenian: [
    {
      img: jaranKepang,
      altImg: "Jaran Kepang",
      title: "Pesona Jaran Kepang dalam Seni Rakyat",
    },
    {
      img: karapanSapi,
      altImg: "Karapan Sapi",
      title: "Exploring the Tradition of Karapan Sapi",
    },
    {
      img: ludruk,
      altImg: "Ludruk",
      title: "Ludruk, Perpaduan Komedi dan Kearifan Lokal Jawa Timur",
    },
    {
      img: reog,
      altImg: "Reog",
      title: "Pesona Mistis dan Kecantikan Reog Ponorogo",
    },
  ],

  tradisi: [
    {
      img: kasada,
      altImg: "Kasada",
      title: "Keharmonisan Spiritual dalam Tradisi Tengger",
    },
    {
      img: keboan,
      altImg: "Keboan",
      title: "Keharmonisan Spiritual dalam Tradisi Tengger",
    },
    {
      img: kedukBeji,
      altImg: "Keduk Beji",
      title: "Ritual Kesucian Air yang Memperkaya Kebudayaan Jawa",
    },
    {
      img: larungSembonyo,
      altImg: "Larung Sembonyo",
      title: "Perwujudan Rasa Syukur Nelayan dengan Tradisi Larung Sembonyo",
    },
  ],
};

export const gallery = {
  kuliner: [
    {
      img: soto,
      altImg: "soto",
    },
    {
      img: rawon,
      altImg: "rawon",
    },
    {
      img: lontongBalap,
      altImg: "lontongBalap",
    },
    {
      img: rujak,
      altImg: "rujak",
    },
  ],

  kesenian: [
    {
      img: jaranKepang,
      altImg: "JaranKepang",
    },
    {
      img: karapanSapi,
      altImg: "KarapanSapo",
    },
    {
      img: ludruk,
      altImg: "Ludruk",
    },
    {
      img: reog,
      altImg: "Reog",
    },
    {
      img: tariGandrung,
      altImg: "TariGandrung",
    },
    {
      img: tariRemo,
      altImg: "TariRemo",
    },
  ],

  tradisi: [
    {
      img: kasada,
      altImg: "kasada",
    },
    {
      img: keboan,
      altImg: "keboan",
    },
    {
      img: kedukBeji,
      altImg: "KedukBeji",
    },
    {
      img: larungSembonyo,
      altImg: "LarungSembonyo",
    },
  ],
};
