import CtaSection from "../_components/CtaSection";
import Hero from "../_components/Hero";
import IntroSection from "../_components/IntroSection";
import Navbar from "../_components/Navbar";

export default function Page() {
  return (
    <>
      <header className="relative p-[16px] bg-background">
        <Navbar />
        <Hero />
      </header>
      <main className="bg-black">
        <IntroSection />
        <CtaSection />
        {/* FEATURED SECTION */}
        <div></div>
        {/* ANIMATED HORIZONTAL SLIDER SECTION */}
        <div></div>
      </main>
      {/* FOOTER */}
      <footer></footer>
    </>
  );
}
