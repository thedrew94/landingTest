import { Metadata } from "next";
import CtaSection from "../_components/CtaSection";
import FeaturesSection from "../_components/FeaturesSection";
import Footer from "../_components/Footer";
import Hero from "../_components/Hero";
import IntroSection from "../_components/IntroSection";
import MaskedTitles from "../_components/MaskedTitles";
import Navbar from "../_components/Navbar";
import SponsorsSection from "../_components/SponsorsSection";
import StickyVideo from "../_components/StickyVideo";

export const metadata: Metadata = {
  title: "HOME",
};

// @/home
// Homepage for the website
export default function Page() {
  return (
    <>
      <div className="relative z-1">
        <StickyVideo />
        <header className="absolute top-0 left-0 w-full p-[16px]">
          <Navbar />
          <Hero />
        </header>
        <IntroSection />
      </div>

      <main className="bg-black">
        <CtaSection />
        <MaskedTitles />
        <FeaturesSection />
        <SponsorsSection />
      </main>

      <Footer />
    </>
  );
}
