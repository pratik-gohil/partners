"use client";
import React from 'react'
import styles from "./ScoreDataModal.module.scss";

const ScoreDataModal = ({ onClose }: any) => {
    return (
        <>
            <div className={`${styles.formWrap} ${styles.scoreModalHolder}`}>
                <div className={`${styles.modalHeader}`}>
                    <h3 className={`${styles.modelTitle}`}>FILING COMPLAINTS ON SCORES</h3>
                    <button onClick={onClose} type="button" className={`${styles.closepp}`} aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className={`${styles.modalBody}`}>

                    <div className={`${styles.complaintScores}`}>
                        <h4 className={`${styles.ulTitle}`}>Easy &amp; Quick</h4>
                        <ul>
                            <li>
                                Register on SCORES portal <a href="https://scores.gov.in" target="_blank" rel="nofollow">https://scores.gov.in</a>
                            </li>
                            <li>
                                Mandatory details for filing complaints on SCORES <br />
                                <span>Name</span>
                                <span>PAN</span>
                                <span>Address</span>
                                <span>Mobile Number</span>
                                <span>E-mail ID</span>
                            </li>
                            <li>
                                Benefits:<br />
                                Effective communication <br />
                                Speedy redressal of the grievances
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScoreDataModal;

