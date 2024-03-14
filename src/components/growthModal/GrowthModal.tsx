"use client";
import React from 'react'
import styles from "./GrowthModal.module.scss";
import { z } from 'zod';
import { phoneRegex } from '@/lib/constants/phoneReg';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import http from '@/lib/http/http';
import Image from 'next/image';

const GrowthModal = ({ onClose, setIndex, growthModalState }: any) => {
    const refschema = z.object({
        name: z.string().min(1),
        mobile: z.string().regex(phoneRegex, "Invalid mobile number").min(10).max(10)
    });

    const schema = z.object({
        reference: z.array(refschema)
    })

    type FormData = z.infer<typeof schema>

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            reference: [{ name: '', mobile: '' }]
        }
    })

    const { fields, append, remove } = useFieldArray({
        name: 'reference',
        control
    })

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const res = await http("/partners/preRegisterPartnerReferrals", {
            method: "POST",
            body: JSON.stringify({ ...growthModalState, referees: data.reference }),
            headers: { 'Content-Type': "application/json" }
        })

        const resdata = await res.json()

        if (resdata.status === 0) {
            setIndex(2)
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
                <form onSubmit={handleSubmit(onSubmit)} className={`${styles.modalBody}`}>
                    <h2>
                        <strong>Thank you for showing your interest in</strong> <br />
                        <span>Mirae Asset Partners</span>
                    </h2>
                    <div className={`${styles.thankinndiv}`}>
                        <p>
                            We will intimate you once the <br />
                            program is launched. Stay tuned!
                        </p>
                        <h5>Share this growth opportunity</h5>
                        <p>
                            Tell your friends about the unique benefits of Mirae Asset Partners and give
                            them a chance to be part of first 1000 partners.
                        </p>
                        <div id="inputsContainerForm">

                            {fields.map((r, i) => (
                                <div key={i} className={`${styles.onerownamenumBar}`}>
                                    <ul>
                                        <li>
                                            <div className={`${styles.formGroup}`}>
                                                <input
                                                    type="text"
                                                    className={`${styles.formControl}`}
                                                    id="referalName1"
                                                    placeholder="Reference Name"
                                                    {...register(`reference.${i}.name`)}
                                                />
                                                {
                                                    errors.reference && errors.reference[i] && errors.reference[i]?.name && (
                                                        <span id="referalName1-valid" className={`${styles.textDanger}`}>
                                                            {errors.reference[i]?.name?.message}
                                                        </span>
                                                    )
                                                }
                                            </div>
                                        </li>
                                        <li>
                                            <div className={`${styles.formGroup}`}>
                                                <input
                                                    type="text"
                                                    className={`${styles.formControl}`}
                                                    id="referalMobile1"
                                                    maxLength={10}
                                                    placeholder="Reference Mobile No."
                                                    {...register(`reference.${i}.mobile`)}
                                                />
                                                {
                                                    errors.reference && errors.reference[i] && errors.reference[i]?.mobile && (
                                                        <span id="referalName1-valid" className={`${styles.textDanger}`}>
                                                            {errors.reference[i]?.mobile?.message}
                                                        </span>
                                                    )
                                                }
                                            </div>
                                        </li>
                                    </ul>
                                    {i === 0 ? fields.length <= 4 ? (
                                        <div onClick={() => append([{
                                            name: '', mobile: ''
                                        }])}
                                            className={`${styles.deletBad} ${styles.addBad}`}>
                                            <Image width={10} height={10} src="/icon-add.svg" className={`${styles.addiconadd}`} alt="add" />
                                        </div>
                                    ) : <div style={{
                                        width: "80px",
                                        height: 0,
                                        display: "inline-block"
                                    }}></div> : (<div onClick={() => { remove(i) }} className={`${styles.deletBad} ${styles.addBad}`} >
                                        <Image width={10} height={10} src="/icon-delete.svg" className={`${styles.deleticonadd}`} alt="delete" />
                                    </div>)}
                                </div>
                            ))}

                        </div>
                    </div>
                    <div
                        className={`${styles.dFlex} ${styles.justifyCenter}`}>
                        <button
                            type='submit'
                            className={`${styles.btn} ${styles.sumbitbtnpop}`}
                        >
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default GrowthModal;

