"use client"
import withCustomScroll from '@/components/withCustomScroll/withCustomScroll'
import styles from './DataTable.module.scss'
import { useEffect, useState } from 'react';

const DataTable = withCustomScroll((props: Record<string, unknown>) => {
    const { data } = props as any;
    const [page, setPage] = useState(1);
    const [entries, setEntries] = useState(10);
    const [search, setSearch] = useState("");

    const [visibleData, setVisibleData] = useState(data);

    useEffect(() => {
        setVisibleData(data?.filter((k: (string | number)[]) => Object.values(k).filter(l => { console.log(l); return l.toString().includes(search) }).length > 0))
    }, [data, search])

    return (
        <>
            <div className={`${styles.tableTopWrap}`}>
                <div className={`${styles.showSelectEntriesWrap}`}><label htmlFor="showList">Show</label><select id="showList" value={entries} onChange={(e) => setEntries(Number(e.target.value))} name="apDataTableLength" > <option value={10}>10</option> <option value={25}>25</option> <option value={50}>50</option> <option value={100}>100</option> </select>Entries</div>
                <div className={`${styles.searchBoxWrap}`}><label htmlFor="Search">Search:</label><input id="Search" type="search" className={`${styles.searchBox}`} placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Search" /></div>
            </div>

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
                        {data ? visibleData?.slice((entries * (page - 1)), (page * entries)).map((d: any) => (
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
                <div className={`${styles.showingDataLbl}`}>Showing {((page - 1) * entries) + 1} to {page * entries} of {visibleData?.length} entries</div>
                <div className={`${styles.paginationStrip}`}>
                    <button className={`${styles.btn} ${styles.disabled}`}>Previous</button>
                    <div className={`${styles.pages}`}>
                        {Array.from({ length: Math.ceil(visibleData?.length / entries) }, (_, i) => i + 1).map(i =>
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

export default DataTable;