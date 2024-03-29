import React from 'react'
import styles from './PricingBannerSec.module.scss' 

function PricingBannerSec() {
    return (
        <section className={`${styles.pricingBannerSec}`}>
            <div className={`${styles.maContainer}`}> 

                <div className={`${styles.pricingBannerBlock}`}>
                    <div className={`${styles.listbanner2Li}`}>
                        <ul>
                            <li>Unlimited</li>
                            <li>Unbelievable</li>
                        </ul>
                    </div>
                    <div className={`${styles.flex} ${styles.imgWrap}`}>
                        <div className={`${styles.pricingBannerImgBlock}`}>
                            <img src="https://www.miraeassetpartners.com/asset/images/pricing-banner-100-perce-img.png" alt="" />
                        </div>
                        <div className={`${styles.pricingBannerRightBlock}`}>
                            <div className={`${styles.brotextBr}`}>Brokerage</div>
                            Sharing!
                        </div>
                    </div>
                    <div className={`${styles.taglinePribann}`}>
                        Also, get sharing across 8 more revenue streams including <b>Interest charges, DP charges, Account opening fee</b> and more.
                    </div>
                    <br />
                    <button className={`${styles.maOrangeBtn}`} data-toggle="modal" >Pre-Register Now</button>
                    <p className={`${styles.aplinkSc}`}><a>View AP registration & onboarding charges</a></p>
                </div>
        
            </div>
        </section> 


    )
}

export default PricingBannerSec
 