"use client";
import React from 'react'
import styles from "./ThankYouModal.module.scss";

const ThankYouModal = ({ onClose }: any) => {
    return (
        <>
            <div className={`${styles.formWrap} ${styles.thankpopupMan}`}>
                <div className={`${styles.modalHeader}`}>
                    <button onClick={onClose} type="button" className={`${styles.closepp}`} aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className={`${styles.modalBody}`}>

                    <div className={`${styles.thankinndiv}`}>
                        <img
                            className="lazy lz-entered lz-loaded"
                            data-src="/succesfull-icon.png"
                            alt=""
                            data-ll-status="loaded"
                            src="/succesfull-icon.png"
                        />
                        <h3 >Thank you sharing this growth opportunity with your friends!</h3>
                        <h5>The more the merrier!</h5>
                        <a
                            href="https://api.whatsapp.com/send?text=https://www.miraeassetpartners.com/"
                            id="refCode"
                            data-action="share/whatsapp/share"
                            target="_blank"
                        >
                            Click to share via{" "}
                            <img
                                className="lazy lz-entered lz-loaded"
                                data-src="/whatsapp-icon.png"
                                alt=""
                                data-ll-status="loaded"
                                src="/whatsapp-icon.png"
                            />
                        </a>
                    </div>


                </div>
            </div>
        </>
    )
}

export default ThankYouModal;

