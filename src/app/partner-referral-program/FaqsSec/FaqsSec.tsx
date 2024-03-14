"use client";
import React, { useState } from 'react';
import styles from "./FaqsSec.module.scss";
import accordionData from './accordionData.js';
import Accordian from '@/components/Accordian/Accordian';
import RetainQueryLink from '@/components/RetainQueryLink/RetainQueryLink';

const FaqsSec = () => {
    const [expanded, setExpanded] = useState<number | null>(0);

    return (
        <>
            <section className={`${styles.faqsSec}`}>
                <div className={`${styles.maContainer}`}>
                    <h2 className={`${styles.secTitle} `}>Refer and Earn - Frequently Asked Questions</h2>
                    <Accordian items={accordionData.slice(0, expanded ? accordionData.length : 6)} active={expanded} setActive={setExpanded} />
                    <div className={`${styles.tcFaqendLine}`}>
                        <sup>*</sup>&nbsp;Click here to view detailed <RetainQueryLink href="/referral-terms-and-conditions#partnerReferralTC">Terms and Conditions</RetainQueryLink>
                    </div>

                </div>
            </section>
        </>
    )
}

export default FaqsSec;