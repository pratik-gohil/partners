"use client"
import React, { useState } from 'react'
import styles from "./HeaderSec.module.scss";
import MiraeAssetsPartnersLogo from "../../../public/maPartnersLogo.svg";
import LangguageDropdown from '../languageDropdown/LanguageDropdown';
import Image from 'next/image';

const Header = () => {
    const [showSideBar, setShowSideBar] = useState(false);

    return (
        <>
            <header className={`${styles.headerSec}`}>
                <div className={`${styles.maContainer} ${styles.flex}`}>
                    <div className={`${styles.lhsWrap} ${styles.flex}`}>
                        <a href="/" title="Mirae Asset Partners">
                            {/* <MiraeAssetsPartnersLogo /> */}
                            <Image priority src={`${MiraeAssetsPartnersLogo.src}`} alt="mstock" title="mstock" width={280} height={71} />
                        </a>
                    </div>
                    <div className={`${styles.rhsWrap} ${styles.flex}`}>
                        <ul className={`${styles.topMenuUlist}`}>
                            <li>
                                <a href="/pricing">Revenue Sharing</a>
                            </li>
                            <li>
                                <a href="/partner-referral-program">Refer a Partner</a>
                            </li>
                            <li>
                                <button className={`${styles.maOrangeBtn} ${styles.becomePartnerBtn}`} data-toggle="modal">Pre-Register <span>Now</span></button>
                            </li>
                        </ul>
                        <LangguageDropdown />
                        <div className={`${styles.rhsActionBtnWrap}`}>
                            <div className={`${styles.hamburgerMenuBtn} ${styles.mobView} ${showSideBar && styles.active}`} onClick={() => setShowSideBar(!showSideBar)}><span className={`${styles.l1}`}></span><span className={`${styles.l2}`}></span><span className={`${styles.l3}`}></span></div>
                            {
                                showSideBar &&
                                <div onClick={() => setShowSideBar(false)} className={`${styles.menuMobSidebarBoxOverlay}`}></div>
                            }
                            <div className={`${styles.menuMobSidebarBox} ${showSideBar && styles.show} ${styles.mobView}`}>
                                <ul>
                                    <li>
                                        <a href="/pricing">Revenue Sharing</a>
                                    </li>
                                    <li>
                                        <a href="/partner-referral-program">Refer a Partner</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;

