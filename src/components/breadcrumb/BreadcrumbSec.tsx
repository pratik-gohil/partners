"use client"

import React from 'react'
import styles from "./BreadcrumbSec.module.scss";
import { usePathname } from 'next/navigation';
import RetainQueryLink from '../RetainQueryLink/RetainQueryLink';

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
    "/disclaimer": "Disclaimer",
    "/referral-terms-and-conditions": "Referral Terms and Conditions",
    "/emargin-terms-and-conditions": "Emargin Terms and Conditions"
}

const BreadcrumbSec = () => {
    const pathname = usePathname()
    // @ts-ignore
    const innerPage = data[pathname]
    return (
        innerPage && (<div className={`${styles.breadcrumbSec}`}>
            <div className={`${styles.maContainer}`}>
                <ul>
                    <li><RetainQueryLink href="/"><img src="/icon-home.svg" width="15" height="15" alt="home" title="home" /></RetainQueryLink></li>
                    <li>{innerPage}</li>
                </ul>
            </div>
        </div>)
    )
}

export default BreadcrumbSec;

