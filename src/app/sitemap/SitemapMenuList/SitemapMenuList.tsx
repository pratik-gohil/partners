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
                        <ul><b>Total Pages List :</b><br /> 
                            <li><a href="/">Home</a></li> 
                            <li><a href="/pricing">pricing</a></li> 
                            <li><a href="/partner-listing">partner-listing</a></li> 
                            <li><a href="/partner-referral-program">partner-referral-program</a></li> 
                            <li><a href="/faqs">faqs</a></li> <br />

                            <li><a href="/sitemap">sitemap</a></li> 
                            <li><a href="/downloads">downloads</a></li> <br />
  
                            <li><a href="/terms-of-use">Terms of Use</a></li> 
                            <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/disclaimer">Disclaimer</a></li>
                            <li><a href="/advisory-for-investors">Advisory for Investors</a></li>
                            <li><a href="/referral-terms-and-conditions">referral-terms-and-conditions</a></li> 
                            <li><a href="/emargin-terms-and-conditions">emargin-terms-and-conditions</a></li>  
                        </ul> 
                    </div>
                    

            </div>
        </section>
    )
}

export default SitemapMenuList
 