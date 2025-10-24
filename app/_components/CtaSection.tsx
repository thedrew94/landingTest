import CtaFooter from "./CtaFooter";
import CtaTop from "./CtaTop";

/**
 * Call to action section.
 *
 * @returns {JSX.Element}
 */
export default function CtaSection() {
  return (
    <div className="relative z-1 w-full h-[812px] lg:h-[760px] flex flex-col justify-between pt-[16px]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        // poster={""}
        className="absolute z-[-1] top-0 left-0 w-full h-full object-cover"
        title={"Grid video"}
      >
        <source src={"/grid_video.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <CtaTop />
      <CtaFooter />
    </div>
  );
}
