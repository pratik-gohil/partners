import DownloadsLinksSec from "./DownloadsLinksSec/DownloadsLinksSec";
import { getMetaData } from "@/app/[lang]/layout";

export async function generateMetadata() {
  const commonMetadata = getMetaData({
    title: 'Download Forms',
    description: 'Now you can easily download all documents related to authorized partner program on Mirae Asset Partners. Visit for more information.',
    keywords: ['authorized partner list', 'authorized partners']
  }, "downloads");

  return commonMetadata;
}

export default function DownloadsPage() {
  return (
    <>
      <DownloadsLinksSec />
    </>
  );
}
