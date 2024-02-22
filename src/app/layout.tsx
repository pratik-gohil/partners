import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/maHeader/Header";
import Footer from "../components/maFooter/Footer";
import styles from "./maCommanStyle.module.scss";
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
    <html lang="en" className={styles.maPartnersPage}>
      <body>  
        <Header />
        <main>
        {children} 
        </main>
        <Footer />
      </body>
    </html>
  );
}
