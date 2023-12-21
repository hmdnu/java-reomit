"use client";
import { navLinks } from "@/constant";
import { hamburger } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SearchBar } from ".";
import { FilterButton, FilterDropdown } from "./FilterDropdown";

export default function Nav() {
  const [view, setView] = useState(false);
  const [navBg, setNavBg] = useState(true);
  const [searchBarNav, setSearchBarNav] = useState(false);
  const [filterMobile, setFilterMobile] = useState(false);
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
    // navBg
    if (pathname !== "/") {
      setNavBg(false);
    } else {
      setNavBg(true);
    }

    if (pathname == "/artikel" || pathname == "/galeri") {
      setSearchBarNav(true);
    } else {
      setSearchBarNav(false);
    }

    if (pathname == "/galeri" || pathname == "/kegiatan" || pathname == "/artikel") {
      setFilterMobile(true);
    } else {
      setFilterMobile(false);
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
          <div className="sm:block hidden">{searchBarNav ? <SearchBar /> : null}</div>
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

      <div className="sm:hidden flex items-center m-auto w-[90%] mt-[20px] gap-5 ">
        {searchBarNav ? <SearchBar /> : null}
        {filterMobile ? (
          <FilterDropdown classValue="text-h7 rounded-[5px] h-[27px] px-4" title={"Kesenian"}>
            <FilterButton classValue="text-h7">Button 1</FilterButton>
            <FilterButton classValue="text-h7">Button 2</FilterButton>
            <FilterButton classValue="text-h7">Button 3</FilterButton>
          </FilterDropdown>
        ) : null}
      </div>
    </nav>
  );
}
