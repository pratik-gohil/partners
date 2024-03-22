
import FaqsSec from "./FaqsSec/FaqsSec";
import { getMetaData } from "@/app/[lang]/layout";
import { getDictionary } from "@/lib/utils/dictionaries";

export async function generateMetadata() {
  const commonMetadata = getMetaData({
    title: 'FAQs on Sub Broker Program',
    description: 'Learn about the sub-broker program by Mirae Asset. Get answers to FAQs related to the partner program, revenue sharing on broekrage and interests, payouts and much more.',
    keywords: ['sub broker faqs', 'partner faq', 'partnership faq', 'partnership frequently asked questions']
  }, "faq");

  return commonMetadata;
}


export default async function FaqsPage({ params: { lang } }: { params: { lang: string } }) {
  const dictionaries = {
    en: () => import('../home/dictionary/en.json').then((module) => module.default),
    hi: () => import('../home/dictionary/hi.json').then((module) => module.default),
  }

 // @ts-ignore
 const dictionary = await getDictionary(dictionaries[lang])

  return (
    <>
      <FaqsSec dictionary={dictionary} lang={lang}/>
    </>
  );
}
