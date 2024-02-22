import Advantage from "./home/Advantage";
import HeroSection from "./home/HeroSection/HeroSection";
import OtherBenifits from "./home/OtherBenifits";
import PartnerProgram from "./home/PartnerProgram";
import FaqsSec from "./home/FaqsSec/FaqsSec";
import RevenueSharing from "./home/RevenueSharing/RevenueSharing";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RevenueSharing />
      <PartnerProgram />
      <OtherBenifits />
      <Advantage />
      <FaqsSec />   
    </>
  );
}
