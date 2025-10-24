import { SponsorElInterface } from "@/types/interfaces";
import Image from "next/image";

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
              className="min-w-[129px] w-[129px] xl:min-w-[180px] xl:w-[180px] p-[16px] xl:p-[24px] aspect-square bg-[rgba(255,255,255,0.16)]"
            >
              <div className="relative w-full h-full opacity-100 mix-blend-lighten">
                <Image
                  className="object-cover"
                  src={sEl.imgPath || "/fallback-image.png"}
                  alt={sEl.name || "Sponsor Image"}
                  // placeholder="blur"
                  // blurDataURL={"sponsor_1.png"}
                  quality={80}
                  fill
                />
              </div>
            </li>
          );
        })}
    </ul>
  );
}
