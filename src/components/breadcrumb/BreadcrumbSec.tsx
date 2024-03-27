"use client"

import React from 'react'
import styles from "./BreadcrumbSec.module.scss";
import { usePathname } from 'next/navigation';
import RetainQueryLink from '@/components/RetainQueryLink/RetainQueryLink';
import Image from 'next/image';
import { removeLocale } from '@/lib/utils/removeLocale';

const data = {
    "/pricing": "Pricing",
    "/pricing-cta": "Revenue Sharing",
    "/partner-listing": "Partner Listing",
    "/partner-referral-program": "Partner Refer & Earn",
    "/faq": "Partner FAQs",
    "/sitemap": "Sitemap",
    "/downloads": "Downloads",
    "/partnership-terms-of-use": ["Our Policy", "Terms of Use"],
    "/privacy": ["Our Policy", "Privacy Policy"],
    "/partnership-terms-and-conditions": ["Our Policy", "Terms and Conditions"],
    "/investor-advisory": ["Our Policy", "Advisory For Investors"],
    "/risk-disclaimer": ["Our Policy", "Disclaimer"],
    "/refer-and-earn-terms-and-conditions": ["Our Policy", "Referral Terms and Conditions"],
    "/mtf-emargin-terms-and-conditions": ["Our Policy", "Emargin Terms and Conditions"]
}

const BreadcrumbSec = () => {
    const pathname = usePathname()
    const path = removeLocale(pathname);

    // @ts-ignore
    const innerPage = data[path]

    return (
        innerPage && (
            <div className={`${styles.breadcrumbSec}`}>
                <div className={`${styles.maContainer}`}>
                    <ul>
                        <li><RetainQueryLink href="/"><Image src="/icon-home.svg" width={15} height={15} alt="home" title="home" /></RetainQueryLink></li>
                        {typeof innerPage === "string" ?
                            <li>{innerPage}</li>
                            : innerPage.map((i: string) =>
                                <li key={i}>{i}</li>
                            )
                        }
                    </ul>
                </div>
            </div>)
    )
}

export default BreadcrumbSec;

