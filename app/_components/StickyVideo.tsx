/**
 * A sticky video component that renders in the background and scrolls with the content until the section ends.
 *
 * @returns {JSX.Element}
 */

export default function StickyVideo() {
  return (
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
  );
}
