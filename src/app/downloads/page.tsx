import Breadcrumb from "../../components/breadcrumb/BreadcrumbSec";
import DownloadsLinksSec from "./DownloadsLinksSec/DownloadsLinksSec"; 
import FormModal from "../../components/formModal/FormModal"
import GrowthModal from "@/components/growthModal/GrowthModal";

export default function DownloadsPage() {
  return (
    <>
      <Breadcrumb /> 
      <DownloadsLinksSec />  
      <FormModal />
      <GrowthModal />
    </>
  );
}
