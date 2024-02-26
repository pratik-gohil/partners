import React from 'react'
import styles from './DownloadsLinksSec.module.scss' 

function DownloadsLinksSec() {
    return (
        <section className={`${styles.downloadsLinksSec}`}>
            <div className={`${styles.maContainer}`}>
                <h1 className={`${styles.secTitle}`}>Downloads</h1> 
                <div className={`${styles.downloadsLinksHolder}`}>
                    <div className={`${styles.titleLbl}`}>Downloads</div>  
                    <ul className={`${styles.sitemapmainUl}`}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/pricing">Revenue Sharing</a></li>
                        <li><a href="/partner-listing">Partner Listing</a></li>
                        <li><a href="/faq">Partner FAQs</a></li>
                    </ul>

                   {/*  <ul class="download-list">
                                    <li><a href="asset/pdf/SEBI-DP-Registration-Certificate-24052021.pdf" target="_blank">SEBI registration certificate-Trading member</a></li>
                                    <li><a href="asset/pdf/investor-charter.pdf" target="_blank">Investor Charter</a></li>
                                    <li><a href="asset/pdf/DP-Do's-and-Dont's.pdf" target="_blank">DO &amp; Don’t's-DP</a></li> 
                                </ul> */}


                </div>
            </div>
        </section>
    )
}

export default DownloadsLinksSec
 