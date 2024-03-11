"use client"

import React, { useState } from 'react'
import styles from './HeroSection.module.scss'
import TransparentPayoutSVG from '@/components/svgs/TransparentPayoutSVG'
import EasySellSVG from '@/components/svgs/EasySellSVG'
import HighRevenueSVG from '@/components/svgs/HighRevenueSVG'
import GrowSVG from '@/components/svgs/GrowSVG'
import Image from 'next/image'
import Modal from '@/components/Modal'
import dynamic from 'next/dynamic'

const DesktopImages = dynamic(() => import('./DesktopImages'), { ssr: false })
const FormModal = dynamic(() => import('@/components/formModal/FormModal'), { ssr: false })

function HeroSection() {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>
            <section className={styles["topBannerSec"]}>
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
                            <Image priority={true} width={400} height={600} src="https://www.miraeassetpartners.com/asset/images/hand-img.webp" alt="hand-img" title="hand-img" />
                            <p className={styles["ctaUpText"]}>Opening for 1,000 partners on an invite-only basis</p>
                            <button className={`${styles["maOrangeBtn"]} ${styles["becomePartnerBtn"]}`} onClick={() => setModalOpen(true)}>Pre-Register Now</button>
                        </div>
                    </div>
                </div>

                <DesktopImages styles={styles} />

            </section>

            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                {(onClose) => (<FormModal onClose={onClose} />)}
            </Modal>
        </>
    )
}

export default HeroSection
