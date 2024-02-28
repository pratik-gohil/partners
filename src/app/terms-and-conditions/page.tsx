import Breadcrumb from "../../components/breadcrumb/BreadcrumbSec";
import PolicyNavigation from "@/components/policyNavigation/PolicyNavigation";
import styles from "../../styles/Static.module.scss";


export default function TermsAndConditions() {
  return (
    <>
      <Breadcrumb />
      <section className={`${styles.staticSec}`}>
        <div className={`${styles.maContainer}`}>
          <h2 className={`${styles.secTitle} ${nunito.className}`}>Our Policies</h2>
          <p className={`${styles.textCenter} ${styles.font14}`}>We suggest you go through our policies carefully, and keep visiting for updates.</p>
          <PolicyNavigation />
          <div className={`${styles.mainworTc} ${styles.pb40}`}>
            <h1 className={`${styles.title}`}>Terms &amp; Conditions</h1>
            <p className={`${styles.pb30}`}>
              We invite you to enjoy and participate in the many unique services and
              features offered on the website however, the use of the website is offered
              to you on your acceptance of the Terms of Use, our Privacy Policy and other
              notices posted on this website. Your use of this website or of any content
              presented in all areas of the website indicates your acknowledgment and
              agreement to these Terms of Use, our Privacy Policy and other notices posted
              on this website. It also reserves the right at its sole discretion to
              modify, add or remove any terms or conditions of these Terms of Use without
              notice or liability to you. Any changes to these Terms of Use shall be
              effective immediately, following the posting of such changes on this
              website. Your continued use of the website means that you accept any new or
              modified terms and conditions that are maintained. We would thus encourage
              you to re-visit the 'Terms of Use' link at our site from time to time to
              stay abreast of any changes that are introduced.
            </p>
            <div className={`${styles.title}`}>Partners Policy</div>
            <ul className={`${styles.listpayout}`}>
              <li>
                Onetime ₹500 will be debited to Partner on every client onboarded as
                client onboarding charges.
              </li>
              <li>
                Client onboarding charges (₹500/client) will be adjusted from the monthly
                payouts.
              </li>
              <li>
                No sharing in any other charges debited to clients apart from mentioned in
                the pricing page.
              </li>
              <li>Taxes as and if applicable will be deducted at source.</li>
              <li>
                All calculations of brokerage and other incomes as mentioned in the
                pricing page will be done based on MACM records &amp; settlements will be
                monthly i.e., within fifteen days after the end of the month. In case of
                difference in calculation of brokerage, consequent to a revision in
                brokerage charged to clients or otherwise the same would be
                adjusted/recovered in subsequent month.
              </li>
              <li>All payouts will be computed &amp; released monthly.</li>
              <li>
                Payouts would be made post adjustment of uncovered debit (if any) pending
                in client’s ledger.
              </li>
              <li>
                For GST registered partners, GST amount will be released in next payout
                cycle subject to GST invoice received in MACM prescribed format.
              </li>
              <li>
                MTF (eMargin) and Margin Pledge sharing terms: If standard rate applied,5%
                payout from the interest rate, 80% interest payout beyond base if interest
                rate is modified/Customized (no sharing in base rate if modified)
              </li>
            </ul>
            <div className={`${styles.title}`}>Payout Structure</div>
            <ul className={`${styles.listpayout}`}>
              <li>All payouts will be computed &amp; released monthly.</li>
              <li>
                Payouts would be made post adjustment of uncovered debit (if any) in
                client's ledger.
              </li>
              <li>
                client onboarding charges (₹500/client) will be adjusted from the monthly
                payouts.
              </li>
              <li>Payouts post deduction of TDS applicable.</li>
              <li>
                For GST registered partners, GST amount will be released subject to GST
                invoice received in MACM prescribed format in next payout cycle.
              </li>
            </ul>
          </div>


        </div>
      </section>
    </>
  );
}
