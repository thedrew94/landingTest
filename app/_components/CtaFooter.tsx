import { svgSelector } from "../_utils/svgSelector";

export default function CtaFooter() {
  return (
    <div className="flex items-end h-[100px] xl:h-[168px]">
      <div className="w-full h-[49px] py-[8px] xl:h-[90px] xl:max-h-[90px] pl-[16px] xl:py-0 flex items-center bg-[#8778aa]">
        <h6 className="text-h7 xl:text-h3 text-[#6633FF]">Save the date</h6>
      </div>
      <button className="flex justify-center items-center w-[100px] xl:w-[168px] h-full xl:h-[168px] p-[20px] bg-black">
        {/* 60 x 44 */}
        <span className="block min-w-[76px] min-h-[76px] w-[76px] h-[76px] xl:min-w-[128px] xl:w-[128px] xl:min-h-[128px] xl:h-[128px]">
          {svgSelector({ svgName: "arrow_horizontal", svgWidth: "100%", svgHeight: "100%", svgFill: "#6633FF" })}
        </span>
      </button>
    </div>
  );
}
