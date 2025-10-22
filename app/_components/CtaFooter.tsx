import { svgSelector } from "../_utils/svgSelector";

export default function CtaFooter() {
  return (
    <div className="flex items-end h-[168px]">
      <div className="w-full h-[90px] max-h-[90px] pl-[16px] flex items-center bg-[#8778aa]">
        <h6 className="text-h3 text-[#6633FF]">Save the date</h6>
      </div>
      <button className="w-[168px] h-[168px] p-[20px] bg-black">
        {svgSelector({ svgName: "arrow_horizontal", svgWidth: "128", svgHeight: "128", svgFill: "#6633FF" })}
      </button>
    </div>
  );
}
