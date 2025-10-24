/**
 * The MaskedTitles section will render out some catch phrases/moto.
 *
 * @returns {JSX.Element}
 */
export default function MaskedTitles() {
  return (
    <div className="relative h-full pt-[96px] pb-[49px] lg:pt-[128px] lg:pb-[64px] px-[16px] overflow-hidden">
      <h2 className="text-left lg:translate-x-[29px] text-h9 lg:text-h2">Ascoltiamo</h2>
      <h2 className="text-right lg:text-left lg:translate-x-[279px] text-h9 lg:text-h2">Sperimentiamo</h2>
      <h2 className="text-left lg:translate-x-[198px] text-h9 lg:text-h2">Misuriamo</h2>
      <h2 className="text-right lg:text-left lg:translate-x-[678px] text-h9 lg:text-h2">Diffondiamo</h2>
    </div>
  );
}
