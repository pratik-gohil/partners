'use client'
import React, { useState } from 'react'
import styles from './StartPartnerReferringSec.module.scss'
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form"
import http from '@/lib/http/http'
import Modal from '@/components/Modal'
import OtpModal from '@/components/otpModal/OtpModal'
import ThankYouOtpModal from '@/components/thankYouOtpModal/ThankYouOtpModal'
import Image from 'next/image'
import { validateName, validatePhone } from '@/lib/constants/common'
import { verifyContact } from '@/lib/utils/verifyContact'

function StartPartnerReferringSecC() {
    const [showOTPModal, setShowOTPModal] = useState(false)
    const [showThankYouModal, setShowThankYouModal] = useState(false)

    const [timer, setTimer] = useState(0);

    type FormData = {
        name: string,
        mobile: string,
        reference: { name: string, mobile: string }[],
        agree: boolean
    }

    const {
        reset,
        register,
        handleSubmit,
        watch, control,
        getValues,
        formState: { errors, },
    } = useForm<FormData>({
        mode: 'all',
        defaultValues: {
            name: "",
            mobile: '',
            reference: [{ name: '', mobile: '' }]
        }
    })
    const watchAgree = watch("agree", true)
    const reference = watch("reference")
    const mobile = watch("mobile")
    const { fields, append, remove } = useFieldArray({
        name: 'reference',
        control
    })

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const res = await http('/partners/getOTP', {
            method: 'POST',
            body: JSON.stringify({
                mobile: data.mobile,
                name: data.name
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        const redData = await res.json();
        // @ts-ignore
        if (redData.status === 0) {
            setShowOTPModal(true);
        }
    }

    const resendOTP = async ({ mobile, name }: { mobile: string, name: string }) => {
        const res = await http('/partners/resendOTP', {
            method: 'POST',
            body: JSON.stringify({
                mobile,
                name
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })

        const resData = await res.json()

        if (resData.status === 0) {
            setTimer(60);

            setInterval(() => {
                setTimer(t => t - 1)
            }, 1000)
        }
    }

    return (
        <>
            <section className={`${styles.startPartnerReferringSec}`}>
                <div className={`${styles.maContainer}`}>
                    <h1 className={`${styles.secTitle}`}>Start Partner<span>Referring</span></h1>

                    <form className={`${styles.formHolder}`}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className={`${styles.referrbarInpupat}`} id="inputsContainer">
                            <div className={`${styles.flex} ${styles.formFieldWrap}`}>
                                <div className={`${styles.formGroup}`}>
                                    <input
                                        type="text"
                                        className={`${styles.formControl}`} placeholder="Your Name"
                                        {...register('name', validateName)}
                                    />
                                    {
                                        errors.name && (
                                            <p className={styles.error}>{errors.name.message}</p>
                                        )
                                    }

                                </div>
                                <div className={`${styles.formGroup}`}>
                                    <input
                                        type="text"
                                        className={`${styles.formControl} ${styles.inputBox}`}
                                        placeholder="Your Mobile No."
                                        {...register('mobile', validatePhone)}
                                    />
                                    {
                                        errors.mobile && (
                                            <p className={styles.error}>{errors.mobile.message}</p>
                                        )
                                    }
                                </div>
                            </div>

                            {
                                fields.map((p, i) => {
                                    return (
                                        <div key={i + 1} className={`${styles.flex} ${styles.formFieldWrap}`}>
                                            <div className={`${styles.formGroup}`}>
                                                <input
                                                    type="text"
                                                    className={styles.formControl}
                                                    placeholder="Reference Name"
                                                    {...register(`reference.${i}.name`, validateName)}
                                                />
                                                {
                                                    errors.reference && errors.reference[i] && errors.reference[i]?.name && (
                                                        <p className={styles.error}>
                                                            {errors.reference[i]?.name?.message}
                                                        </p>
                                                    )
                                                }
                                            </div>

                                            <div className={`${styles.formGroup}`}>
                                                <input
                                                    type="tel"
                                                    className={styles.formControl}
                                                    placeholder="Reference Number"
                                                    {...register(`reference.${i}.mobile`, {
                                                        ...validatePhone, validate: reference_mobile => {
                                                            if (mobile === reference_mobile) return "Your Number and Reference Number should be unique"
                                                            // @ts-ignore
                                                            const mobiles = reference.reduce((a, f, j) => (i !== j ? [...a, f.mobile] : a), [])

                                                            // @ts-ignore
                                                            return mobiles.includes(reference_mobile) ? "Number already added" : verifyContact({ mobile: reference_mobile }, "Mobile number already exist's.")
                                                        }
                                                    })}
                                                />
                                                {
                                                    errors.reference && errors.reference[i] && errors.reference[i]?.mobile && (
                                                        <p className={styles.error}>
                                                            {errors.reference[i]?.mobile?.message}
                                                        </p>
                                                    )
                                                }
                                            </div>

                                            {
                                                i !== 0 && (
                                                    <div className={styles["deletB-ad"]} onClick={() => remove(i)} >
                                                        <Image src="/icon-delete.svg" alt="delete" width={20} height={20} />
                                                    </div>
                                                )
                                            }
                                        </div>

                                    )
                                })
                            }
                        </div>


                        <div className={`${styles.tncCheckBoxWrap}`}>
                            <label><input type="checkbox"
                                required
                                defaultChecked
                                {...register('agree', {
                                    required: 'Please agree to Terms & Conditions'
                                })}
                            />
                                <span className={`${styles.iconCheck}`} >
                                </span>By proceeding, I agree with <a href="">T&C</a></label>

                            {
                                !watchAgree && (
                                    <span className={`${styles.errorCkBxLine}`}>
                                        {
                                            <p>Please agree to Terms & Conditions'</p>
                                        }
                                    </span>
                                )
                            }
                        </div>

                        <div className={`${styles.btnparAddsub}`}>
                            {
                                fields.length < 4 &&
                                <button onClick={() => append({
                                    name: '', mobile: ''
                                })} > <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M64 0C28.7082 0 0 28.7082 0 64C0 99.2918 28.7082 128 64 128C99.2918 128 128 99.2868 128 64C128 28.7132 99.2918 0 64 0ZM64 118.085C34.1812 118.085 9.91475 93.8237 9.91475 64C9.91475 34.1763 34.1812 9.91475 64 9.91475C93.8188 9.91475 118.085 34.1763 118.085 64C118.085 93.8237 93.8237 118.085 64 118.085Z" fill="#F08200" /> <path d="M88.7854 58.5917H68.9559V38.7622C68.9559 36.0257 66.7399 33.8047 63.9984 33.8047C61.2569 33.8047 59.0409 36.0257 59.0409 38.7622V58.5917H39.2114C36.4699 58.5917 34.2539 60.8127 34.2539 63.5492C34.2539 66.2857 36.4699 68.5067 39.2114 68.5067H59.0409V88.3362C59.0409 91.0727 61.2569 93.2937 63.9984 93.2937C66.7399 93.2937 68.9559 91.0727 68.9559 88.3362V68.5067H88.7854C91.5269 68.5067 93.7429 66.2857 93.7429 63.5492C93.7429 60.8127 91.5269 58.5917 88.7854 58.5917Z" fill="#F08200" /> </svg> Add</button>
                            }
                            <button type='submit' className={`${styles.referBtn}`}>Refer Now</button>
                        </div>
                    </form>

                </div >
            </section >
            <Modal open={showOTPModal} onClose={() => { setShowOTPModal(false) }}>
                {onClose =>
                    <OtpModal resendOTP={resendOTP} timer={timer} onClose={onClose} onOTPVerified={() => { reset(); setShowThankYouModal(true) }} getValues={getValues} />
                }
            </Modal>
            <Modal open={showThankYouModal} onClose={() => { setShowThankYouModal(false) }}>
                {onClose =>
                    <ThankYouOtpModal onClose={onClose} />
                }
            </Modal>
        </>
    )
}

export default StartPartnerReferringSecC
