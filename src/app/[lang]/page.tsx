import HeroSection from "./home/HeroSection/HeroSection";
import dynamic from "next/dynamic";
import WebinarRegBannerSec from "@/components/webinarRegBanner/WebinarRegBannerSec";
import { getDictionary } from "@/lib/utils/dictionaries";
const RevenueSharing = dynamic(() => import('@/app/[lang]/home/RevenueSharing/RevenueSharing'))
const PartnerProgram = dynamic(() => import('@/app/[lang]/home/PartnerProgram'))
const Advantage = dynamic(() => import('@/app/[lang]/home/Advantage/Advantage'))
const ClientFeature = dynamic(() => import("@/app/[lang]/home/ClientFeature/ClientFeature"))
const T2Month = dynamic(() => import('@/app/[lang]/home/T2month/T2Month'))
const FaqsSec = dynamic(() => import("@/app/[lang]/home/FaqsSec/FaqsSec"))

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dictionaries = {
    en: () => import('./home/dictionary/en.json').then((module) => module.default),
    hi: () => import('./home/dictionary/hi.json').then((module) => module.default),
  }

  // @ts-ignore
  const dictionary = await getDictionary(dictionaries[lang])

  return (
    <>
      <HeroSection dictionary={dictionary} />
      <WebinarRegBannerSec />
      <RevenueSharing />
      <PartnerProgram />
      <Advantage dictionary={dictionary}/>
      <ClientFeature dictionary={dictionary}/>
      <T2Month dictionary={dictionary}/>
      <FaqsSec dictionary={dictionary} lang={lang}/>
    </>
  );
}
