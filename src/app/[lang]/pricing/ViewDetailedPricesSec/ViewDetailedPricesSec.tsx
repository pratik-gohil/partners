"use client";
import React, { useState } from 'react'
import styles from './ViewDetailedPricesSec.module.scss'
import RetainQueryLink from '@/components/RetainQueryLink/RetainQueryLink';
import Image from 'next/image';

function ViewDetailedPricesSec({ dictionary }: any) {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <section className={`${styles.viewDetailedPricesSec}`}>
            <div className={`${styles.maContainer}`}>
                <h2 className={`${styles.secTitle} `}>{dictionary["viewDetailedTitle"]}</h2>
                <div className={`${styles.docsLinkBox}`}>
                    <a href="https://www.miraeassetpartners.com/asset/pdf/income-sharing-for-authorised-partners.pdf" target="_blank" className={`${styles.halfWrapAlink}`}><Image width={50} height={50} src="/pdf-icon.webp" alt="pdf" /> <span>{dictionary["incomeSharingPdf"]}</span></a>
                    <RetainQueryLink href="/partnership-terms-and-conditions">
                        <div className={`${styles.halfWrapAlink}`}>
                            <Image width={50} height={50} src="/terms-and-conditions-icon.webp" alt="terms&conditions" /> <span>{dictionary["payoutTCPdf"]}</span>
                        </div>
                    </RetainQueryLink>
                </div>

                <div className={`${styles.otherChargeAccBox}`}>
                    <div className={`${styles.accHeadBox}`}>
                        <div className={`${styles.lhsWrap}`}>
                            <div className={`${styles.title}`}>{dictionary["otherCharges"]}</div>
                            <span>{dictionary["otherCharges1"]}</span>
                        </div>
                        <div className={`${styles.accordingBtn} ${isVisible ? styles["active"] : styles[""]}`} onClick={toggleVisibility}>
                            {isVisible ? (
                                <><span>View Less</span> <Image src="/down-arrow2.webp" alt='View Less' width={15} height={15} /></>
                            ) : (
                                <><span>View More</span> <Image src="/down-arrow2.webp" alt='View More' width={15} height={15} /></>
                            )}
                        </div>
                    </div>
                    <div className={`${styles.accBodyBox} ${isVisible ? styles["active"] : styles[""]}`}>
                        <ul>
                            <li dangerouslySetInnerHTML={
                                { __html: dictionary["quarterlyCharges"] }
                            }>

                            </li>
                            <li dangerouslySetInnerHTML={
                                { __html: dictionary["offMarketCharges"] }
                            }>

                            </li>
                            <li dangerouslySetInnerHTML={
                                { __html: dictionary["corporateAction"] }
                            }>

                            </li>
                            <li dangerouslySetInnerHTML={
                                { __html: dictionary["physicalCMR"] }
                            }>

                            </li>
                            <li dangerouslySetInnerHTML={
                                { __html: dictionary["paymentGateway"] }
                            }>

                            </li>
                            <li dangerouslySetInnerHTML={
                                { __html: dictionary["physicalStatement"] }
                            }>

                            </li>
                            <li dangerouslySetInnerHTML={
                                { __html: dictionary["dematCert"] }
                            }>

                            </li>
                            <li dangerouslySetInnerHTML={
                                { __html: dictionary["rematCharges"] }
                            }>

                            </li>
                            <li dangerouslySetInnerHTML={
                                { __html: dictionary["failedInstruction"] }
                            }>

                            </li>
                            <li dangerouslySetInnerHTML={
                                { __html: dictionary["reactivation"] }
                            }>

                            </li>
                            <li dangerouslySetInnerHTML={
                                { __html: dictionary["modCharges"] }
                            }>

                            </li>
                            <li dangerouslySetInnerHTML={
                                { __html: dictionary["acClosure"] }
                            }>

                            </li>
                            <li dangerouslySetInnerHTML={
                                { __html: dictionary["gst"] }
                            }>

                            </li>
                            <li dangerouslySetInnerHTML={
                                { __html: dictionary["physicalDelivery"] }
                            }>

                            </li>
                            <li dangerouslySetInnerHTML={
                                { __html: dictionary["transactionCharges"] }
                            }>

                            </li>
                            <li dangerouslySetInnerHTML={
                                { __html: dictionary["otherCharge"] }
                            }>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ViewDetailedPricesSec
