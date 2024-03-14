import React from 'react'
import styles from './SitemapMenuList.module.scss'
import RetainQueryLink from '@/components/RetainQueryLink/RetainQueryLink'

function SitemapMenuList() {
    return (
        <section className={`${styles.sitemapMenuList}`}>
            <div className={`${styles.maContainer}`}>
                <h1 className={`${styles.secTitle} `}>Sitemap</h1>
                <div className={`${styles.sitemapMenuHolder}`}>
                    <ul className={`${styles.sitemapmainUl}`}>
                        <li><RetainQueryLink href="/">Home</RetainQueryLink></li>
                        <li><RetainQueryLink href="/pricing">Revenue Sharing</RetainQueryLink></li>
                        <li><RetainQueryLink href="/partner-listing">Partner Listing</RetainQueryLink></li>
                        <li><RetainQueryLink href="/faq">Partner FAQs</RetainQueryLink></li>
                    </ul>
                    <ul className={`${styles.sitemapmainUl} ${styles.policybarLi}`}>
                        <li><RetainQueryLink href="/our-policies">Terms of Use</RetainQueryLink></li>
                        <li><RetainQueryLink href="/disclaimer">Disclaimer</RetainQueryLink></li>
                        <li><RetainQueryLink href="/privacy-policy">Privacy Policy</RetainQueryLink></li>
                        <li><RetainQueryLink href="/terms-and-conditions">Terms & Conditions</RetainQueryLink></li>
                        <li><RetainQueryLink href="/advisory-for-investors">Advisory for Investors</RetainQueryLink></li>
                        <li><a href="/asset/pdf/investor-charter.pdf" target="_blank">Investor Charter</a></li>
                        <li><RetainQueryLink href="/downloads">Downloads</RetainQueryLink></li>
                    </ul>
                </div>

                <div className="test">
                    <ul><b>Total Pages List :</b><br />
                        <li><RetainQueryLink href="/">1. Home - Done</RetainQueryLink></li>
                        <li><RetainQueryLink href="/pricing">2. pricing - Done</RetainQueryLink></li>
                        <li><RetainQueryLink href="/partner-listing">3. partner-listing - Done</RetainQueryLink></li>
                        <li><RetainQueryLink href="/partner-referral-program">4. partner-referral-program - Done</RetainQueryLink></li>
                        <li><RetainQueryLink href="/faq">5. faq page - Done</RetainQueryLink></li> <br />

                        <li><RetainQueryLink href="/sitemap">6. sitemap - Done</RetainQueryLink></li>
                        <li><RetainQueryLink href="/downloads">7. downloads - Done</RetainQueryLink></li> <br />

                        <li><RetainQueryLink href="/terms-of-use">8. Terms of Use - Done</RetainQueryLink></li>
                        <li><RetainQueryLink href="/terms-and-conditions">9. Terms & Conditions - Done</RetainQueryLink></li>
                        <li><RetainQueryLink href="/privacy-policy">10. Privacy Policy - Done</RetainQueryLink></li>
                        <li><RetainQueryLink href="/disclaimer">11. Disclaimer - Done</RetainQueryLink></li>
                        <li><RetainQueryLink href="/advisory-for-investors">12. Advisory for Investors - Done</RetainQueryLink></li>
                        <li><RetainQueryLink href="/referral-terms-and-conditions">13. referral-terms-and-conditions - Done</RetainQueryLink></li>
                        <li><RetainQueryLink href="/emargin-terms-and-conditions">14. emargin-terms-and-conditions - Done</RetainQueryLink></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SitemapMenuList
