"use client";
import { navLinks } from "@/constant";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { SearchBar } from ".";
import { hamburger } from "@/public";

export default function Nav() {
  const [view, setView] = useState(false);
  const [navBg, setNavBg] = useState(true);
  const [searchBarNav, setSearchBarNav] = useState(false);
  const [mobileView, setMobileView] = useState(false);

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
    if (pathname == "/artikel" || pathname == "/galeri") {
      setSearchBarNav(true);
    } else {
      setSearchBarNav(false);
    }
  }, [pathname]);

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
      className={`w-full py-[30px] fixed top-0 left-0 z-[9999] ${
        navBg ? `${view ? "bg-white" : "bg-transparent"}` : "bg-white"
      } transition-all`}
    >
      <div className="m-auto w-[90%] flex justify-between items-center text-fontPrimary">
        <div className="flex gap-5 items-center">
          <Link href={"/"} className="sm:text-h3 text-h4 font-semibold">
            Java Reomit.
          </Link>
          {searchBarNav ? <SearchBar /> : null}
        </div>

        <div className="gap-[30px] sm:flex hidden">
          {navLinks.map((link, i) => (
            <div key={i}>
              <Link className="text-h5 font-medium" href={link.link}>
                {link.name}
              </Link>
            </div>
          ))}
        </div>

        {/* hamburger menu */}
        <div className="sm:hidden flex relative">
          <Image
            onClick={() => setMobileView((prev) => !prev)}
            src={hamburger}
            alt="hamburger"
            width={20}
            className="cursor-pointer"
          />

          {/* nav link mobile responsive */}
          <div className="gap-[30px] hidden">
            {navLinks.map((link, i) => (
              <div key={i}>
                <Link className="text-h5 font-medium" href={link.link}>
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
