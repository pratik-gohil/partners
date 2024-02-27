import Breadcrumb from "../../components/breadcrumb/BreadcrumbSec";
import DownloadsLinksSec from "./DownloadsLinksSec/DownloadsLinksSec"; 
import FormModal from "../../components/formModal/FormModal"

export default function DownloadsPage() {
  return (
    <>
      <Breadcrumb /> 
      <DownloadsLinksSec />  
      <FormModal />
    </>
  );
}
