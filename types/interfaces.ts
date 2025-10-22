import { StaticImageData } from "next/image";

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
