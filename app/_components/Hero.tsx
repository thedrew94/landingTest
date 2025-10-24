/**
 * Main hero section.
 *
 * @returns {JSX.Element}
 */
export default function Hero() {
  return (
    <div className="relative w-full min-h-[500px] h-[calc(100vh-32px)] flex flex-col justify-end gap-[16px] lg:gap-0 lg:items-end lg:justify-start lg:flex-row">
      <div className="absolute z-1 w-full top-1/2 translate-y-[-50%] flex justify-between">
        <p className="text-p">Tecnologia</p>
        <p className="text-p">Innovazione</p>
        <p className="text-p">Digitale</p>
      </div>

      <h1 className="text-h8 lg:text-h1">
        Lugano <br />
        Living Lab
      </h1>

      <span className="ml-auto lg:ml-0 lg:absolute bottom-0 right-0 text-p">/// Scroll to explore</span>
    </div>
  );
}
