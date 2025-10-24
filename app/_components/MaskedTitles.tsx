/**
 * The MaskedTitles section will render out some catch phrases/moto.
 *
 * @returns {JSX.Element}
 */
export default function MaskedTitles() {
  return (
    <div className="relative h-full pt-[96px] pb-[49px] xl:pt-[128px] xl:pb-[64px] px-[16px] overflow-hidden">
      <h2 className="text-left xl:translate-x-[29px] text-h9 xl:text-h2">Ascoltiamo</h2>
      <h2 className="text-right xl:text-left xl:translate-x-[279px] text-h9 xl:text-h2">Sperimentiamo</h2>
      <h2 className="text-left xl:translate-x-[198px] text-h9 xl:text-h2">Misuriamo</h2>
      <h2 className="text-right xl:text-left xl:translate-x-[678px] text-h9 xl:text-h2">Diffondiamo</h2>
    </div>
  );
}
