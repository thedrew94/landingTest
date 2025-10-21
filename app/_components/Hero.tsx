import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="relative p-[16px] bg-background">
      <Navbar />
      <div className="relative z-1 w-full h-[calc(100vh-32px)] flex items-end">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          // poster={""}
          className="absolute z-[-1] top-0 left-0 w-full h-full object-cover"
          title={"Particles video"}
        >
          <source src={"/particles_video.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute z-1 w-full top-1/2 translate-y-[-50%] flex justify-between">
          <p className="text-p">Tecnologia</p>
          <p className="text-p">Innovazione</p>
          <p className="text-p">Digitale</p>
        </div>

        <h1 className="text-h1">
          Lugano <br />
          Living Lab
        </h1>
      </div>
    </div>
  );
}
