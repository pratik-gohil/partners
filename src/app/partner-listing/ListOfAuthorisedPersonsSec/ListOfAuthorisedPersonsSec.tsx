"use client"
import React, { useEffect, useState } from 'react'
import styles from './ListOfAuthorisedPersonsSec.module.scss'
import AuthorisedPersonsTable from './AutorisedPersonsTable';
import getPartnerList from '@/lib/http/getPartnerList';

function ListOfAuthorisedPersonsSec() {
    const [page, setPage] = useState(1);
    const [entries, setEntries] = useState(10);
    const [data, setData] = useState<any[]>()

    useEffect(() => {
        (async () => {
            const res = await getPartnerList();

            const dataJSON = Object.keys(res.data).map(f => res.data[f].map((d: any) => d.reduce((a: any, n: any, i: any) => ({ ...a, [res.keys[i]]: n, id: i }), {})));

            setData(
                dataJSON
            );
        })()
    }, [])

    return (
        <section className={`${styles.listOfAuthorisedPersonsSec} `}>
            <div className={`${styles.maContainer} `}>
                <h1 className={`${styles.secTitle}  `}>List Of Authorised Persons (AP)</h1>

                <div className={`${styles.tableWraper} `}>
                    <div className={`${styles.tableTopWrap} `}>
                        <div className={`${styles.showSelectEntriesWrap} `}>Show<select value={entries} onChange={(e) => setEntries(Number(e.target.value))} name="apDataTableLength" > <option value={10}>10</option> <option value={25}>25</option> <option value={50}>50</option> <option value={100}>100</option> </select>Entries</div>
                        <div className={`${styles.searchBoxWrap} `}>Search:<input type="search" className={`${styles.searchBox} `} placeholder="" /></div>
                    </div>

                    <AuthorisedPersonsTable entries={entries} page={page} data={data} />

                    <div className={`${styles.tableBtmWrap} `}>
                        <div className={`${styles.showingDataLbl} `}>Showing {((page - 1) * entries) + 1} to {page * entries} of {data?.[0].length} entries</div>
                        <div className={`${styles.paginationStrip} `}>
                            <button className={`${styles.btn} ${styles.disabled} `}>Previous</button>
                            <div className={`${styles.pages} `}>
                                {Array.from({ length: Math.ceil(data?.[0].length / entries) }, (_, i) => i + 1).map(i =>
                                    <span key={i} onClick={() => setPage(i)} className={`${styles.page} ${i === page && styles.active}`}>{i}</span>
                                )
                                }
                            </div>
                            <button className={`${styles.btn}`}>Next</button>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default ListOfAuthorisedPersonsSec
