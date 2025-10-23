import { StaticImageData } from "next/image";
import { LanguageCode, LanguageLabel } from "./types";

export interface NavbarListElInterface {
  title: string;
  subtitle: string;
}

export interface SponsorElInterface {
  name: string;
  imgPath?: StaticImageData | string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface LanguageInterface {
  code: LanguageCode;
  label: LanguageLabel;
}
