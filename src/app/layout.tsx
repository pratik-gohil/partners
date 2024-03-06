import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/maHeader/Header";
// import Footer from "../components/maFooter/Footer";
const Footer = dynamic(() => import('@/components/maFooter/Footer'))
import styles from "./maCommanStyle.module.scss";
import { openSans } from "@/styles/fonts";
import { PreloadResources } from "./preload-resources";
import dynamic from "next/dynamic";
import BreadcrumbSec from "@/components/breadcrumb/BreadcrumbSec";

export const metadata: Metadata = {
  title: "Mirae Assets Partners",
  description: "Mirae Assets Partners",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${styles.maPartnersPage}`}>
      <PreloadResources />
      <body className={openSans.className}>
        <Header />
        <main className={styles.main}>
          <BreadcrumbSec />
          {children}
        </main>
        <Footer />
        <div id='modal-portal' />
      </body>
    </html>
  );
}
