import { SponsorElInterface } from "@/types/interfaces";

interface Props {
  sponsorListData: Array<SponsorElInterface>;
}

export default function SponsorList({ sponsorListData = [] }: Props) {
  return (
    <ul className="flex justify-center items-center gap-[8px]">
      {sponsorListData &&
        sponsorListData.length > 0 &&
        sponsorListData.map((sEl, idx) => {
          return (
            <li
              key={`sponsor_el_${idx}`}
              className="min-w-[180px] w-[180px] p-[24px] aspect-square bg-[rgba(255,255,255,0.16)]"
            ></li>
          );
        })}
    </ul>
  );
}
