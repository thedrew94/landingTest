import { SponsorElInterface } from "@/types/interfaces";
import SponsorList from "./SponsorList";
import SponsorImg from "@/public/sponsor_1.png";

// SPONSORS MOCKUP DATA
// prettier-ignore
const sponsorsPrimary: Array<SponsorElInterface> = [{ name: "sponsor1", imgPath: SponsorImg }, { name: "sponsor1", imgPath: SponsorImg }, { name: "sponsor1", imgPath: SponsorImg }, { name: "sponsor1", imgPath: SponsorImg }, { name: "sponsor1", imgPath: SponsorImg }, { name: "sponsor1", imgPath: SponsorImg }, { name: "sponsor1", imgPath: SponsorImg }, { name: "sponsor1", imgPath: SponsorImg }, { name: "sponsor1", imgPath: SponsorImg }, { name: "sponsor1", imgPath: SponsorImg }];

// prettier-ignore
const sponsorsSecondary: Array<SponsorElInterface> = [{ name: "sponsor1", imgPath: SponsorImg }, { name: "sponsor1", imgPath: SponsorImg }, { name: "sponsor1", imgPath: SponsorImg }, { name: "sponsor1", imgPath: SponsorImg }, { name: "sponsor1", imgPath: SponsorImg }, { name: "sponsor1", imgPath: SponsorImg }, { name: "sponsor1", imgPath: SponsorImg }, { name: "sponsor1", imgPath: SponsorImg }, { name: "sponsor1", imgPath: SponsorImg }];

export default function SponsorsSection() {
  return (
    <div className="flex flex-col gap-[8px] w-full py-[128px] overflow-hidden">
      <SponsorList sponsorListData={sponsorsPrimary} />
      <SponsorList sponsorListData={sponsorsSecondary} />
    </div>
  );
}
