import HeroSection from "./home/HeroSection/HeroSection";
import dynamic from "next/dynamic";
const RevenueSharing = dynamic(() => import('@/app/home/RevenueSharing/RevenueSharing'))
const PartnerProgram = dynamic(() => import('@/app/home/PartnerProgram'))
const Advantage = dynamic(() => import('@/app/home/Advantage/Advantage'))
const ClientFeature = dynamic(() => import("@/app/home/ClientFeature/ClientFeature"))
const T2Month = dynamic(() => import('@/app/home/T2month/T2Month'))
const FaqsSec = dynamic(() => import("@/app/home/FaqsSec/FaqsSec"))
const WebinarRegBannerSec = dynamic(() => import("@/components/webinarRegBanner/WebinarRegBannerSec"));

export default function Home() {
  return (
    <>
      <HeroSection />
      <WebinarRegBannerSec />
      <RevenueSharing />
      <PartnerProgram />
      <Advantage />
      <ClientFeature />
      <T2Month />
      <FaqsSec />
    </>
  );
}
