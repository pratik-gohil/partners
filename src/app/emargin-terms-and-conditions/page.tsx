import Breadcrumb from "../../components/breadcrumb/BreadcrumbSec";
import PolicyNavigation from "@/components/policyNavigation/PolicyNavigation";
import styles from "../../styles/Static.module.scss";


export default function EmarginTermsAndConditions() {
  return (
    <>
      <Breadcrumb />
      <section className={`${styles.staticSec}`}>
        <div className={`${styles.maContainer}`}>
          <h2 className={`${styles.secTitle}`}>Our Policies</h2>
          <PolicyNavigation />
          <div className={`${styles.mainworTc} ${styles.pb40}`}>
            <h1 className={`${styles.title}`}>Margin Trading Facility (eMargin) Activation T&C</h1>
            <p>
              I/We hereby agree to avail Margin Trading Funding (“MTF”) from MACM in Equity
              Segment of NSE and BSE. I/We have received and read the Rights and Obligations
              of MTF as prescribed by NSE and BSE contained in Part B of Account Opening
              Form. I/We also agree to avail of Margin Trading Funding from MACM in
              accordance with the following terms and conditions agreed between me/us and
              MACM. The above referred MTF is offered by Mirae Asset Capital Markets (India)
              Private Limited (“MACM”) under the product name of eMargin
              <br />
              <br />
              Other Terms and Conditions relating to Margin Trading Funding (“MTF”) as
              agreed between Stockbroker and Client.
              <br />
              <br />
              1. Under eMargin, about 20% - 50% margin required to be provided by the client
              in such form as may be specified from MACM from time to time for limits (both
              cash &amp; non cash). The margin is blocked from the customers' limits before
              the order is released to the Exchange. The client can carry forward his open
              buy position till sufficient margins are maintained by the clients.
              <br />
              <br />
              2. Features:
              <br />
              <br />
              a) The customer can take fresh buy positions in E- margin product in the
              approved stock (s) by providing prescribed margins. The open positions can be
              squared off in case of any margin shortfall, MTM Loss or in case of corporate
              actions concerning the stock in which there is open eMargin position.
              <br />
              <br />
              b) As per SEBI regulation, only Group-1 securities are eligible for MTF.
              Hence, MTF shall not be offered in all the securities traded on Stock
              Exchanges. MACM shall have the discretion to select securities that will be
              enabled for trading under the said facility as per its internal risk
              management policy and the number of stocks enabled for trading under MTF can
              be smaller than the number of stocks allowed by SEBI/Stock Exchanges.
              <br />
              <br />
              c) Such list of approved securities would be subject to change by MACM from
              time to time. MACM may also at its sole discretion decide to withdraw a
              particular security from the list without notice to the clients and without
              assigning any reasons whatsoever.
              <br />
              <br />
              d) SEBI/Exchanges has prescribed the Minimum Margin amount to be paid by the
              client as VaR + 3 times ELM in case of F&amp;O stocks and VaR +5 times ELM in
              case of other eligible stocks. MACM shall have the right to prescribe and
              collect the higher margin from client over and above the stated rates. Also as
              a risk containment measure, margin rates could be increased or decreased for a
              Security without notice to the Client and without assigning any reasons
              whatsoever by MACM from time to time.
              <br />
              <br />
              e) Margins can be collected by MACM in the form cash, cash equivalent and
              eligible stocks in the Form of Margin Pledge (“MP”) with Appropriate haircut
              as decided by MACM from time to time.
              <br />
              <br />
              f) Mark to Market (MTM) losses on open eMargin positions to be calculated on
              daily basis and shall be adjusted from available margin. Accordingly, the
              Limit may lesser over a period of time. In case, the MTM loss breaches the
              prescribed threshold (currently 75%) of available margin, the position shall
              be squared off immediately to restrict further losses. It shall be the
              responsibility of the Client to regularly monitor and review the Margin
              availability and furnish the additional Margin to MACM.
              <br />
              <br />
              g) In case the eMargin position could not be squared off for any reasons (for
              example, lower liquidity in the scrip, scrip hitting circuit filter, internal
              system issues or problems at Exchange's end etc.) your open position will be
              settled on a delivery basis.
              <br />
              <br />
              h) In case the Client has buy position which resulted in no delivery /
              shortage then the sell leg transaction (if executed on or before Settlement
              date) would also amount to shortage. The auction value as applicable on the
              shortages would apply.
              <br />
              <br />
              i) if client buy shares under MTF product and sell the same under other
              product on the same day or vice -versa, there will be no open position and
              hence no MTF allocation will happen for the day.
              <br />
              <br />
              j) MACM shall also have the right to transfer /sell any other securities of
              the Client at Client's risk and costs and with or without intimation to the
              Client for recovering any dues in relation to MTF facility. In case of delayed
              payment/ delay in realization of the dues, then interest, at the rates as
              decided by MACM from time to time, shall be paid by the Client for the same
              till the date of payment by the Client.
              <br />
              <br />
              k) Interest will be charged upto 24% per annum as may be applied by MACM from
              time to time on ledger debits including on the funded portion of the eMargin
              client trades. Other statutory charges and taxes shall apply as applicable.
              <br />
              <br />
              l) Decision of MACM will be final with respect to:-
              <br />
              <br />
              — Eligibility criteria of clients for availing funding under eMargin,
              <br />
              <br />
              — Eligible scrips for funding under eMargin,
              <br />
              <br />
              — Eligible scrips for collateral,
              <br />
              <br />
              — Applicable margin rates (over and above stated Exchange margin %),
              <br />
              <br />
              — Applicable haircut% on Collateral stocks (over and above stated Exchange
              haircut %),
              <br />
              <br />
              — Maximum funding for a client under eMargin,
              <br />
              <br />
              — Maximum funding for a scrip under eMargin,
              <br />
              <br />
              — Maximum collateral value/quantity for a scrip,
              <br />
              <br />
              — Inclusion or exclusion of a scrip under eMargin,
              <br />
              <br />
              — Inclusion or exclusion of a scrip for collateral,
              <br />
              <br />
              — MTM value calculations,
              <br />
              <br />
              — Square off time of open position, Maximum days allowed for continuing the
              eMargin position(s),
              <br />
              <br />
              — Rate of interest, also referred to as delayed payment charge, charged for
              funding client's position
              <br />
              <br />
              — Adjusting credit arising from one product to the other with MACM,
              <br />
              <br />
              — Other operational matters.
              <br />
              <br />
              3. Situations/ conditions in which the securities may be liquidated:
              <br />
              <br />
              a) Applicable minimum margin and increased margin, if any, shall be required
              to be provided at all times by the clients in respect of the stocks purchased
              under the MTF. Client shall pay any shortage in the required margin
              immediately on receiving demand (margin call) failing which MACM shall be at
              liberty to liquidate the funded shares and/or collateral shares to recover the
              dues outstanding in the account of the Clients In the normal market condition,
              it is expected that the client makes good the shortage within T +3 day failing
              which the position would be liquidated on T+4 day to the extent of margin
              shortfall . However, MACM reserves the right to liquidate the position much in
              advance if adequate client Margin is not available with MACM for the open
              eMargin positions.
              <br />
              <br />
              b) The scrip price is continuously hitting lower circuit.
              <br />
              <br />
              c) As per the SEBI circular, Funded stocks under MTF are to be held in Client
              Securities Margin Funding Demat Account only by the way of Pledge. Client has
              to provide pledge confirmation for all funded stocks through the OTP based
              authentication mechanism in accordance with guidelines prescribed by CDSL DP
              from time to time.If client fails to accept the pledge request for the funded
              stocks in favour of MACM within prescribed timeline as may be decided from
              MACM from time to time , position will be squared off any time after the
              settlement day but on or before the regulatory norms. Funds blocked during the
              settlement of such position(s) would be liable to for Delayed Payment charges.
              I hereby authorise Mirae Asset Capital Markets (India) Private Limited
              (“MACM”), my Stock Broker/Depository Participant, to cancel/revoke/delete the
              excess pledge against my Margin Trading Facility (e Margin) created in CDSL by
              me for which there are no trades.
              <br />
              <br />
              d) Client has not transferred required funds and/or approved collateral in the
              form of Margin Pledge to meet the MTM loss/margin shortages.
              <br />
              <br />
              e) Value of collateral has fallen either due to fall in prices or removal of
              the stock from the approved collateral list by Exchange/MACM including due to
              corporate action.
              <br />
              <br />
              f) The margin% on eMargin stock has been increased by Exchange/Clearing
              house/MACM and hence there is shortage of margin on client's open positions.
              <br />
              <br />
              g) The haircut % on Collateral stock has been increased by Exchange/Clearing
              house/MACM and hence there is shortage of margin on client's open positions.
              <br />
              <br />
              h) The client's ledger is in debit over and above the margin debit.
              <br />
              <br />
              i) If the stock moves out from the list of eligible stocks under MTF and
              becomes ineligible for offering under MTF.
              <br />
              <br />
              j) Any other circumstances due to change in regulatory requirements from time
              to time or risk management process due to changing market conditions.
              <br />
              <br />
              k) In case the scrip ceases to be allowed for eMargin due to corporate action
              – In such cases, eMargin open position may be liquidated / squared off one day
              prior to its Ex-date. If the scrip ceases to be eligible for eMargin for
              reasons like reduction in daily price band, shifting of group by Exchange(s)
              etc., the eMargin open position can be squared off / liquidated by MACM after
              giving client a margin call.
              <br />
              <br />
              I/We hereby agree to avail Margin Trading Funding (“MTF”) from MACM in Equity
              Segment. I/We have received and read the Rights and Obligations of MTF as
              prescribed by NSE and BSE contained in Part B of Account Opening Form. I/We
              also agree to avail of Margin Trading Funding from MACM in accordance with the
              following terms and conditions agreed between me/us and MACM.
              <br />
              <br />
              4. Other Terms and Conditions:
              <br />
              <br />
              a) The Client understands that the positions will be permitted to be
              allowed/continued upon fulfillment of the necessary margin requirements as
              specified by MACM for the particular scrip from time to time. The Client
              agrees that though presently there is no maximum time limit prescribed by MACM
              for keeping the positions open, however, MACM reserves the right at its
              discretion to stipulate a maximum time within which Client will have to take
              the delivery thereof.
              <br />
              <br />
              b) Notwithstanding anything contained herein, any amount funded under MTF
              shall be repayable on demand at the sole discretion of MACM. The Client
              undertakes to repay the MTF balance forthwith on demand by MACM.
              <br />
              <br />
              c) The Client shall monitor margin shortfall as required from time to time,
              and whether or not any margin call is made or such other separate
              communication to that effect is sent by MACM to the Client and /or whether or
              not such communication is received by the Client to avoid any liquidation.
              <br />
              <br />
              d) The Client agrees that MACM may at its discretion, in accordance with its
              risk management policy, disable trading in certain securities in MTF and
              square off all open positions in such scrip which are not converted to
              delivery irrespective of margin availability. Client agrees that MACM cannot
              be held liable for any losses arising out of such disablement or squaring off
              of such security.
              <br />
              <br />
              e) MACM may sell off the collateral fully or partly to recover debits arising
              out of E-Margin.
              <br />
              <br />
              f) The client shall not take position in a company scrip in E-Margin through
              MACM, if the client is a promoter of that company. If a client being promoter
              of the company scrip inadvertently takes position in E-Margin through MACM in
              that scrip then he/she shall immediately after execution of trade inform MACM
              of the same by sending an email from his registered E mail ID to{" "}
              <a href="mailto:support@miraeassetpartners.com">
                support@miraeassetpartners.com
              </a>{" "}
              so that appropriate reporting could be made by MACM to Stock Exchanges.
              <br />
              <br />
              g) Collateral and Funded stocks shall be marked to market on daily basis.
              <br />
              <br />
              h) If mark to market loss of the client's E-Margin open position exceeds 70%
              of the margin provided by the client, E-Margin open position will be squared
              off / liquidated immediately. The client is therefore required to monitor
              his/her mark to market losses vis-à-vis margin availability on a real time
              basis.
              <br />
              <br />
              i) Haircut shall be applied on stocks acceptable as collaterals at a
              percentage which can be higher than scrip Var+ELM. Such haircut % can be
              increased to 100% in case of corporate action in the securities provided as
              collaterals. In such cases, the client is required to immediately provide
              further margins in the form of funds, other shares as collaterals to avoid
              liquidation / square off of E-Margin open position(s).
              <br />
              <br />
              j) Client shall lodge protest or disagreement with any transaction done under
              the margin trading facility within T+1 working day as prescribed in the Rights
              and Obligations.
              <br />
              <br />
              5. MACM shall not be liable for any losses either actual or opportunity losses
              arising from or in connection with E-Margin transactions due to:
              <br />
              <br />
              a) Arising out of technical / system issues.
              <br />
              <br />
              b) Disallowance of any scrip to be allowed for further E-Margin positions.
              <br />
              <br />
              c) Increase in applicable margin, especially when margin is increased to 100%
              in case of Corporate action or where the scrip does not remain eligible for
              E-Margin.
              <br />
              <br />
              d) Increase in Collateral haircut %, especially when the haircut is increased
              to 100% in case of Corporate action or withdrawal of scrip from acceptance as
              collaterals due to reduction in price bands, shifting of groups by Exchange(s)
              etc.
              <br />
              <br />
              e) Liquidation of E-Margin open positions due to increased mark to market
              losses and/or margin shortfall.
              <br />
              <br />
              f) The client understands that MACM reserves the right to modify any of the
              terms and conditions in the relation to Margin Trading funding so provided.
              The client also understands that from the date of accepting the terms and
              conditions in relation to Margin Trading funding ,if there are any
              regulatory/operational changes in the functioning of the Margin Trading
              Facility, such changes shall apply without any intimation to the client. MACM
              reserves the right to deny providing of the Margin Trading Facility to any
              client without assigning any reason. During the existence of the agreement, if
              it is found that any breach/fraud has been committed by the client against
              MACM, such client shall be liable to make good all the financial loss incurred
              by MACM including any legal and technical cost that would have been borne by
              MACM. The client would also be subject to any legal action as may be
              necessary. MACM also reserved the right to withdraw the Margin Trading
              facility any time by issuing a notice of not greater than 30 days to its
              clients. On withdrawal of such a facility, a client would be required to
              settle its position and clear out any pending dues, if any. I/We hereby
              consent to electronic mode as the method of communication (E mail/SMS) for
              confirmation of orders/trades, margin calls and calls for liquidation of
              collateral/security/position etc.
              <br />
              <br />
              Please refer the client handbook to understand the additional rights and
              obligation related to MTF
              <br />
              <br />
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
