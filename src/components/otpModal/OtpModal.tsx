"use client";
import React, { useState } from 'react'
import styles from "./OtpModal.module.scss";

const OtpModal = ({ onClose }: any) => {
    return (
        <>
            <div className={`${styles.formWrap} ${styles.thankpopupMan}`}>
               {/*  <div className={`${styles.modalHeader}`}>
                    <button onClick={onClose} type="button" className={`${styles.closepp}`} aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div> */}
                <div className={`${styles.modalBody}`}>
                    <div className={`${styles.setpinPopuparea} ${styles.resetpopupBl}`}>
                        <img src="https://www.miraeassetpartners.com/asset/images/set-pin-icon.png" alt="setpin-icon" />
                        <h4>
                            <span id="otpMessage" />{" "}
                            <img src="https://www.miraeassetpartners.com/asset/images/edit-icon.svg" onClick={onClose}  aria-label="Close"  alt="Icon" />
                        </h4>
                        <p>Rewards will be credited to this mobile number only.</p>
                        <div className={`${styles.otpboxInput}`}>
                            {/* <p>Enter PIN</p> */}
                            <input
                                type="text"
                                id="OTP1"
                                name="OTP1"
                                /* onkeypress="allowOnlyNumbers(event)" */
                                maxLength={1}
                                inputMode="numeric"
                            />
                            <input
                                type="text"
                                id="OTP2"
                                name="OTP2"
                                maxLength={1}
                                inputMode="numeric"
                            />
                            <input
                                type="text"
                                id="OTP3"
                                name="OTP3"
                                maxLength={1}
                                inputMode="numeric"
                            />
                            <input
                                type="text"
                                id="OTP4"
                                name="OTP4"
                                maxLength={1}
                                inputMode="numeric"
                            />
                        </div>
                        <br />
                        <p id="otpStatusMessage" style={{ display: "none", color: "red" }}>
                            OTP is invalid. Please try again.
                        </p>
                        <div id="countdownTimer" />
                        <p>
                            <a id="resendOTPLink" href="#"  data-info={1}>
                                Resend OTP
                            </a>
                        </p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default OtpModal;

