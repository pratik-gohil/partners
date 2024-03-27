import HeroSection from "./home/HeroSection/HeroSection";
import dynamic from "next/dynamic";
import { getDictionary } from "@/lib/utils/dictionaries";
import http from "@/lib/http/http";
import { cookies } from "next/headers";
const RevenueSharing = dynamic(() => import('@/app/[lang]/home/RevenueSharing/RevenueSharing'))
const PartnerProgram = dynamic(() => import('@/app/[lang]/home/PartnerProgram'))
const Advantage = dynamic(() => import('@/app/[lang]/home/Advantage/Advantage'))
const ClientFeature = dynamic(() => import("@/app/[lang]/home/ClientFeature/ClientFeature"))
const T2Month = dynamic(() => import('@/app/[lang]/home/T2month/T2Month'))
const FaqsSec = dynamic(() => import("@/app/[lang]/home/FaqsSec/FaqsSec"))
import WebinarRegBannerSec from "@/components/webinarRegBanner/WebinarRegBannerSec";

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dictionaries = {
    en: () => import('./home/dictionary/en.json').then((module) => module.default),
    hi: () => import('./home/dictionary/hi.json').then((module) => module.default),
    gu: () => import('./home/dictionary/gu.json').then((module) => module.default),
  }

  // @ts-ignore
  const dictionary = await getDictionary(dictionaries[lang])

  const res = await http("/partners/getWebinarEvent", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: 'no-store'
  }, { ssr: true });

  const data = await res.json()
  const bannerData = { titleVal: data.data.title, dateVal: data.data.date, timeVal: data.data.time, urlVal: data.data.url }
  const isActive = !!data.data.isActive;
  const webPop = data.data.url == "" || data.data.url == null
  const webLink = !webPop

  const cookieStore = cookies()
  const userAgent = cookieStore.get('userAgent') || "desktop";
  const isDesktop = userAgent === "desktop";

  return (
    <>
      <HeroSection dictionary={dictionary} />
      <WebinarRegBannerSec isDesktop={isDesktop} bannerData={bannerData} isActive={isActive} webPop={webPop} webLink={webLink} />
      <RevenueSharing dictionary={dictionary} />
      <PartnerProgram dictionary={dictionary} />
      <Advantage dictionary={dictionary} />
      <ClientFeature dictionary={dictionary} />
      <T2Month dictionary={dictionary} />
      <FaqsSec dictionary={dictionary} lang={lang} />
    </>
  );
}
