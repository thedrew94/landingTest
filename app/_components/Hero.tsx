import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="relative">
      <Navbar />
      <div className="w-full h-[500px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          // poster={""}
          className="w-full h-full object-cover"
          title={"Particles video"}
        >
          <source src={"/particles_video.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
