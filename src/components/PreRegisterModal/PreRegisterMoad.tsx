import React from 'react'
import styles from "./FormModal.module.scss";
import SelectMenu from '../SelectMenu/SelectMenu';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import http from '@/lib/http/http';
import { phoneRegex } from '@/lib/constants/phoneReg';

function PreRegisterMoad({ setIndex, onClose, setGrowthModalState }: any) {
    const verifyContact = async (data: any) => {
        if (data.mobile || data.email) {
            const res = await http('/partners/validateInput?source=preRegister', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })

            const resdata = await res.json()

            return !resdata.data;
        }

        return false
    }

    const schema = z.object({
        name: z.string().min(3, { message: 'must be atleast 3 characters' }),
        registrationType: z.enum(["Individual",
            "Partnership firm",
            "Limited Liability Partnership (LLP)",
            "Corporate"
        ]),
        businessName: z.string().min(3, { message: 'must be atleast 3 characters' }),
        mobile: z.string().regex(phoneRegex, "Invalid mobile number").refine((val) => verifyContact({ mobile: val }), { message: "Mobile number already exists" }),
        email: z.string()
            .min(1)
            .email()
            .refine(val => verifyContact({ email: val }), { message: "Email already exists" }),
        city: z.string().min(1),
        pincode: z.string().min(5).max(5),
        GSTYN: z.string(),
        subBroker: z.string(),
        existingAssociation: z.string()
    })

    type FormData = z.infer<typeof schema>

    const {
        register,
        handleSubmit,
        watch,
        getValues,
        setValue,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            subBroker: "0"
        }
    })

    const onSubmit = async (data: any) => {
        const res = await http('/partners/preRegisterPartner', {
            method: 'POST',
            body: JSON.stringify({
                partnerDetails: { ...data, GSTYN: !!data.GSTYN, GSTNumber: "" },
                leadSquaredDetails: {
                    pref: '', //check where it is comming
                    prefsrc: '', //check where it is comming    
                    utmSource: '',
                    utmMedium: '',
                    utmCampaign: '',
                    utmAdgroup: '',
                    utmTerm: '',
                    utmContent: '',
                    utmCreative: '',
                    utmDevice: '',
                    fromPage: '',
                    url: 'fhfghg'
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
                                type="text"
                                id="partnerName"
                                className={`${styles.formControl}`}
                                maxLength={50}
                                autoFocus
                                {...register('name')}
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
                            <SelectMenu options={["Individual",
                                "Partnership firm",
                                "Limited Liability Partnership (LLP)",
                                "Corporate"
                            ]}
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
                            <input {...register("mobile")} type="text" className={`${styles.formControl}`} id="mobleNo" maxLength={10} />
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
                            <input {...register("email")} type="text" className={`${styles.formControl}`} id="emailID" maxLength={50} />
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
                            <input
                                type="text"
                                className={`${styles.formControl} ${styles.uiautocompleteinput}`}
                                id="city"
                                maxLength={50}
                                autoComplete="off"
                                {...register("city")}
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
                            <input {...register("pincode")} type="text" className={`${styles.formControl}`} id="pincode" maxLength={6} />
                            {errors.pincode && <span className={`${styles.textDanger}`} id="partner-valid">
                                {errors.pincode.message}
                            </span>}
                            <span>
                                <input type="hidden" id="hdnDuplicateMobile" defaultValue={0} />
                                <input type="hidden" id="hdnDuplicateEMail" defaultValue={0} />
                            </span>
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
                                    required:
                                        subBroker === "1",
                                    min: 10
                                },
                                )}
                                autoFocus
                            />
                            {errors.existingAssociation && <span className={`${styles.textDanger}`} id="partner-valid">
                                {errors.existingAssociation.message}
                            </span>}
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
                                        defaultChecked={!!GSTYN}
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
                                        defaultChecked={!!!GSTYN}
                                        tabIndex={-1}
                                    />
                                    <label tabIndex={0} htmlFor='GSTno'>No</label>
                                </div>

                                <span id="existingGStalert-valid" className={`${styles.textDanger} ${styles.dNone}`}>
                                    Please Select GST Registration Status
                                </span>
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
