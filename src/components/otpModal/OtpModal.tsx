"use client";
import React, { useEffect, useState } from 'react'
import styles from "./OtpModal.module.scss";
import http from '@/lib/http/http';

const OtpModal = ({ onClose, onOTPVerified, getValues }: any) => {
    const [OTP, setOTP] = useState({})
    const [error, setError] = useState("")
    const vals = getValues();

    useEffect(() => {
        (async () => {
            // @ts-ignore
            if (OTP[0] && OTP[1] && OTP[2] && OTP[3]) {
                const res = await http('https://marktech.mirae-asset.co.in/macm_lt_service/api/v1/partners/verifyOTP', {
                    method: "POST",
                    body: JSON.stringify({
                        "mobile": vals.number,
                        "otp": Number(Object.values(OTP).join(''))
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                const data = await res.json();

                if (data.status === 0) {
                    onClose()
                    const submit = await http('/partners/addPartnerReferral', {
                        method: "POST",
                        body: JSON.stringify({
                            referrerName: 'Riva',
                            referrerMobile: '778899767',
                            refrees: [
                                {
                                    name: 'DFGDFGd',
                                    mobile: '8899685576'
                                },
                                {
                                    name: 'FDHJGF',
                                    mobile: '7799685576'
                                }
                            ]
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    const submitRes = await submit.json()
                    if (submitRes.status === 0) {
                        onOTPVerified()
                    }
                } else {
                    setError(data.message)
                }
            }
        })()
    }, [OTP])

    return (
        <>
            <div className={`${styles.formWrap} ${styles.thankpopupMan}`}>
                <div className={`${styles.modalHeader}`}>
                    <button onClick={onClose} type="button" className={`${styles.closepp}`} aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className={`${styles.modalBody}`}>
                    <div className={`${styles.setpinPopuparea} ${styles.resetpopupBl}`}>
                        <img src="https://www.miraeassetpartners.com/asset/images/set-pin-icon.png" alt="setpin-icon" />
                        <h4>
                            <span id="otpMessage" /> +91 {vals.number}
                            <img src="https://www.miraeassetpartners.com/asset/images/edit-icon.svg" onClick={onClose} aria-label="Close" alt="Icon" />
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
                                onChange={e => setOTP({
                                    ...OTP,
                                    0: e.target.value
                                })}
                            />
                            <input
                                type="text"
                                id="OTP2"
                                name="OTP2"
                                maxLength={1}
                                inputMode="numeric"
                                onChange={e => setOTP({
                                    ...OTP,
                                    1: e.target.value
                                })}
                            />
                            <input
                                type="text"
                                id="OTP3"
                                name="OTP3"
                                maxLength={1}
                                inputMode="numeric"
                                onChange={e => setOTP({
                                    ...OTP,
                                    2: e.target.value
                                })}
                            />
                            <input
                                type="text"
                                id="OTP4"
                                name="OTP4"
                                maxLength={1}
                                inputMode="numeric"
                                onChange={e => setOTP({
                                    ...OTP,
                                    3: e.target.value
                                })}
                            />
                        </div>
                        <br />
                        <p id="otpStatusMessage" style={{ display: "none", color: "red" }}>
                            OTP is invalid. Please try again.
                        </p>
                        {error && <p className={styles.error}> {error}</p>}
                        <div id="countdownTimer" />
                        <p>
                            <a id="resendOTPLink" href="#" data-info={1}>
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

