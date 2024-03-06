"use client"

import React from 'react'
import styles from "./BreadcrumbSec.module.scss";
import { usePathname } from 'next/navigation';

const data = {
    "/pricing": "Pricing",
    "/partner-listing": "Partner Listing",
    "/partner-referral-program": "Partner Refer & Earn",
    "/faq": "Partner FAQs",
    "/sitemap": "Sitemap",
    "/downloads": "Downloads",
    "/terms-of-use": "Terms of Use",
    "/privacy-policy": "Privacy Policy",
    "/terms-and-conditions": "Terms and Conditions",
    "/advisory-for-investors": "Advisory For Investors",
    "/disclaimer": "Disclaimer"
}

const BreadcrumbSec = () => {
    const pathname = usePathname()
    // @ts-ignore
    const innerPage = data[pathname]
    return (
        innerPage && (<div className={`${styles.breadcrumbSec}`}>
            <div className={`${styles.maContainer}`}>
                <ul>
                    <li><a href="/" title="home"><img src="https://www.miraeassetpartners.com/asset/images/icon-home.svg" width="15" height="15" alt="home" title="home" /></a></li>
                    <li>{innerPage}</li>
                </ul>
            </div>
        </div>)
    )
}

export default BreadcrumbSec;

