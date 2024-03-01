"use client"
import React, { useState } from 'react'
import styles from "./HeaderSec.module.scss";
import MiraeAssetsPartnersLogo from '../svgs/MiraeAssetsPartnersLogo';

const Header = () => {
    const [showSideBar, setShowSideBar] = useState(false);

    return (
        <>
            <header className={`${styles.headerSec}`}>
                <div className={`${styles.maContainer} ${styles.flex}`}>
                    <div className={`${styles.lhsWrap} ${styles.flex}`}>
                        <a href="/" title="Mirae Asset Partners">
                            <MiraeAssetsPartnersLogo />
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
                        <div className={`${styles.rhsActionBtnWrap}`}>
                            <div className={`${styles.hamburgerMenuBtn} ${styles.mobView} ${styles.active}`}><span className={`${styles.l1}`}></span><span className={`${styles.l2}`}></span><span className={`${styles.l3}`}></span></div>  
                            {/* <div className={`${styles.menuMobSidebarBox} ${styles.show} ${styles.mobView}`}> 
                                <ul>
                                    <li>
                                        <a href="/pricing">Revenue Sharing</a>
                                    </li>
                                    <li>
                                        <a href="/partner-referral-program">Refer a Partner</a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;

