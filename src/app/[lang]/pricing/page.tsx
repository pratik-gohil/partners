import PricingBannerSec from "./PricingBannerSec/PricingBannerSec";
import PricePayoutStructureSec from "./PricePayoutStructureSec/PricePayoutStructureSec";
import ViewDetailedPricesSec from "./ViewDetailedPricesSec/ViewDetailedPricesSec";
import RegOnboardChargesSec from "./RegOnboardChargesSec/RegOnboardChargesSec";
import { getMetaData } from "@/app/[lang]/layout";
import { getDictionary } from "@/lib/utils/dictionaries";

export async function generateMetadata() {
  const commonMetadata = getMetaData({
    title: 'Sub Broker Commission Structure - Sub Brokers Income',
    description: 'Interested in becoming a sub-broker or authorized partner? Explore the commission structure for sub-brokers at Mirae Asset Partners.',
    keywords: ['sub broker income', ' sub broker commission structure', 'sub broker earnings']
  }, "pricing");

  return commonMetadata;
}

export default async function PricingPage({ params: { lang } }: { params: { lang: string } }) {
  const dictionaries = {
    en: () => import('../home/dictionary/en.json').then((module) => module.default),
    hi: () => import('../home/dictionary/hi.json').then((module) => module.default),
    gu: () => import('../home/dictionary/gu.json').then((module) => module.default),
  }

  // @ts-ignore
  const dictionary = await getDictionary(dictionaries[lang])

  return (
    <>
      <PricingBannerSec dictionary={dictionary}/>
      <PricePayoutStructureSec dictionary={dictionary}/>
      <ViewDetailedPricesSec dictionary={dictionary}/>
      <RegOnboardChargesSec dictionary={dictionary}/>
    </>
  );
}
