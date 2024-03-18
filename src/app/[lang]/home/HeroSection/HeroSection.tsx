"use client"
import React, { useEffect, useState } from 'react'
import useUserAgent from '@/lib/hooks/useUserAgent';
import styles from './HeroSection.module.scss'
import TransparentPayoutSVG from '@/components/svgs/TransparentPayoutSVG'
import EasySellSVG from '@/components/svgs/EasySellSVG'
import HighRevenueSVG from '@/components/svgs/HighRevenueSVG'
import GrowSVG from '@/components/svgs/GrowSVG'
import Modal from '@/components/Modal'
import dynamic from 'next/dynamic'
import BackBgLeftImg from "@/public/backBgLeftImg.webp";
import Image from 'next/image';

//const DesktopImages = dynamic(() => import('./DesktopImages'), { ssr: false })
const HandImage = dynamic(() => import('./HandImage'), { ssr: false })
const FormModal = dynamic(() => import('@/components/formModal/FormModal'), { ssr: false })

function HeroSection() {
    const [modalOpen, setModalOpen] = useState(false)

    const currentDevice = useUserAgent()

    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        setIsDesktop(currentDevice.isDesktop())
    }, [currentDevice])

    return (
        <>
            <section className={styles["topBannerSec"]}>
                <div className={`${styles.bannerTopWrap}`}>
                    <div className={styles["maContainer"]}>
                        <h1 style={{
                            fontFamily: 'Open Sans',
                            fontWeight: "600",
                            color: "#043b72"
                        }} className={styles["pageTitle"]}>Launching India&apos;s largest business partner program</h1>
                        <div className={styles["bannerInnerBox"]}>
                            <ul className={styles["lhsWrap"]}>
                                <li>
                                    <GrowSVG />
                                    <span>Grow your <b>income by 5X</b></span></li>
                                <li><TransparentPayoutSVG /><span><b>Transparent payouts.</b> No conditions</span></li>
                                <li>
                                    <EasySellSVG />
                                    <span>Global brand, <b>easy to sell</b></span></li>
                                <li>
                                    <HighRevenueSVG />
                                    <span><b>Lowest client rates,</b> yet higher revenue</span></li>
                            </ul>
                            <div className={styles["rhsWrap"]}>
                                <HandImage />
                                <p className={styles["ctaUpText"]}>Opening for 1,000 partners on an invite-only basis</p>
                                <button className={`${styles["maOrangeBtn"]} ${styles["becomePartnerBtn"]}`} onClick={() => setModalOpen(true)}>Pre-Register Now</button>
                            </div>
                        </div>
                    </div>
                </div>{/* 
                <DesktopImages styles={styles} /> */}

                {isDesktop ?
                    <div className={`${styles.sImg} ${styles.deskView}`}><Image priority={true} width={738} height={511} src={BackBgLeftImg.src} alt="Stars" /></div>
                    : ''
                }
                <div className={`${styles.bottomWaveWrap}`}>
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" className={`${styles.bottomWave}`}>
                        <path d="M-27.36,-42.91 C90.57,178.13 323.64,-53.77 508.17,19.25 L500.00,0.00 L26.80,-18.23 Z"></path>
                    </svg>
                </div>
            </section>

            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                {(onClose) => (<FormModal onClose={onClose} />)}
            </Modal>
        </>
    )
}

export default HeroSection
