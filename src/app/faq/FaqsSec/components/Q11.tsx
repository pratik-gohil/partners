import React from 'react'
import styles from '../FaqsSec.module.scss'

function Q11() {
    return (
        <>
            For eMargin, applicable interest rates are as follows:
            <div className={styles["pricingTableHolder"]}>
                <table cellPadding={0} cellSpacing={0} width="100%">
                    <tr>
                        <th>Base Interest Rate</th>
                        <th>Payout to Partner
                            <br />(up to base rate)
                        </th>
                        <th>Customised interest
                            rate <br />(maximum limit)
                        </th>
                        <th>Payout to Partner
                            <br />(above base rate)</th>
                    </tr>
                    <tr>
                        <td>9.99%</td>
                        <td className={`${styles["orangeTxt"]}}`}><b className={styles["orangeTxt"]}>5%</b></td>
                        <td>24%</td>
                        <td className={`${styles["orangeTxt"]}}`}><b className={styles["orangeTxt"]}>80%</b></td>
                    </tr>
                </table>
            </div>
            <br />
            For Margin Pledge, the minimum effective interest rate is 11.99%.<br /><br />
            For both the funding products (MTF and Margin Pledge), you can charge our standard rates or customize them up to 24%.<br /><br />
            Mirae Asset Partners offers you the flexibility to customize your clients' charges according to their needs and create the entire plan through the partner dashboard, without the need for any approvals, ensuring you have complete control of your business.<br /><br />
            <b className={styles["orangeTxt"]}>Note:</b>&nbsp; You can earn 5% by charging our standard MTF interest rates to your clients. However, if you want to charge your clients below 9.99% and up to 6.99% p.a there will be no sharing.
        </>
    )
}

export default Q11