"use client"
import React from 'react'
import styles from './PricingCTABannerSec.module.scss'
import Image from 'next/image'
import RetainQueryLink from '../../../components/RetainQueryLink/RetainQueryLink';

import { useForm } from "react-hook-form"

function PricingCTABannerSec() {

    type FormData = {
        mobile: string,
        agree: boolean
    }

    const {
        register,
        //handleSubmit,
        watch
    } = useForm<FormData>({
        mode: 'all',
        defaultValues: {
            mobile: '',
        }
    })
    const watchAgree = watch("agree", true);

    return (
        <>
            <section className={`${styles.pricingCTABannerSec}`}>
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
                                <Image width={500} height={500} src="/pricing-banner-100-perce-img.webp" alt="pricing" />
                            </div>
                            <div className={`${styles.pricingBannerRightBlock}`}>
                                <div className={`${styles.brotextBr}`}>Sharing Across <span>8</span><br />Revenue Streams!</div>
                            </div>
                        </div>


                        <div className={`${styles.formHolder}`}>
                            <form method="POST" action="" id="form-open-account" className={`${styles.formBox}`}>
                                <input type="text" name="mobileNumber" placeholder="Enter mobile number" id="txtMobileNo" />
                                <input type="button" id="GetStarted" value="Become a Partner" className={`${styles.submitButton}`} />
                            </form>
                            <span className={`${styles.errorCkBxLine}`}>Please enter valid mobile number!</span>
                            <div className={`${styles.tncCheckBoxWrap}`}>
                                <label>
                                    <input type="checkbox" required defaultChecked {...register('agree', { required: 'Please agree to Terms & Conditions' })} />
                                    <span className={`${styles.iconCheck}`}></span>I have read & understood the <RetainQueryLink href="/referral-terms-and-conditions">T&C and privacy policy</RetainQueryLink>
                                </label>
                                {
                                    !watchAgree && (
                                        <span className={`${styles.errorCkBxLine}`}> {<p>Please agree to all Terms & Conditions and Privacy Policy</p>} </span>
                                    )
                                }
                            </div>

                        </div>


                    </div>





                </div>
            </section>
        </>
    )
}

export default PricingCTABannerSec
