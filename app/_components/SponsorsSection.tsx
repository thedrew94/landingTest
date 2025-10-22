import { SponsorElInterface } from "@/types/interfaces";
import SponsorList from "./SponsorList";

// SPONSORS MOCKUP DATA
// prettier-ignore
const sponsorsPrimary: Array<SponsorElInterface> = [{ name: "sponsor1", imgPath: "" }, { name: "sponsor1", imgPath: "" }, { name: "sponsor1", imgPath: "" }, { name: "sponsor1", imgPath: "" }, { name: "sponsor1", imgPath: "" }, { name: "sponsor1", imgPath: "" }, { name: "sponsor1", imgPath: "" }, { name: "sponsor1", imgPath: "" }, { name: "sponsor1", imgPath: "" }, { name: "sponsor1", imgPath: "" }];

// prettier-ignore
const sponsorsSecondary: Array<SponsorElInterface> = [{ name: "sponsor1", imgPath: "" }, { name: "sponsor1", imgPath: "" }, { name: "sponsor1", imgPath: "" }, { name: "sponsor1", imgPath: "" }, { name: "sponsor1", imgPath: "" }, { name: "sponsor1", imgPath: "" }, { name: "sponsor1", imgPath: "" }, { name: "sponsor1", imgPath: "" }, { name: "sponsor1", imgPath: "" }];

export default function SponsorsSection() {
  return (
    <div className="flex flex-col gap-[8px] w-full py-[128px] overflow-hidden">
      <SponsorList sponsorListData={sponsorsPrimary} />
      <SponsorList sponsorListData={sponsorsSecondary} />
    </div>
  );
}
