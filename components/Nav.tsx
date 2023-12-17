"use client";
import { navLinks } from "@/constant";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [view, setView] = useState(false);
  const [navBg, setNavBg] = useState(true);
  const pathname = usePathname();

  function handleScrollNavChange() {
    const scroll = document.documentElement.scrollTop;

    if (scroll <= 0) {
      setView(false);
    } else {
      setView(true);
    }
  }

  useEffect(() => {
    if (pathname !== "/") {
      setNavBg(false);
    } else {
      setNavBg(true);
    }
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollNavChange);
  }, []);

  return (
    <nav
      className={`w-full py-[30px] fixed top-0 left-0 z-50 ${
        navBg ? `${view ? "bg-white" : "bg-transparent"}` : "bg-white"
      } transition-all`}
    >
      <div className="m-auto w-[90%] flex justify-between items-center text-fontPrimary">
        <Link href={"/"} className="text-h3 font-semibold">
          Java Reomit.
        </Link>
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
