import { Metadata } from 'next'
import PricingBannerSec from "./PricingBannerSec/PricingBannerSec";
import PricePayoutStructureSec from "./PricePayoutStructureSec/PricePayoutStructureSec";
import ViewDetailedPricesSec from "./ViewDetailedPricesSec/ViewDetailedPricesSec";
import RegOnboardChargesSec from "./RegOnboardChargesSec/RegOnboardChargesSec";



export const metadata: Metadata = {
  title: 'Sub Broker Commission Structure - Sub Brokers Income',
  description: 'Interested in becoming a sub-broker or authorized partner? Explore the commission structure for sub-brokers at Mirae Asset Partners.',
  keywords: ['sub broker income', ' sub broker commission structure', 'sub broker earnings'],
  openGraph: {
    title: 'Sub Broker Commission Structure - Sub Brokers Income',
    description: 'Interested in becoming a sub-broker or authorized partner? Explore the commission structure for sub-brokers at Mirae Asset Partners.',
    url: 'https://www.miraeassetpartners.com',
    siteName: 'Mirae Asset Partners',
    images: [
      {
        url: 'https://www.miraeassetpartners.com/asset/images/mirae-logo.svg', // Must be an absolute URL
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Sub Broker Commission Structure - Sub Brokers Income | Mirae Asset Partners',
    description: 'Interested in becoming a sub-broker or authorized partner? Explore the commission structure for sub-brokers at Mirae Asset Partners.',
    siteId: 'Mirae Asset Partners',
    images: ['https://www.miraeassetpartners.com/asset/images/mirae-logo.svg'], // Must be an absolute URL
  },
  icons: {
    icon: 'asset/images/favicon.png',
    shortcut: 'asset/images/favicon.png',
  },
  alternates: {
    canonical: 'https://www.miraeassetpartners.com',
    languages: {
      'en-in': 'https://www.miraeassetpartners.com',
      'hi-in': 'https://www.miraeassetpartners.com/hi',
      'gu-in': 'https://www.miraeassetpartners.com/gu',
      'ta-in': 'https://www.miraeassetpartners.com/ta',
    },
  },
}
export default function PricingPage() {
  return (
    <>

      <PricingBannerSec />
      <PricePayoutStructureSec />
      <ViewDetailedPricesSec />
      <RegOnboardChargesSec />
    </>
  );
}
