import { navLinks } from "@/constant";
import { iconIg, iconYt, iconWa } from "@/public";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white w-full h-[250px] flex items-center justify-center">
      <div className="w-[90%] m-auto flex justify-between items-center">
        <div>
          <h1 className="font-bold text-[50px] leading-[120%] text-fontPrimary mb-2">Java Reomit.</h1>
          <p className="font-medium text-fontPrimary text-h6">© All Rights Reserved. Java Reomit 2023</p>
        </div>
        <div className="flex justify-between gap-[50px]">
          {navLinks.map((link, i) => (
            <Link key={i} className="text-h5 font-medium" href={link.link}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex justify-between gap-[30px]">
          <Image src={iconYt} width={28} alt="icon" />
          <Image src={iconWa} width={28} alt="icon" />
          <Image src={iconIg} width={28} alt="icon" />
        </div>
      </div>
    </footer>
  );
}
