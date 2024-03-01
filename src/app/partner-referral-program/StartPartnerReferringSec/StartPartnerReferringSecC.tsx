'use client'
import React, { FormEvent, useState } from 'react'
import styles from './StartPartnerReferringSec.module.scss'
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

function StartPartnerReferringSecC() {
    const phoneRegex = new RegExp(
        /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
    );

    const refschema = z.object({
        r_name: z.string().nonempty('field is required').min(3, { message: 'must be atleast 3 characters' }),
        r_number: z.string().nonempty('field is required').regex(phoneRegex, 'Invalid Number!').min(10, { message: 'must be a 10 digit number' }).max(10, { message: 'must be a 10 digit number' })
    });

    const schema = z.object({
        name: z.string().nonempty('field is required').min(3, { message: 'must be atleast 3 characters' }),
        number: z.string().nonempty('field is required').regex(phoneRegex, 'Invalid Number!').min(10, { message: 'must be a 10 digit number' }).max(10, { message: 'must be a 10 digit number' }).nonempty(),
        agree: z.boolean(),
        reference: z.array(refschema)
    })

    type FormData = z.infer<typeof schema>

    const {
        register,
        handleSubmit,
        watch, control,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            reference: [{ r_name: '', r_number: '' }]
        }
    })
    const watchAgree = watch("agree", true)
    const { fields, append, remove } = useFieldArray({
        name: 'reference',
        control
    })
    const onSubmit: SubmitHandler<FormData> = async (data) => {
        await new Promise((res, rej) => setTimeout(res, 1000))
        console.log({
            data, errors
        })
    }
    return (
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
                                    {...register('name')}
                                />
                                {
                                    errors.name && (
                                        <p className={styles.error}> {errors.name.message}</p>
                                    )
                                }

                            </div>
                            <div className={`${styles.formGroup}`}>
                                <input
                                    type="number"
                                    className={`${styles.formControl} ${styles.inputBox}`}
                                    placeholder="Your Mobile No."
                                    {...register('number')}
                                />
                                {
                                    errors.number && (
                                        <p className={styles.error}> {errors.number.message}</p>
                                    )
                                }
                            </div>
                        </div>


                        {
                            fields.map((p, i) => {
                                return (
                                    <div key={i} className={`${styles.flex} ${styles.formFieldWrap}`}>
                                        <div className={`${styles.formGroup}`}>
                                            <input
                                                type="text"
                                                className={styles.formControl}
                                                placeholder="Reference Name"
                                                {...register(`reference.${i}.r_name`)}
                                            />
                                            {
                                                errors.reference && errors.reference[i] && errors.reference[i]?.r_name && (
                                                    <p className={styles.error}>
                                                        {errors.reference[i]?.r_name?.message}
                                                    </p>
                                                )
                                            }
                                        </div>

                                        <div className={`${styles.formGroup}`}>
                                            <input
                                                type="number"
                                                className={styles.formControl}
                                                placeholder="Reference Number"
                                                {...register(`reference.${i}.r_number`)}
                                            />
                                            {
                                                errors.reference && errors.reference[i] && errors.reference[i]?.r_number && (
                                                    <p className={styles.error}>
                                                        {errors.reference[i]?.r_number?.message}
                                                    </p>
                                                )
                                            }
                                        </div>

                                        {
                                            i !== 0 && (
                                                <div className={styles["deletB-ad"]} onClick={() => remove(i)} >
                                                    <img src="/icon-delete.svg" alt="" style={{ width: '20px' }} />
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
                        <a onClick={() => append({
                            r_name: '', r_number: ''
                        })} > <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M64 0C28.7082 0 0 28.7082 0 64C0 99.2918 28.7082 128 64 128C99.2918 128 128 99.2868 128 64C128 28.7132 99.2918 0 64 0ZM64 118.085C34.1812 118.085 9.91475 93.8237 9.91475 64C9.91475 34.1763 34.1812 9.91475 64 9.91475C93.8188 9.91475 118.085 34.1763 118.085 64C118.085 93.8237 93.8237 118.085 64 118.085Z" fill="#F08200" /> <path d="M88.7854 58.5917H68.9559V38.7622C68.9559 36.0257 66.7399 33.8047 63.9984 33.8047C61.2569 33.8047 59.0409 36.0257 59.0409 38.7622V58.5917H39.2114C36.4699 58.5917 34.2539 60.8127 34.2539 63.5492C34.2539 66.2857 36.4699 68.5067 39.2114 68.5067H59.0409V88.3362C59.0409 91.0727 61.2569 93.2937 63.9984 93.2937C66.7399 93.2937 68.9559 91.0727 68.9559 88.3362V68.5067H88.7854C91.5269 68.5067 93.7429 66.2857 93.7429 63.5492C93.7429 60.8127 91.5269 58.5917 88.7854 58.5917Z" fill="#F08200" /> </svg> Add</a>
                        <button type='submit'>Refer Now</button>
                    </div>
                </form>

            </div>
        </section>
    )
}

export default StartPartnerReferringSecC