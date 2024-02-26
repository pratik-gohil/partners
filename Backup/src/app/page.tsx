import HeroSection from "./home/HeroSection/HeroSection";
import RevenueSharing from "./home/RevenueSharing/RevenueSharing"; 
import PartnerProgram from "./home/PartnerProgram";
import Advantage from "./home/Advantage/Advantage";
import ClientFeature from "./home/ClientFeature/ClientFeature";
import T2Month from "./home/T2month/T2Month";
import FaqsSec from "./home/FaqsSec/FaqsSec";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RevenueSharing />
      <PartnerProgram /> 
      <Advantage />
      <ClientFeature />
      <T2Month />
      <FaqsSec />
    </>
  );
}
