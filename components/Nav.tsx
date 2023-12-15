"use client";
import { navLinks } from "@/constant";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [view, setView] = useState(false);

  function handleScrollNavChange() {
    const scroll = document.documentElement.scrollTop;

    if (scroll > 0) {
      setView(false);
    } else {
      setView(true);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScrollNavChange);
  }, []);

  return (
    <nav className={`w-full py-[30px] fixed top-0 left-0 z-50 ${view ? "bg-transparent" : "bg-white"} transition-all`}>
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
