export default function Video() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      // TODO: add poster fallback img
      // poster={""}
      className="w-full h-full object-cover"
      title={"Particles video"}
    >
      <source src={"/particles_video.mp4"} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
