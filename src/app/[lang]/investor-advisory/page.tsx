import PolicyNavigation from "@/components/policyNavigation/PolicyNavigation";
import styles from "@/styles/Static.module.scss";
import { getMetaData } from "@/app/[lang]/layout";

export async function generateMetadata() {
  const commonMetadata = getMetaData({
    title: 'Advisory for Investors',
    description: 'Read the advisory for investors with Mirae Asset Partners, KYC compliance, and demat account holders carefully. For more information read the complete advisory on our page.',
    keywords: ['']
  }, "advisory-for-investors");

  return commonMetadata;
}


export default function AdvisoryForInvestors() {
  return (
    <>
      <section className={`${styles.staticSec}`}>
        <div className={`${styles.maContainer}`}>
          <PolicyNavigation showPolicyNav={true} />
          <div className={`${styles.mainworTc} ${styles.pb40}`}>
            <h1 className={`${styles.title}`}>Advisory - For Investors</h1>
            <ul className={`${styles.compliancetxt}`}>
              <li>
                Beware of fixed/guaranteed/regular returns/ capital protection schemes.
                Brokers or their authorized persons or any of their associates are not
                authorized to offer fixed/guaranteed/regular returns/ capital protection
                on your investment or authorized to enter into any loan agreement with you
                to pay interest on the funds offered by you. Please note that in case of
                default of a member claim for funds or securities given to the broker
                under any arrangement/ agreement of indicative return will not be accepted
                by the relevant Committee of the Exchange as per the approved norms.
              </li>
              <li>
                Do not keep funds idle with the Stock Broker. Please note that your stock
                broker has to return the credit balance lying with them, within three
                working days in case you have not done any transaction within last 30
                calendar days. Please note that in case of default of a Member, claim for
                funds and securities, without any transaction on the exchange will not be
                accepted by the relevant Committee of the Exchange as per the approved
                norms.
              </li>
              <li>
                Check the frequency of accounts settlement opted for. If you have opted
                for running account, please ensure that your broker settles your account
                and, in any case, not later than once in 90 days (or 30 days if you have
                opted for 30 days settlement). In case of declaration of trading member as
                defaulter, the claims of clients against such defaulter member would be
                subject to norms for eligibility of claims for compensation from IPF to
                the clients of the defaulter member. These norms are available on
                Respective Exchange website at following links:
                <br />{" "}
                <a
                  href="https://www.bseindia.com/static/investors/Claim_against_Defaulter.aspx"
                  target="_blank"
                  rel="nofollow"
                >
                  https://www.bseindia.com/static/investors/Claim_against_Defaulter.aspx
                </a>{" "}
                <br />
                <a
                  href="https://www.nseindia.com/invest/about-defaulter-section"
                  target="_blank"
                  rel="nofollow"
                >
                  https://www.nseindia.com/invest/about-defaulter-section
                </a>
              </li>
              <li>
                Always keep your contact details viz. Mobile number/Email ID updated with
                the stock broker. Email and mobile number is mandatory and you must
                provide the same to your broker for updation in Exchange records. You must
                immediately take up the matter with Stock Broker/Exchange if you are not
                receiving the messages from Exchange/Depositories regularly.
              </li>
              <li>
                Prevent Unauthorized Transactions in your demat account - Update your
                Mobile Number with your Depository Participant. Receive alerts on your
                Registered Mobile for all debit and other important transactions in your
                demat account directly from CDSL on the same day issued in the interest of
                investors.
              </li>
              <li>
                Don't ignore any emails/SMSs received from the Exchange for trades done by
                you. Verify the same with the Contract notes/Statement of accounts
                received from your broker and report discrepancy, if any, to your broker
                in writing immediately and if the Stock Broker does not respond, please
                take this up with the Exchange/Depositories forthwith.
              </li>
              <li>
                Check messages sent by Exchanges on a weekly basis regarding funds and
                securities balances reported by the trading member, compare it with the
                weekly statement of account sent by broker and immediately raise a concern
                to the exchange if you notice a discrepancy.
              </li>
              <li>
                Please do not transfer funds, for the purposes of trading to anyone,
                including an authorized person or an associate of the broker, other than a
                SEBI registered Stock broker.
              </li>
              <li>
                Pay 20% upfront margin of the transaction value to trade in cash market
                segment.
              </li>
              <li>
                Stockbrokers can accept securities as margin from clients only by way of
                pledge in the depository system w.e.f. September 1, 2020.
              </li>
              <li>
                Investors may please refer to the Exchange's Frequently Asked Questions
                (FAQs) issued vide circular reference NSE/INSP/45191 dated July 31, 2020
                and NSE/INSP/45534 dated August 31, 2020 and other guidelines issued from
                time to time in this regard. Continuation Sheet
              </li>
              <li>
                Check your Securities /MF/ Bonds in the consolidated account statement
                issued by NSDL/CDSL every month.
                <br />
                Issued in the interest of investors.
              </li>
              <li>
                IPO Investment: No need to issue cheques by investors while subscribing to
                IPO. Just write the bank account number and sign in the application form
                to authorise your bank to make payment in case of allotment. No worries
                for refund as the money remains in investor's account.
              </li>
              <li>
                For revocation of e-Dis pre-trade authorisation, please write to
                edisrevocation@mstock.com
              </li>
              <li>
                KYC Notification:KYC is one time exercise while dealing in securities
                markets - once KYC is done through a SEBI registered intermediary (broker,
                DP, Mutual Fund etc.), you need not undergo the same process again when
                you approach another intermediary.{" "}
              </li>
              <li>
                Advisory against Tips:Investors are advised not to blindly follow the
                unfounded rumours, Tips given in social networks, SMS, WhatsApp, Blogs
                etc. and invest only after conducting appropriate analysts of respective
                companies. Beware of fraudster entities operating throughout India and
                sending bulk messages on the pretext of providing investment tips and
                luring investors to invest with them in their bogus firms by promising
                hefty profits
              </li>
              <li>
                As required by Exchanges Circular on Guidelines on Technical Glitches to
                prevent business disruptions, the mandatory requirement of establishing
                Business Continuity/DR set up to ensure the continuity plan in case of
                Business Disruptions is currently applicable for MACM and the due date to
                establish Business Continuity/DR set up is December 31, 2023.
              </li>
              <li>
                Segregation and Monitoring of Collateral at Client Level -{" "}
                <a
                  href="asset/pdf/Segregation-and-Monitoring-of-Collateral-at-Client-Level.pdf"
                  target="_blank"
                >
                  Click here to know more
                </a>
              </li>
              <li>
                To Know more about Rights Entitlements Investor's Awareness -{" "}
                <a
                  href="asset/pdf/rights-entitlements-investors-awareness.pdf"
                  target="_blank"
                >
                  Click here
                </a>
              </li>
              <li>
                FAQs on Investor Awareness on Rights Entitlement -{" "}
                <a
                  href="asset/pdf/faqs-on-investor-awareness-on-rights-entitlement.pdf"
                  target="_blank"
                >
                  Click here
                </a>
              </li>
              <li>
                Investor Awareness on Prevention &amp; Precaution for Money Laundering -{" "}
                <a
                  href="asset/pdf/investor-awareness-prevention-and-precaution-for-money-laundering.pdf"
                  target="_blank"
                >
                  Click here
                </a>
              </li>
              <li>
                Details on Client Bank accounts of MACM -{" "}
                <a
                  href="asset/pdf/details-on-client-bank-accounts-of-capital-markets.pdf"
                  target="_blank"
                >
                  Click here
                </a>
              </li>
              <li>
                <p className={`${styles.mb3}`} style={{ textAlign: "left" }}>
                  Clients/Investors to abstain them from dealing in any schemes of
                  unauthorised collective investments/portfolio management,
                  indicative/guaranteed/fixed returns/payments etc. and to avoid practices
                  like:
                </p>
                <div>
                  a) Sharing of
                  <br />
                  <ul className={`${styles.compliancetxt} ${styles.pl3} ${styles.pt10}`}  >
                    <li>Trading credentials – login id &amp; passwords</li>
                    <li>Trading strategies</li>
                    <li>Position details</li>
                  </ul>
                </div>
                <p className={`${styles.mb0}`}>
                  b) Trading in leveraged products /derivatives without proper
                  understanding, which could lead to losses
                  <br />
                  <br />
                  c) Writing/ selling options or trading in option strategies based on
                  tips, without basic knowledge &amp; understanding of the product and its
                  risks
                  <br />
                  <br />
                  d) Dealing in unsolicited tips through Whatsapp, Telegram, YouTube,
                  Facebook, SMS, calls, etc.
                  <br />
                  <br />
                  e) Trading based on recommendations from unauthorised / unregistered
                  investment advisors and influencers
                  <br />
                </p>
              </li>
              <li>
                Central Vigilance Commission (CVC): Please visit CVC website at{" "}
                <a href="https://pledge.cvc.nic.in" target="_blank" rel="nofollow">
                  https://pledge.cvc.nic.in
                </a>{" "}
                and take "Integrity Pledge" to be an active part of the "Satark Bharat,
                Samriddh Bharat" (Vigilant India, Prosperous India).
              </li>
              <li>
                <p className="mb-3" style={{ textAlign: "left" }}>
                  Risk Disclosures on Derivatives
                </p>
                <div>
                  <ul className={`${styles.compliancetxt} ${styles.pl3}`}>
                    <li>
                      9 out of 10 individual traders in equity Futures and Options
                      Segment, incurred net losses.
                    </li>
                    <li>
                      On an average, loss makers registered net trading loss close to ₹
                      50,000.
                    </li>
                    <li>
                      Over and above the net trading losses incurred, loss makers expended
                      an additional 28% of net trading losses as transaction costs.
                    </li>
                    <li>
                      Those making net trading profits, incurred between 15% to 50% of
                      such profits as transaction cost.
                    </li>
                  </ul>
                  <p>
                    <b style={{ display: "inline-block" }}>Source:</b>{" "}
                    <a
                      style={{ display: "inline-block" }}
                      href="https://shorturl.at/zMO08"
                      target="_blank"
                      rel="nofollow"
                    >
                      SEBI
                    </a>
                  </p>
                </div>
              </li>
            </ul>
            <div className={`${styles.title}`}>Advisory – KYC Compliance</div>
            <ul className={`${styles.compliancetxt}`}>
              <li>
                All investors are requested to take note that 6 KYC attributes i.e. Name,
                PAN, Address, Mobile Number, Email id and Income Range have been made
                mandatory. Investors availing custodian services will be additionally
                required to update the custodian details.
              </li>
              <li>
                Investors may contact their respective stockbrokers / depository
                participants for updation of details in their trading / demat account.
              </li>
              <li>The last date to update KYC is on or before March 31, 2022.</li>
              <li>
                Thereafter non-compliant trading accounts will be blocked for trading by
                the Exchange.
              </li>
              <li>
                The non-compliant demat accounts will be frozen for debits by Depository
                Participant or Depository.
              </li>
              <li>
                On submission of the necessary information to the stockbroker and updation
                of the same by the stockbroker in the Exchange systems and approval by the
                Exchange, the blocked trading accounts shall be unblocked by the Exchange
                on T+1 trading day.
              </li>
              <li>
                The demat account shall be unfreezed once the investor submits the
                deficient KYC details and the same is captured by the depository
                participant in the depository system.
              </li>
              <li>
                To ensure smooth settlement, the investors are requested to ensure that
                both the trading and demat accounts are compliant with respect to the KYC
                requirement.
              </li>
              <li>
                The investors are hereby requested to comply with the regulatory
                guidelines issued by Exchanges and Depositories from time to time with
                regard to KYC compliance and related requirements.
              </li>
            </ul>
            <div className={`${styles.title}`}>Advisory To Demat Account Holders</div>
            <h2 style={{ fontSize: 15 }}>Do’s</h2>
            <ul className={`${styles.compliancetxt}`}>
              <li>
                Register your email ID in your demat account by approaching your
                Depository Participant. You will receive email alerts for all transactions
                in your demat account.
              </li>
              <li>
                Register your mobile number for CDSL's free of cost SMS Alert facility -
                SMART and obtain alerts on your mobile for any debit transaction or
                credits due to corporate action or demographic changes in your demat
                account.
              </li>
              <li>
                Register for ‘easi’, CDSL's free of cost internet based facility to access
                your demat account and check the details of your holdings and/or
                transactions, anytime anywhere. You can easily register for easi by
                accessing the link - https://web.cdslindia.com/myeasi/home/login
              </li>
              <li>
                Ensure that your holding and transaction statements are received
                periodically. You are entitled to receive a transaction statement every
                month if you have any transactions and once every six months if there have
                been no transactions in your account.
              </li>
              <li>
                Check your demat account statement on receipt. In case you notice any
                unauthorized debits or credits, contact your Depository Participant. If
                not satisfied with the response, contact CDSL. You may email to
                complaints@cdslindia.com
              </li>
              <li>
                Accept the Delivery Instruction Slip (DIS) book from your DP only if each
                slip has been preprinted with a serial number along with your demat
                account number and keep it in safe custody.
              </li>
              <li>
                Accept the Delivery Instruction Slip (DIS) book from your DP only if each
                slip has been preprinted with a serial number along with your demat
                account number and keep it in safe custody.
              </li>
              <li>POA is not mandatory for opening a demat account.</li>
              <li>
                Update change in details like email id, mobile number, address etc.
                immediately.
              </li>
              <li>
                The demat account has a nomination facility and it is advisable to appoint
                a nominee, especially in case of sole account holders.
              </li>
              <li>
                Register for CDSL's internet based facility 'easi' to monitor your demat
                account yourself: Login to{" "}
                <a
                  href="https://web.cdslindia.com/myeasinew/Registration/EasiRegistration"
                  rel="nofollow"
                  target="_blank"
                >
                  https://web.cdslindia.com/myeasinew/Registration/EasiRegistration
                </a>{" "}
              </li>
              <li>
                {" "}
                Register for CDSL's SMS Alert facility - SMART and obtain alerts for any
                debits in your demat account.{" "}
              </li>
              <li>
                {" "}
                CDSL sends alerts to investors on their registered mobile number through
                SMS and e- mail for any modification done in their master details, debit
                in demat account, pledge creation, change in nominee etc.{" "}
              </li>
              <li>
                {" "}
                Pay attention to SMS’s and emails regularly sent by CDSL. If you receive
                an SMS for a transaction not executed by you, inform your DP/CDSL
                immediately.{" "}
              </li>
              <li>
                {" "}
                Inform your DP of any change in your Personal Information (for example
                address or Bank Account details, email ID, Mobile number) linked to your
                demat account in the prescribed format and obtain confirmation of updation
                in system.{" "}
              </li>
              <li>
                {" "}
                Protect your login details and do not share login credentials with anyone.
                Password should be unique. Keep strong and complex passwords and change
                the password at regular intervals.{" "}
              </li>
            </ul>
            <h2 style={{ fontSize: 15 }}>Dont’s</h2>
            <ul className={`${styles.compliancetxt}`}>
              <li>Do not leave your DIS book with anyone else. </li>
              <li>Do not sign blank DIS as it is equivalent to a bearer cheque. </li>
              <li>
                Avoid over-writing, cancellations, misspellings, changing of the name and
                quantity of securities on DIS.
              </li>
              <li>
                Do not share your easi / easiest login id and password with any other
                person.
              </li>
              <li>
                {" "}
                Do not share One Time Password (OTP) received from your DP/ CDSL. These
                are meant to be used by you only.{" "}
              </li>
              <li>
                {" "}
                Do not share login credentials of e-facilities provided by CDSL such as
                e-DIS, easiest etc. with anyone else.{" "}
              </li>
              <li>
                {" "}
                Do not download any unknown application on your phone / device. The
                application may access your confidential data secretly.{" "}
              </li>
              <li>
                {" "}
                Exercise the option to freeze the Demat account if not being used for long
                duration.{" "}
              </li>
              <li>
                {" "}
                Before granting Power of Attorney (PoA) to anyone, to operate your demat
                account, carefully examine the scope &amp; implications of powers being
                granted.{" "}
              </li>
              <li>
                {" "}
                Ensure that, your holding and transaction statements are received
                periodically as instructed to your DP. You are entitled to receive a
                transaction statement every month if you have any transactions.{" "}
              </li>
              <li>
                {" "}
                Check your demat account statement on receipt. In case you notice any
                unauthorized debits or credits, contact your DP for clarification. If not
                resolved, you may lodge your complaint by visiting www.cdslindia.com &gt;
                Post Your Grievances (https://www.cdslindia.com/Footer/grievances.aspx).{" "}
              </li>
            </ul>
          </div>


        </div>
      </section>
    </>
  );
}
