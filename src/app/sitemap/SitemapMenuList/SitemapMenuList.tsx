import React from 'react'
import styles from './SitemapMenuList.module.scss'

function SitemapMenuList() {
    return (
        <section className={`${styles.sitemapMenuList}`}>
            <div className={`${styles.maContainer}`}>
                <h1 className={`${styles.secTitle} ${nunito.className}`}>Sitemap</h1>
                <div className={`${styles.sitemapMenuHolder}`}>
                    <ul className={`${styles.sitemapmainUl}`}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/pricing">Revenue Sharing</a></li>
                        <li><a href="/partner-listing">Partner Listing</a></li>
                        <li><a href="/faq">Partner FAQs</a></li>
                    </ul>
                    <ul className={`${styles.sitemapmainUl} ${styles.policybarLi}`}>
                        <li><a href="/our-policies">Terms of Use</a></li>
                        <li><a href="/disclaimer">Disclaimer</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
                        <li><a href="/advisory-for-investors">Advisory for Investors</a></li>
                        <li><a href="/asset/pdf/investor-charter.pdf" target="_blank">Investor Charter</a></li>
                        <li><a href="/downloads">Downloads</a></li>
                    </ul>
                </div>

                <div className="test">
                    <ul><b>Total Pages List :</b><br />
                        <li><a href="/">1. Home - Done</a></li>
                        <li><a href="/pricing">2. pricing - Working</a></li>
                        <li><a href="/partner-listing">3. partner-listing - Done</a></li>
                        <li><a href="/partner-referral-program">4. partner-referral-program - Done</a></li>
                        <li><a href="/faqs">5. faqs</a></li> <br />

                        <li><a href="/sitemap">6. sitemap - Done</a></li>
                        <li><a href="/downloads">7. downloads - Done</a></li> <br />

                        <li><a href="/terms-of-use">8. Terms of Use</a></li>
                        <li><a href="/terms-and-conditions">9. Terms & Conditions</a></li>
                        <li><a href="/privacy-policy">10. Privacy Policy</a></li>
                        <li><a href="/disclaimer">11. Disclaimer</a></li>
                        <li><a href="/advisory-for-investors">12. Advisory for Investors</a></li>
                        <li><a href="/referral-terms-and-conditions">13. referral-terms-and-conditions</a></li>
                        <li><a href="/emargin-terms-and-conditions">14. emargin-terms-and-conditions</a></li>
                    </ul>
                </div>


            </div>
        </section>
    )
}

export default SitemapMenuList
