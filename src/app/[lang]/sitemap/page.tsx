
import SitemapMenuList from "./SitemapMenuList/SitemapMenuList";
import { getMetaData } from "@/app/[lang]/layout";

export async function generateMetadata() {
  const commonMetadata = getMetaData({
    title: 'Sitemap',
    description: 'Explore Mirae Asset Partner platform online. Choose from a vast range of our products and become a smart investor.',
    keywords: ['sitemap']
  }, "sitemap");

  return commonMetadata;
}

export default function SitemapPage() {
  return (
    <>

      <SitemapMenuList />
    </>
  );
}
