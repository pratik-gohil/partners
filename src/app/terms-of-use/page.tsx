import Breadcrumb from "../../components/breadcrumb/BreadcrumbSec";
import PolicyNavigation from "@/components/policyNavigation/PolicyNavigation";
import styles from "../../styles/Static.module.scss";


export default function TermOfUse() {
  return (
    <>

      <Breadcrumb />
      <section className={`${styles.staticSec}`}>
        <div className={`${styles.maContainer}`}>
          <h2 className={`${styles.secTitle}`}>Our Policies</h2>
          <p className={`${styles.textCenter} ${styles.font14}`}>We suggest you go through our policies carefully, and keep visiting for updates.</p>
          {/* <PolicyNavigation /> */}
          <div className={`${styles.mainworTc} ${styles.pb40}`}>
            <h1 className={`${styles.title}`}>Terms of Use</h1>
            <ol className={`${styles.termsList}`}>
              <li>
                I understand that my account would be opened as per name appearing in Income
                Tax records and the same would be activated after all procedure relating to
                client due diligence in accordance with regulatory guidelines is completed.
              </li>
              <li>
                I authorize Mirae Asset Capital Markets (India) Private Limited (“MACM”) to
                contact me including but not restricted to call/sms and sending WhatsApp
                communication to me even though mymobile no. may be registered under DND/DNC
                Registry.
              </li>
              <li>
                I authorize MACM to undertake my KYC online through KRA/Aadhaar/Digi locker
                based on authentication of opening Trading and Demat account with MACM.
              </li>
              <li>
                I understand that Investment in securities markets are subject to
                marketrisks, please read all the related documents carefully before
                investing. Brokerage will not exceed the SEBI prescribed limits.{" "}
              </li>
              <li>
                I confirm having read/been explained and understood the contents of the
                document of Policy and Procedures of the Stock broker and the tariff sheet.
                I further confirm having read and understood the contents of the Rights and
                Obligations document, Risk Disclosure Document, Guidance Note, Additional
                Terms &amp; Conditions &amp; Tariff Sheet for Trading and Demat. I do hereby
                agree to be bound by such provisions as outlined in these documents. I have
                also been informed that the standard set of documents has been displayed for
                information on website
                <a href="https://cm.miraeasset.co.in/" target="_blank" rel="nofollow">
                  cm.miraeasset.co.in
                </a>
                . The Rules &amp; Regulations of the Depository and Depository Participant,
                pertaining to an account which is in force now, have been read by me/us and
                I/We have understood the same and I agree to abide by and to be bound by the
                rules as are in force from time to time for such account. You can
                view/download the same by clicking 
                <a href="https://bit.ly/3CPMZ5k" target="_blank">
                  https://bit.ly/3CPMZ5k
                </a>
              </li>
            </ol>

          </div>
        </div>

      </section>
    </>
  );
}
