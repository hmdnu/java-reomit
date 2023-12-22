"use client";
import { navLinks } from "@/constant";
import { iconHamburger } from "@/public/icons";
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
  const [navMobileView, setNavMobileView] = useState(false);

  const pathname = usePathname();
  const path = pathname.split("/");
  const budaya = path[path.length - 1];

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

    if (pathname == "/artikel") {
      setFilterMobile(true);
    } else {
      setFilterMobile(false);
    }
  }, [pathname, budaya]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollNavChange);
  }, []);

  function handleOpenNavMobile() {
    setNavMobileView((prev) => !prev);
    document.querySelector("body")?.classList.add("overflow-hidden");
  }

  function handleCloseNavMobile() {
    setNavMobileView((prev) => !prev);
    document.querySelector("body")?.classList.remove("overflow-hidden");
  }

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
        <div className="sm:hidden flex">
          <Image
            onClick={handleOpenNavMobile}
            src={iconHamburger}
            alt="hamburger"
            width={20}
            className="cursor-pointer"
          />
          {navMobileView && (
            <div
              id="navMobile"
              onClick={handleCloseNavMobile}
              className="bg-[rgba(0,0,0,.5)] w-full h-screen fixed z-50 top-0 left-0 overflow-hidden"
            >
              <div className="gap-[30px] absolute bg-white p-3 w-[150px] right-5 top-16 rounded-lg ">
                {navLinks.map((link, i) => (
                  <div key={i} className="mb-2 text-center">
                    <Link href={link.link} className="sm:text-h5 text-h6 font-medium">
                      {link.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex sm:hidden items-center m-auto w-[90%] mt-[20px] gap-5 ">
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
