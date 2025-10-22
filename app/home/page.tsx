import CtaSection from "../_components/CtaSection";
import Hero from "../_components/Hero";
import IntroSection from "../_components/IntroSection";
import Navbar from "../_components/Navbar";

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
        <div className="relative h-full pt-[128px] pb-[64px] px-[16px]">
          <h2 className="left-[29px] text-h2">Ascoltiamo</h2>
          <h2 className="left-[279px] text-h2">Sperimentiamo</h2>
          <h2 className="left-[198px] text-h2">Misuriamo</h2>
          <h2 className="left-[678px] text-h2">Diffondiamo</h2>
        </div>
        {/* FEATURED SECTION */}
        <div></div>
        {/* ANIMATED HORIZONTAL SLIDER SECTION */}
        <div></div>
      </main>

      {/* FOOTER */}
      <footer></footer>
    </div>
  );
}
