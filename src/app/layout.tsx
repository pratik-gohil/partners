import "./globals.css";
import Header from "../components/maHeader/Header";
const Footer = dynamic(() => import('@/components/maFooter/Footer'))
import styles from "./maCommanStyle.module.scss";
import { PreloadResources } from "./preload-resources";
import dynamic from "next/dynamic";
import BreadcrumbSec from "@/components/breadcrumb/BreadcrumbSec";
import Script from "next/script";

export let commonMetadata = {
  openGraph: {
    url: 'https://www.miraeassetpartners.com',
    siteName: 'Mirae Asset Partners',
    images: [
      {
        url: 'https://www.miraeassetpartners.com/asset/images/mirae-logo.svg', // Must be an absolute URL
      }
    ],
    type: 'website',
  },

  twitter: {
    site: "Mirae Asset Partners",
    card: 'summary',
    images: ['https://www.miraeassetpartners.com/asset/images/mirae-logo.svg'], // Must be an absolute URL
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.miraeassetpartners.com',
    languages: {
      'en-in': 'https://www.miraeassetpartners.com',
      'hi-in': 'https://www.miraeassetpartners.com/hi',
      'gu-in': 'https://www.miraeassetpartners.com/gu',
      'ta-in': 'https://www.miraeassetpartners.com/ta',
    },
  },
}

export const getMetaData = (data: any, path: string = "") => {
  const commonMetadataCopy = JSON.parse(JSON.stringify(commonMetadata))
  commonMetadataCopy.openGraph.url = "https://www.miraeassetpartners.com/" + path
  commonMetadataCopy.alternates.canonical = "https://www.miraeassetpartners.com/" + path

  const langs = ["hi", "gu", "ta", "en"]

  langs.forEach(lang => {
    // @ts-ignore
    commonMetadataCopy.alternates.languages[lang + "-in"] = "https://www.miraeassetpartners.com/"
      + lang
      + "/"
      + path
  })

  return {
    ...commonMetadataCopy, ...data, other: {
      title: data.title + " | Mirae Asset Partners",
    },
  };
}

export async function generateMetadata() {
  return {
    title: {
      template: '%s | Mirae Asset Partners',
      default: 'Become A Sub Broker - Partner With Us | Mirae Asset Partners', // a default is required when creating a template
    },
    description: 'Become a sub broker or authorized partner with Mirae Asset. Earn 100% revenue sharing, high pay-outs, easy dashboard & more. Join Mirae Asset partner program today!',
    keywords: ['become a sub broker', 'partner with us', 'become an authorized partner'],
    metadataBase: new URL('http://localhost:3000'),
    ...commonMetadata
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${styles.maPartnersPage}`}>
      <PreloadResources />
      <body>
        <Header />
        <main className={styles.main}>
          <BreadcrumbSec />
          {children}
        </main>
        <Footer />
        <div id='modal-portal' />
      </body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=GTM-NTX7SZZG"
        strategy="beforeInteractive"
      />
      <Script
        id="gtm-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', "GTM-NTX7SZZG");
          `,
        }}
      />
    </html>
  );
}
