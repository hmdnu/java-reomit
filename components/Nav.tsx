import { navLinks } from "@/constant";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full py-[30px] fixed top-0 left-0 z-50 ">
      <div className="m-auto w-[90%] flex justify-between items-center text-fontPrimary">
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
