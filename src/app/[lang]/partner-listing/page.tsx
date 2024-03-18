import ListOfAuthorisedPersonsSec from "./ListOfAuthorisedPersonsSec/ListOfAuthorisedPersonsSec";
import AccountOfDisciplinaryReasonsSec from "./AccountOfDisciplinaryReasonsSec/AccountOfDisciplinaryReasonsSec";
import { getMetaData } from "@/app/[lang]/layout";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const commonMetadata = getMetaData({
    title: 'Our Authorized Partner Listing',
    description: 'Get the latest information about our authorized partners listing details at Mirae Asset Partners. Visit us to stay updated and invest wisely!',
    keywords: ['authorized partner list', ' authorized partners']
  }, "partner-listing");

  return commonMetadata;
}

export default function PartnerListingPage() {
  return (
    <>
      <ListOfAuthorisedPersonsSec />
      <AccountOfDisciplinaryReasonsSec />
    </>
  );
}
