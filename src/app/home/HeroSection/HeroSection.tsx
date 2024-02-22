import React from 'react'
import styles from './HeroSection.module.scss'
import TransparentPayoutSVG from '@/components/svgs/TransparentPayoutSVG'
import EasySellSVG from '@/components/svgs/EasySellSVG'
import HighRevenueSVG from '@/components/svgs/HighRevenueSVG'
import GrowSVG from '@/components/svgs/GrowSVG'

function HeroSection() {
    return (
        <section className={styles["topBannerSec"]}>
            <div className={styles["maContainer"]}>
                <h2 className={styles["secTitle"]}>Launching India's largest business partner program</h2>
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
                        <img src="https://www.miraeassetpartners.com/asset/images/hand-img.webp" width="" height="" alt="test" title="test" />
                        <p className={styles["ctaUpText"]}>Opening for 1,000 partners on an invite-only basis</p>
                        <button className={`${styles["maOrangeBtn"]} ${styles["becomePartnerBtn"]}`} data-toggle="modal">Pre-Register Now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
