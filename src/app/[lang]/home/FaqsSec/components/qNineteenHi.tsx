import React from 'react'
import styles from '@/app/[lang]/home/FaqsSec/FaqsSec.module.scss'

function QNineteenHi() {
    return (
        <>
            <p><b>सिक्योरिटी डिपॉज़िट:</b> ₹50,000 रुपये (रिफ़ंडेबल)</p>
            <p><b>डॉक्यूमेंट हैंडलिंग चार्ज:</b> 1,500 (ईफ्रैंकिंग और ई-साइन चार्ज)</p>

            <div className={`${styles.tableTitle}`}>वन-टाइम एक्सचेंज रजिस्ट्रेशन चार्ज:</div>
            <div className={`${styles.tableHolder}`}>
                <table className={`${styles.table}`} cellPadding={0} cellSpacing={0} width="100%">
                    <tbody><tr> <th colSpan={6}>AP रजिस्ट्रेशन चार्ज</th> </tr> <tr> <td>एक्सचेंज</td> <td>सेगमेंट</td> <td>फ़ीस (रुपये)</td> <td>GST %</td> <td>GST मात्रा</td> <td>कुल चार्ज (₹)</td> </tr> <tr> <td>NSE</td> <td>कैपिटल मार्केट</td> <td>5,000</td> <td>18%</td> <td>900</td> <td>5,900</td> </tr> <tr> <td>NSE</td> <td>एफ एंड ओ</td> <td>5,000</td> <td>18%</td> <td>900</td> <td>5,900</td> </tr> <tr> <td>NSE</td> <td>करेंसी डेरिवेटिव</td> <td>5,000</td> <td>18%</td> <td>900</td> <td>5,900</td> </tr> <tr> <td>BSE</td> <td>कैपिटल मार्केट</td> <td>4,000</td> <td>18%</td> <td>720</td> <td>4,720</td> </tr> <tr> <td>MCX</td> <td>कमोडिटी</td> <td>-</td> <td>18%</td> <td>-</td> <td>-</td> </tr> <tr> <td><b>कुल रजिस्ट्रेशन चार्ज</b></td> <td><b>सभी सेगमेंट</b></td> <td><b>19,000</b></td> <td><b>18%</b></td> <td><b>3,420</b></td> <td><b>22,420</b></td> </tr> </tbody>
                </table>
            </div>

            <div className={`${styles.tableTitle}`}>April 2024 से लागू AP सालाना मैंटेनेंस चार्ज:</div>
            <div className={`${styles.tableHolder}`}>
                <table className={`${styles.table}`} cellPadding={0} cellSpacing={0} width="100%">
                    <tbody><tr> <td>NSE-AMC</td> <td>सभी सेगमेंट</td> <td>5,000</td> <td>18%</td> <td>900</td> <td>5,900</td> </tr> <tr> <td>BSE-AMC</td> <td>सभी सेगमेंट</td> <td>4,000</td> <td>18%</td> <td>720</td> <td>4,720</td> </tr> <tr> <td>कुल एएमसी</td> <td>NSE&amp;BSE</td> <td>9,000</td> <td>18%</td> <td>1,620</td> <td>10,620</td> </tr> </tbody>
                </table>
            </div>

        </>
    )
}

export default QNineteenHi