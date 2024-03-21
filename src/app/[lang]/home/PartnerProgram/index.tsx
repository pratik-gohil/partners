"use client"
import React from 'react'
import styles from './index.module.scss';
import StarSVG from '@/components/svgs/StarSVG';
import RightArrowSVG from '@/components/svgs/RightArrowSVG';
import FeeSVG from '@/components/svgs/FeeSVG';
import UserSVG from '@/components/svgs/UserSVG';
import PledgeSVG from '@/components/svgs/PledgeSVG'; import RetainQueryLink from '@/components/RetainQueryLink/RetainQueryLink';
;

function PartnerProgram({dictionary}: any) {
    const handleKnowMore = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement;
        const el = document.querySelector(`[data-section-table=${target.getAttribute("data-section-action")}]`) as HTMLDivElement;

        el.style.height = el.style.height === '0px' ? "337px" : '0px'
    }

    return (
        <section className={styles["dreamWithMaSec"]}>
            <div className={styles["maContainer"]}>
                <h2 className={styles["secTitle"]}>आपके बड़े सपनों को उड़ान दें,<span>Mirae Asset के साथ</span></h2>
                <p className={styles["captionTxt"]}> {dictionary["captionTxt"]} <span className={styles["orangeTxt"]}> {dictionary["captionTxt1"]}
                </span> {dictionary["captionTxt2"]} <span className={styles["orangeTxt"]}> {dictionary["captionTxt3"]}</span> {dictionary["captionTxt4"]} 
                <span className={styles["orangeTxt"]}> {dictionary["captionTxt5"]}</span> {dictionary["captionTxt6"]} 
                <a aria-label="Income Sharing for Authorised Partners" className={styles["orangeTxt"]} href="asset/pdf/income-sharing-for-authorised-partners.pdf" 
                target="_blank"> {dictionary["captionTxt7"]}</a>
                </p>
                <div className={`${styles["midheading-pl"]} `}>{dictionary["midheading-pl"]}</div>
                <div className={styles["opptUlist"]}>
                    <div className={styles["opptBox"]}>
                        <div className={styles["x-amount-block"]}>
                            <div className={`${styles["x-amount-left"]} `}>
                            {dictionary["x-amount-left"]}
                            </div>
                            <div className={`${styles["x-amount-right"]} ${styles["margiright75"]}`}>
                            {dictionary["margiright75"]} <b>{dictionary["margiright75_1"]}</b> {dictionary["margiright75_2"]}{dictionary["margiright75_3"]}
                            </div>
                        </div>
                        <div className={styles["x-amount-txt-containt"]}>
                            <div className={styles["x-amount-txt-ul"]}>
                                <ul>
                                    <li>
                                    {dictionary["x-amount-txt-ul"]} <br />
                                        <b>300</b>
                                    </li>
                                    <li>
                                    {dictionary["x-amount-txt-ul_1"]} <br />
                                        <b>₹12,000</b>
                                    </li>
                                    <li>
                                    {dictionary["x-amount-txt-ul_2"]}  <br />
                                        <b>₹36 lakh</b>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles["x-amount-industry-block"]}>
                                <div className={styles["x-amount-industry-block-1"]}>
                                {dictionary["x-amount-industry-block-1"]}
                                </div>
                                <div className={styles["x-amount-industry-block-2"]}>
                                    <span>{dictionary["x-amount-industry-block-2"]}</span> <br />
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

                                <b className={styles["light-blue"]}>{dictionary["Unique_Benefit"]}</b> {dictionary["Unique_Benefit_1"]}
                            </div>
                        </div>
                    </div>
                    <div className={styles["opptBox"]}>
                        <div className={styles["x-amount-block"]}>
                            <div className={`${styles["x-amount-left"]} `}>
                                MTF {dictionary["MTF-amount-TITLE"]}
                            </div>
                            <div className={styles["knowmore-ribar"]} data-section-action="mtf" onClick={e => handleKnowMore(e)}>Know How ?</div>
                            <div className={styles["x-amount-right"]}>
                            {dictionary["x-amount-right"]} <b>{dictionary["x-amount-right_1"]}</b> {dictionary["x-amount-right_2"]}{dictionary["x-amount-right_3"]}
                            </div >
                        </div >
                        <div className={styles["x-amount-txt-containt"]}>
                            <div className={styles["x-amount-txt-ul"]}>
                                <ul>
                                    <li>
                                    {dictionary["MTF_active_clients"]} <br />
                                        <b>100</b>
                                    </li>
                                    <li>
                                    {dictionary["MTF_active_book"]} <br />
                                        <b>₹3 crore</b> <br />
                                        <small> {dictionary["MTF_active_book_line"]}</small>
                                    </li>
                                    <li>
                                    {dictionary["MTF_active_interest"]} <br />
                                        <b>18% p.a.</b>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles["tablebar-planB"]} data-section-table="mtf" style={{ height: '0px' }}>
                                <table cellPadding="0" cellSpacing="0" border={0} width="100%">
                                    <tbody><tr>
                                        <th >{dictionary["MTF_eMargin_details"]}</th>
                                        <th><span>{dictionary["MTF_eMargin_industry"]}</span></th>
                                        <th><span className={styles["orngText"]}>Mirae Asset Partners</span></th>
                                    </tr>
                                        <tr>
                                            <td >{dictionary["MTF_eMargin_industry_clients"]}</td>
                                            <td>100</td>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <td dangerouslySetInnerHTML={
                                       { __html: dictionary["MTF_eMargin_MTF_Book"]}
                                    }></td>
                                            <td>₹3 crore</td>
                                            <td>₹3 crore</td>
                                        </tr>
                                        <tr>
                                            <td >{dictionary["MTF_eMargin_avg_intrest_rate"]}</td>
                                            <td>18%</td>
                                            <td>18%</td>
                                        </tr>
                                        <tr>
                                            <td dangerouslySetInnerHTML={
                                       { __html: dictionary["MTF_eMargin_retain_broker"]}
                                    }></td>
                                            <td>12%</td>
                                            <td>9.99%</td>
                                        </tr>
                                        <tr>
                                            <td >{dictionary["MTF_eMargin_intrest_baserate"]}</td>
                                            <td>50%</td>
                                            <td>80%</td>
                                        </tr>
                                        <tr>
                                            <td >{dictionary["MTF_eMargin_intrest_payout"]}</td>
                                            <td>₹9 lakh (50%)</td>
                                            <td>₹19.22 lakh (80%)</td>
                                        </tr>
                                    </tbody></table>
                            </div>
                            <div className={styles["x-amount-industry-block"]}>
                                <div className={styles["x-amount-industry-block-1"]}>
                                {dictionary["MTF_eMargin_ann_intrest_payout"]}
                                </div>
                                <div className={styles["x-amount-industry-block-2"]}>
                                    <span> {dictionary["MTF_eMargin_industry"]}</span> <br />
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
                            <div className={styles["x-amount-unnique-benefit-block"]} >
                                <StarSVG />
                                <span dangerouslySetInnerHTML={
                                       { __html: dictionary["MTF_eMargin_unique_benefit"]}
                                    }/>
                                
                            </div>
                        </div >
                    </div>
                    <div className={styles["opptBox"]}>
                        <div className={styles["x-amount-block"]}>
                            <div className={`${styles["x-amount-left"]} `}>
                            {dictionary["Margin_Pledge_Interest"]}
                            </div>
                            <div className={styles["knowmore-ribar"]} data-section-action="margin-pledge-intrest" onClick={e => handleKnowMore(e)}>Know How ?</div>
                            <div className={styles["x-amount-right"]}dangerouslySetInnerHTML={
                                       { __html: dictionary["Margin_Pledge_Interest_rate"]}
                                    }>
                                
                            </div >
                        </div >
                        <div className={styles["x-amount-txt-containt"]}>
                            <div className={styles["x-amount-txt-ul"]}>
                                <ul>
                                    <li>
                                    {dictionary["Margin_Pledge_Interest_active_cli"]} <br />
                                        <b>100</b>
                                    </li>
                                    <li>
                                    {dictionary["Margin_Pledge_Interest_book"]} <br />
                                        <b>₹2 crore</b> <br />
                                        <small>{dictionary["Margin_Pledge_Interest_per_cli"]}</small>
                                    </li>
                                    <li>
                                    {dictionary["Margin_Pledge_Interest_avg_intrest"]} <br />
                                        <b>18% p.a.</b>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles["tablebar-planB"]} data-section-table="margin-pledge-intrest" style={{ height: '0px' }}>
                                <table cellPadding="0" cellSpacing="0" border={0} width="100%">
                                    <tbody><tr>
                                        <th >{dictionary["Margin_Pledge_Interest_Assumptions"]}</th>
                                        <th><span>{dictionary["MTF_eMargin_industry"]}</span></th>
                                        <th><span className={styles["orngText"]}>Mirae Asset Partners</span></th>
                                    </tr>
                                        <tr>
                                            <td >{dictionary["Margin_Pledge_active_cli"]}</td>
                                            <td>100</td>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <td >{dictionary["Margin_Pledge_total_book"]} <small>{dictionary["Margin_Pledge_per_cli"]}</small></td>
                                            <td>₹2 crore</td>
                                            <td><b>₹2 crore</b></td>
                                        </tr>
                                        <tr>
                                            <td >{dictionary["MTF_eMargin_avg_intrest_rate"]}</td>
                                            <td>18%</td>
                                            <td>18%</td>
                                        </tr>
                                        <tr>
                                            <td dangerouslySetInnerHTML={
                                       { __html: dictionary["MTF_eMargin_retain_broker"]}
                                    }></td>
                                            <td>12%</td>
                                            <td>11.99%</td>
                                        </tr>
                                        <tr>
                                            <td >{dictionary["MTF_eMargin_intrest_baserate"]}</td>
                                            <td>50%</td>
                                            <td>80%</td>
                                        </tr>
                                        <tr>
                                            <td ><b>{dictionary["Margin_Pledge_annual_payout"]}</b></td>
                                            <td>₹6 lakh (50%)</td>
                                            <td>₹9.61 lakh (80%)</td>
                                        </tr>
                                    </tbody></table>
                            </div>
                            <div className={styles["x-amount-industry-block"]}>
                                <div className={styles["x-amount-industry-block-1"]}>
                                {dictionary["Margin_Pledge_annual_int_payout"]}
                                </div>
                                <div className={styles["x-amount-industry-block-2"]}>
                                    <span>{dictionary["MTF_eMargin_industry"]}</span> <br />
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

                                    <span dangerouslySetInnerHTML={
                                       { __html: dictionary["Margin_Pledge_annual_benifit"]}
                                    }/>                                
                                    </div >
                            </div >
                        </div >
                    </div>
                    <div className={styles["opptBox"]}>
                        <div className={styles["x-amount-block"]}>
                            <div className={`${styles["x-amount-left"]} `}>
                            {dictionary["DP_Sell_Transaction_Charges"]}
                            </div>
                            <div className={styles["knowmore-ribar"]} data-section-action="dp-sell" onClick={e => handleKnowMore(e)}>Know How ?</div>
                            <div className={styles["x-amount-right"]} dangerouslySetInnerHTML={
                                       { __html: dictionary["DP_Sell_Transaction_Charges_rate"]}
                                    }>
                            
                            </div >
                        </div>
                        <div className={styles["x-amount-txt-containt"]}>
                            <div className={styles["x-amount-txt-ul"]}>
                                <ul>
                                    <li>
                                    {dictionary["DP_Sell_Transaction_Charges_perday"]} <br />
                                        <b>25</b>
                                    </li>
                                    <li>
                                    {dictionary["DP_Sell_Transaction_Charges_title"]} <br />
                                        <b>₹12 - ₹25</b>
                                    </li>
                                    <li>
                                    {dictionary["DP_Sell_Transaction_Charges_ann_charges"]} <br />
                                        <b>₹72,000 - ₹1,50,000</b>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles["tablebar-planB"]} data-section-table="dp-sell" style={{ height: '0px' }}>
                                <table cellPadding="0" cellSpacing="0" border={0} width="100%">
                                    <tbody><tr>
                                        <th >&nbsp;</th>
                                        <th><span>{dictionary["MTF_eMargin_industry"]}</span></th>
                                        <th><span className={styles["orngText"]}>Mirae Asset Partners</span></th>
                                    </tr>
                                        <tr>
                                            <td >{dictionary["DP_Sell_Transaction_Charges_perday"]}</td>
                                            <td>25</td>
                                            <td>25</td>
                                        </tr>
                                        <tr>
                                            <td >{dictionary["DP_Sell_Transaction_Charges_tran_char"]}</td>
                                            <td>₹12</td>
                                            <td>₹12</td>
                                        </tr>
                                        <tr>
                                            <td >{dictionary["DP_Sell_Transaction_Charges_dp_tran_char"]}</td>
                                            <td><b>NA</b></td>
                                            <td><b>₹25</b></td>
                                        </tr>
                                        <tr>
                                            <td >{dictionary["DP_Sell_Transaction_Charges_ann_dp_char"]}</td>
                                            <td>₹72,000</td>
                                            <td>₹1,50,000</td>
                                        </tr>
                                        <tr>
                                            <td >{dictionary["DP_Sell_Transaction_Charges_Payout_rate"]}</td>
                                            <td>5% {dictionary["DP_Sell_Transaction_Charges_base"]}</td>
                                            <td>100% {dictionary["DP_Sell_Transaction_Charges_abovebase"]}</td>
                                        </tr>
                                        <tr>
                                            <td >{dictionary["DP_Sell_Transaction_Charges_ann_payoutrate"]}</td>
                                            <td>₹3,600</td>
                                            <td>₹78,000</td>
                                        </tr>
                                    </tbody></table>
                            </div>
                            <div className={styles["x-amount-industry-block"]}>
                                <div className={styles["x-amount-industry-block-1"]}>
                                {dictionary["DP_Sell_Transaction_Charges_annpayout"]}
                                </div>
                                <div className={styles["x-amount-industry-block-2"]}>
                                    <span>{dictionary["MTF_eMargin_industry"]}</span> <br />
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
                                    <span dangerouslySetInnerHTML={
                                       { __html: dictionary["DP_Sell_Transaction_Charges_benifit"]}
                                    }/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles["partner-offer-ac-block"]}>
                    <h3 className={`${styles["title"]} `}> {dictionary["partner_offer_block"]}</h3>
                    <div className={styles["partner-ul-block"]}>
                        <ul>
                            <li>
                                <span>
                                    <FeeSVG />
                                </span>
                                <p dangerouslySetInnerHTML={
                                       { __html: dictionary["partner_offer_acc_openfee"]}
                                    }>
                                   </p>
                            </li>
                            <li>
                                <span>
                                    <UserSVG />
                                </span>
                                <p dangerouslySetInnerHTML={
                                       { __html: dictionary["partner_offer_acc_maintenance_charges"]}
                                    }>
                                </p>
                            </li>
                            <li>
                                <span>
                                    <PledgeSVG />
                                </span>
                                <p  dangerouslySetInnerHTML={
                                       { __html: dictionary["partner_offer_pledge_unpledge_charges"]}
                                    }>
                                 </p>
                            </ li>
                        </ul>
                        <div className={styles["all-this-can-block"]}> <b dangerouslySetInnerHTML={
                                       { __html: dictionary["all_this_can_block"]}
                                    }></b><br /> <RetainQueryLink href="/pricing">{dictionary["RetainQueryLink"]} <RightArrowSVG /> </RetainQueryLink>
                        </div>
                    </div >
                </div>


            </div >
        </section >
    )
}

export default PartnerProgram
