"use client";
import React, { useState } from 'react'
import styles from "./GrowthModal.module.scss";

const GrowthModal = ({ }) => {
    return (
        <>
            <div className={`${styles.formWrap} ${styles.thankpopupMan}`}>
                <div className={`${styles.modalHeader}`}>
                    <button type="button" className={`${styles.closepp}`} aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className={`${styles.modalBody}`}>
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
                        <div id="referralContainer"></div>
                        <div id="inputsContainerForm">
                            <div className={`${styles.onerownamenumBar}`}>
                                <ul>
                                    <li>
                                        <div className={`${styles.formGroup}`}>
                                            <input
                                                type="text"
                                                className={`${styles.formControl}`}
                                                id="referalName1"
                                                placeholder="Reference Name"
                                            />
                                            <span id="referalName1-valid" className={`${styles.textDanger} ${styles.dNone}`}>
                                                Referral Name cannot be blank.
                                            </span>
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
                                            />
                                            <span
                                                id="referalMobile1-valid"
                                                className={`${styles.textDanger} ${styles.dNone}`}
                                            >
                                                Please provide referal mobile
                                            </span>
                                            <input type="hidden" id="hdnDuplicateRefMobile1" defaultValue={0} />
                                        </div>
                                    </li>
                                </ul>
                                <div className={`${styles.deletBad} ${styles.addBad}`}>
                                    <img src="https://www.miraeassetpartners.com/asset/images/add-icon.svg" className={`${styles.addiconadd}`} alt="" />
                                </div>
                            </div> <div className={`${styles.onerownamenumBar}`}>
                                <ul>
                                    <li>
                                        <div className={`${styles.formGroup}`}>
                                            <input
                                                type="text"
                                                className={`${styles.formControl}`}
                                                id="referalName1"
                                                placeholder="Reference Name"
                                            />
                                            <span id="referalName1-valid" className={`${styles.textDanger} ${styles.dNone}`}>
                                                Referral Name cannot be blank.
                                            </span>
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
                                            />
                                            <span
                                                id="referalMobile1-valid"
                                                className={`${styles.textDanger} ${styles.dNone}`}
                                            >
                                                Please provide referal mobile
                                            </span>
                                            <input type="hidden" id="hdnDuplicateRefMobile1" defaultValue={0} />
                                        </div>
                                    </li>
                                </ul>
                                <div className={`${styles.deletBad} ${styles.addBad}`} >
                                    <img src="https://www.miraeassetpartners.com/asset/images/icon-delete.svg" className={`${styles.deleticonadd}`} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${styles.dFlex} ${styles.justifyCenter}`}>
                        <a
                            aria-label="pre register button"
                            className={`${styles.btn} ${styles.sumbitbtnpop}`}
                            id="btnSubmit"
                            data-toggle="modal"
                        >
                            Submit
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default GrowthModal;

