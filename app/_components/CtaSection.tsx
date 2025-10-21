export default function CtaSection() {
  return (
    <div className="relative z-1 w-full h-[760px] flex flex-col justify-between pt-[16px]">
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
      {/* GRID COMPONENT */}
      <div className="grid grid-cols-12 gap-4 h-[296px] px-[16px]">
        <div className="flex flex-col gap-[32px] col-start-1 row-start-1 col-span-4">
          <div>
            <span className="text-h4 text-opaque">Data:</span>
            <h3 className="text-h4">08.05.2025</h3>
          </div>
          <div>
            <span className="text-h4 text-opaque">Luogo:</span>
            <h3 className="text-h4">Villa Ciani, Lugano</h3>
          </div>
        </div>
        <div className="col-start-5 row-start-1 col-span-8">
          <h2 className="text-h3">Lugano in Cifre: Dati e AI per la Città del Futuro</h2>
        </div>
      </div>

      <div>
        <div>Save the date</div>
        <button>A</button>
      </div>
    </div>
  );
}
