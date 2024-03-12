import React from 'react'
import styles from './HowToReferSec.module.scss'

function HowToReferSec() {
    return (
        <section className={`${styles.howToReferSec}`}>
            <div className={`${styles.maContainer}`}>
                {/* <h2 className={`${styles.secTitle} `}>How to <span>Refer a Partner?</span></h2> */}
                <h2 className={`${styles.secTitle} `}>How to <span>Refer a Partner?</span></h2>
                <ul>
                    <li>
                        <span>1</span>
                        <p>
                            Enter referral<br /> <b>details</b>
                        </p>
                    </li>
                    <li>
                        <span>2</span>
                        <p>
                            Referred partner <br /><b>completes registration</b>
                        </p>
                    </li>
                    <li>
                        <span>3</span>
                        <p>
                            You <b>earn ₹6,000</b><br /> as a reward
                        </p>
                    </li>
                </ul>
                <p className={`${styles.notelinecss}`}><b>Note:</b> If you are not yet registered with us, but your referred partner joins us, then you will get an Amazon voucher worth ₹2,000. Once you get registered as a partner, the balance ₹4,000 reward will be credited to your payout ledger. </p>
            </div>
        </section>
    )
}

export default HowToReferSec
