"use client"

import React from 'react'
import styles from './ListOfAuthorisedPersonsSec.module.scss'
import { nunito } from '@/styles/fonts'
import withCustomScroll from '@/components/withCustomScroll/withCustomScroll'

const TableWithCustomScroll = withCustomScroll((props: Record<string, unknown>) => (
    <div
        {...props}
        className={`${props.className} ${styles.tableHolder} `}
    >
        <table className={`${styles.table} `} cellPadding={0} cellSpacing={0} width="100%">
            <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>Name</th>
                    <th>Registration&nbsp;Number&nbsp;NSE</th>
                    <th>Registration&nbsp;Number&nbsp;BSE</th>
                    <th>Constitution</th>
                    <th>Status</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Pin&nbsp;Code</th>
                    <th>Terminal&nbsp;Allotted (Y/N)</th>
                    <th>No. of&nbsp;Terminals</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>NITESH RADHESHYAM TAWARI</td>
                    <td>AP3022000031</td>
                    <td>AP01668101157117</td>
                    <td>Individual</td>
                    <td></td>
                    <td>Deshpande Garden society Flat No 302 Ganga building Narhe Road pune PUNE</td>
                    <td>PUNE</td>
                    <td>Maharashtra</td>
                    <td>411041</td>
                    <td>N</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>PRIYA  NANDI</td>
                    <td></td>
                    <td></td>
                    <td>Individual</td>
                    <td></td>
                    <td>a1, bLK-c malancha appartment 251 pulin avenue, airport 2.5 nO. gate, kolkata  NORTH 24 PARGANAS</td>
                    <td>NORTH 24 PARGANAS</td>
                    <td>West Bengal</td>
                    <td>700081</td>
                    <td>N</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>SHAILY SHAILESH SANDEL</td>
                    <td></td>
                    <td></td>
                    <td>Individual</td>
                    <td></td>
                    <td>F.N 03, DEOGHAR APPARTMENT AMRAVATI ROAD,NEAR HIMALAYA VALLEY HINDUSTAN COLONY,UNIVERSITY CAMPUS NAG</td>
                    <td>NAGPUR</td>
                    <td>Maharashtra</td>
                    <td>440033</td>
                    <td>N</td>
                    <td>0</td>
                </tr>
            </tbody>
        </table>
    </div>
))

function ListOfAuthorisedPersonsSec() {
    return (
        <section className={`${styles.listOfAuthorisedPersonsSec} `}>
            <div className={`${styles.maContainer} `}>
                <h1 className={`${styles.secTitle} ${nunito.className} `}>List Of Authorised Persons (AP)</h1>

                <div className={`${styles.tableWraper} `}>
                    <div className={`${styles.tableTopWrap} `}>
                        <div className={`${styles.showSelectEntriesWrap} `}>Show<select name="apDataTableLength"> <option value="10">10</option> <option value="25">25</option> <option value="50">50</option> <option value="100">100</option> </select>Entries</div>
                        <div className={`${styles.searchBoxWrap} `}>Search:<input type="search" className={`${styles.searchBox} `} placeholder="" /></div>
                    </div>

                    {/* <div
                        className={`${ styles.tableHolder } `}
                    >
                        <table className={`${ styles.table } `} cellPadding={0} cellSpacing={0} width="100%">
                            <thead>
                                <tr>
                                    <th>Sr.No</th>
                                    <th>Name</th>
                                    <th>Registration&nbsp;Number&nbsp;NSE</th>
                                    <th>Registration&nbsp;Number&nbsp;BSE</th>
                                    <th>Constitution</th>
                                    <th>Status</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Pin&nbsp;Code</th>
                                    <th>Terminal&nbsp;Allotted (Y/N)</th>
                                    <th>No. of&nbsp;Terminals</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>NITESH RADHESHYAM TAWARI</td>
                                    <td>AP3022000031</td>
                                    <td>AP01668101157117</td>
                                    <td>Individual</td>
                                    <td></td>
                                    <td>Deshpande Garden society Flat No 302 Ganga building Narhe Road pune PUNE</td>
                                    <td>PUNE</td>
                                    <td>Maharashtra</td>
                                    <td>411041</td>
                                    <td>N</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>PRIYA  NANDI</td>
                                    <td></td>
                                    <td></td>
                                    <td>Individual</td>
                                    <td></td>
                                    <td>a1, bLK-c malancha appartment 251 pulin avenue, airport 2.5 nO. gate, kolkata  NORTH 24 PARGANAS</td>
                                    <td>NORTH 24 PARGANAS</td>
                                    <td>West Bengal</td>
                                    <td>700081</td>
                                    <td>N</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>SHAILY SHAILESH SANDEL</td>
                                    <td></td>
                                    <td></td>
                                    <td>Individual</td>
                                    <td></td>
                                    <td>F.N 03, DEOGHAR APPARTMENT AMRAVATI ROAD,NEAR HIMALAYA VALLEY HINDUSTAN COLONY,UNIVERSITY CAMPUS NAG</td>
                                    <td>NAGPUR</td>
                                    <td>Maharashtra</td>
                                    <td>440033</td>
                                    <td>N</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}

                    <TableWithCustomScroll />

                    <div className={`${styles.tableBtmWrap} `}>
                        <div className={`${styles.showingDataLbl} `}>Showing 1 to 3 of 3 entries</div>
                        <div className={`${styles.paginationStrip} `}>
                            <button className={`${styles.btn} ${styles.disabled} `}>Previous</button>
                            <div className={`${styles.pages} `}>
                                <a href="" className={`${styles.page} `}>1</a>
                                <a href="" className={`${styles.page} `}>2</a>
                                <a href="" className={`${styles.page} ${styles.active} `}>3</a>
                                <a href="" className={`${styles.page} `}>4</a>
                                <a href="" className={`${styles.page} `}>5</a>
                            </div>
                            <button className={`${styles.btn} `}>Next</button>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default ListOfAuthorisedPersonsSec
