import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/maHeader/Header";
// import Footer from "../components/maFooter/Footer";
const Footer = dynamic(() => import('@/components/maFooter/Footer'))
import styles from "./maCommanStyle.module.scss";
/* import { OpenSansRegular } from "@/styles/fonts"; */
import { PreloadResources } from "./preload-resources";
import dynamic from "next/dynamic";

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
      <body>
        <Header />
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
