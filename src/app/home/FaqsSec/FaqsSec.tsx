"use client";
import React, { useState } from 'react';
import styles from "./FaqsSec.module.scss";
import accordionData from './accordionData.js';


const FaqsSec = () => {

    const [expanded, setExpanded] = useState(0);
    const handleChange = (panel: number) => {
        setExpanded(expanded !== panel ? panel : 0);
    };

    return (
        <>
            <section className={`${styles.faqsSec}`}>
                <div className={`${styles.maContainer}`}>
                    <h2 className={`${styles.secTitle}`}>Frequently Asked Questions</h2>


                    <div className={`${styles.accordionHolder}`}>
                        {accordionData.map((v, i) => {
                            return (<div className={styles["accCard"]} key={i}>
                                <div className={`${styles["accTitle"]} ${(expanded === i && styles["active"])}`} onClick={() => handleChange(i)}>
                                    <h3 className={`${styles.queryTxt}`}>{v.query}</h3>
                                </div>
                                <div className={`${styles["accPanel"]} ${(expanded === i ? styles["expanded"] : styles["collapsed"])}`}>
                                    {v.answer}
                                {
                                    v.bulletPoints && (
                                        <ul>
                                            {v.bulletPoints.map((p, i) => {
                                                return <li key={i}> <b>First Name :</b>  {p} </li>
                                            })}
                                        </ul>
                                    )
                                    }

                                    {
                                        v.tableData && (
                                            <div className="tablemain-data" style={{ border: '1px solid #C4C4C4' }}>
                                            <table width="100%">
                                                <tbody>
                                                    <tr>
                                                        <th colSpan={6}>AP registration charges</th>
                                                    </tr>
                                                    <tr>
                                                        <td>Exchange</td>
                                                        <td>Segment</td>
                                                        <td>Fee (₹)</td>
                                                        <td>GST rate</td>
                                                        <td>GST amount</td>
                                                        <td>Total charges (₹)</td>
                                                    </tr>
                                                    {v.tableData.map((row, index) => (
                                                        <tr key={index}>
                                                            <td>{row.exchange}</td>
                                                            <td>{row.segment}</td>
                                                            <td>{row.fee}</td>
                                                            <td>{row.gstRate}</td>
                                                            <td>{row.gstAmount}</td>
                                                            <td>{row.totalCharges}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        )
                                    }
                                    

                                    

                                </div>
                            </div>);


                        })}
                    </div>


                    <div className={`${styles.viewAllBtnWrap}`}>
                        <button className={`${styles.viewAllBtn}`}>View All <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.9586 4.66202C11.8805 4.5857 11.7756 4.54297 11.6664 4.54297C11.5571 4.54297 11.4522 4.5857 11.3741 4.66202L6.99998 8.92589L2.62673 4.66201C2.5486 4.5857 2.44371 4.54297 2.33448 4.54297C2.22526 4.54297 2.12037 4.5857 2.04223 4.66201C2.00413 4.69911 1.97385 4.74346 1.95317 4.79246C1.9325 4.84145 1.92184 4.89409 1.92184 4.94726C1.92184 5.00044 1.9325 5.05308 1.95317 5.10207C1.97385 5.15106 2.00413 5.19542 2.04223 5.23251L6.69461 9.76676C6.77631 9.8464 6.88589 9.89097 6.99998 9.89097C7.11408 9.89097 7.22366 9.8464 7.30536 9.76676L11.9577 5.23252C11.9958 5.19542 12.0261 5.15107 12.0468 5.10207C12.0675 5.05308 12.0781 5.00044 12.0781 4.94726C12.0781 4.89409 12.0675 4.84145 12.0468 4.79246C12.0261 4.74347 11.9958 4.69911 11.9577 4.66202L11.9586 4.66202Z" fill="#FF7518" /> </svg> </button>
                    </div>




                </div>
            </section>
        </>
    )
}

export default FaqsSec;

