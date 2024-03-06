"use client";
import React, {useState} from 'react'
import styles from './RegOnboardChargesSec.module.scss'
import { nunito } from '@/styles/fonts'

function RegOnboardChargesSec() {

    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
 
    const toggleVisibility1 = () => {
        setIsVisible1(!isVisible1);
    };
    const toggleVisibility2 = () => {
        setIsVisible2(!isVisible2);
    };

    return (
        <section className={`${styles.regOnboardChargesSec}`}>
            <div className={`${styles.maContainer}`}>
                <h2 className={`${styles.secTitle} ${nunito.className}`}><span>Authorised Partner registration</span> and onboarding charges</h2>
                <div className={`${styles.captionWrap}`}>
                    <p>There are certain charges applicable to get registered as an Authorised Partner.</p>
                    <p>You can refer the following table for these charges.</p>
                </div>

                <div className={`${styles.authorisedPartneUlBlock}`}>
                    <ul>
                        <li>Security deposit: ₹50,000 (Refundable)</li>
                        <li>Document handling charges: ₹1,500 (eFranking & eSign charges)</li>
                        <li>One-time Exchange Registration Charges: ₹ 22,420</li>
                    </ul>
                </div>


                <div className={`${styles.otherChargeAccBox}`}>  
                    <div className={`${styles.accHeadBox}`}>  
                        <div className={`${styles.lhsWrap}`}>
                            <div className={`${styles.title}`}>AP registration charges</div>   
                        </div>
                        <div className={`${styles.accordingBtn} ${isVisible1 ? styles["active"] : styles[""]}`}  onClick={toggleVisibility1}>
                            {isVisible1 ? (
                                <><span>View Less</span> <img src="https://www.miraeassetpartners.com/asset/images/down-arrow2.png" /></>
                            ) : (
                                <><span>View More</span> <img src="https://www.miraeassetpartners.com/asset/images/down-arrow2.png" /></>
                            )} 
                        </div>
                    </div>    
                    <div className={`${styles.accBodyBox} ${isVisible1 ? styles["active"] : styles[""]}`}> 
                        <div className={`${styles.pricingTableHolder}`}>
                            <table width="100%"> 
                                <tr>
                                    <th>Exchange</th>
                                    <th>Segment</th>
                                    <th>Fee (₹)</th>  
                                    <th>GST Rate</th>
                                    <th>GST Amount</th>
                                    <th>Total Charges (₹)</th>  
                                </tr>
                                <tr>
                                    <td>NSE</td>  
                                    <td>Capital Market</td>
                                    <td>₹5,000 </td>
                                    <td>18% </td>  
                                    <td>₹900</td>
                                    <td>₹5,900</td>
                                </tr> 
                                <tr>
                                    <td>NSE</td>  
                                    <td>F&O</td>
                                    <td>₹5,000 </td>
                                    <td>18%</td>  
                                    <td>₹900</td>
                                    <td>₹5,900</td>
                                </tr> 
                                <tr>
                                    <td>NSE</td>  
                                    <td>Currency
                                        Derivatives</td>
                                    <td>₹5,000 </td>
                                    <td>18%</td>  
                                    <td>₹900</td>
                                    <td>₹5,900</td>
                                </tr> 
                                <tr>
                                    <td>BSE</td>  
                                    <td>Capital Market</td>
                                    <td>₹4,000 </td>
                                    <td>18%</td>  
                                    <td>₹720</td>
                                    <td>₹4,720</td>
                                </tr> 
                                <tr>
                                    <td>MCX</td>  
                                    <td>Commodities</td>
                                    <td>-</td>
                                    <td>18%</td>  
                                    <td>NA</td>
                                    <td>NA</td>
                                </tr>  
                                <tr>
                                    <td><b>Total Registration charges</b></td>  
                                    <td><b>All Segments</b></td>
                                    <td><b>₹19,000</b></td>
                                    <td><b>18%</b></td>  
                                    <td><b>₹3,420</b></td>
                                    <td><b>₹22,420</b></td>
                                </tr> 
                            </table>
                        </div>
                    </div> 
                </div>


                <div className={`${styles.authorisedPartneUlBlock}`}>
                    <ul>
                        <li>AP Annual Maintenance Charges effective from April 2024: ₹10,620</li> 
                    </ul>
                </div>

                <div className={`${styles.otherChargeAccBox}`}>  
                    <div className={`${styles.accHeadBox}`}>  
                        <div className={`${styles.lhsWrap}`}>
                            <div className={`${styles.title}`}>AP Annual Maintenance Charges effective from April 2024</div>   
                        </div>
                        <div className={`${styles.accordingBtn} ${isVisible2 ? styles["active"] : styles[""]}`}  onClick={toggleVisibility2}>
                            {isVisible2 ? (
                                <><span>View Less</span> <img src="https://www.miraeassetpartners.com/asset/images/down-arrow2.png" /></>
                            ) : (
                                <><span>View More</span> <img src="https://www.miraeassetpartners.com/asset/images/down-arrow2.png" /></>
                            )} 
                        </div>
                    </div>    
                    <div className={`${styles.accBodyBox} ${isVisible2 ? styles["active"] : styles[""]}`}> 
                        <div className={`${styles.pricingTableHolder}`}>
                            <table width="100%"> 
                                <tr>
                                    <th>Exchange</th>
                                    <th>Segment</th>
                                    <th>Fee (₹)</th>  
                                    <th>GST Rate</th>
                                    <th>GST Amount</th>
                                    <th>Total Charges (₹)</th>  
                                </tr>
                                <tr>
                                    <td>NSE-AMC</td>  
                                    <td>All Segments</td>
                                    <td>₹5,000 </td>
                                    <td>18% </td>  
                                    <td>₹900</td>
                                    <td>₹5,900</td>
                                </tr> 
                                <tr>
                                    <td>BSE-AMC</td>  
                                    <td>All Segments</td>
                                    <td>₹4,000 </td>
                                    <td>18%</td>  
                                    <td>₹720</td>
                                    <td>₹4,720</td>
                                </tr>   
                                <tr>
                                    <td><b>Total-AMC</b></td>  
                                    <td><b>NSE & BSE</b></td>
                                    <td><b>₹9,000 </b></td>
                                    <td><b>18%</b></td>  
                                    <td><b>₹1,620</b></td>
                                    <td><b>₹10,620</b></td>
                                </tr> 
                            </table>
                        </div>
                    </div> 
                </div>




                <div className={`${styles.pricingNoteBlock}`}>
                    <b>Note: With regards to the security deposit</b>
                    <ul>
                        <li>No stocks or collateral will be accepted</li>
                        <li>It is refundable and interest-free</li>
                    </ul>
                </div>





            </div>
        </section>
    )
}

export default RegOnboardChargesSec
