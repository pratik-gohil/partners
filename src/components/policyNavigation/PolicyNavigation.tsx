// "use client";
import React from 'react';
// import { usePathname } from 'next/navigation';
import { headers } from 'next/headers';


import styles from "./PolicyNavigation.module.scss";
import Link from 'next/link';

const PolicyNavigation = ({ showPolicyNav }: any) => {
    const pathname = headers().get('x-pathname');

    return (
        <>
            <h2 className={`${styles.secTitle} `}>Our Policies</h2>
            <p className={`${styles.textCenter} ${styles.font14}`}>We suggest you go through our policies carefully, and keep visiting for updates.</p>
            {/* below navigation added for partner site */}
            {showPolicyNav ? (
                <nav className={`${styles.policyListBlock}`}>
                    <ul className={`${styles.policyList}`}>
                        <li
                            className={`${pathname === '/partnership-terms-of-use' ? styles.active : ''
                                }`}
                        >
                            <Link href="/partnership-terms-of-use">Terms of Use</Link>
                        </li>
                        <li
                            className={` ${pathname === '/partnership-terms-and-conditions' ? styles.active : ''
                                }`}
                        >
                            <Link href="/partnership-terms-and-conditions">Terms & Conditions</Link>
                        </li>
                        <li
                            className={` ${pathname === '/privacy' ? styles.active : ''
                                }`}
                        >
                            <Link href="/privacy">Privacy</Link>
                        </li>
                        <li
                            className={` ${pathname === '/risk-disclaimer' ? styles.active : ''
                                }`}
                        >
                            <Link href="/risk-disclaimer">Disclaimer</Link>
                        </li>
                        <li
                            className={` ${pathname === '/investor-advisory' ? styles.active : ''
                                }`}
                        >
                            <Link href="/investor-advisory">Advisory for Investors</Link>
                        </li>
                        <li
                            className={` ${pathname === '/refer-and-earn-terms-and-conditions' ? styles.active : ''
                                }`}
                        >
                            <Link href="/refer-and-earn-terms-and-conditions">Referrals T&C</Link>
                        </li>
                        <li
                            className={` ${pathname === '/mtf-emargin-terms-and-conditions' ? styles.active : ''
                                }`}
                        >
                            <Link href="/mtf-emargin-terms-and-conditions">MTF (eMargin) T&C</Link>
                        </li>
                    </ul>
                </nav>
            ) :
                (
                    <nav className={`${styles.policyListBlock}`}>
                        <ul className={`${styles.policyList}`}>
                            <li
                                className={`${pathname === '/terms-of-use' ? styles.active : ''
                                    }`}
                            >
                                <Link href="/terms-of-use">Terms of Use</Link>
                            </li>
                            <li
                                className={` ${pathname === '/terms-and-conditions' ? styles.active : ''
                                    }`}
                            >
                                <Link href="/terms-and-conditions">Terms & Conditions</Link>
                            </li>
                            <li
                                className={` ${pathname === '/privacy-policy' ? styles.active : ''
                                    }`}
                            >
                                <Link href="/privacy-policy">Privacy</Link>
                            </li>
                            <li
                                className={` ${pathname === '/disclaimer' ? styles.active : ''
                                    }`}
                            >
                                <Link href="/disclaimer">Disclaimer</Link>
                            </li>
                            <li
                                className={` ${pathname === '/advisory-for-investors' ? styles.active : ''
                                    }`}
                            >
                                <Link href="/advisory-for-investors">Advisory for Investors</Link>
                            </li>
                            <li
                                className={` ${pathname === '/referral-terms-and-conditions' ? styles.active : ''
                                    }`}
                            >
                                <Link href="/referral-terms-and-conditions">Referrals T&C</Link>
                            </li>
                            <li
                                className={` ${pathname === '/emargin-terms-and-conditions' ? styles.active : ''
                                    }`}
                            >
                                <Link href="/emargin-terms-and-conditions">MTF (eMargin) T&C</Link>
                            </li>
                        </ul>
                    </nav>
                )}

        </>
    )
}

export default PolicyNavigation;