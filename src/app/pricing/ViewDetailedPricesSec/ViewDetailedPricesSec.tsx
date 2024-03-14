"use client";
import React, { useState } from 'react'
import styles from './ViewDetailedPricesSec.module.scss'

function ViewDetailedPricesSec() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <section className={`${styles.viewDetailedPricesSec}`}>
            <div className={`${styles.maContainer}`}>



                <h2 className={`${styles.secTitle} `}>View detailed pricing and payout details</h2>

                <div className={`${styles.docsLinkBox}`} id='partnerRegistration'>
                    <a href="https://www.miraeassetpartners.com/asset/pdf/income-sharing-for-authorised-partners.pdf" target="_blank" className={`${styles.halfWrapAlink}`}><img src="/pdf-icon.webp" alt="" /> <span>Download complete partner income sharing details</span></a>
                    <a href="/terms-and-conditions" className={`${styles.halfWrapAlink}`}><img src="/terms-and-conditions-icon.webp" alt="" /> <span>Payout Terms and Conditions</span></a>
                </div>


                <div className={`${styles.otherChargeAccBox}`}>
                    <div className={`${styles.accHeadBox}`}>
                        <div className={`${styles.lhsWrap}`}>
                            <div className={`${styles.title}`}>Other charges applicable to your client</div>
                            <span>These are standard charges and can't be modified.</span>
                        </div>
                        <div className={`${styles.accordingBtn} ${isVisible ? styles["active"] : styles[""]}`} onClick={toggleVisibility}>
                            {isVisible ? (
                                <><span>View Less</span> <img src="/down-arrow2.webp" alt='View Less' width={21} height={12} /></>
                            ) : (
                                <><span>View More</span> <img src="/down-arrow2.webp" alt='View More' width={21} height={12} /></>
                            )}
                        </div>
                    </div>
                    <div className={`${styles.accBodyBox} ${isVisible ? styles["active"] : styles[""]}`}>
                        <ul>
                            <li>
                                <b>Quarterly operating charges:</b> <br />
                                <p>₹99 + 18% GST per quarter to be charged to clients who have been onboarded under the standard and customised quarterly AMC plan.</p>
                                <p>No operating charge will be applicable for clients under the standard lifetime free AMC plan and the customised one-time AMC plans.</p>
                            </li>
                            <li>
                                <b>Off-market transfer charges </b>
                                <p>Transfer in: FREE</p>
                                <p>Transfer out: ₹20 per transaction or 0.50% whichever is lower</p>
                            </li>
                            <li>
                                <b>Corporate action order charges </b>
                                <p>Corporate action order charges will be same as the client’s applicable brokerage for delivery trades. </p>
                            </li>
                            <li>
                                <b>Physical CMR request</b>
                                <p>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests </p>
                            </li>
                            <li>
                                <b>Payment gateway charges - Margin Fund Transfer</b>
                                <p>UPI Transactions are Free and in case of Net banking, charges will vary between ₹7 to ₹11 + GST depending on the bank selected</p>
                            </li>
                            <li>
                                <b>Physical statement courier charges</b>
                                <p>₹100 per request + ₹100 per courier</p>
                            </li>
                            <li>
                                <b>Demat per certificate</b>
                                <p>A charge of ₹150 per certificate + ₹100 courier charges will be levied </p>
                            </li>
                            <li>
                                <b>Remat charges</b>
                                <p>A charge of ₹150 per certificate + ₹100 courier charges + CDSL Charges will be levied </p>
                            </li>
                            <li>
                                <b>Failed instruction charges</b>
                                <p>A charge of ₹50 per instruction will be applied </p>
                            </li>
                            <li>
                                <b>Reactivation Charges </b>
                                <p>No charge will be applicable for account reactivation </p>
                            </li>
                            <li>
                                <b>Modification charges</b>
                                <p>A charge of ₹20 will be applicable per request</p>
                            </li>
                            <li>
                                <b>Account closure charges</b>
                                <p>No charge will be applicable for account closure</p>
                            </li>
                            <li>
                                <b>18% GST</b>
                                <p>On Brokerage, DP charges, Exchange Transaction charges, SEBI charges and Auto Square-Off charges</p>
                            </li>
                            <li>
                                <b>Physical delivery of derivatives</b>
                                <p>Nominal brokerage 0.05% of the contract value will be charged when physical delivery happens.</p>
                            </li>
                            <li>
                                <b>Transaction/turnover charges</b>
                                <p>BSE transaction charges on securities traded in X, XT and Z group is 0.10% per crore & for 'P', 'ZP', 'SS' and 'ST' group, it is 1% per crore on the gross turnover value </p>
                            </li>
                            <li>
                                <b>Other Charges</b>
                                <p>RMS square-off charges for open intraday positions by system: ₹60 per position</p>
                                <p>Auction if unable to deliver a stock (not in demat): As per actual penalty by exchange</p>
                            </li>
                        </ul>
                    </div>
                </div>




            </div>
        </section>
    )
}

export default ViewDetailedPricesSec
