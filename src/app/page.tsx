import HeroSection from "./home/HeroSection/HeroSection";
import dynamic from "next/dynamic";
// import RevenueSharing from "./home/RevenueSharing/RevenueSharing";
// import PartnerProgram from "./home/PartnerProgram";
// import Advantage from "./home/Advantage/Advantage";
// import ClientFeature from "./home/ClientFeature/ClientFeature";
// import T2Month from "./home/T2month/T2Month";
// import FaqsSec from "./home/FaqsSec/FaqsSec";
const RevenueSharing = dynamic(() => import('@/app/home/RevenueSharing/RevenueSharing'))
const PartnerProgram = dynamic(() => import('@/app/home/PartnerProgram'))
const Advantage = dynamic(() => import('@/app/home/Advantage/Advantage'))
const ClientFeature = dynamic(() => import("@/app/home/ClientFeature/ClientFeature"))
const T2Month = dynamic(() => import('@/app/home/T2month/T2Month'))
const FaqsSec = dynamic(() => import("@/app/home/FaqsSec/FaqsSec"))

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
