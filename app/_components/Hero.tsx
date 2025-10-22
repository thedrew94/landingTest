export default function Hero() {
  return (
    <div className="relative w-full h-[calc(100vh-32px)] flex items-end">
      <div className="absolute z-1 w-full top-1/2 translate-y-[-50%] flex justify-between">
        <p className="text-p">Tecnologia</p>
        <p className="text-p">Innovazione</p>
        <p className="text-p">Digitale</p>
      </div>

      <h1 className="text-h1">
        Lugano <br />
        Living Lab
      </h1>

      <span className="absolute bottom-0 right-0 text-p">/// Scroll to explore</span>
    </div>
  );
}
