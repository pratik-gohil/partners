"use client"
import React, { useState } from 'react'
import styles from "./HeaderSec.module.scss";
import MiraeAssetsPartnersLogo from "../../../public/maPartnersLogo.svg";
import LangguageDropdown from '../languageDropdown/LanguageDropdown';
import Image from 'next/image';
import Modal from '@/components/Modal'
import dynamic from 'next/dynamic'
import RetainQueryLink from '../RetainQueryLink/RetainQueryLink';

const Header = () => {
    const [showSideBar, setShowSideBar] = useState(false);
    const FormModal = dynamic(() => import('@/components/formModal/FormModal'), { ssr: false })
    const [modalOpen, setModalOpen] = useState(false)

    return (

        <>
            <header className={`${styles.headerSec}`}>
                <div className={`${styles.maContainer} ${styles.flex}`}>
                    <div className={`${styles.lhsWrap} ${styles.flex}`}>
                        <RetainQueryLink href="/">
                            <Image priority src={`${MiraeAssetsPartnersLogo.src}`} alt="mstock" title="mstock" width={280} height={71} />
                        </RetainQueryLink>
                    </div>
                    <div className={`${styles.rhsWrap} ${styles.flex}`}>
                        <ul className={`${styles.topMenuUlist}`}>
                            <li>
                                <RetainQueryLink href={"/pricing"}>Revenue Sharing</RetainQueryLink>
                            </li>
                            <li>
                                <RetainQueryLink href="/partner-referral-program">Refer a Partner</RetainQueryLink>
                            </li>
                            <li>
                                <button className={`${styles.maOrangeBtn} ${styles.becomePartnerBtn}`} data-toggle="modal" onClick={() => setModalOpen(true)}>Pre-Register <span>Now</span></button>
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
                                        <RetainQueryLink href="/pricing">Revenue Sharing</RetainQueryLink>
                                    </li>
                                    <li>
                                        <RetainQueryLink href="/partner-referral-program">Refer a Partner</RetainQueryLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                {(onClose) => (<FormModal onClose={onClose} />)}
            </Modal>
        </>
    )
}

export default Header;

