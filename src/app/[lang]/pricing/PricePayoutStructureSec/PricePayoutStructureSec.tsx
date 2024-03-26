import React from "react";
import styles from "./PricePayoutStructureSec.module.scss";
import Image from "next/image";

function PricePayoutStructureSec({ dictionary }: any) {
  return (
    <section className={`${styles.pricePayoutStructureSec}`}>
      <div className={`${styles.maContainer}`}>
        <h2 className={`${styles.secTitle} `}  dangerouslySetInnerHTML={
                                       { __html: dictionary["pricePayoutStructure_title"]}
                                    }>
        </h2>

        <div className={`${styles.tableStructureWrap}`}>
          <div className={`${styles.pricingTableHolder}`}>
            <table width="100%"><tbody>
              <tr dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTableHolder_revenu_src"]}
                                    }>
              </tr>
              <tr>
                <td dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTableHolder_acc_openfee"]}
                                    }>
                </td>
                <td>
                  <b className={`${styles.orangeTxt}`}>100%</b> {dictionary["pricingTableHolder_acc_openfee_1"]}
                </td>
                <td>
                {dictionary["pricingTableHolder_acc_openfee_2"]}
                </td>
              </tr>
              <tr dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTableHolder_acc_Brokerage_sec"]}
                                    }>
              </tr>
              <tr dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTableHolder_acc_MTF_interestsec"]}
                                    }>
              </tr>
              <tr dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTableHolder_acc_Margin_Pledge_interest"]}
                                    }>
              </tr>
              <tr>
                <td>
                  <b>{dictionary["pricingTableHolder_acc_dpamc"]}</b>
                </td>
                <td dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTableHolder_acc_dpamc_1"]}
                                    }>
                </td>
                <td rowSpan={3}>
                {dictionary["pricingTableHolder_acc_dpamc_2"]}
                
                </td>
              </tr>
              <tr>
                <td>
                  <b>{dictionary["pricingTableHolder_pledge_unp_char"]}</b>
                </td>
                <td dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTableHolder_pledge_unp_ rate"]}
                                    }>
                </td>
              </tr>
              <tr>
                <td>
                  <b>{dictionary["pricingTableHolder_dp_sell_rate"]}</b>
                </td>
                <td dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTableHolder_dp_sell_rate_1"]}
                                    }>
                </td>
              </tr>
              <tr>
                <td>
                  <b>{dictionary["pricingTableHolder_dp_payment_chr"]}</b>
                </td>
                <td dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTableHolder_dp_payment_chr_1"]}
                                    }>
                </td>
                <td>{dictionary["pricingTableHolder_dp_no_customisation"]}</td>
              </tr>
              <tr>
                <td>
                  <b>{dictionary["pricingTableHolder_dp_op_charges"]}</b>
                </td>
                <td dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTableHolder_dp_payment_chr_1"]}
                                    }>
                </td>
                <td>{dictionary["pricingTableHolder_dp_no_customisation"]}</td>
              </tr>
            </tbody></table>
          </div>
        </div>

        <div className={`${styles.tableStructureWrap}`}>

          <div className={`${styles.tableTitleWrap} ${styles.flex}`}>

            <Image
              width={40}
              height={40}
              src="/rs-icon-1.webp"
              alt="icon"
              title="icon"
            />
            <h3 className={`${styles.tableTitle}`}>
            {dictionary["pricingTable_Income_Acc_Op_Fee"]}
            </h3>
          </div>
          <p>
          {dictionary["pricingTable_Income_Acc_para"]}
          </p>
          <div className={`${styles.pricingTableHolder}`}>

            <table width="100%"><tbody>

              <tr  dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTable_Income_Acc_heading"]}
                                    }>
              </tr>
              <tr   dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTable_Income_Acc_std_plan_1"]}
                                    } >
              </tr>
              <tr dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTable_Income_Acc_std_plan_2"]}
                                    }>
              </tr>
              <tr dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTable_Income_Acc_std_plan_3"]}
                                    }>
              </tr>
            </tbody></table>
          </div>
          <p dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTable_Income_Acc_note"]}
                                    }>
          </p>
        </div>

        <div className={`${styles.tableStructureWrap}`}>

          <div className={`${styles.tableTitleWrap} ${styles.flex}`}>

            <Image
              width={40}
              height={40}
              src="/incom-from-icon.webp"
              alt="icon"
              title="icon"
            />
            <h3 className={`${styles.tableTitle}`}>{dictionary["pricingTable_Income_Brokerage"]}</h3>
          </div>
          <p dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTable_Income_Brokerage_disc"]}
                                    }>
          </p>
          <div className={`${styles.pricingTableHolder}`}>

            <table width="100%"><tbody>

              <tr dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTable_Income_Brokerage_heading"]}
                                    }>
              </tr>
              <tr dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTable_Income_std_plan1"]}
                                    }>
                                      </tr>
              
              <tr  dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTable_Income_std_plan2"]}
                                    }>
                
              </tr>
              <tr dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTable_Income_std_plan3"]}
                                    }>
              </tr>
            </tbody></table>
          </div>
        </div>

        <div className={`${styles.tableStructureWrap}`}>

          <div className={`${styles.tableTitleWrap} ${styles.flex}`}>

            <Image
              width={40}
              height={40}
              src="/intrest-percent-icon.webp"
              alt="icon"
              title="icon"
            />
            <h3 className={`${styles.tableTitle}`}>
            {dictionary["pricingTable_Income_Income_MTF_Int"]}
            </h3>
          </div>
          <p>
          {dictionary["pricingTable_Income_Income_MTF_Int_disc"]}
          
          </p>
          <div className={`${styles.pricingTableHolder}`}>

            <table width="100%"><tbody>

              <tr dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTable_Income_Income_MTF_Int_heading"]}
                                    }>
              </tr>
              <tr>

                <td className={`${styles.textCenter}`}>9.99%</td>
                <td className={`${styles.textCenter}`}>
                  <b className={`${styles.orangeTxt}`}>5%</b>
                </td>
                <td>24%</td>
                <td className={`${styles.textCenter}`}>
                  <b className={`${styles.orangeTxt}`}>80%</b>
                </td>
              </tr>
            </tbody></table>
          </div>
          <p dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTable_Income_Income_MTF_Int_note"]}
                                    }>
          </p>
        </div>

        <div className={`${styles.tableStructureWrap}`}>

          <div className={`${styles.tableTitleWrap} ${styles.flex}`}>

            <Image
              width={40}
              height={40}
              src="/doc-icon.webp"
              alt="icon"
              title="icon"
            />
            <h3 className={`${styles.tableTitle}`}>
            {dictionary["pricingTable_Income_MP_intr"]}
         
            </h3>
          </div>
          <p>
          {dictionary["pricingTable_Income_MP_intr_ para"]}
          
          </p>
          <div className={`${styles.pricingTableHolder}`}>

            <table width="100%">
              <tbody>
                <tr dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTable_Income_MP_intr_fund_value"]}
                                    }>
                </tr>
                <tr>
                  <td>{dictionary["pricingTable_Income_MP_intr_fund_value_1"]}</td> <td>11.99%</td>
                  <td className={`${styles.textCenter}`}>
                    <b className={`${styles.orangeTxt}`}>5%</b>
                  </td>
                  <td>24%</td>
                  <td className={`${styles.textCenter}`}>
                    <b className={`${styles.orangeTxt}`}>80%</b>
                  </td>
                </tr>
              </tbody></table>
          </div>
        </div>

        <div className={`${styles.tableStructureWrap}`}>

          <div className={`${styles.tableTitleWrap} ${styles.flex}`}>

            <Image
              width={40}
              height={40}
              src="/amc-pricing-icon.webp"
              alt="icon"
              title="icon"
            />
            <h3 className={`${styles.tableTitle}`}>
            {dictionary["pricingTable_Income_acc_main_charges"]}
            
            </h3>
          </div>
          <p>
          {dictionary["pricingTable_Income_acc_main_charges_dis"]}
          
          </p>
          <div className={`${styles.pricingTableHolder}`}>

            <table width="100%">
              <thead>
                <tr>

                  <th colSpan={3} className={`${styles.orangeBgBox}`}>
                    <span>{dictionary["pricingTable_Income_acc_main_charges_stdchar"]}</span>
                  </th>
                  <th colSpan={3} className={`${styles.blueBgBox}`}>
                    <span>{dictionary["pricingTable_Income_acc_main_charges_AMCplan"]}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>

                  <th style={{ width: "20%" }} dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTable_Income_acc_main_charges_AMCplan_heading"]}
                                    }>
                  </th>
                  <th style={{ width: "20%" }} dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTable_Income_acc_main_charges_AMCplan_heading_2"]}
                                    }>
                  </th>
                  <th style={{ width: "13%" }}>{dictionary["pricingTable_Income_acc_main_charges_ptp"]}</th>
                  <th style={{ width: "13%" }}>{dictionary["pricingTable_Income_acc_main_charges_ota"]}</th>
                  <th style={{ width: "13%" }}>{dictionary["pricingTable_Income_acc_main_charges_qac"]}</th>
                  <th style={{ width: "21%" }}>{dictionary["pricingTable_Income_acc_main_charges_ptp"]}</th>
                </tr>
                <tr>

                  <td>₹999 {dictionary["pricingTable_Income_acc_main_onetime_fee"]}</td>
                  <td>₹480 {dictionary["pricingTable_Income_acc_main_quater_fee"]}</td>
                  <td>20%</td> <td>₹1,299 {dictionary["to"]} ₹4,999</td> <td>₹600 {dictionary["to"]} ₹1,000</td>
                  <td className={`${styles.orangeTxt} ${styles.textLeft}`}>

                    <b className={`${styles.orangeTxt}`}>
                    {dictionary["pricingTable_Income_payout_above"]}
                    </b>
                    <ul>

                      <li className={`${styles.leftColorBlk}`}>
                        ₹999 <br />
                        {dictionary["pricingTable_Income_otf"]}
                      </li>
                      <li className={`${styles.leftColorBlk}`}>
                        ₹480 <br />
                        {dictionary["pricingTable_Income_qamc"]}
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody></table>
          </div>
        </div>

        <div className={`${styles.tableStructureWrap}`}>

          <div className={`${styles.tableTitleWrap} ${styles.flex}`}>

            <Image
              width={40}
              height={40}
              src="/Unpledged-charges-icon.webp"
              alt="icon"
              title="icon"
            />
            <h3 className={`${styles.tableTitle}`}>
            {dictionary["pricingTable_Income_PledgeUnpledge_charges"]}            
            </h3>
          </div>
          <p>
          {dictionary["pricingTable_Income_PledgeUnpledge_charges_disc"]}
          </p>
          <div className={`${styles.pricingTableHolder}`}>

            <table width="100%">
              <thead>
                <tr>

                  <th colSpan={2} className={`${styles.orangeBgBox}`}>
                    <span>{dictionary["pricingTable_Income_acc_main_charges_stdchar"]}</span>
                  </th>
                  <th colSpan={2} className={`${styles.blueBgBox}`}>
                    <span>{dictionary["pricingTable_Income_acc_main_charges_AMCplan"]}</span>
                  </th>
                </tr>
              </thead>
              <tbody>

                <tr dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTable_Income_qamc_heading"]}
                                    }>
                  </tr>
                <tr>
                  <td className={`${styles.textCenter}`}>₹25 / ₹32</td>
                  <td className={`${styles.textCenter}`}>
                    <b className={`${styles.orangeTxt}`}>20%</b>
                  </td>
                  <td className={`${styles.textCenter}`}>₹25 {dictionary["to"]} ₹35</td>
                  <td className={`${styles.textLeft}`}>
                    <b className={`${styles.orangeTxt}`}>{dictionary["pricingTable_Income_qamc_partnerfee"]}</b>
                    <ul>

                      <li>
                        ₹25 <br />
                        ({dictionary["pricingTable_Income_acc_main_charges_ota"]})
                      </li>
                      <li>
                        ₹32 <br />
                        ({dictionary["pricingTable_Income_acc_main_charges_qac"]})
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody></table>
          </div>
        </div>

        <div className={`${styles.tableStructureWrap}`}>

          <div className={`${styles.tableTitleWrap} ${styles.flex}`}>

            <Image
              width={40}
              height={40}
              src="/dp-sell-icon.webp"
              alt="icon"
              title="icon"
            />
            <h3 className={`${styles.tableTitle}`}>
            {dictionary["pricingTable_Income_dp_tranchar"]}
            </h3>
          </div>
          <p>
          {dictionary["pricingTable_Income_dp_tranchar_disc"]}
          </p>
          <div className={`${styles.pricingTableHolder}`}>

            <table width="100%">
              <thead>

                <tr>

                  <th colSpan={2} className={`${styles.orangeBgBox}`}>
                    <span>{dictionary["pricingTable_Income_std_dpchar"]}</span>
                  </th>
                  <th colSpan={2} className={`${styles.blueBgBox}`}>
                    <span>{dictionary["pricingTable_Income_cdp_dpchar"]}</span>
                  </th>
                </tr>
              </thead>
              <tbody>

                <tr>

                  <th>{dictionary["pricingTable_DP_Sell_TraCharges"]}</th> <th>{dictionary["pricingTable_DP_ptop"]} </th>
                  <th>{dictionary["pricingTable_DP_Sell_TraCharges"]}</th> <th>{dictionary["pricingTable_DP_ptop"]} </th>
                </tr>
                <tr>

                  <td className={`${styles.textCenter}`}>₹12</td>
                  <td className={`${styles.textCenter}`}>
                    <b className={`${styles.orangeTxt}`}>5%</b>
                  </td>
                  <td className={`${styles.textCenter}`}>₹12 {dictionary["to"]} ₹25</td>
                  <td className={`${styles.textLeft}`}>
                    <b className={`${styles.orangeTxt}`}>{dictionary["pricingTable_DP_ptop_rates"]}2</b>
                  </td>
                </tr>
              </tbody></table>
          </div>
        </div>

        <div className={`${styles.tableStructureWrap}`}>

          <div className={`${styles.tableTitleWrap} ${styles.flex}`}>

            <Image
              width={40}
              height={40}
              src="/payment-changes-icon.webp"
              alt="icon"
              title="icon"
            />
            <h3 className={`${styles.tableTitle}`}>
            {dictionary["pricingTable_DP_incone_delaychar"]}
            </h3>
          </div>
          <p>
          {dictionary["pricingTable_DP_incone_delaychar_disc"]}
          </p>
          <div className={`${styles.pricingTableHolder}`}>

            <table width="100%"><tbody>

              <tr  dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTable_DP_incone_delaychar_heading"]}
                                    }>
              </tr>
              <tr>
                <td>{dictionary["pricingTable_DP_neg_leger"]} </td>
                <td className={`${styles.textCenter}`}>18%</td>
                <td>
                  <b className={`${styles.orangeTxt}`}>{dictionary["pricingTable_DP_flat"]}</b>
                </td>
              </tr>
            </tbody></table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricePayoutStructureSec;
