import React from 'react'
import styles from './AccountOfDisciplinaryReasonsSec.module.scss'
import getPartnerList from '@/lib/http/getPartnerList';
import DataTable from '@/app/[lang]/partner-listing/DataTable/DataTable';

async function AccountOfDisciplinaryReasonsSec() {
    const data = await getPartnerList()
    const dataJSON = Object.keys(data.data).reduce((a, f) => ({ ...a, [f]: data.data[f].map((d: any) => d.reduce((a: any, n: any, i: any) => ({ ...a, [data.keys[i]]: n, id: i }), {})) }), {});

    return (
        <section className={`${styles.listOfAuthorisedPersonsSec}`}>
            <div className={`${styles.maContainer}`}>
                <h1 className={`${styles.secTitle} `}>List Of Authorised Persons (AP)</h1>
                <div className={`${styles.tableWraper}`}>
                    {/* @ts-ignore */}
                    <DataTable data={dataJSON?.deactivePartnerInfo} />
                </div>

            </div>
        </section >
    )
}

export default AccountOfDisciplinaryReasonsSec
