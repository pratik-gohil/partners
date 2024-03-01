import React from 'react'
import styles from "./YesNoRadio.module.scss";

const YesNoRadio = () => {
    return (
        <>
            <div className={`${styles.switchField}`}>
                <input
                    type="radio"
                    id="personyes"
                    name="authorised-person"
                    value="yes"
                    data-gtm-form-interact-field-id={0}
                />
                <label >Yes</label>
                <input
                    type="radio"
                    id="personno"
                    name="authorised-person"
                    value="no"
                    data-gtm-form-interact-field-id={1}
                    checked
                />
                <label >No</label>
            </div>
        </>
    )
}

export default YesNoRadio;