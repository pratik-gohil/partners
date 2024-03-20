"use client";
import React from 'react'
import styles from "./ThankYouWebinarRegModal.module.scss";
import Image from 'next/image';

const ThankYouWebinarRegModal = ({ onClose }: any) => {

    return (
        <div className={`${styles.formWrap}`}>
            <div className={`${styles.modalHeader}`}>
                <button type="button" className={`${styles.closepp}`} aria-label="Close" onClick={onClose}>
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className={`${styles.modelBody}`}>
                <div className={`${styles.thankinndiv}`}>
                    <Image
                        width={300}
                        height={300}
                        alt="success"
                        data-ll-status="loaded"
                        src="/payment-succesfull.gif"
                    />
                    <p>
                        Thank you for registering for the first webinar of <span className={`${styles.orangeTxt}`}><b>Mirae Asset Partners.</b></span><br />
                        <span><small>Joining link of the webinar will be sent on your registered Email Id &amp; Mobile Number shortly.</small></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ThankYouWebinarRegModal
