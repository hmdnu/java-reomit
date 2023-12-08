import Link from "next/link";
import { NavLinks } from "@/constant";

export default function Nav() {
  return (
    <nav className="w-[95%] px-[39px] py-[10px]">
      <div className="flex justify-between items-center">
        <h1 className="text-h3 text-fontPrimary font-semibold">Java Reomit.</h1>
        <div className="flex gap-[30px]">
          {NavLinks.map((link, i) => (
            <div key={i}>
              <Link className="text-h5" href={link.link}>
                {link.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
