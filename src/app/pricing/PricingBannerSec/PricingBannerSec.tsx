"use client"
import React, { useState } from 'react'
import styles from './PricingBannerSec.module.scss' 
import dynamic from 'next/dynamic'
import Modal from '@/components/Modal'

function PricingBannerSec() {
    const FormModal = dynamic(() => import('@/components/formModal/FormModal'), { ssr: false })
const [modalOpen, setModalOpen] = useState(false)
    return (
        <>
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
                            <img src="/pricing-banner-100-perce-img.webp" alt="" />
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
                    <button className={`${styles.maOrangeBtn}`} data-toggle="modal" onClick={() => setModalOpen(true)} >Pre-Register Now</button>
                    <p className={`${styles.aplinkSc}`}><a href='#partnerRegistration'>View AP registration & onboarding charges</a></p>
                </div>
        
            </div>
        </section> 
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
{(onClose) => (<FormModal onClose={onClose} />)}
</Modal>
        </>
    ) 
}


export default PricingBannerSec
 