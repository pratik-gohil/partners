"use client";
import React from 'react'
import styles from "./ThankYouWebinarRegModal.module.scss";

const ThankYouWebinarRegModal = () => {

    return (
        <div className={`${styles.formWrap}`}>
            <div className={`${styles.modalHeader}`}>
                <button type="button" className={`${styles.closepp}`} aria-label="Close" >
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className={`${styles.modelBody}`}>
                <div className={`${styles.thankinndiv}`}>
                    <img
                        data-src="/succesfull-icon.webp"
                        alt="success"
                        data-ll-status="loaded"
                        src="/succesfull-icon.webp"
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
