import Link from "next/link";
import { navLinks } from "@/constant";

export default function Nav() {
  return (
    <nav className="w-[95%] px-[39px] py-[10px]">
      <div className="flex justify-between items-center">
        <h1 className="text-h3 text-fontPrimary font-semibold">Java Reomit.</h1>
        <div className="flex gap-[30px]">
          {navLinks.map((link, i) => (
            <div key={i}>
              <Link className="text-h5 font-medium" href={link.link}>
                {link.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
