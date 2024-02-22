import Advantage from "./home/Advantage/Advantage";
import ClientFeature from "./home/ClientFeature/ClientFeature";
import HeroSection from "./home/HeroSection";
import OtherBenifits from "./home/OtherBenifits";
import PartnerProgram from "./home/PartnerProgram";
import RevenueSharing from "./home/RevenueSharing";
import T2Month from "./home/T2month/T2Month";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <RevenueSharing />
      <PartnerProgram />
      <OtherBenifits />
      <Advantage />
      <ClientFeature />
      <T2Month/>
    </section>
  );
}
