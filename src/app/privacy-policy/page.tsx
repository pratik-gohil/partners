import Breadcrumb from "@/components/breadcrumb/BreadcrumbSec";
import PolicyNavigation from "@/components/policyNavigation/PolicyNavigation";
import styles from "../../styles/Static.module.scss";


export default function PrivacyPolicy() {
  return (
    <>
      <Breadcrumb />
      <section className={`${styles.staticSec}`}>
        <div className={`${styles.maContainer}`}>
          <h2 className={`${styles.secTitle}`}>Our Policies</h2>
          <p className={`${styles.textCenter} ${styles.font14}`}>We suggest you go through our policies carefully, and keep visiting for updates.</p>
          <PolicyNavigation />
          <div className={`${styles.mainworTc} ${styles.pb40}`}>
            <h1 className={`${styles.title}`}>Privacy Policy</h1>
            <p>
              We at Mirae Asset Capital Markets (India) Private Limited, recognize the
              importance of protecting your personal and financial information. We assure
              that the information parted to us will kept in strict confidentiality and to
              use the information only for to help us service your requirement, to improve
              our services to you, to provide you with products you have requested, and to
              inform you about additional products or services that may be of interest to
              you.
              <br />
              <br />
              This site contains links to other web sites,Mirae Asset Capital Markets
              (India) Private Limited is not responsible for the privacy practices or the
              content of such web sites.
            </p>
          </div>
        </div>        
      </section>
    </>
  );
}
