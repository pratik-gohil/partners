import React from 'react'
import styles from './PricePayoutStructureSec.module.scss' 

function PricePayoutStructureSec() {
    return (
        <section className={`${styles.pricePayoutStructureSec}`}>
            <div className={`${styles.maContainer}`}>
                <h2 className={`${styles.secTitle}`}>Pricing and payout <span>structure</span></h2>

                <div className={`${styles.tableStructureWrap}`}> 
                    <div className={`${styles.pricingTableHolder}`}> 
                        <table width="100%"> 
                            <tr>
                                <th>Revenue source</th>
                                <th>Payout to Partner</th>
                                <th>Note</th>
                            </tr>
                            <tr> 
                                <td><b>Account opening fee</b></td>
                                <td><b className={`${styles.orangeTxt}`}>100%</b> above ₹500</td>
                                <td>Mirae Asset will debit a flat fee of ₹500 for every new client onboarded, regardless of the account opening fee chosen</td>
                            </tr> 
                            <tr>
                                <td><b>Brokerage</b></td>
                                <td><b className={`${styles.orangeTxt}`}>100%</b> across all segments</td>
                                <td>Select from our standard plans or create a customised plan for your clients</td>
                            </tr> 
                            <tr>
                                <td><b>MTF (eMargin) interest</b></td>
                                <td><b className={`${styles.orangeTxt}`}>80%</b> interest sharing beyond 9.99%</td>
                                <td>Customise MTF interest up to 24%</td>
                            </tr>
                            <tr>
                                <td><b>Margin Pledge interest</b></td>
                                <td><b className={`${styles.orangeTxt}`}>80%</b> interest sharing beyond 11.99%</td>
                                <td>Customise Margin Pledge interest up to 24%</td>
                            </tr> 
                            <tr>
                                <td><b>Account Maintenance Charges (DP AMC)</b></td>
                                <td><b className={`${styles.orangeTxt}`}>100%</b> revenue beyond ₹480</td>
                                <td rowSpan={3}>Select from our standard DP plans or create a customised DP plan for your clients</td>
                            </tr> 
                            <tr>
                                <td><b>Pledge/Unpledge charges</b></td>
                                <td>Customise and earn <b className={`${styles.orangeTxt}`}>100%</b></td>
                            </tr> 
                            <tr>
                                <td><b>DP sell transaction charges</b></td>
                                <td>Customise and earn <b className={`${styles.orangeTxt}`}>100%</b></td>
                            </tr>
                            <tr>
                                <td><b>Delayed Payment Charges (DPC)</b></td>
                                <td><b className={`${styles.orangeTxt}`}>Flat 20%</b> sharing</td>
                                <td>No customisation possible</td>
                            </tr>
                            <tr>
                                <td><b>Operating charges</b></td>
                                <td><b className={`${styles.orangeTxt}`}>Flat 20%</b> sharing</td>
                                <td>No customisation possible</td>
                            </tr>
                        </table>
                    </div>
                </div>


                <div className={`${styles.tableStructureWrap}`}>
                    <div className={`${styles.tableTitleWrap} ${styles.flex}`}>
                        <img src="https://www.miraeassetpartners.com/asset/images/rs-icon-1.png" alt="icon" title="icon" />
                        <h3 className={`${styles.tableTitle}`}>Income from Account Opening Fee</h3>
                    </div>   
                    <p>Select from a range of account opening fee for your client and get 100% payout on anything beyond ₹500.</p> 
                    <div className={`${styles.pricingTableHolder}`}> 
                        <table width="100%">
                            <tr>
                                <th>Type of Account</th>
                                <th>What Partner can charge clients?</th>
                                <th>Payout to Partner</th>
                                <th>Additional Income <br/>
                                <small>Partner service fee* (annual recurring)</small></th>   
                            </tr>
                            <tr>
                                <td>Standard Plan 1: <br/> <b className={`${styles.orangeTxt}`}>Zero Brokerage account</b></td>
                                <td>₹999 to ₹9,999</td>
                                <td><b className={`${styles.orangeTxt}`}>100% above ₹500</b></td>
                            <td>
                                100% payout<br />
                                    (₹999 to ₹9,999)</td> 
                            </tr> 
                            <tr>
                                <td>Standard Plan 2: <br/> <b className={`${styles.orangeTxt}`}>Free Delivery Account</b></td>
                                <td>₹0 to ₹9,999</td>
                                <td><b className={`${styles.orangeTxt}`}>100% above ₹500</b></td>
                                <td>NA</td> 
                            </tr> 
                            <tr>
                                <td> <b className={`${styles.orangeTxt}`}>Customised</b> <br/> Brokerage Plan</td>
                                <td>₹0 to ₹9,999</td>
                                <td><b className={`${styles.orangeTxt}`}>100% above ₹500</b></td>
                                <td>NA</td> 
                            </tr> 
                        </table>
                    </div>
                    <p>
                        *It’s an annual recurring fee (applicable from second year onwards), which you can charge to those clients whom you are offering the 
                        ‘Zero brokerage account’, since you won’t earn any brokerage income from them. The partner service fee will be equal to the account 
                        opening fee that you charge your client and 100% of that will be yours. 
                        <br/>
                        <br/>
                        <b className={`${styles.orangeTxt}`}>Note:</b> Mirae Asset will debit a flat fee of ₹500 for every new client onboarded, regardless of the account opening fee chosen
                    </p>    
                </div>
 

                <div className={`${styles.tableStructureWrap}`}>
                    <div className={`${styles.tableTitleWrap} ${styles.flex}`}>
                        <img src="https://www.miraeassetpartners.com/asset/images/incom-from-icon.png" alt="icon" title="icon" />
                        <h3 className={`${styles.tableTitle}`}>Income from Brokerage</h3>
                    </div>   
                    <p>You can either select from our <b>standard plans</b> or <b>create a customised plan</b> for your clients based on their differentiated needs and trading behaviour.</p> 
                    <div className={`${styles.pricingTableHolder}`}>  
                        <table width="100%">
                            <tr>
                                <th>Type of Account</th>
                                <th>Applicable Brokerage</th>
                                <th>Payout to Partner</th> 
                            </tr>
                            <tr>
                                <td>Standard Plan 1: <br/> <b className={`${styles.orangeTxt}`}>Zero Brokerage Account</b></td>
                                <td>₹0 brokerage for life across all segments</td>
                                <td className={`${styles.orangeTxt}`}>NA</td> 
                            </tr> 
                            <tr>
                                <td>Standard Plan 2: <br/> <b className={`${styles.orangeTxt}`}>Free Delivery Account</b></td>
                                <td>₹0 brokerage only on delivery <br/>
                                    ₹20 brokerage per order on all other segments</td>
                                <td className={`${styles.orangeTxt}`}><b className={`${styles.orangeTxt}`}>100%</b></td> 
                            </tr> 
                            <tr>
                                <td><b className={`${styles.orangeTxt}`}>Customised Plan</b></td>
                                <td>Choose from the below models <br/>
                                    <ul>
                                        <li>
                                            <b>Discount</b> <small>(fixed-per-order)</small>
                                        </li>
                                        <li><b>Traditional</b> <small>(variable)</small></li>
                                        <li><b>Hybrid</b></li>
                                    </ul>
                                </td>
                                <td className={`${styles.orangeTxt}`}><b className={`${styles.orangeTxt}`}>100%</b></td> 
                            </tr> 
                        </table>
                    </div>    
                </div> 

                 
                <div className={`${styles.tableStructureWrap}`}>
                    <div className={`${styles.tableTitleWrap} ${styles.flex}`}>
                        <img src="https://www.miraeassetpartners.com/asset/images/intrest-percent-icon.png" alt="icon" title="icon" />
                        <h3 className={`${styles.tableTitle}`}>Income from MTF (eMargin) Interests</h3>
                    </div>   
                    <p>You can either select our standard interest rates, i.e. base interest rates or choose to customise the interest rates applicable to the client.</p> 
                    <div className={`${styles.pricingTableHolder}`}>  
                        <table width="100%">
                            <tr> 
                                <th>Base Interest Rate</th>
                                <th>Payout to Partner <br/>(up to base rate) </th>
                                <th>Customised interest 
                                    rate <br/>(maximum limit)
                                </th>
                                <th>Payout to Partner
                                    <br/>(above base rate)</th> 
                            </tr>
                            <tr> 
                                <td>9.99%</td>
                                <td className={`${styles.orangeTxt}`}><b className={`${styles.orangeTxt}`}>5%</b></td> 
                                <td>24%</td>
                                <td className={`${styles.orangeTxt}`}><b className={`${styles.orangeTxt}`}>80%</b></td> 
                            </tr> 
                        </table>
                    </div> 
                    <p><b className={`${styles.orangeTxt}`}>Note:</b> You can earn 5% by charging our standard MTF interest rates to your clients. However, if you want to charge your clients below 9.99% and up to 6.99% p.a there will be no sharing.</p>    
                </div> 
 

                <div className={`${styles.tableStructureWrap}`}>
                    <div className={`${styles.tableTitleWrap} ${styles.flex}`}>
                        <img src="https://www.miraeassetpartners.com/asset/images/doc-icon.png" alt="icon" title="icon" />
                        <h3 className={`${styles.tableTitle}`}>Income from Margin Pledge Interests</h3>
                    </div>   
                    <p>You can either select our standard interest rates, i.e. base interest rates or choose to customise the interest rates applicable to the client. </p> 
                    <div className={`${styles.pricingTableHolder}`}>  
                    <table width="100%">
                            <tr>
                                <th>Margin Pledge 
                                    Funding Value</th>
                                <th>Base Interest Rate</th>
                                <th>Payout to Partner 
                                    <br />(up to base rate)
                                </th>
                                <th>Customised interest 
                                    rate <br />(maximum limit)</th> 
                                <th>Payout to Partner
                                    <br />(above base rate)
                                </th>
                            </tr>
                            <tr>
                                <td>Up to 80% of 
                                    pledged stocks 
                                    value</td>
                                <td>11.99%</td>
                                <td className={`${styles.orangeTxt}`}><b className={`${styles.orangeTxt}`}>5%</b></td> 
                                <td>24%</td>
                                <td className={`${styles.orangeTxt}`}><b className={`${styles.orangeTxt}`}>80%</b></td> 
                            </tr> 
                        </table>
                    </div>    
                </div>
 

                <div className={`${styles.tableStructureWrap}`}>
                    <div className={`${styles.tableTitleWrap} ${styles.flex}`}>
                        <img src="https://www.miraeassetpartners.com/asset/images/amc-pricing-icon.png" alt="icon" title="icon" />
                        <h3 className={`${styles.tableTitle}`}>Income from Account Maintenance Charges (DP AMC)</h3>
                    </div>   
                    <p>You can either select from our standard DP AMC plans or customise client’s DP AMC charges. </p> 
                    <div className={`${styles.pricingTableHolder}`}>  
                    <table width="100%">
                        <thead>
                            <tr>
                                <th colSpan={3} className={`${styles.orangeTxt}`}><span>Standard AMC Plans</span></th>
                                <th colSpan={3}><span>Customised AMC Plans</span></th>
                            </tr>
                        </thead>
                        <tr>
                            <th width="20%">Standard Plan 1 <br />(one-time AMC)</th>
                            <th width="20%">Standard Plan 2 <br />(Quarterly AMC)</th>
                            <th width="13%">Payout to Partner</th> 
                            <th width="13%">One-time AMC</th> 
                            <th width="13%">Quarterly AMC</th>
                            <th width="21%">Payout to Partner</th>
                        </tr>
                        <tr>
                            <td>₹999 (Lifetime free AMC with a one-time fee)</td>
                            <td>₹480 (Annual fee, charged every quarter @₹120)</td>
                            <td>20%</td> 
                            <td>₹1,299 to ₹4,999</td>
                            <td>₹600 to ₹1,000</td>
                            <td className={`${styles.orangeTxt}`}>
                                <b>100% payout above</b>
                                <ul>
                                    <li>₹999 <br />(one-time AMC)</li>
                                    <li>₹480  <br />(quarterly AMC)</li>
                                </ul>
                            </td>  
                        </tr> 
                    </table>
                    </div>    
                </div>
























                
            </div>
        </section>
    )
}

export default PricePayoutStructureSec
 