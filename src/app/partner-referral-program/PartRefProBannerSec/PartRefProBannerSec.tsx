import React from 'react'
import styles from './PartRefProBannerSec.module.scss'
import Image from 'next/image'

function PartRefProBannerSec() {
    return (
        <section className={`${styles.partRefProBannerSec}`}>
            <div className={`${styles.maContainer} ${styles.flex}`}>
                <div className={`${styles.lhsWrap}`}>
                    <h2 className={`${styles.bannerTitle}`}>
                        <span>Refer a partner & share this</span>
                        <b className={`${styles.b1}`}>unbeatable</b>
                        <span>business</span>
                        <b className={`${styles.b2}`}>opport<img src="/referrals/text-U-img.webp" alt='opportunity…' />&nbsp;nity…</b>
                    </h2>
                    <div className={`${styles.priceBandStrip}`}>₹6,000 per successful registration!</div>
                </div>
                <div className={`${styles.rhsWrap}`}>
                    <Image src="/referrals/banner-img.webp" alt='Refer a partner & share this UNBEATABLE business OPPORTUNITY…' width={500} height={500} quality={100} />
                </div>
            </div>
        </section>
    )
}

export default PartRefProBannerSec
