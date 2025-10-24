import { NavItem } from "@/types/interfaces";
import { svgSelector } from "../_utils/svgSelector";
import Link from "next/link";

const mainNavItems: Array<NavItem> = [
  { label: "Progetti", href: "/progetti" },
  { label: "Eventi", href: "/eventi" },
  { label: "Ricerca", href: "/ricerca" },
  { label: "Contatto", href: "/contatto" },
];

const secondaryNavItems: Array<NavItem> = [
  { label: "Network", href: "/network" },
  { label: "Privacy policies", href: "/privacy" },
  { label: "Impressum", href: "/impressum" },
];

/**
 * Website footer.
 *
 * @returns {JSX.Element}
 */
export default function Footer() {
  return (
    <footer className="pt-[48px] xl:pt-[64px] bg-black">
      <div className="flex flex-col justify-between h-[473px] xl:h-[900px] p-[16px]">
        {/* FOOTER TOP */}
        <div className="flex flex-col xl:flex-row justify-between gap-[24px] xl:gap-[16px]">
          <div>
            <h5 className="text-h10 xl:text-h4">Città di Lugano</h5>
            <h6 className="text-h10 xl:text-h4 text-[rgba(255,255,255,0.56)]">
              Comunicazione e innovazione digitale
              <br />
              Lugano Living Lab
              <br />
              Piazza della Riforma 1<br />
              CH-6900 Locarno
            </h6>
          </div>
          <div className="flex gap-[16px]">
            <ul className="flex flex-col gap-[16px] w-[163.5px] xl:w-[340px]">
              {mainNavItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-p">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-[16px] w-[163.5px] xl:w-[340px]">
              {secondaryNavItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-p">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* FOOTER BOTTOM */}
        <ul className="flex flex-wrap items-center gap-[16px]">
          <li>
            <a href="#" className="flex gap-[6px] text-p">
              Linkedin{svgSelector({ svgName: "arrow_diagonal", svgWidth: "13", svgHeight: "13", svgFill: "#fff" })}
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-[6px] text-p">
              Facebook{svgSelector({ svgName: "arrow_diagonal", svgWidth: "13", svgHeight: "13", svgFill: "#fff" })}
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-[6px] text-p">
              X{svgSelector({ svgName: "arrow_diagonal", svgWidth: "13", svgHeight: "13", svgFill: "#fff" })}
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-[6px] text-p">
              YouTube{svgSelector({ svgName: "arrow_diagonal", svgWidth: "13", svgHeight: "13", svgFill: "#fff" })}
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-[6px] text-p">
              Instagram{svgSelector({ svgName: "arrow_diagonal", svgWidth: "13", svgHeight: "13", svgFill: "#fff" })}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
