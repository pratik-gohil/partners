
import FaqsSec from "./FaqsSec/FaqsSec";
import { getMetaData } from "../layout";

export async function generateMetadata() {
  const commonMetadata = getMetaData({
    title: 'FAQs on Sub Broker Program',
    description: 'Learn about the sub-broker program by Mirae Asset. Get answers to FAQs related to the partner program, revenue sharing on broekrage and interests, payouts and much more.',
    keywords: ['sub broker faqs', 'partner faq', 'partnership faq', 'partnership frequently asked questions']
  }, "faq");

  return commonMetadata;
}

export default function FaqsPage() {
  return (
    <>
      <FaqsSec />
    </>
  );
}
