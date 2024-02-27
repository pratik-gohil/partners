"use client";
import React, { useState } from 'react';
import styles from "./FaqsSec.module.scss";
import accordionData from './accordionData.js';
import DownCaretSVG from '@/components/svgs/DownCaretSVG';

const FaqsSec = () => {
    const [expanded, setExpanded] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const handleChange = (panel: number) => {
        setExpanded(expanded !== panel ? panel : 0);
    };

    return (
        <>
            <section className={`${styles.faqsSec}`}>
                <div className={`${styles.maContainer}`}>
                    <h2 className={`${styles.secTitle}`}>Frequently Asked Questions</h2>
                    <div className={`${styles.accordionHolder}`}>
                        {accordionData.slice(0, showMore ? accordionData.length : 5).map((v, i) => {
                            return (<div className={styles["accCard"]} key={i}>
                                <div className={`${styles["accTitle"]} ${(expanded === i && styles["active"])}`} onClick={() => handleChange(i)}>
                                    <h3 className={`${styles.queryTxt}`}>{v.query}</h3>
                                </div>
                                <div className={`${styles["accPanel"]} ${(expanded === i ? styles["expanded"] : styles["collapsed"])}`}>  
                                    {
                                        v.answer
                                    }
                                    {
                                        v.component && ( v.component )
                                    }  
                                </div>
                            </div>); 
                        })}
                    </div>
                    <div className={`${styles.viewAllBtnWrap}`}>
                        <button className={`${styles.viewAllBtn}`} onClick={() => {
                            setShowMore(!showMore)
                        }} >View {showMore ? "Less" : "All"} <div style={{
                            display: 'inline-block',
                            ...(showMore && { transform: 'rotate(180deg)' })
                        }}><DownCaretSVG /></div> </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FaqsSec;

