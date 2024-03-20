import PolicyNavigation from "@/components/policyNavigation/PolicyNavigation";
import styles from "../../styles/Static.module.scss";
import { getMetaData } from "../layout";

export async function generateMetadata() {
  const commonMetadata = getMetaData({
    title: 'Privacy Policy for Authorized Partners',
    description: 'Privacy policy for authorized partners - We are dedicated to protecting your privacy. If we ask for personal details from you, we will do it in accordance with this privacy statement.',
    keywords: ['']
  }, "privacy-policy");

  return commonMetadata;
}

export default function PrivacyPolicy() {
  return (
    <>
      <section className={`${styles.staticSec}`}>
        <div className={`${styles.maContainer}`}>
          <PolicyNavigation showPolicyNav={true} />
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
              This site contains links to other web sites, Mirae Asset Capital Markets
              (India) Private Limited is not responsible for the privacy practices or the
              content of such web sites.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
