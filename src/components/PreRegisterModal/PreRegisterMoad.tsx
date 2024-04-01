import React from 'react'
import styles from "./FormModal.module.scss";
import SelectMenu from '@/components/SelectMenu/SelectMenu';
import { useForm } from 'react-hook-form';
import http from '@/lib/http/http';
import { alphabetsOnly, numericOnly, validateEmail, validateName, validatePhone } from '@/lib/constants/common';
import { verifyContact } from '@/lib/utils/verifyContact';
import cities from "@/json/cities.json"
import { usePathname, useSearchParams } from 'next/navigation';

function PreRegisterMoad({ setIndex, onClose, setGrowthModalState }: any) {

    type FormData = {
        name: string,
        registrationType: string,
        businessName: string,
        mobile: string,
        email: string,
        city: string,
        pincode: string,
        GSTYN: string,
        subBroker: string,
        existingAssociation: string
    }

    const searchParams = useSearchParams()
    const {
        pref,
        prefsrc,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_adgroup,
        utm_creative,
        utm_device,
        utm_content,
        utm_term,
        gclid,
        url
    } = Object.fromEntries(searchParams)

    const pathname = usePathname()

    const {
        register,
        handleSubmit,
        watch,
        getValues,
        setValue,
        formState: { errors },
    } = useForm<FormData>({
        mode: "onBlur",
        defaultValues: {
            subBroker: "0",
        },
    })

    const onSubmit = async (data: any) => {
        const res = await http('/partners/preRegisterPartner', {
            method: 'POST',
            body: JSON.stringify({
                partnerDetails: { ...data, GSTYN: !!Number(GSTYN), GSTNumber: "", registrationAuthorized: false },
                leadSquaredDetails: {
                    pref: pref || "", //check where it is comming
                    prefsrc: prefsrc || "", //check where it is comming    
                    utmSource: utm_source || "",
                    utmMedium: utm_medium || "",
                    utmCampaign: utm_campaign || "",
                    utmAdgroup: utm_adgroup || "",
                    utmTerm: utm_term || "",
                    utmContent: utm_content || "",
                    utmCreative: utm_creative || "",
                    utmDevice: utm_device || "",
                    gclid: gclid || "",
                    url: url || "",
                    fromPage: pathname
                }
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const datares = await res.json()

        if (datares.status === 0) {
            setGrowthModalState((s: any) => ({ ...s, name: data.name, mobile: data.mobile, partnerKey: datares.data.partnerID }))
            setIndex(1)
        }
    }

    const subBroker = watch("subBroker")
    const GSTYN = getValues("GSTYN")

    return (
        <div className={`${styles.formWrap}`}>
            <div className={`${styles.modalHeader}`}>
                <h2 className={`${styles.modaltitle}`}>Enter Details</h2>
                <button type="button" className={`${styles.closepp}`} aria-label="Close" onClick={onClose}>
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ul className={`${styles.formContent}`}>
                    <li>
                        <div className={`${styles.formGroup}`}>
                            <label >
                                Name <sup>*</sup>
                            </label>
                            <input
                                onKeyDown={alphabetsOnly}
                                type="text"
                                id="partnerName"
                                className={`${styles.formControl}`}
                                autoFocus
                                {...register('name', validateName)}
                            />
                            {errors.name && <span className={`${styles.textDanger}`} id="partner-valid">
                                {errors.name.message}
                            </span>}
                        </div>
                    </li>
                    <li>
                        <div className={`${styles.formGroup}`}>
                            <label >
                                Registration type <sup>*</sup>
                            </label>
                            <SelectMenu contentEditable={false} options={["Individual",
                                "Partnership firm",
                                "Limited Liability Partnership (LLP)",
                                "Corporate"
                            ]}
                                required
                                register={register}
                                name='registrationType'
                                onChange={(val: any) => setValue("registrationType", val)}
                            />
                            {errors.registrationType && <span className={`${styles.textDanger}`} id="partner-valid">
                                {errors.registrationType.message}
                            </span>}
                        </div>
                    </li>
                    <li>
                        <div className={`${styles.formGroup}`}>
                            <label >Your Business Name</label>
                            <input
                                type="text"
                                className={`${styles.formControl}`}
                                id="businessName"
                                maxLength={100}
                                {...register("businessName")}
                            />
                            {errors.businessName && <span className={`${styles.textDanger}`} id="partner-valid">
                                {errors.businessName.message}
                            </span>}
                        </div>
                    </li>
                    <li>
                        <div className={`${styles.formGroup}`}>
                            <label >
                                Mobile no. <sup>*</sup>
                            </label>
                            <input
                                onKeyDown={numericOnly}
                                {...register("mobile", { ...validatePhone, validate: mobile => verifyContact({ mobile }, "Mobile number already exist's.", "preRegister") })} type="text" className={`${styles.formControl}`} maxLength={10} />
                            {errors.mobile && <span className={`${styles.textDanger}`} id="partner-valid">
                                {errors.mobile.message}
                            </span>}
                        </div>
                    </li>
                    <li>
                        <div className={`${styles.formGroup}`}>
                            <label >
                                Email id <sup>*</sup>
                            </label>
                            <input {...register("email", { ...validateEmail, validate: email => verifyContact({ email }, "Email already exist's.", "preRegister") })} type="text" className={`${styles.formControl}`} />
                            {errors.email && <span className={`${styles.textDanger}`} id="partner-valid">
                                {errors.email.message}
                            </span>}
                        </div>
                    </li>
                    <li>
                        <div className={`${styles.formGroup}`}>
                            <label >
                                City <sup>*</sup>
                            </label>
                            <SelectMenu
                                options={cities} contentEditable
                                register={register}
                                name='city'
                                onChange={(val: any) => setValue("city", val, { shouldValidate: true })}
                                required="City cannot be blank"
                            />
                            {errors.city && <span className={`${styles.textDanger}`} id="partner-valid">
                                {errors.city.message}
                            </span>}
                        </div>
                    </li>
                    <li>
                        <div className={`${styles.formGroup}`}>
                            <label>
                                Pincode <sup>*</sup>
                            </label>
                            <input
                                onKeyDown={numericOnly}
                                {...register("pincode", {
                                    required: "Pincode cannot be blank",
                                    pattern: {
                                        value: /^[0-9]{6}$/,
                                        message: "Pincode is Invalid."
                                    }
                                })}
                                maxLength={6}
                                type="text"
                                className={`${styles.formControl}`}
                            />
                            {errors.pincode && <span className={`${styles.textDanger}`} id="partner-valid">
                                {errors.pincode.message}
                            </span>}
                        </div>
                    </li>
                    <li>
                        <div className={`${styles.formGroup}`}>
                            <label >Already registered as a Subbroker / AP?</label>
                            <div className={`${styles.switchField}`}>
                                <input
                                    type="radio"
                                    id="personyes"
                                    value={1}
                                    {...register('subBroker', { required: true })}
                                    defaultChecked={!!Number(subBroker)}
                                    tabIndex={-1}
                                />
                                <label tabIndex={0} htmlFor="personyes">Yes</label>
                                <input
                                    type="radio"
                                    id="personno"
                                    value={0}
                                    {...register('subBroker', { required: true })}
                                    defaultChecked={!!!Number(subBroker)}
                                    tabIndex={-1}
                                />
                                <label tabIndex={0} htmlFor='personno'>No</label>
                            </div>
                        </div>
                    </li>
                    <li
                        style={{ display: subBroker === "1" ? 'block' : 'none' }}
                        className="existing-associationBlock associationyes"
                    >
                        <div className={`${styles.formGroup}`}>
                            <label >
                                Existing Association <sup>*</sup>
                            </label>
                            <input
                                type="text"
                                className={`${styles.formControl}`}
                                id="existingAssociation"
                                placeholder="Name of Existing Association"
                                maxLength={100}
                                {...register("existingAssociation", {
                                    required: subBroker === "1" ? "Association cannot be blank" : false
                                },
                                )}
                                autoFocus
                            />
                            {
                                errors.existingAssociation && <span className={`${styles.textDanger}`} id="partner-valid">
                                    {errors.existingAssociation.message}
                                </span>
                            }
                        </div>
                    </li>
                </ul>

                <div>
                    <ul className={`${styles.formContent} ${styles.last}`}>
                        <li>
                            <div className={`${styles.formGroup}`}>
                                <label>
                                    Are you GST Registered? <sup>*</sup>
                                </label>
                                <div className={`${styles.switchField}`}>
                                    <input
                                        type="radio"
                                        id="GSTyes"
                                        value={1}
                                        {...register("GSTYN", {
                                            required: true
                                        })}
                                        defaultChecked={GSTYN !== undefined && !!GSTYN}
                                        tabIndex={-1}
                                    />
                                    <label tabIndex={0} htmlFor='GSTyes'>Yes</label>
                                    <input
                                        type="radio"
                                        id="GSTno"
                                        value={0}
                                        {...register("GSTYN", {
                                            required: true
                                        })}
                                        defaultChecked={GSTYN !== undefined && !!!GSTYN}
                                        tabIndex={-1}
                                    />
                                    <label tabIndex={0} htmlFor='GSTno'>No</label>
                                </div>

                                {
                                    errors.GSTYN && <span className={`${styles.textDanger}`} id="partner-valid">
                                        Please Select GST Registration Status
                                    </span>
                                }
                            </div>
                        </li>
                    </ul>
                </div>
                <div
                    className={`${styles.dFlex} ${styles.justifyCenter}`}>
                    <button
                        type='submit'
                        className={`${styles.btn} ${styles.sumbitbtnpop}`}
                    >
                        Pre-Register Now
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PreRegisterMoad
