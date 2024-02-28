import Breadcrumb from "../../components/breadcrumb/BreadcrumbSec";
import DownloadsLinksSec from "./DownloadsLinksSec/DownloadsLinksSec"; 
import FormModal from "../../components/formModal/FormModal"
import GrowthModal from "@/components/growthModal/GrowthModal";
import ThankYouModal from "@/components/thankyouModal/ThankYouModal";

export default function DownloadsPage() {
  return (
    <>
      <Breadcrumb /> 
      <DownloadsLinksSec />  
      <FormModal />
      <GrowthModal />
      <ThankYouModal />
    </>
  );
}
