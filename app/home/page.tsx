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
        </header>{" "}
        <IntroSection />
      </div>
      <main className="">
        <CtaSection />
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
