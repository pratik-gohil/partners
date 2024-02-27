import React from 'react'
import styles from "./FormModal.module.scss";

const FormModal = () => {
    return (
        <>
            <div className={`${styles.formWrap}`}>
                <div className={`${styles.modalHeader}`}>
                    <h2 className={`${styles.modaltitle}`}>Enter Details</h2>
                    <button type="button" className={`${styles.closepp}`} aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <form>
                    <ul className={`${styles.formContent}`}>
                        <li>
                            <div className={`${styles.formGroup}`}>
                                <label htmlFor="partnerName">
                                    Name <sup>*</sup>
                                </label>
                                <input
                                    type="text"
                                    id="partnerName"
                                    className={`${styles.formControl}`}
                                    maxLength={50}
                                />
                                <span className={`${styles.textDanger}`} id="partner-valid">
                                    Partner Name cannot be blank
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className={`${styles.formGroup}`}>
                                <label htmlFor="RegistrationType">
                                    Registration type <sup>*</sup>
                                </label>
                                <div className={`${styles.selDropMn}`} id='RegistrationType'>
                                    <div className={`${styles.selDrop} ${styles.active}`}>Individual <span className={`${styles.arrow}`}></span></div>
                                    <ul className={`${styles.selResults}`}>
                                        <li className={`${styles.selected} ${styles.selectable}`}>Individual</li>
                                        <li>Partnership firm</li>
                                        <li>Partnership (LLP)</li>
                                        <li>Corporate</li>
                                    </ul>



                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`${styles.formGroup}`}>
                                <label htmlFor="businessName">Your Business Name</label>
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
                                <label htmlFor="mobleNo">
                                    Mobile no. <sup>*</sup>
                                </label>
                                <input type="text" className={`${styles.formControl}`} id="mobleNo" maxLength={10} />
                                <span className={`${styles.textDanger} ${styles.dNone}`} id="mobile-valid" />
                            </div>
                        </li>
                        <li>
                            <div className={`${styles.formGroup}`}>
                                <label htmlFor="emailID">
                                    Email id <sup>*</sup>
                                </label>
                                <input type="text" className={`${styles.formControl}`} id="emailID" maxLength={50} />
                                <span className={`${styles.textDanger} ${styles.dNone}`} id="email-invalid" />
                            </div>
                        </li>
                        <li>
                            <div className={`${styles.formGroup}`}>
                                <label htmlFor="city">
                                    City <sup>*</sup>
                                </label>
                                <input
                                    type="text"
                                    className={`${styles.formControl} ${styles.uiautocompleteinput}`}
                                    id="city"
                                    maxLength={50}
                                    autoComplete="off"
                                />
                                <ul className={`${styles.selResults} ${styles.selCity}`}>
                                        <li>Individual</li>
                                        <li>Partnership firm</li>
                                        <li>Partnership (LLP)</li>
                                        <li>Corporate</li>
                                        <li>Partnership (LLP)</li>
                                        <li>Corporate</li>
                                        <li>Partnership (LLP)</li>
                                        <li>Corporate</li>
                                    </ul>
                                <span className={`${styles.textDanger} ${styles.dNone}`} id="city-valid">
                                    City Cannot be blank
                                </span>
                                <span />
                            </div>
                        </li>
                        <li>
                            <div className={`${styles.formGroup}`}>
                                <label htmlFor="pincode-valid">
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
                                        defaultValue="yes"
                                        data-gtm-form-interact-field-id={0}
                                    />
                                    <label htmlFor="personyes">Yes</label>
                                    <input
                                        type="radio"
                                        id="personno"
                                        name="authorised-person"
                                        defaultValue="no"
                                        data-gtm-form-interact-field-id={1}
                                        checked
                                    />
                                    <label htmlFor="personno">No</label>
                                </div>
                            </div>
                        </li>
                        <li
                            className="existing-associationBlock associationyes"
                            style={{ display: "none" }}
                        >
                            <div className={`${styles.formGroup}`}>
                                <label htmlFor="existingAssociation">
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
                    </ul>

                    <div>
                        <ul className={`${styles.formContent}`}>
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
                                        <label htmlFor="personyes">Yes</label>
                                        <input
                                            type="radio"
                                            id="GSTno"
                                            name="ExistingGST-number"
                                            data-gtm-form-interact-field-id={1}
                                        />
                                        <label htmlFor="personno">No</label>
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
                        <a
                            aria-label="pre register button"
                            className={`${styles.btn} ${styles.sumbitbtnpop}`}
                            id="btnSubmit"
                            data-toggle="modal"
                        >
                            Pre-Register Now
                        </a>
                    </div>


                </form>
            </div>
        </>
    )
}

export default FormModal;

