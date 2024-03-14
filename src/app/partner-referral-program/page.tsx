import PartRefProBannerSec from "./PartRefProBannerSec/PartRefProBannerSec";
import StartPartnerReferringSecC from "./StartPartnerReferringSec/StartPartnerReferringSecC";
import BenefitsOfPartneringSec from "./BenefitsOfPartneringSec/BenefitsOfPartneringSec";
import EarnRewardsSec from "./EarnRewardsSec/EarnRewardsSec";
import HowToReferSec from "./HowToReferSec/HowToReferSec";
import FaqsSec from "./FaqsSec/FaqsSec";
import { getMetaData } from "../layout";

export async function generateMetadata() {
  const commonMetadata = getMetaData({
    title: 'Refer a partner & earn ₹6,000',
    description: 'Refer and Earn ₹6000 instant rewards for each sub-broker referred to Mirae Asset Partners. Refer an Authorized Partner now & start earning!',
    keywords: ['partner refer and earn', 'partner referral', 'partner referral program']
  }, "partner-referral-program");

  return commonMetadata;
}

export default function PartnerReferralProgramPage() {
  return (
    <>
      <PartRefProBannerSec />
      <StartPartnerReferringSecC />
      <BenefitsOfPartneringSec />
      <EarnRewardsSec />
      <HowToReferSec />
      <FaqsSec />
    </>
  );
}
