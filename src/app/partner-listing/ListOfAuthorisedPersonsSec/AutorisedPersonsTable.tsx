"use client"

import withCustomScroll from '@/components/withCustomScroll/withCustomScroll'
import styles from './ListOfAuthorisedPersonsSec.module.scss'

const AuthorisedPersonsTable = withCustomScroll((props: Record<string, unknown>) => {
    const { entries, data, page, setPage } = props as any;

    return (
        <>
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
                        {data ? data?.[0].slice((entries * (page - 1)), (page * entries)).map((d: any) => (
                            <tr key={d.id}>
                                <td>{d.id}</td>
                                <td>{d.authPersonName}</td>
                                <td>{d.NSERegNo}</td>
                                <td>{d.BSERegNo}</td>
                                <td>{d.constitution}</td>
                                <td>{d.status}</td>
                                <td>{d.address}</td>
                                <td>{d.city}</td>
                                <td>{d.state}</td>
                                <td>{d.pincode}</td>
                                <td>{d.terminalAlloted}</td>
                                <td>{d.noOfTerminalAlloted}</td>
                            </tr>
                        )) : <tr>
                            <td colSpan={12}>Partner Details not available</td>
                        </tr>}
                    </tbody>
                </table>
            </div>
            <div className={`${styles.tableBtmWrap}`}>
                <div className={`${styles.showingDataLbl}`}>Showing {((page - 1) * entries) + 1} to {page * entries} of {data?.[0].length} entries</div>
                <div className={`${styles.paginationStrip}`}>
                    <button className={`${styles.btn} ${styles.disabled}`}>Previous</button>
                    <div className={`${styles.pages}`}>
                        {Array.from({ length: Math.ceil(data?.[0].length / entries) }, (_, i) => i + 1).map(i =>
                            <span key={i} onClick={() => setPage(i)} className={`${styles.page} ${i === page && styles.active}`}>{i}</span>
                        )
                        }
                    </div>
                    <button className={`${styles.btn}`}>Next</button>
                </div>
            </div>
        </>
    )
})

export default AuthorisedPersonsTable;