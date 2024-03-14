"use client";
import React, { useEffect, useState } from 'react'
import styles from "./OtpModal.module.scss";
import http from '@/lib/http/http';
import Image from 'next/image';

const OtpModal = ({ onClose, onOTPVerified, getValues, resendOTP, timer }: any) => {
    const [OTP, setOTP] = useState({})
    const [error, setError] = useState("")
    const vals = getValues();

    useEffect(() => {
        (async () => {
            // @ts-ignore
            if (OTP[0] && OTP[1] && OTP[2] && OTP[3]) {
                const res = await http('/partners/verifyOTP', {
                    method: "POST",
                    body: JSON.stringify({
                        "mobile": vals.mobile,
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
                            referrerName: vals.name,
                            referrerMobile: vals.mobile,
                            referees: vals.reference
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

    const inputhandler = (e: any) => {
        const target = e.target as HTMLInputElement;
        const nextSibling = target.nextSibling as HTMLInputElement;
        if (target.value) {
            if (nextSibling !== null) {
                nextSibling.focus()
            }
        }
    }

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
                        <Image width={50} height={50} src="/set-pin-icon.webp" alt="setpin-icon" />
                        <h4>
                            Enter OTP (Sent on +91 {vals.mobile})
                            <Image width={30} height={30} src="/edit-icon.svg" onClick={onClose} aria-label="Close" alt="Icon" />
                        </h4>
                        <p>Rewards will be credited to this mobile number only.</p>
                        <div className={`${styles.otpboxInput}`}>
                            <input
                                type="text" pattern="\d*"
                                id="OTP1"
                                name="OTP1"
                                maxLength={1}
                                inputMode="numeric"
                                onChange={e =>
                                    setOTP({
                                        ...OTP,
                                        0: e.target.value
                                    })
                                }
                                onInput={inputhandler}
                                onKeyDown={e => {
                                    const target = e.target as HTMLInputElement;
                                    const previousSibling = target.previousSibling as HTMLInputElement
                                    const key = e.key;
                                    if (key === "Backspace" && target.value === "") {
                                        if (previousSibling) {
                                            previousSibling.focus()
                                        }
                                    }
                                }}
                                autoFocus
                            />
                            <input
                                type="text" pattern="\d*"
                                id="OTP2"
                                name="OTP2"
                                maxLength={1}
                                inputMode="numeric"
                                onChange={e => setOTP({
                                    ...OTP,
                                    1: e.target.value
                                })}
                                onInput={inputhandler}
                                onKeyDown={e => {
                                    const target = e.target as HTMLInputElement;
                                    const previousSibling = target.previousSibling as HTMLInputElement
                                    const key = e.key;
                                    if (key === "Backspace" && target.value === "") {
                                        if (previousSibling !== null) {
                                            previousSibling.focus()
                                        }
                                    }
                                }}
                            />
                            <input
                                type="text" pattern="\d*"
                                id="OTP3"
                                name="OTP3"
                                maxLength={1}
                                inputMode="numeric"
                                onChange={e => setOTP({
                                    ...OTP,
                                    2: e.target.value
                                })}
                                onInput={inputhandler}
                                onKeyDown={e => {
                                    const target = e.target as HTMLInputElement;
                                    const previousSibling = target.previousSibling as HTMLInputElement
                                    const key = e.key;
                                    if (key === "Backspace" && target.value === "") {
                                        if (previousSibling) {
                                            previousSibling.focus()
                                        }
                                    }
                                }}
                            />
                            <input
                                type="text" pattern="\d*"
                                id="OTP4"
                                name="OTP4"
                                maxLength={1}
                                inputMode="numeric"
                                onChange={e => setOTP({
                                    ...OTP,
                                    3: e.target.value
                                })}
                                onInput={inputhandler}
                                onKeyDown={e => {
                                    const target = e.target as HTMLInputElement;
                                    const previousSibling = target.previousSibling as HTMLInputElement
                                    const key = e.key;
                                    if (key === "Backspace" && target.value === "") {
                                        if (previousSibling) {
                                            previousSibling.focus()
                                        }
                                    }
                                }}
                            />
                        </div>
                        <br />
                        <p style={{ display: "none", color: "red" }}>
                            OTP is invalid. Please try again.
                        </p>
                        {error && <p className={styles.error}> {error}</p>}
                        <div />
                        {timer > 0 ? timer + " seconds remaining to resend OTP" : <p className={styles.resend} onClick={() => resendOTP({ mobile: vals.mobile, name: vals.name })}>
                            Resend OTP
                        </p>}
                    </div>


                </div>
            </div>
        </>
    )
}

export default OtpModal;

