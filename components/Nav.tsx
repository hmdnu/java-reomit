"use client";
import { navLinks } from "@/constant";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [view, setView] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = document.documentElement.scrollTop;
      if (scroll < 50) {
        setView(true);
      } else {
        setView(false);
      }
    });
  }, []);

  return (
    <nav className={`w-full py-[30px] fixed top-0 left-0 z-50 ${view ? "bg-white" : "bg-transparent"} transition-all`}>
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
