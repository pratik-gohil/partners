"use client";
import React, { useState } from 'react'
import styles from './RegOnboardChargesSec.module.scss'
import Image from 'next/image';

function RegOnboardChargesSec({ dictionary }: any) {
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
                <h2 className={`${styles.secTitle} `} id='partnerRegistration' dangerouslySetInnerHTML={
                                       { __html: dictionary["apRegistration"]}
                                    }></h2>
                <div className={`${styles.captionWrap}`} dangerouslySetInnerHTML={
                                       { __html: dictionary["captionWrap"]}
                                    }>
                    
                </div>
                <div className={`${styles.authorisedPartneUlBlock}`} dangerouslySetInnerHTML={
                                       { __html: dictionary["authorisedPartneUlBlock"]}
                                    }>
                    
                </div>
                <div className={`${styles.otherChargeAccBox}`}>
                    <div className={`${styles.accHeadBox}`}>
                        <div className={`${styles.lhsWrap}`}>
                            <div className={`${styles.title}`}>{dictionary["apRegistrationTitle"]}</div>
                        </div>
                        <div className={`${styles.accordingBtn} ${isVisible1 ? styles["active"] : styles[""]}`} onClick={toggleVisibility1}>
                            {isVisible1 ? (
                                <><span>View Less</span> <Image width={15} height={15} src="/down-arrow2.webp" alt='View Less' /></>
                            ) : (
                                <><span>View More</span> <Image width={15} height={15} src="/down-arrow2.webp" alt='View More' /></>
                            )}
                        </div>
                    </div>
                    <div className={`${styles.accBodyBox} ${isVisible1 ? styles["active"] : styles[""]}`}>
                        <div className={`${styles.pricingTableHolder}`}>
                            <table width="100%"> <tbody>
                                <tr dangerouslySetInnerHTML={
                                       { __html: dictionary["apTableHeading"]}
                                    }>
                                    
                                </tr>
                                <tr dangerouslySetInnerHTML={
                                       { __html: dictionary["apTable1"]}
                                    }>
                                
                                </tr>
                                <tr dangerouslySetInnerHTML={
                                       { __html: dictionary["apTable2"]}
                                    }>
                                    
                                </tr>
                                <tr dangerouslySetInnerHTML={
                                       { __html: dictionary["apTable3"]}
                                    }>
                                    
                                </tr>
                                <tr dangerouslySetInnerHTML={
                                       { __html: dictionary["apTable4"]}
                                    }>
                                   
                                </tr>
                                <tr dangerouslySetInnerHTML={
                                       { __html: dictionary["apTable5"]}
                                    }>
                                    
                                </tr>
                                <tr dangerouslySetInnerHTML={
                                       { __html: dictionary["apTable6"]}
                                    }>
                                    
                                </tr>
                            </tbody></table>
                        </div>
                    </div>
                </div>
                <div className={`${styles.authorisedPartneUlBlock}`}>
                    <ul>
                        <li>{dictionary["authorisedPartneUlBlock1"]}</li>
                    </ul>
                </div>

                <div className={`${styles.otherChargeAccBox}`}>
                    <div className={`${styles.accHeadBox}`}>
                        <div className={`${styles.lhsWrap}`}>
                            <div className={`${styles.title}`}>{dictionary["apAnnual"]}</div>
                        </div>
                        <div className={`${styles.accordingBtn} ${isVisible2 ? styles["active"] : styles[""]}`} onClick={toggleVisibility2}>
                            {isVisible2 ? (
                                <><span>View Less</span> <Image width={15} height={15} src="/down-arrow2.webp" alt='View Less' /></>
                            ) : (
                                <><span>View More</span> <Image width={15} height={15} src="/down-arrow2.webp" alt='View More' /></>
                            )}
                        </div>
                    </div>
                    <div className={`${styles.accBodyBox} ${isVisible2 ? styles["active"] : styles[""]}`}>
                        <div className={`${styles.pricingTableHolder}`}>
                            <table width="100%"> <tbody>
                                <tr dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingTableHeading"]}
                                    }>
                                    
                                </tr>
                                <tr dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingT1"]}
                                    }>
                                    
                                </tr>
                                <tr dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingT2"]}
                                    }>
                                    
                                </tr>
                                <tr dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingT3"]}
                                    }>
                                    
                                </tr>
                            </tbody></table>
                        </div>
                    </div>
                </div>
                <div className={`${styles.pricingNoteBlock}`}>
                    <b>{dictionary["pricingNoteBlock"]}</b>
                    <ul dangerouslySetInnerHTML={
                                       { __html: dictionary["pricingNoteList"]}
                                    }>
                        
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default RegOnboardChargesSec
