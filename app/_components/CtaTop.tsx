export default function CtaTop() {
  return (
    <div className="grid grid-cols-12 gap-[32px] xl:gap-4 xl:h-[296px] px-[16px]">
      <div className="flex flex-col gap-[16px] xl:gap-[32px] col-start-1 row-start-2 col-span-12 xl:col-start-1 xl:row-start-1 xl:col-span-4">
        <div>
          <span className="text-p xl:text-h4 text-opaque">Data:</span>
          <h3 className="text-p xl:text-h4">08.05.2025</h3>
        </div>
        <div>
          <span className="text-p xl:text-h4 text-opaque">Luogo:</span>
          <h3 className="text-p xl:text-h4">Villa Ciani, Lugano</h3>
        </div>
      </div>
      <div className="col-start-1 row-start-1 col-span-12 xl:col-start-5 xl:row-start-1 xl:col-span-8">
        <h2 className="text-h7 xl:text-h3">Lugano in Cifre: Dati e AI per la Città del Futuro</h2>
      </div>
    </div>
  );
}
