"use client";
import React from 'react'
import styles from "./ThankYouModal.module.scss";
import Image from 'next/image';

const ThankYouModal = ({ onClose, refCode }: any) => {
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
                        <Image
                            width={200}
                            height={200}
                            alt="success"
                            src="/payment-succesfull.gif"
                        />
                        <h3 >Thank you sharing this growth opportunity with your friends!</h3>
                        <h5>The more the merrier!</h5>
                        <a
                            href={`https://api.whatsapp.com/send?text=https://www.miraeassetpartners.com/${refCode}`}
                            id="refCode"
                            data-action="share/whatsapp/share"
                            target="_blank"
                        >
                            Click to share via{" "}
                            <Image
                                width={10}
                                height={10}
                                alt="whatsapp"
                                data-ll-status="loaded"
                                src="/whatsapp-icon.webp"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThankYouModal;

