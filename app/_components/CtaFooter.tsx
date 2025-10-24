import { svgSelector } from "../_utils/svgSelector";

export default function CtaFooter() {
  return (
    <div className="flex items-end h-[100px] lg:h-[168px]">
      <div className="w-full h-[49px] py-[8px] lg:h-[90px] lg:max-h-[90px] pl-[16px] lg:py-0 flex items-center bg-[#8778aa]">
        <h6 className="text-h7 lg:text-h3 text-[#6633FF]">Save the date</h6>
      </div>
      <button className="flex justify-center items-center w-[100px] lg:w-[168px] h-full lg:h-[168px] p-[20px] bg-black">
        <span className="block min-w-[76px] min-h-[76px] w-[76px] h-[76px] lg:min-w-[128px] lg:w-[128px] lg:min-h-[128px] lg:h-[128px]">
          {svgSelector({ svgName: "arrow_horizontal", svgWidth: "100%", svgHeight: "100%", svgFill: "#6633FF" })}
        </span>
      </button>
    </div>
  );
}
