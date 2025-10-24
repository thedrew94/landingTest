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
        <div className="sticky z-[-1] top-0 left-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            // TODO: add poster fallback img
            // poster={""}
            className="w-full h-screen object-cover translate-x-[25%]"
            title={"Particles video"}
          >
            <source src={"/particles_video.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <header className="absolute top-0 left-0 w-full p-[16px]">
          <Navbar />
          <Hero />
        </header>
        <IntroSection />
      </div>
      <main className="bg-black">
        <CtaSection />
        {/* MASKED TITLE */}
        <div className="relative h-full pt-[96px] pb-[49px] xl:pt-[128px] xl:pb-[64px] px-[16px] overflow-hidden">
          <h2 className="text-left xl:translate-x-[29px] text-h9 xl:text-h2">Ascoltiamo</h2>
          <h2 className="text-right xl:text-left xl:translate-x-[279px] text-h9 xl:text-h2">Sperimentiamo</h2>
          <h2 className="text-left xl:translate-x-[198px] text-h9 xl:text-h2">Misuriamo</h2>
          <h2 className="text-right xl:text-left xl:translate-x-[678px] text-h9 xl:text-h2">Diffondiamo</h2>
        </div>
        {/* FEATURED SECTION */}
        <div className="py-[148.5px] xl:py-[119px]">
          {/* TOP ROW */}
          <div className="hidden xl:flex justify-between items-baseline-last pt-[16px] pb-[32px] px-[16px]">
            <p className="text-p">Progetti 8</p>
            <h3 className="text-h3">L*3 in evidenza</h3>
            <p className="text-p">[ Tutti i progetti ]</p>
          </div>
          <div className="flex flex-col gap-[24px] pb-[32px] pt-[16px] px-[16px] xl:hidden">
            <h3 className="text-h7">L*3 in evidenza</h3>
            <div className="flex justify-between items-center w-full">
              <p className="text-p">Progetti 8</p>
              <p className="text-p">[ Tutti i progetti ]</p>
            </div>
          </div>
          {/* SLIDER */}
          <Slider />
        </div>
        <SponsorsSection />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
