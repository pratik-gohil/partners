import Breadcrumb from "../../components/breadcrumb/BreadcrumbSec";
import ListOfAuthorisedPersonsSec from "./ListOfAuthorisedPersonsSec/ListOfAuthorisedPersonsSec"; 
import AccountOfDisciplinaryReasonsSec from "./AccountOfDisciplinaryReasonsSec/AccountOfDisciplinaryReasonsSec";


export default function PartnerListingPage() {
  return (
    <>
      <Breadcrumb /> 
      <ListOfAuthorisedPersonsSec /> 
      <AccountOfDisciplinaryReasonsSec /> 
    </>
  );
}
