import { NavbarListElInterface } from "@/types/interfaces";
import { svgSelector } from "../_utils/svgSelector";
import NavbarListEl from "./NavbarListEl";
import LanguageSelector from "./LanguageSelector";

const navbarList: Array<NavbarListElInterface> = [
  {
    title: "Chi Siamo",
    subtitle: "L*3",
  },
  {
    title: "Progetti",
    subtitle: "Creating",
  },
  {
    title: "Eventi",
    subtitle: "Sharing",
  },
  {
    title: "Ricerca",
    subtitle: "Innovation",
  },
];

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-2 w-full h-[64px] flex justify-between items-center gap-4 bg-[rgba(0,0,0,0.28)] backdrop-blur-xl border-nav">
      <div className="h-full flex items-center gap-[16px]">
        <div className="w-[285px] max-w-[285px] h-full flex items-center">
          <span className="w-[64px] h-full flex justify-center items-center bg-[#6633FF]">
            {svgSelector({ svgName: "star", svgWidth: "32", svgHeight: "28", svgFill: "#fff" })}
          </span>
          <h2 className="px-[24px] py-[16px] text-h5">
            Lugano <br />
            LivingLab
          </h2>
        </div>
        <ul className="flex gap-[32px]">
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
  );
}
