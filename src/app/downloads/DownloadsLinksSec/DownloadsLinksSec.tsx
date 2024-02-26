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
                </div>
            </div>
        </section>
    )
}

export default DownloadsLinksSec
 