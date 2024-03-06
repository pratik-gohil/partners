"use client";
import React, { useState } from 'react'
import styles from "./ThankYouOtpModal.module.scss";

const ThankYouOtpModal = ({ onClose }: any) => {
    return (
        <>
            <div className={`${styles.formWrap} ${styles.thankpopupMan}`}>
                <div className={`${styles.modalHeader}`}>
                    <button onClick={onClose} type="button" className={`${styles.closepp}`} aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className={`${styles.modalBody}`}>
                    <div className={`${styles.thankyoupat}`}>
                        <img src="https://www.miraeassetpartners.com/asset/images/payment-succesfull.gif" alt="Succesfull icon" />
                        <h2>Thank You!</h2>
                        <p>
                            Your referral lead has been submitted successfully! Rewards will be credited
                            once the referred partner completes their registration.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThankYouOtpModal;

