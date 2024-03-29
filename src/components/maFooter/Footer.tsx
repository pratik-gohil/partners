import React from 'react'
import styles from "./FooterSec.module.scss";
import MiraeAssetsPartnersLogo from '../svgs/MiraeAssetsPartnersLogo';
import FacebookLogo from '../svgs/FacebookLogo';
import InstagramLogo from '../svgs/InstagramLogo';
import LinkedinLogo from '../svgs/LinkedinLogo';
import TwitterLogo from '../svgs/TwitterLogo';
import YoutubeLogo from '../svgs/YoutubeLogo';

const Footer = () => {
    return (
        <>
            <footer className={`${styles.footerSec}`}>
                <div className={`${styles.topWrap}`}>
                    <div className={`${styles.maContainer}`}>
                        <div className={`${styles.quickLinkBar} ${styles.flex}`}>
                            <span>Quick Links :</span>
                            <ul>
                                <li><a href="/pricing">Revenue Sharing</a></li>
                                <li><a href="/partner-listing">Partner Listing</a></li>
                                <li><a href="/partner-referral-program">Refer a Partner</a></li>
                                <li id="quicklinkbar1"><a href="/faq">Partner FAQs</a></li>
                                <li><a href="https://cm.miraeasset.co.in/" target="_blank">Mirae Asset Capital Market</a></li>
                                <li><a href="https://www.mstock.com/" target="_blank">m.Stock</a></li>
                            </ul>
                        </div>
                        <div className={`${styles.getInTouchWrap} ${styles.flex}`}>
                            <ul className={`${styles.socialWrap} ${styles.flex}`}>
                                <li><a aria-label="facebook icon" href="https://www.facebook.com/Mstockin-110086308312129" target="_blank"><FacebookLogo /> </a></li>
                                <li><a aria-label="instagram icon" href="https://www.instagram.com/mstock_in/" target="_blank">
                                    <InstagramLogo />
                                </a></li>
                                <li><a aria-label="linkedin icon" href="https://www.linkedin.com/company/mirae-asset-capital-market-i-pvt-ltd" target="_blank">
                                    <LinkedinLogo />
                                </a></li>
                                <li><a aria-label="twitter icon" href="https://twitter.com/mstock_in" target="_blank">
                                    <TwitterLogo />
                                </a></li>
                                <li><a aria-label="youtube icon" href="https://www.youtube.com/channel/UCHEsTcIyyzyVVlNRxOj4UQg" target="_blank">
                                    <YoutubeLogo />
                                </a></li>
                            </ul>
                            <div className={`${styles.contactWrap}`}>
                                <span className={`${styles.getInText}`}>Get in Touch</span>
                                <ul className={`${styles.telMailLine}`}>
                                    <li><a href="tel:18002100819" className={`${styles.telAlink}`}>1800 2100 819</a></li>
                                    <li><a href="mailto:support@miraeassetpartners.com" className={`${styles.mailAlink}`}>support@miraeassetpartners.com</a></li>
                                </ul>
                                <p>Single contact point for all queries </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.midWrap}`}>
                    <div className={`${styles.maContainer}`}>
                        <a title="Mirae Asset Partners">
                            <MiraeAssetsPartnersLogo />
                        </a>
                        <span>Where <b>YOU</b> come first</span>
                    </div>
                </div>
                <div className={`${styles.btmWrap}`}>
                    <div className={`${styles.maContainer}`}>
                        <div className={`${styles.offAddBox}`}>
                            <p> <b>Registered Office &amp; Correspondence Address:</b>&nbsp; <br className={`${styles.mobView}`} /> 1st Floor, Tower 4, Equinox Business Park, LBS Marg, Off BKC, Kurla (W), Mumbai – 400 070&nbsp;&nbsp;&nbsp;<br className={`${styles.mobView}`} /> <b>CIN Number :</b> U65990MH2017FTC300493 </p>
                        </div>
                        <div className={`${styles.midTxt}`}>
                            <p>Investments in securities market are subject to market risks. Read all the related documents carefully before investing. Brokerage will not exceed SEBI prescribed limits. Statutory Charges/Taxes would be levied as applicable.</p>
                            <p><b>Compliance Officer:</b> Mr. Himanshu Parekh (Stock Broking and DP Activities) Email - compliance.officer@mstock.com, Tel No: - 022-41887777</p>
                            <p>Mirae Asset Capital Markets (India) Private Limited (“MACM”) offer its online retail stock broking  services under brand m.Stock <br /> Registration Details: SEBI Stock Broker Registration No.: INZ000163138 – Membership in BSE – Cash Segment (Clearing Member ID: 6681), BSE Star MF Segment (Membership No : 53975) and in NSE – Cash, F&amp;O and CD Segments (Member ID: 90144), Membership in MCX – (Member ID: 56980),  SEBI Merchant Banking Registration No.: MB/INM000012485, SEBI Research Analyst Registration No.: INH000007526, SEBI DP Registration No: IN-DP-589-2021, CDSL DP ID: 12092900, CIN: U65990MH2017FTC300493. AMFI Registered Mutual Funds Distributor: ARN-188742.Tele No: 18002100819. In case of any grievances, please write to <a href="mailto:support@miraeassetpartners.com">support@miraeassetpartners.com</a> <br /> </p>
                        </div>
                        <ul className={`${styles.ftLinkWrap}`}>
                            <li><a href="/terms-of-use">Terms of Use</a></li>
                            <li><a href="/disclaimer">Disclaimer</a></li>
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
                            <li><a href="/advisory-for-investors">Advisory for Investors</a></li>
                            <li><a href="/asset/pdf/investor-charter.pdf" target="_blank">Investor Charter</a></li>
                            <li><a href="/downloads">downloads</a></li>
                            <li> <a href="https://www.bseindia.com/" target="_blank" rel="nofollow">BSE</a></li>
                            <li> <a href="https://www.nseindia.com/" target="_blank" rel="nofollow">NSE</a></li>
                            <li> <a href="https://www.sebi.gov.in/" target="_blank" rel="nofollow">SEBI</a></li>
                            <li> <a href="https://www.mcxindia.com/" target="_blank" rel="nofollow">MCX</a></li>
                            <li> <a href="https://www.cdslindia.com/" target="_blank" rel="nofollow">CDSL</a></li>
                            <li> <a href="https://fiuindia.gov.in/" target="_blank" rel="nofollow">FIU IND</a></li>
                            <li> <a href="" data-toggle="modal" data-target="#myModalComplaintOnSCORES">SCORES</a></li>
                            <li> <a href="https://play.google.com/store/apps/details?id=com.ionicframework.sebi236330&hl=en_IN&gl=US" target="_blank" rel="nofollow"> SCORES - Android</a></li>
                            <li><a href="https://apps.apple.com/in/app/sebiscores/id1493257302" target="_blank" rel="nofollow"> SCORES - iOS</a> </li>
                            <li><a href="https://www.evotingindia.com/homepage.jsp" target="_blank" rel="nofollow">E-voting by CDSL Depository</a> </li>
                            <li><a href="/sitemap" >Sitemap</a></li>
                        </ul>
                        <div className={`${styles.copyrightTxt}`}>
                            Built with ❤️ in India | Copyright © 2022 - 2023, Mirae Asset Capital Markets (India) Pvt Ltd
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;

