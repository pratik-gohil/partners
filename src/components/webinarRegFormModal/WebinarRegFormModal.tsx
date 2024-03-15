import React from 'react'
import styles from "./WebinarRegFormModal.module.scss";

function WebinarRegFormModal({ onClose }: any) {

    //const [index, setIndex] = useState(2);
    return (
        <div className={`${styles.formWrap}`}>
            <div className={`${styles.modalHeader}`}>
                <h2 className={`${styles.modaltitle}`}>Register For Webinar</h2>
                <button type="button" className={`${styles.closepp}`} aria-label="Close" onClick={onClose}>
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <form className={`${styles.modelBody}`}>
                <ul className={`${styles.formContent}`}>
                    <li>
                        <div className={`${styles.formGroup}`}>
                            <label htmlFor='partnerName'>
                                Name <sup>*</sup>
                            </label>
                            <input
                                type="text"
                                id="partnerName"
                                className={`${styles.formControl}`}
                                maxLength={50}
                                autoFocus
                            />
                            <span className={`${styles.textDanger}`} id="test">error msg</span>
                        </div>
                    </li>
                    <li>
                        <div className={`${styles.formGroup}`}>
                            <label htmlFor='mobleNo'>
                                Mobile Number <sup>*</sup>
                            </label>
                            <input type="text" className={`${styles.formControl}`} id="mobleNo" maxLength={10} />
                            <span className={`${styles.textDanger}`} id="test">error msg</span>
                        </div>
                    </li>
                    <li>
                        <div className={`${styles.formGroup}`}>
                            <label htmlFor='emailID'>
                                Email id <sup>*</sup>
                            </label>
                            <input type="text" className={`${styles.formControl}`} id="emailID" maxLength={50} />
                            <span className={`${styles.textDanger}`} id="test">error msg</span>
                        </div>
                    </li>
                </ul>
                <div className={`${styles.dFlex} ${styles.justifyCenter}`}>
                    <button type='submit' className={`${styles.btn} ${styles.sumbitbtnpop}`} >Webinar Registration</button>
                </div>
            </form>
        </div>
    )
}

export default WebinarRegFormModal
