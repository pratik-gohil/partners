import React from 'react'
import styles from '@/app/[lang]/home/FaqsSec/FaqsSec.module.scss'

function QNineteenGu() {
    return (
        <>
            <p><b>સિક્યોરિટી ડિપોઝિટ:</b> 50,000 ₹ (રિફંડપાત્ર)</p>
            <p><b>દસ્તાવેજ હેન્ડલિંગ ચાર્જ:</b> 1,500 (eFranking &amp; eSign charges) </p>

            <div className={`${styles.tableTitle}`}>વન-ટાઇમ ઍક્સચેન્જ નોંધણી શુલ્ક:</div>
            <div className={`${styles.tableHolder}`}>
                <table className={`${styles.table}`} cellPadding={0} cellSpacing={0} width="100%">
                    <tbody><tr> <th colSpan={6}>AP નોંધણી શુલ્ક</th> </tr> <tr> <td>ઍક્સચેન્જ</td> <td>સેગમેન્ટ</td> <td>ફી (₹)</td> <td>GST દર</td> <td>GST રકમ</td> <td>કુલ શુલ્ક (₹)</td> </tr> <tr> <td>NSE</td> <td>કૅપિટલ માર્કેટ</td> <td>5,000</td> <td>18%</td> <td>900</td> <td>5,900</td> </tr> <tr> <td>NSE</td> <td>F&amp;O</td> <td>5,000</td> <td>18%</td> <td>900</td> <td>5,900</td> </tr> <tr> <td>NSE</td> <td>કરન્સી ડેરિવેટિવ્સ</td> <td>5,000</td> <td>18%</td> <td>900</td> <td>5,900</td> </tr> <tr> <td>BSE</td> <td>કૅપિટલ માર્કેટ</td> <td>4,000</td> <td>18%</td> <td>720</td> <td>4,720</td> </tr> <tr> <td>MCX</td> <td>કોમોડિટીઝ</td> <td>-</td> <td>18%</td> <td>-</td> <td>-</td> </tr> <tr> <td><b>કુલ નોંધણી શુલ્ક</b></td> <td><b>બધા સેગમેન્ટ</b></td> <td><b>19,000</b></td> <td><b>18%</b></td> <td><b>3,420</b></td> <td><b>22,420</b></td> </tr> </tbody>
                </table>
            </div>

            <div className={`${styles.tableTitle}`}>AP વાર્ષિક જાળવણી શુલ્ક એપ્રિલ 2024 થી લાગુ:</div>
            <div className={`${styles.tableHolder}`}>
                <table className={`${styles.table}`} cellPadding={0} cellSpacing={0} width="100%">
                    <tbody><tr> <td>NSE-AMC</td> <td>બધા સેગમેન્ટ</td> <td>5,000</td> <td>18%</td> <td>900</td> <td>5,900</td> </tr> <tr> <td>BSE-AMC</td> <td>બધા સેગમેન્ટ</td> <td>4,000</td> <td>18%</td> <td>720</td> <td>4,720</td> </tr> <tr> <td>Total AMC</td> <td>NSE અને BSE</td> <td>9,000</td> <td>18%</td> <td>1,620</td> <td>10,620</td> </tr> </tbody>
                </table>
            </div>

        </>
    )
}

export default QNineteenGu