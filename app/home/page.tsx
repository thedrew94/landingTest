import CtaSection from "../_components/CtaSection";
import Footer from "../_components/Footer";
import Hero from "../_components/Hero";
import IntroSection from "../_components/IntroSection";
import Navbar from "../_components/Navbar";
import Slider from "../_components/Slider";
import SponsorsSection from "../_components/SponsorsSection";

export default function Page() {
  return (
    <div>
      <div className="relative z-1">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          // TODO: add poster fallback img
          // poster={""}
          className="sticky z-[-1] top-0 left-0 w-full h-screen object-cover"
          title={"Particles video"}
        >
          <source src={"/particles_video.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <header className="absolute top-0 left-0 w-full p-[16px]">
          <Navbar />
          <Hero />
        </header>
        <IntroSection />
      </div>
      <main className="bg-black">
        <CtaSection />
        {/* MASKED TITLE */}
        <div className="relative h-full pt-[128px] pb-[64px] px-[16px] overflow-hidden">
          <h2 className="translate-x-[29px] text-h2">Ascoltiamo</h2>
          <h2 className="translate-x-[279px] text-h2">Sperimentiamo</h2>
          <h2 className="translate-x-[198px] text-h2">Misuriamo</h2>
          <h2 className="translate-x-[678px] text-h2">Diffondiamo</h2>
        </div>
        {/* FEATURED SECTION */}
        <div className="py-[119px]">
          {/* TOP ROW */}
          <div className="flex justify-between items-baseline-last pt-[16px] pb-[32px] px-[16px]">
            <p className="text-p">Progetti 8</p>
            <h3 className="text-h3">L*3 in evidenza</h3>
            <p className="text-p">[ Tutti i progetti ]</p>
          </div>
          {/* SLIDER */}
          <Slider />
        </div>
        <SponsorsSection />
        {/* ANIMATED HORIZONTAL SLIDER SECTION */}
        <div></div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
