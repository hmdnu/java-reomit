import Link from "next/link";
import { navLinks } from "@/constant";

export default function Nav() {
  return (
    <nav className="w-[95%] px-[39px] py-[35px] fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center text-white">
        <h1 className="text-h3 font-semibold">Java Reomit.</h1>
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
