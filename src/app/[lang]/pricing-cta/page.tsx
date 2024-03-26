import PricingCTABannerSec from "./PricingCTABannerSec/PricingCTABannerSec";
import { getMetaData } from "@/app/[lang]/layout";

export async function generateMetadata() {
    const commonMetadata = getMetaData({
        title: 'Sub Broker Commission Structure - Sub Brokers Income',
        description: 'Interested in becoming a sub-broker or authorized partner? Explore the commission structure for sub-brokers at Mirae Asset Partners.',
        keywords: ['sub broker income', ' sub broker commission structure', 'sub broker earnings']
    }, "pricing CTA");

    return commonMetadata;
}

export default function PricingCTA() {
    return (
        <>
            <PricingCTABannerSec />
        </>
    );
}