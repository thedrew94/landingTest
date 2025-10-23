"use client";

import { NavbarListElInterface } from "@/types/interfaces";
import { svgSelector } from "../_utils/svgSelector";
import NavbarListEl from "./NavbarListEl";
import LanguageSelector from "./LanguageSelector";
import { useEffect, useState } from "react";
import Link from "next/link";

// TOP NAVIGATION BAR ELEMENTS DATA
const navbarList: Array<NavbarListElInterface> = [
  {
    title: "Chi Siamo",
    subtitle: "L*3",
    hrefPath: "",
  },
  {
    title: "Progetti",
    subtitle: "Creating",
    hrefPath: "",
  },
  {
    title: "Eventi",
    subtitle: "Sharing",
    hrefPath: "",
  },
  {
    title: "Ricerca",
    subtitle: "Innovation",
    hrefPath: "",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  function handleMenu() {
    setMenuOpen((prevState) => {
      return !prevState;
    });
  }

  useEffect(() => {
    // Handling of the menu state on specific viewport size. If viewport is >= 900px (lg breakpoint tailwind) we will close the menu
    const mediaQuery = window.matchMedia("(min-width: 900px)");

    function handleResize(event: MediaQueryListEvent) {
      if (event.matches) setMenuOpen(false);
    }

    if (mediaQuery.matches) setMenuOpen(false);

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <>
      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed z-3 top-0 left-0 flex flex-col w-full h-screen bg-[#6633FF] lg:hidden">
          {/* MOBILE MENU TOP */}
          <div className="flex justify-between items-center w-full h-[64px] pr-[16px]">
            <button
              className="relative z-3 w-[64px] h-full flex justify-center items-center bg-[#6633FF] border-none outline-none cursor-pointer"
              onClick={handleMenu}
            >
              <span className={`w-[36px] h-[10px] border-t-[3px] border-b-[3px] lg:hidden`}></span>
            </button>
            <LanguageSelector />
          </div>
          {/* MOBILE MENU MID CONTENT */}
          <div className="p-[16px] flex-1">
            <ul>
              {navbarList &&
                navbarList.length > 0 &&
                navbarList.map((l, idx) => {
                  return (
                    <li key={`navbar_mobile_list_el_${idx}`}>
                      <Link href={"/"} className="block py-[16px]">
                        <h6 className="text-p text-opaque">{l.subtitle}</h6>
                        <h5 className="text-h7">{l.title}</h5>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
          {/* MOBILE MENU FOOTER */}
          <div className="p-[16px]">
            <div className="pt-[8px] border-t border-t-white">
              <h5 className="text-p">Città di Lugano</h5>
              <h6 className="text-p text-textopaque">
                Comunicazione e innovazione digitale
                <br />
                Lugano Living Lab
                <br />
                Piazza della Riforma 1<br />
                CH-6900 Locarno
              </h6>
            </div>
          </div>
        </div>
      )}
      <nav className="absolute top-0 left-0 z-2 w-full h-[64px] flex justify-between items-center gap-4 bg-[rgba(0,0,0,0.28)] backdrop-blur-xl border-nav">
        {/* TOP NAVIGATION BAR CONTENT */}
        <div className="h-full flex items-center gap-[16px]">
          <div className="w-[285px] max-w-[285px] h-full flex items-center">
            <button
              className="relative z-3 w-[64px] h-full flex justify-center items-center bg-[#6633FF] border-none outline-none cursor-pointer"
              onClick={handleMenu}
            >
              <span
                className={`w-[36px] h-[10px] border-t-[3px] border-b-[3px] ${
                  menuOpen ? "hamburger-icon-appear" : "hamburger-icon-appear"
                } lg:hidden`}
              ></span>
              <span className="hidden lg:block">
                {svgSelector({ svgName: "star", svgWidth: "32", svgHeight: "28", svgFill: "#fff" })}
              </span>
            </button>
            <h2 className="px-[24px] py-[16px] text-h5">
              Lugano <br />
              LivingLab
            </h2>
          </div>
          <ul className="hidden gap-[32px] lg:flex">
            {navbarList &&
              navbarList.length > 0 &&
              navbarList.map((l, idx) => {
                return <NavbarListEl key={`navbar_list_el_${idx}`} title={l.title} subtitle={l.subtitle} />;
              })}
          </ul>
        </div>
        <div className="h-full flex items-center gap-[16px]">
          <LanguageSelector />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[144px] h-full flex justify-center items-center gap-[4px] bg-[#FFFFFF47] bg-opacity-[28] backdrop-blur-[24]"
          >
            <p className="text-h5">Contatto</p>
            <span className="w-[32px] h-[32px] flex justify-center items-center">
              {svgSelector({ svgName: "arrow_diagonal", svgWidth: "13", svgHeight: "13", svgFill: "#fff" })}
            </span>
          </a>
        </div>
      </nav>
    </>
  );
}
