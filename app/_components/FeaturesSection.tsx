import Slider from "./Slider";

/**
 * SliderSection component that renders an interactive slider with images and content using the use client.
 *
 * @returns {JSX.Element}
 */
export default function FeaturesSection() {
  return (
    <div className="py-[148.5px] lg:py-[119px]">
      {/* TOP ROW */}
      <div className="hidden lg:flex justify-between items-baseline-last pt-[16px] pb-[32px] px-[16px]">
        <p className="text-p">Progetti 8</p>
        <h3 className="text-h3">L*3 in evidenza</h3>
        <p className="text-p">[ Tutti i progetti ]</p>
      </div>
      <div className="flex flex-col gap-[24px] pb-[32px] pt-[16px] px-[16px] lg:hidden">
        <h3 className="text-h7">L*3 in evidenza</h3>
        <div className="flex justify-between items-center w-full">
          <p className="text-p">Progetti 8</p>
          <p className="text-p">[ Tutti i progetti ]</p>
        </div>
      </div>
      {/* SLIDER */}
      <Slider />
    </div>
  );
}
