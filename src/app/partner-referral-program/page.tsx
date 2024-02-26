import Breadcrumb from "../../components/breadcrumb/BreadcrumbSec";
import PartRefProBannerSec from "./PartRefProBannerSec/PartRefProBannerSec"; 
import StartPartnerReferringSec from "./StartPartnerReferringSec/StartPartnerReferringSec";
import BenefitsOfPartneringSec from "./BenefitsOfPartneringSec/BenefitsOfPartneringSec"; 
import EarnRewardsSec from "./EarnRewardsSec/EarnRewardsSec";
import HowToReferSec from "./HowToReferSec/HowToReferSec";
import FaqsSec from "./FaqsSec/FaqsSec";


export default function PartnerReferralProgramPage() {
  return (
    <>
      <Breadcrumb /> 
      <PartRefProBannerSec />  
      <StartPartnerReferringSec />
      <BenefitsOfPartneringSec />
      <EarnRewardsSec /> 
      <HowToReferSec />
      <FaqsSec />
    </>
  );
}
