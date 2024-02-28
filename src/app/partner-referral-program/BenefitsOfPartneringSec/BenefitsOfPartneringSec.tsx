import React from 'react'
import styles from './BenefitsOfPartneringSec.module.scss' 

function BenefitsOfPartneringSec() {
    return (
        <section className={`${styles.benefitsOfPartneringSec}`}>
            <div className={`${styles.maContainer}`}>
                <h2 className={`${styles.secTitle}`}>Benefits Of<span>partnering with us</span></h2>
                <ul className={`${styles.reBenefitUlistBox}`}>  
                    <li>India's first partner program with <b>100% brokerage sharing</b></li>
                    <li>Not 1 or 2 … earn from <b>9 revenue streams</b></li>
                    <li><b>Standard & Transparent payout terms…</b> irrespective of the business size</li>
                    <li>Freedom to <b>create your own business model</b> - Traditional (% on volume), Discount (flat-fee), and Hybrid (mix of % on volume and flat-fee)</li>
                    <li><b>Everything is customisable</b> from brokerage plan to interest rates on leverage products and more. No approvals required.</li>
                    <li><b>Track & monitor client's</b> live position and view reports like P&L, Tax P&L, Ledger etc.</li>
                    <li><b>Dedicated help and support</b> module to raise query for self or on behalf of the client plus FAQs and videos for quick query resolution</li> 
                </ul>
            </div>
        </section>
    )
}

export default BenefitsOfPartneringSec
 