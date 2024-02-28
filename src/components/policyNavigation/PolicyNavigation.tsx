"use client";
import React from 'react';
import Link from 'next/link';
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
            <nav className={`${styles.policyListBlock}`}>
                <ul className={`${styles.policyList}`}>
                    <li
                        className={`${isActive('/terms-of-use') ? styles.active : ''
                            }`}
                    >
                        <Link href="/terms-of-use">Terms of Use</Link>
                    </li>
                    <li
                        className={` ${isActive('/terms-and-conditions') ? styles.active : ''
                            }`}
                    >
                        <Link href="/terms-and-conditions">Terms & Conditions</Link>
                    </li>
                    <li
                        className={` ${isActive('/privacy-policy') ? styles.active : ''
                            }`}
                    >
                        <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li
                        className={` ${isActive('/disclaimer') ? styles.active : ''
                            }`}
                    >
                        <Link href="/disclaimer">Disclaimer</Link>
                    </li>
                    <li
                        className={` ${isActive('/advisory-for-investors') ? styles.active : ''
                            }`}
                    >
                        <Link href="/advisory-for-investors">Advisory for Investors</Link>
                    </li>
                    <li
                        className={` ${isActive('/referral-terms-and-conditions') ? styles.active : ''
                            }`}
                    >
                        <Link href="/referral-terms-and-conditions">Referrals T&C</Link>
                    </li>
                    <li
                        className={` ${isActive('/emargin-terms-and-conditions') ? styles.active : ''
                            }`}
                    >
                        <Link href="/emargin-terms-and-conditions">MTF (eMargin) T&C</Link>
                    </li>
                    {/* Add additional navigation links here */}
                </ul>
            </nav>
        </>
    )
}

export default PolicyNavigation;