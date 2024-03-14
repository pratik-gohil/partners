"use client";
import React from 'react';
import RetainQueryLink from '../RetainQueryLink/RetainQueryLink';
import { usePathname } from 'next/navigation';

import styles from "./PolicyNavigation.module.scss";

const PolicyNavigation = () => {

    const pathname = usePathname();

    const isActive = (path: string) => {
        // Check if current path matches or starts with the provided path
        return pathname === path || pathname.startsWith(path);
    };
    return (
        <>
            <h2 className={`${styles.secTitle} `}>Our Policies</h2>
            <p className={`${styles.textCenter} ${styles.font14}`}>We suggest you go through our policies carefully, and keep visiting for updates.</p>
            <nav className={`${styles.policyListBlock}`}>
                <ul className={`${styles.policyList}`}>
                    <li
                        className={`${isActive('/terms-of-use') ? styles.active : ''
                            }`}
                    >
                        <RetainQueryLink href="/terms-of-use">Terms of Use</RetainQueryLink>
                    </li>
                    <li
                        className={` ${isActive('/terms-and-conditions') ? styles.active : ''
                            }`}
                    >
                        <RetainQueryLink href="/terms-and-conditions">Terms & Conditions</RetainQueryLink>
                    </li>
                    <li
                        className={` ${isActive('/privacy-policy') ? styles.active : ''
                            }`}
                    >
                        <RetainQueryLink href="/privacy-policy">Privacy</RetainQueryLink>
                    </li>
                    <li
                        className={` ${isActive('/disclaimer') ? styles.active : ''
                            }`}
                    >
                        <RetainQueryLink href="/disclaimer">Disclaimer</RetainQueryLink>
                    </li>
                    <li
                        className={` ${isActive('/advisory-for-investors') ? styles.active : ''
                            }`}
                    >
                        <RetainQueryLink href="/advisory-for-investors">Advisory for Investors</RetainQueryLink>
                    </li>
                    <li
                        className={` ${isActive('/referral-terms-and-conditions') ? styles.active : ''
                            }`}
                    >
                        <RetainQueryLink href="/referral-terms-and-conditions">Referrals T&C</RetainQueryLink>
                    </li>
                    <li
                        className={` ${isActive('/emargin-terms-and-conditions') ? styles.active : ''
                            }`}
                    >
                        <RetainQueryLink href="/emargin-terms-and-conditions">MTF (eMargin) T&C</RetainQueryLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default PolicyNavigation;