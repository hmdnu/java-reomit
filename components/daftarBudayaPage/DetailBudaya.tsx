import { carousel1 } from "@/public/images";
import { profile1 } from "@/public/images/artikel";
import Image from "next/image";

export default function DetailBudaya() {
  return (
    <div>
      <Image src={carousel1} alt="leak" className="w-full h-[400px] object-cover" />
      <div className="w-[68%] m-auto my-[60px]">
        <h1 className="text-h2 font-bold">Pesona Mistis dan Kecantikan Reog Ponorogo</h1>
        <div className="flex gap-3 mt-8">
          <Image src={profile1} width={40} height={40} alt="profile" />
          <div>
            <div className="flex gap-1">
              <h3 className="text-h6 font-semibold">John Doe</h3>
              <h3 className="text-h6 text-gray-500">• Agustus 2023</h3>
            </div>
            <h4 className="text-h7 text-themeRed">Kesenian</h4>
          </div>
        </div>
        <p className="text-h5 mt-5 text-justify">
          Reog Ponorogo adalah seni pertunjukan tradisional yang berasal dari daerah Ponorogo, Jawa Timur, Indonesia.
          Pertunjukan ini menggabungkan tarian, musik, kostum yang megah, serta pertunjukan topeng yang menakjubkan.
          Salah satu elemen paling mencolok dari Reog Ponorogo adalah penampilan warok, yaitu seorang pahlawan yang kuat
          dan gagah yang memegang peranan penting dalam cerita pertunjukan. Warok ini sering memperlihatkan kekuatan
          luar biasa dengan menopang sebuah penjor, yaitu bagian yang sangat besar dari topeng Reog yang sangat berat.
          Selain warok, bagian yang sangat memukau dari Reog adalah jahiln atau barisan penari dengan kostum kuda dan
          hiasan yang mengesankan. Mereka menampilkan gerakan-gerakan yang energetik dan koordinatif yang sangat
          mengagumkan. Topeng Reog yang besar, terutama wajah singa atau macan yang disebut Singa Barong, menjadi
          lambang khas dari pertunjukan ini. Topeng ini sangat besar dan berat, seringkali mencapai ratusan kilogram,
          dan ditopang oleh seorang warok dengan gigihnya. Ini menunjukkan kekuatan dan keberanian dalam seni dan budaya
          Jawa. Reog Ponorogo bukan hanya hiburan semata, tetapi juga membawa pesan-pesan moral dan kearifan lokal dalam
          setiap pertunjukannya. Pertunjukan ini tidak hanya mempertahankan kekayaan budaya, tetapi juga memperkenalkan
          keindahan dan kekayaan warisan leluhur kepada generasi modern. Sehingga, Reog Ponorogo tetap menjadi bagian
          yang tak terpisahkan dari keberagaman seni tradisional Indonesia yang memukau dan menginspirasi banyak orang.
        </p>
      </div>
    </div>
  );
}
