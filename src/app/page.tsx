import Advantage from "./home/Advantage";
import HeroSection from "./home/HeroSection";
import OtherBenifits from "./home/OtherBenifits";
import PartnerProgram from "./home/PartnerProgram";
import RevenueSharing from "./home/RevenueSharing";
import FaqsSec from "./home/FaqsSec/FaqsSec";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <RevenueSharing />
      <PartnerProgram />
      <OtherBenifits />
      <Advantage />
      <FaqsSec />
    </section>
  );
}
