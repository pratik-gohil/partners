import React from 'react'
import styles from './PartRefProBannerSec.module.scss' 

function PartRefProBannerSec() {
    return (
        <section className={`${styles.partRefProBannerSec}`}>
            <div className={`${styles.maContainer} ${styles.flex}`}> 
                <div className={`${styles.lhsWrap}`}>
                    <h2 className={`${styles.bannerTitle}`}>Refer a partner & share this<br /> <b>unbeatable</b><br /> business <br /><b>opport<span><img src="https://www.miraeassetpartners.com/asset/images/referrals/text-U-img.png" /></span> nity…</b></h2>
                </div> 
                <div className={`${styles.rhsWrap}`}>
                <img src="https://www.miraeassetpartners.com/asset/images/referrals/banner-img.png" />
                </div> 
            </div>
        </section>
    )
}

export default PartRefProBannerSec
 