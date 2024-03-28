"use client";
import React, { useState } from 'react';
import styles from "./FaqsSec.module.scss";
import accordionData from './accordionData.js';
import accordionDataHi from './accordionDataHindi.js';
import accordionDataGu from './accordionDataGujarati.js';
import DownCaretSVG from '@/components/svgs/DownCaretSVG';;
import Accordian from '@/components/Accordian/Accordian';

const FaqsSec = ({dictionary, lang}: any) => {
    const [expanded, setExpanded] = useState<number | null>(0);
    const [showMore, setShowMore] = useState(false);

    return (
        
        <>
            {
                lang === "en"?
                <section className={`${styles.faqsSec}`}>
                <div className={`${styles.maContainer}`}>
                    <h2 className={`${styles.secTitle} `}>{dictionary["faqTitle"]}</h2>
                    <Accordian items={accordionData.slice(0, showMore ? accordionData.length : 5)} active={expanded} setActive={setExpanded} />
                    <div className={`${styles.viewAllBtnWrap}`}>
                        <button className={`${styles.viewAllBtn}`} onClick={() => {
                            setShowMore(!showMore)
                        }} >View {showMore ? "Less" : "All"} <div style={{
                            display: 'inline-block',
                            ...(showMore && { transform: 'rotate(180deg)' })
                        }}><DownCaretSVG /></div> </button>
                    </div>
                </div>
            </section>:
            // <>Hindi</>
            lang === "hi" ?
            <section className={`${styles.faqsSec}`}>
                <div className={`${styles.maContainer}`}>
                    <h2 className={`${styles.secTitle} `}>{dictionary["faqTitle"]}</h2>
                    <Accordian items={accordionDataHi.slice(0, showMore ? accordionDataHi.length : 5)} active={expanded} setActive={setExpanded} />
                    <div className={`${styles.viewAllBtnWrap}`}>
                        <button className={`${styles.viewAllBtn}`} onClick={() => {
                            setShowMore(!showMore)
                        }} >View {showMore ? "Less" : "All"} <div style={{
                            display: 'inline-block',
                            ...(showMore && { transform: 'rotate(180deg)' })
                        }}><DownCaretSVG /></div> </button>
                    </div>
                </div>
            </section>:
            lang === "gu" && 
            <section className={`${styles.faqsSec}`}>
                <div className={`${styles.maContainer}`}>
                    <h2 className={`${styles.secTitle} `}>{dictionary["faqTitle"]}</h2>
                    <Accordian items={accordionDataGu.slice(0, showMore ? accordionDataGu.length : 5)} active={expanded} setActive={setExpanded} />
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
            
            }
            
        </>
    )
}

export default FaqsSec;
