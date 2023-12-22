import { navLinks } from "@/constant";
import { iconIg, iconWa, iconYt } from "@/public";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white w-full sm:h-[180px] h-[100px] flex justify-between md:items-center md:justify-center">
      <div className="w-[90%] m-auto flex justify-between items-center">
        <div>
          <h1 className="font-bold sm:text-h3 md:text-[50px] sm:leading-[120%] text-h5 text-fontPrimary mb-2">
            Java Reomit.
          </h1>
          <p className="font-medium text-fontPrimary md:text-h6 text-h8">© All Rights Reserved. Java Reomit 2023</p>
        </div>
        <div className="sm:grid sm:grid-cols-2 md:flex hidden justify-between sm:gap-1 md:gap-[50px]">
          {navLinks.map((link, i) => (
            <Link key={i} className="text-h5 font-medium sm:mx-5" href={link.link}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex justify-between sm:gap-[30px] gap-[15px]">
          <Image src={iconYt} alt="icon" className="sm:w-[28px] w-[18px]" />
          <Image src={iconWa} alt="icon" className="sm:w-[28px] w-[15px]" />
          <Image src={iconIg} alt="icon" className="sm:w-[28px] w-[15px]" />
        </div>
      </div>
    </footer>
  );
}
