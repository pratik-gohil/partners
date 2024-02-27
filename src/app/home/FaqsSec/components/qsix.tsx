import React from 'react'
import styles from '../FaqsSec.module.scss'
function Qsix() {
    return (
        <div>
            <ul className={styles['list']}>
                <li className={`${styles['item']} ${styles['bold']}`}>Should be a citizen of India</li>
                <li className={`${styles['item']} ${styles['bold']}`}>Should be 18 years of age or above</li>
                <li className={`${styles['item']} ${styles['bold']}`}>Should have passed 10th standard or equivalent examination recognized by Central or State government</li>
                <li className={`${styles['item']} ${styles['bold']}`}>Should not have been convicted for any offence involving fraud or dishonesty</li>
                <li className={`${styles['item']} ${styles['bold']}`}>An Authorised Person who was suspended for more than six consecutive months must wait three years before they can be reappointed.</li>
            </ul>
            <br />
            <ul className={styles['list']}>
                <li className={`${styles['item']} ${styles['bold']}`}>Should be a citizen of India</li>
                <li className={`${styles['item']} ${styles['bold']}`}>Should be 18 years of age or above</li>
                <li className={`${styles['item']} ${styles['bold']}`}>Should have passed 10th standard or equivalent examination recognized by Central or State government</li>
                <li className={`${styles['item']} ${styles['bold']}`}>Should not have been convicted for any offence involving fraud or dishonesty</li>
                <li className={`${styles['item']} ${styles['bold']}`}>An Authorised Person who was suspended for more than six consecutive months must wait three years before they can be reappointed.</li>
            </ul>
        </div>
    )
}

export default Qsix