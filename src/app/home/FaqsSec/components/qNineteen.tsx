import React from 'react'
import styles from '../FaqsSec.module.scss'
function QNineteen() {
    return ( 
        <>
            <p><b>Security deposit:</b> ₹50,000 (Refundable)</p>
            <p><b>Document handling charges:</b> ₹1,500 (eFranking &amp; eSign charges) </p>
            {/* <p><b>One-time Exchange Registration Charges:</b></p> */}

            <div className={`${styles.tableTitle}`}>One-time Exchange Registration Charges:</div>
            <div className={`${styles.tableHolder}`}>
                <table className={`${styles.table}`} cellPadding={0} cellSpacing={0} width="100%">
                    <tbody><tr> <th colSpan={6}>AP registration charges</th> </tr> <tr> <td>Exchange</td> <td>Segment</td> <td>Fee (₹)</td> <td>GST rate</td> <td>GST amount</td> <td>Total charges (₹)</td> </tr> <tr> <td>NSE</td> <td>Capital Market</td> <td>5,000</td> <td>18%</td> <td>900</td> <td>5,900</td> </tr> <tr> <td>NSE</td> <td>F&amp;O</td> <td>5,000</td> <td>18%</td> <td>900</td> <td>5,900</td> </tr> <tr> <td>NSE</td> <td>Currency Derivatives</td> <td>5,000</td> <td>18%</td> <td>900</td> <td>5,900</td> </tr> <tr> <td>BSE</td> <td>Capital Market</td> <td>4,000</td> <td>18%</td> <td>720</td> <td>4,720</td> </tr> <tr> <td>MCX</td> <td>Commodities</td> <td>-</td> <td>18%</td> <td>-</td> <td>-</td> </tr> <tr> <td><b>Total Registration charges</b></td> <td><b>All Segments</b></td> <td><b>19,000</b></td> <td><b>18%</b></td> <td><b>3,420</b></td> <td><b>22,420</b></td> </tr> </tbody>
                </table>
            </div>

            <div className={`${styles.tableTitle}`}>AP Annual Maintenance Charges effective from April 2024:</div>
            <div className={`${styles.tableHolder}`}>
                <table className={`${styles.table}`} cellPadding={0} cellSpacing={0} width="100%">
                    <tbody><tr> <td>NSE-AMC</td> <td>All Segments</td> <td>5,000</td> <td>18%</td> <td>900</td> <td>5,900</td> </tr> <tr> <td>BSE-AMC</td> <td>All Segments</td> <td>4,000</td> <td>18%</td> <td>720</td> <td>4,720</td> </tr> <tr> <td>Total AMC</td> <td>NSE&amp;BSE</td> <td>9,000</td> <td>18%</td> <td>1,620</td> <td>10,620</td> </tr> </tbody>
                </table>
            </div>

        </>
    )
}

export default QNineteen