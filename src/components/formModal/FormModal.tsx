"use client";
import React, { useState } from 'react'
import styles from "./FormModal.module.scss";
import GrowthModal from '../growthModal/GrowthModal';
import ThankYouModal from '../thankyouModal/ThankYouModal';
import SelectMenu from '../SelectMenu/SelectMenu';

const FormModal = ({ onClose }: { onClose: () => void }) => {
    const [index, setIndex] = useState(0);
    const [registerdSubBroker, setRegisterdSubBroker] = useState(false);

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        setRegisterdSubBroker(Boolean(Number(target.value)));
    };

    return (
        <>
            {index === 0 && (
                <div className={`${styles.formWrap}`}>
                    <div className={`${styles.modalHeader}`}>
                        <h2 className={`${styles.modaltitle}`}>Enter Details</h2>
                        <button type="button" className={`${styles.closepp}`} aria-label="Close" onClick={onClose}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <form>
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
                                    />
                                    <span className={`${styles.textDanger}`} id="partner-valid">
                                        Partner Name cannot be blank
                                    </span>
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
                                    ]} />
                                    {/* <div className={`${styles.selDropMn}`} id='RegistrationType'>
                                    <div className={`${styles.selDrop} ${styles.active}`}>Individual <span className={`${styles.arrow}`}></span></div>
                                    <ul className={`${styles.selResults}`} style={{ display: "none" }}>
                                        <li className={`${styles.selected} ${styles.selectable}`}>Individual</li>
                                        <li>Partnership firm</li>
                                        <li>Partnership (LLP)</li>
                                        <li>Corporate</li>
                                    </ul>
                                </div> */}
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
                                    />
                                    <span className={`${styles.textDanger} ${styles.dNone}`} id="business-valid">
                                        Business Name cannot be blank
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className={`${styles.formGroup}`}>
                                    <label >
                                        Mobile no. <sup>*</sup>
                                    </label>
                                    <input type="text" className={`${styles.formControl}`} id="mobleNo" maxLength={10} />
                                    <span className={`${styles.textDanger} ${styles.dNone}`} id="mobile-valid" />
                                </div>
                            </li>
                            <li>
                                <div className={`${styles.formGroup}`}>
                                    <label >
                                        Email id <sup>*</sup>
                                    </label>
                                    <input type="text" className={`${styles.formControl}`} id="emailID" maxLength={50} />
                                    <span className={`${styles.textDanger} ${styles.dNone}`} id="email-invalid" />
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
                                    />
                                    <span className={`${styles.textDanger} ${styles.dNone}`} id="city-valid">
                                        City Cannot be blank
                                    </span>
                                    <span />
                                </div>
                            </li>
                            <li>
                                <div className={`${styles.formGroup}`}>
                                    <label>
                                        Pincode <sup>*</sup>
                                    </label>
                                    <input type="text" className={`${styles.formControl}`} id="pincode" maxLength={6} />
                                    <span className={`${styles.textDanger} ${styles.dNone}`} id="pincode-valid">
                                        pincode Cannot be blank
                                    </span>
                                    <span>
                                        <input type="hidden" id="hdnDuplicateMobile" defaultValue={0} />
                                        <input type="hidden" id="hdnDuplicateEMail" defaultValue={0} />
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className={`${styles.formGroup}`}>
                                    <label>Already registered as a Subbroker / AP?</label>
                                    <div className={`${styles.switchField}`}>
                                        <input
                                            type="radio"
                                            id="personyes"
                                            name="authorised-person"
                                            value={1}
                                            checked={registerdSubBroker === true}
                                            onChange={handleRadioChange}
                                        />
                                        <label htmlFor="personyes">Yes</label>
                                        <input
                                            type="radio"
                                            id="personno"
                                            name="authorised-person"
                                            value={0}
                                            checked={registerdSubBroker === false}
                                            onChange={handleRadioChange}
                                        />
                                        <label htmlFor='personno'>No</label>
                                    </div>
                                </div>
                            </li>
                            {registerdSubBroker && (
                                <li
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
                                        />
                                        <span id="existingAssociation-valid" className={`${styles.textDanger} ${styles.dNone}`}>
                                            Association cannot be blank
                                        </span>
                                    </div>
                                </li>
                            )}
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
                                                name="ExistingGST-number"
                                                defaultValue="yes"
                                                data-gtm-form-interact-field-id={0}
                                            />
                                            <label htmlFor='GSTyes'>Yes</label>
                                            <input
                                                type="radio"
                                                id="GSTno"
                                                name="ExistingGST-number"
                                                data-gtm-form-interact-field-id={1}
                                            />
                                            <label htmlFor='GSTno'>No</label>
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
                                type='button'
                                onClick={() => (setIndex(1))}
                                className={`${styles.btn} ${styles.sumbitbtnpop}`}
                            >
                                Pre-Register Now
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {index === 1 && (
                <GrowthModal onClose={onClose} setIndex={setIndex} />
            )}

            {index === 2 && (
                <ThankYouModal onClose={onClose} />
            )}
        </>
    )
}

export default FormModal;

