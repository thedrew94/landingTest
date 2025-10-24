import { SponsorElInterface } from "@/types/interfaces";
import SponsorList from "./SponsorList";
import SponsorImg1 from "@/public/sponsor_1.png";
import SponsorImg2 from "@/public/sponsor_4.png";
import SponsorImg3 from "@/public/sponsor_3.png";
import SponsorImg4 from "@/public/sponsor_4.png";
import SponsorImg5 from "@/public/sponsor_5.png";
import SponsorImg6 from "@/public/sponsor_6.png";
import SponsorImg7 from "@/public/sponsor_7.png";

// SPONSORS MOCKUP DATA
// prettier-ignore
const sponsorsPrimary: Array<SponsorElInterface> = [{ name: "sponsor1", imgPath: SponsorImg1 }, { name: "sponsor1", imgPath: SponsorImg2 }, { name: "sponsor1", imgPath: SponsorImg3 }, { name: "sponsor1", imgPath: SponsorImg4 }, { name: "sponsor1", imgPath: SponsorImg5 }, { name: "sponsor1", imgPath: SponsorImg6 }, { name: "sponsor1", imgPath: SponsorImg7 }, { name: "sponsor1", imgPath: SponsorImg1 }, { name: "sponsor1", imgPath: SponsorImg2 }, { name: "sponsor1", imgPath: SponsorImg3 }];

// prettier-ignore
const sponsorsSecondary: Array<SponsorElInterface> = [{ name: "sponsor1", imgPath: SponsorImg1 }, { name: "sponsor1", imgPath: SponsorImg2 }, { name: "sponsor1", imgPath: SponsorImg3 }, { name: "sponsor1", imgPath: SponsorImg4 }, { name: "sponsor1", imgPath: SponsorImg5 }, { name: "sponsor1", imgPath: SponsorImg6 }, { name: "sponsor1", imgPath: SponsorImg7 }, { name: "sponsor1", imgPath: SponsorImg1 }, { name: "sponsor1", imgPath: SponsorImg2 }];

/**
 * Rendering multiple lists in rows of the sponsors
 *
 * @returns {JSX.Element}
 */
export default function SponsorsSection() {
  return (
    <div className="flex flex-col gap-[8px] w-full py-[96px] xl:py-[128px] overflow-hidden">
      <SponsorList sponsorListData={sponsorsPrimary} />
      <SponsorList sponsorListData={sponsorsSecondary} />
    </div>
  );
}
