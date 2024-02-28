import React from 'react'
import styles from './PartRefProBannerSec.module.scss' 

function PartRefProBannerSec() {
    return (
        <section className={`${styles.partRefProBannerSec}`}>
            <div className={`${styles.maContainer} ${styles.flex}`}> 
                <div className={`${styles.lhsWrap}`}>
                    <h2 className={`${styles.bannerTitle}`}>
                        <small>Refer a partner & share this</small>
                        <b className={`${styles.b1}`}>unbeatable</b>
                        <small>business</small>
                        <b className={`${styles.b2}`}>opport<img src="https://www.miraeassetpartners.com/asset/images/referrals/text-U-img.png" />&nbsp;nity…</b>
                    </h2>
                    <div className={`${styles.priceBandStrip}`}>₹6,000 per successful registration!</div>
                </div> 
                <div className={`${styles.rhsWrap}`}>
                    <img src="https://www.miraeassetpartners.com/asset/images/referrals/banner-img.png" />
                </div> 
            </div>
        </section>
    )
}

export default PartRefProBannerSec
 