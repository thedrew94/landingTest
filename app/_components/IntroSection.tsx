/**
 * IntroSection component that renders the primary information about the website.
 *
 * @returns {JSX.Element}
 */
export default function IntroSection() {
  return (
    <div className="flex flex-col gap-[192px] lg:gap-[256px] pt-[192px] pb-[96px] lg:pt-[256px] lg:pb-[128px] px-[16px]">
      <div className="relative">
        <span className="absolute top-0 left-0 text-h7 lg:text-h3">*</span>
        <h2 className="indent-[80px] lg:indent-[475px] text-h7 lg:text-h3">
          Il laboratorio urbano della Città di Lugano.
          <br />
          <br />
        </h2>
        <h3 className="text-h7 lg:text-h3">
          Promuoviamo e facilitiamo l'innovazione digitale e tecnologica, creando, testando e implementando soluzioni
          pensate per una città più intelligente, ma sempre a misura d’uomo.
        </h3>
      </div>
      <div className="flex items-center flex-wrap lg:flex-nowrap gap-x-[16px] gap-y-[32px] lg:gap-[16px] pt-[48px] lg:pt-[64px] border-row">
        <div className="w-full max-w-[163.5px] lg:max-w-full">
          <span className="text-p text-[#B38FFF]">Visione</span>
          <p className="text-h8 lg:text-h6">2030</p>
        </div>
        <div className="w-full max-w-[163.5px] lg:max-w-full">
          <span className="text-p text-[#B38FFF]">Progetti pilota</span>
          <p className="text-h8 lg:text-h6">40+</p>
        </div>
        <div className="w-full max-w-[163.5px] lg:max-w-full">
          <span className="text-p text-[#B38FFF]">Partner coinvolti</span>
          <p className="text-h8 lg:text-h6">100+</p>
        </div>
      </div>
    </div>
  );
}
