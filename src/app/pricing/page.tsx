import Breadcrumb from "../../components/breadcrumb/BreadcrumbSec";
import PricingBannerSec from "./PricingBannerSec/PricingBannerSec";
import PricePayoutStructureSec from "./PricePayoutStructureSec/PricePayoutStructureSec";
import ViewDetailedPricesSec from "./ViewDetailedPricesSec/ViewDetailedPricesSec";
import RegOnboardChargesSec from "./RegOnboardChargesSec/RegOnboardChargesSec";


export default function PricingPage() {
  return (
    <>
      <Breadcrumb /> 
      <PricingBannerSec /> 
      <PricePayoutStructureSec />
      <ViewDetailedPricesSec />
      <RegOnboardChargesSec />
    </>
  );
}
