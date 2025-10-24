"use client";

import { useEffect } from "react";

interface Props {
  title: string;
  subtitle: string;
}

export default function NavbarListEl({ title = "", subtitle = "" }: Props) {
  useEffect(() => {
    const navItems = document.querySelectorAll(".nav-li");

    const handleMouseEnter = (event: Event) => {
      const element = event.currentTarget as HTMLElement;
      element.classList.remove("nav-li-hover-out");
      element.classList.add("nav-li-hover");
    };

    const handleMouseLeave = (event: Event) => {
      const element = event.currentTarget as HTMLElement;
      element.classList.remove("nav-li-hover");
      element.classList.add("nav-li-hover-out");
    };

    navItems.forEach((item) => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      navItems.forEach((item) => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <li className="nav-li flex flex-col justify-center h-full cursor-pointer select-none">
      <h6 className="text-h5 text-[#ffffff47]">{subtitle}</h6>
      <h5 className="text-h5">{title}</h5>
    </li>
  );
}
