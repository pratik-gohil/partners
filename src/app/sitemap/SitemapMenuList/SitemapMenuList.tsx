import React from 'react'
import styles from './SitemapMenuList.module.scss' 

function SitemapMenuList() {
    return (
        <section className={`${styles.sitemapMenuList}`}>
            <div className={`${styles.maContainer}`}>
                <h1 className={`${styles.secTitle}`}>Sitemap</h1>
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
                        <ul><br /> 
                            <li><a href="/">http://localhost:3000/Home</a></li> 
                            <li><a href="/pricing">http://localhost:3000/pricing</a></li> 
                            <li><a href="/partner-listing">http://localhost:3000/partner-listing</a></li> 
                            <li><a href="/partner-referral-program">http://localhost:3000/partner-referral-program</a></li> 
                            <li><a href="/faqs">http://localhost:3000/faqs</a></li> <br />

                            <li><a href="/sitemap">http://localhost:3000/sitemap</a></li> 
                            <li><a href="/downloads">http://localhost:3000/downloads</a></li> <br />
  
                            <li><a href="/terms-of-use">http://localhost:3000/Terms of Use</a></li> 
                            <li><a href="/terms-and-conditions">http://localhost:3000/Terms & Conditions</a></li>
                            <li><a href="/privacy-policy">http://localhost:3000/Privacy Policy</a></li>
                            <li><a href="/disclaimer">http://localhost:3000/Disclaimer</a></li>
                            <li><a href="/advisory-for-investors">http://localhost:3000/Advisory for Investors</a></li>
                            <li><a href="/referral-terms-and-conditions">http://localhost:3000/referral-terms-and-conditions</a></li> 
                            <li><a href="/emargin-terms-and-conditions">http://localhost:3000/emargin-terms-and-conditions</a></li>  
                        </ul> 
                    </div>
                    

            </div>
        </section>
    )
}

export default SitemapMenuList
 