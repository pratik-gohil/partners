"use client"
import React from 'react'
import styles from './index.module.scss';
import StarSVG from '@/components/svgs/StarSVG';
import RightArrowSVG from '@/components/svgs/RightArrowSVG';
import FeeSVG from '@/components/svgs/FeeSVG';
import UserSVG from '@/components/svgs/UserSVG';
import PledgeSVG from '@/components/svgs/PledgeSVG';

function PartnerProgram() {
    const handleKnowMore = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement;
        const el = document.querySelector(`[data-section-table=${target.getAttribute("data-section-action")}]`) as HTMLDivElement;

        el.style.height = el.style.height === '0px' ? "323px" : '0px'
    }

    return (
        <section className={styles["dreamWithMaSec"]}>
            <div className={styles["maContainer"]}>
                <h2 className={styles["secTitle"]}>आपके बड़े सपनों को उड़ान दें,<span>Mirae Asset के साथ</span></h2>
                <p className={styles["captionTxt"]}> Our Partner program offers <span className={styles["orangeTxt"]}> unbelievable pricing,</span> a <span className={styles["orangeTxt"]}> seamless tech platform</span> for an enhanced experience for you and your clients. It also <span className={styles["orangeTxt"]}>gives you full control</span> and ownership, reducing dependency on us. For detailed payout terms, <a aria-label="Income Sharing for Authorised Partners" className={styles["orangeTxt"]} href="asset/pdf/income-sharing-for-authorised-partners.pdf" target="_blank">click here</a>
                </p>
                <h4 className={styles["midheading-pl"]}>Let&apos;s understand the payout opportunities with examples</h4>
                <ul className={styles["opptUlist"]}>
                    <li className={styles["opptBox"]}>
                        <div className={styles["x-amount-block"]}>
                            <div className={styles["x-amount-left"]}>
                                Brokerage
                            </div>
                            <div className={`${styles["x-amount-right"]} `}>
                                Earn <b>1.5X</b> or more
                            </div>
                        </div>
                        <div className={styles["x-amount-txt-containt"]}>
                            <div className={styles["x-amount-txt-ul"]}>
                                <ul>
                                    <li>
                                        Active clients <br />
                                        <b>300</b>
                                    </li>
                                    <li>
                                        Annual brokerage per client <br />
                                        <b>₹12,000</b>
                                    </li>
                                    <li>
                                        Total annual brokerage  <br />
                                        <b>₹36 lakh</b>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles["x-amount-industry-block"]}>
                                <div className={styles["x-amount-industry-block-1"]}>
                                    Annual Payout
                                </div>
                                <div className={styles["x-amount-industry-block-2"]}>
                                    <span>Industry</span> <br />
                                    <b>₹25.20 lakh <small>(70%)</small></b>
                                </div>
                                <div className={styles["x-amount-industry-block-vs"]}>
                                    <b>1.5X</b>
                                </div>
                                <div className={styles["x-amount-industry-block-3"]}>
                                    <span>Mirae Asset</span> <br />
                                    <b>₹36 lakh <small>(100%)</small></b>
                                </div>
                            </div >
                            <div className={styles["x-amount-unnique-benefit-block"]}>
                                <StarSVG />

                                <b className={styles["light-blue"]}>Unique Benefit:</b> Choose either Discount, Traditional or Hybrid model, customise rates based on your clients&apos; needs
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles["x-amount-block"]}>
                            <div className={styles["x-amount-left"]}>
                                MTF (eMargin) Interest
                            </div>
                            <div className={styles["knowmore-ribar"]} data-section-action="mtf" onClick={e => handleKnowMore(e)}>Know How ?</div>
                            <div className={styles["x-amount-right"]}>
                                Earn <b>2X</b> or more
                            </div >
                        </div >
                        <div className={styles["x-amount-txt-containt"]}>
                            <div className={styles["x-amount-txt-ul"]}>
                                <ul>
                                    <li>
                                        MTF active clients <br />
                                        <b>100</b>
                                    </li>
                                    <li>
                                        MTF book <br />
                                        <b>₹3 crore</b> <br />
                                        <small>(assuming ₹3 lakh per client)</small>
                                    </li>
                                    <li>
                                        Interest <br />
                                        <b>18% p.a.</b>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles["tablebar-planB"]} data-section-table="mtf" style={{ height: '0px' }}>
                                <table cellPadding="0" cellSpacing="0" border={0} width="100%">
                                    <tbody><tr>
                                        <th >Details</th>
                                        <th><span>Industry</span></th>
                                        <th><span className={styles["orngText"]}>Mirae Asset Partners</span></th>
                                    </tr>
                                        <tr>
                                            <td >MTF active clients</td>
                                            <td>100</td>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <td >Total MTF Book, <small>(assuming ₹3 lakh per client)</small></td>
                                            <td>₹3 crore</td>
                                            <td>₹3 crore</td>
                                        </tr>
                                        <tr>
                                            <td >Average interest rate</td>
                                            <td>18%</td>
                                            <td>18%</td>
                                        </tr>
                                        <tr>
                                            <td >Base rate <small>(retained by the broker)</small></td>
                                            <td>12%</td>
                                            <td>9.99%</td>
                                        </tr>
                                        <tr>
                                            <td >Interest sharing above base rate</td>
                                            <td>50%</td>
                                            <td>80%</td>
                                        </tr>
                                        <tr>
                                            <td >Annual MTF interest payout</td>
                                            <td>₹9 lakh (50%)</td>
                                            <td>₹19.22 lakh (80%)</td>
                                        </tr>
                                    </tbody></table>
                            </div>
                            <div className={styles["x-amount-industry-block"]}>
                                <div className={styles["x-amount-industry-block-1"]}>
                                    Annual Interest Payout
                                </div>
                                <div className={styles["x-amount-industry-block-2"]}>
                                    <span>Industry</span> <br />
                                    <b>₹9 lakh <small>(50%)</small></b>
                                </div>
                                <div className={styles["x-amount-industry-block-vs"]}>
                                    <b>2X</b>
                                </div>
                                <div className={styles["x-amount-industry-block-3"]}>
                                    <span>Mirae Asset</span> <br />
                                    <b>₹19.22 lakh <small>(80%)</small></b>
                                </div>
                            </div>
                            <div className={styles["x-amount-unnique-benefit-block"]}>
                                <StarSVG />

                                <b className={styles["light-blue"]}>Unique Benefit:</b> Customise the MTF interest rate from <b className={styles["orangeTxt"]}>9.99%</b> to <b className={styles["orangeTxt"]}>24%.</b>
                            </div>
                        </div >
                    </li >
                    <li>
                        <div className={styles["x-amount-block"]}>
                            <div className={styles["x-amount-left"]}>
                                Margin Pledge Interest
                            </div>
                            <div className={styles["knowmore-ribar"]} data-section-action="margin-pledge-intrest" onClick={e => handleKnowMore(e)}>Know How ?</div>
                            <div className={styles["x-amount-right"]}>
                                Earn <b>1.5X</b> or more
                            </div >
                        </div >
                        <div className={styles["x-amount-txt-containt"]}>
                            <div className={styles["x-amount-txt-ul"]}>
                                <ul>
                                    <li>
                                        Margin Pledge active clients <br />
                                        <b>100</b>
                                    </li>
                                    <li>
                                        Margin Pledge book <br />
                                        <b>₹2 crore</b> <br />
                                        <small>(assuming ₹2 lakh per client)</small>
                                    </li>
                                    <li>
                                        Average interest rate <br />
                                        <b>18% p.a.</b>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles["tablebar-planB"]} data-section-table="margin-pledge-intrest" style={{ height: '0px' }}>
                                <table cellPadding="0" cellSpacing="0" border={0} width="100%">
                                    <tbody><tr>
                                        <th >Assumptions</th>
                                        <th><span>Industry</span></th>
                                        <th><span className={styles["orngText"]}>Mirae Asset Partners</span></th>
                                    </tr>
                                        <tr>
                                            <td >Margin Pledge active clients</td>
                                            <td>100</td>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <td >Total Margin Pledge Book <small>(assuming ₹2 lakh per client)</small></td>
                                            <td>₹2 crore</td>
                                            <td><b>₹2 crore</b></td>
                                        </tr>
                                        <tr>
                                            <td >Average interest rate</td>
                                            <td>18%</td>
                                            <td>18%</td>
                                        </tr>
                                        <tr>
                                            <td >Base rate <small>(retained by the broker)</small></td>
                                            <td>12%</td>
                                            <td>11.99%</td>
                                        </tr>
                                        <tr>
                                            <td >Interest sharing above base rate</td>
                                            <td>50%</td>
                                            <td>80%</td>
                                        </tr>
                                        <tr>
                                            <td ><b>Annual Margin Pledge interest payout</b></td>
                                            <td>₹6 lakh (50%)</td>
                                            <td>₹9.61 lakh (80%)</td>
                                        </tr>
                                    </tbody></table>
                            </div>
                            <div className={styles["x-amount-industry-block"]}>
                                <div className={styles["x-amount-industry-block-1"]}>
                                    Annual Interest Payout
                                </div>
                                <div className={styles["x-amount-industry-block-2"]}>
                                    <span>Industry</span> <br />
                                    <b>₹6 lakh <small>(50%)</small></b>
                                </div>
                                <div className={styles["x-amount-industry-block-vs"]}>
                                    <b>1.5X</b>
                                </div>
                                <div className={styles["x-amount-industry-block-3"]}>
                                    <span>Mirae Asset</span> <br />
                                    <b>₹9.61 lakh <small>(80%)</small></b>
                                </div>
                                <div className={styles["x-amount-unnique-benefit-block"]}>
                                    <StarSVG />

                                    <b className={styles["light-blue"]}>Unique Benefit:</b> Customise the Margin Pledge interest rate from < b className={styles["orangeTxt"]}> 11.99 %</b> to < b className={styles["orangeTxt"]}> 24 %.</b>
                                </div >
                            </div >
                        </div >
                    </li >
                    <li>
                        <div className={styles["x-amount-block"]}>
                            <div className={styles["x-amount-left"]}>
                                DP Sell Transaction Charges
                            </div>
                            <div className={styles["knowmore-ribar"]} data-section-action="dp-sell" onClick={e => handleKnowMore(e)}>Know How ?</div>
                            <div className={styles["x-amount-right"]}>
                                Earn <b>22X</b> or more
                            </div >
                        </div >
                        <div className={styles["x-amount-txt-containt"]}>
                            <div className={styles["x-amount-txt-ul"]}>
                                <ul>
                                    <li>
                                        No of scrips sold per day <br />
                                        <b>25</b>
                                    </li>
                                    <li>
                                        Charges <br />
                                        <b>₹12 - ₹25</b>
                                    </li>
                                    <li>
                                        Annual Charges <br />
                                        <b>₹72,000 - ₹1,50,000</b>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles["tablebar-planB"]} data-section-table="dp-sell" style={{ height: '0px' }}>
                                <table cellPadding="0" cellSpacing="0" border={0} width="100%">
                                    <tbody><tr>
                                        <th >&nbsp;</th>
                                        <th><span>Industry</span></th>
                                        <th><span className={styles["orngText"]}>Mirae Asset Partners</span></th>
                                    </tr>
                                        <tr>
                                            <td >No of scrips sold per day</td>
                                            <td>25</td>
                                            <td>25</td>
                                        </tr>
                                        <tr>
                                            <td >Average DP transaction charges</td>
                                            <td>₹12</td>
                                            <td>₹12</td>
                                        </tr>
                                        <tr>
                                            <td >Customised DP transaction charges</td>
                                            <td><b>NA</b></td>
                                            <td><b>₹25</b></td>
                                        </tr>
                                        <tr>
                                            <td >Annual DP transaction charges</td>
                                            <td>₹72,000</td>
                                            <td>₹1,50,000</td>
                                        </tr>
                                        <tr>
                                            <td >Payout rate</td>
                                            <td>5% (On Base)</td>
                                            <td>100% (Above Base)</td>
                                        </tr>
                                        <tr>
                                            <td >Annual Payout above base rate</td>
                                            <td>₹3,600</td>
                                            <td>₹78,000</td>
                                        </tr>
                                    </tbody></table>
                            </div>
                            <div className={styles["x-amount-industry-block"]}>
                                <div className={styles["x-amount-industry-block-1"]}>
                                    Annual Payout
                                </div>
                                <div className={styles["x-amount-industry-block-2"]}>
                                    <span>Industry</span> <br />
                                    <b>₹3,600 <small>(5%)</small></b>
                                </div>
                                <div className={styles["x-amount-industry-block-vs"]}>
                                    <b>22X</b>
                                </div>
                                <div className={styles["x-amount-industry-block-3"]}>
                                    <span>Mirae Asset</span> <br />
                                    <b>₹78,000 <small>(100%)</small></b>
                                </div>
                                <div className={styles["x-amount-unnique-benefit-block"]}>
                                    <StarSVG />

                                    <b className={styles["light-blue"]}>Unique Benefit:</b> Customise the DP sell transactions from < b className={styles["orangeTxt"]}>₹12</b> to < b className={styles["orangeTxt"]}>₹25.</b>
                                </div >
                            </div >
                        </div >
                    </li >
                </ul >

                <div className={styles["partner-offer-ac-block"]}>
                    <h3 className={styles["title"]}>That&apos;s not all, you can benefit from various other charges too</h3>
                    <div className={styles["partner-ul-block"]}>
                        <ul>
                            <li>
                                <span>
                                    <FeeSVG />
                                </span>
                                <p>
                                    <b>Account Opening Fee</b>
                                    Opportunity to charge up to ₹9,999<br /> Anything above ₹500 is <u className={styles["orangeTxt"]}>100% yours!</u>
                                </p>
                            </li>
                            <li>
                                <span>
                                    <UserSVG />
                                </span>
                                <p>
                                    <b>Account Maintenance Charges <i>(DP AMC)</i></b>
                                    Charge up to ₹4,999 - <u className={styles["orangeTxt"]}>Earn 100% </u>
                                </p>
                            </li>
                            <li>
                                <span>
                                    <PledgeSVG />
                                </span>
                                <p>
                                    <b>Pledge, unpledge charges <i>(MTF, Margin Pledge)</i></b>
                                    Choose from our standard plans – Earn 20% <br />Or customise and <u className={styles["orangeTxt"]}>Earn 100%</u>
                                </p>
                            </ li>
                        </ul>
                        <div className={styles["all-this-can-block"]}> <b>All this can<br /> become yours.</b><br /> <a href="/pricing">See detailed revenue sharing plans <RightArrowSVG /> </a>
                        </div>
                    </div >
                </div>


            </div >
        </section >
    )
}

export default PartnerProgram
