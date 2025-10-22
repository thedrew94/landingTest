export default function Loading() {
  return (
    <div className="flex flex-col justify-between w-full h-screen bg-black">
      <div className="flex flex-col justify-between w-full h-full p-[16px]">
        <h1 className="text-special">
          Lugano
          <br /> Living Lab
        </h1>
        <div className="ml-auto">
          <span className="text-h6">0</span>
          <span className="text-h6">0</span>
          <span className="text-h6">0</span>
        </div>
      </div>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        // poster={""}
        className="w-full h-[38px] object-cover"
        title={"Particles video"}
      >
        <source src={"/grid_video.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
