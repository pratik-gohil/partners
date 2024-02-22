import Advantage from "./home/Advantage";
import HeroSection from "./home/HeroSection/HeroSection";
import OtherBenifits from "./home/OtherBenifits";
import PartnerProgram from "./home/PartnerProgram";
import RevenueSharing from "./home/RevenueSharing/RevenueSharing";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RevenueSharing />
      <PartnerProgram />
      <OtherBenifits />
      <Advantage />
    </>
  );
}
