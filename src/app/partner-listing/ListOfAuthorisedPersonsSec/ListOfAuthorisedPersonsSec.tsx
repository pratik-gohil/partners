"use client"
import React, { useEffect, useState } from 'react'
import styles from './ListOfAuthorisedPersonsSec.module.scss'
import AuthorisedPersonsTable from './AutorisedPersonsTable';
import getPartnerList from '@/lib/http/getPartnerList';

function ListOfAuthorisedPersonsSec() {
    const [page, setPage] = useState(1);
    const [entries, setEntries] = useState(10);
    const [data, setData] = useState<any[]>()
    const [search, setSearch] = useState("");

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
        <section className={`${styles.listOfAuthorisedPersonsSec}`}>
            <div className={`${styles.maContainer}`}>
                <h1 className={`${styles.secTitle}  `}>List Of Authorised Persons (AP)</h1>

                <div className={`${styles.tableWraper}`}>
                    <div className={`${styles.tableTopWrap}`}>
                        <div className={`${styles.showSelectEntriesWrap}`}><label htmlFor="showList">Show</label><select id="showList" value={entries} onChange={(e) => setEntries(Number(e.target.value))} name="apDataTableLength" > <option value={10}>10</option> <option value={25}>25</option> <option value={50}>50</option> <option value={100}>100</option> </select>Entries</div>
                        <div className={`${styles.searchBoxWrap}`}><label htmlFor="Search">Search:</label><input id="Search" type="search" className={`${styles.searchBox}`} placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Search" /></div>
                    </div>

                    <AuthorisedPersonsTable entries={entries} setPage={setPage} page={page} data={data?.filter(d => d.name.includes(search))} />
                </div>

            </div>
        </section >
    )
}

export default ListOfAuthorisedPersonsSec
