import React from 'react'
import styles from './AccountOfDisciplinaryReasonsSec.module.scss'

function AccountOfDisciplinaryReasonsSec() {
    return (
        <section className={`${styles.accountOfDisciplinaryReasonsSec}`}>
            <div className={`${styles.maContainer}`}>
                <h2 className={`${styles.secTitle} `}>Account of Disciplinary Reasons</h2>

                <div className={`${styles.tableWraper}`}>
                    <div className={`${styles.tableTopWrap}`}>
                        <div className={`${styles.showSelectEntriesWrap}`}>Show <select name="apDataTableLength"> <option value="10">10</option> <option value="25">25</option> <option value="50">50</option> <option value="100">100</option> </select> Entries</div>
                        <div className={`${styles.searchBoxWrap}`}>Search:<input type="search" className={`${styles.searchBox}`} placeholder="" /></div>
                    </div>

                    <div className={`${styles.tableHolder}`}>
                        <table className={`${styles.table}`} cellPadding={0} cellSpacing={0} width="100%">
                            <thead>
                                <tr>
                                    <th>Sr.No</th>
                                    <th>Authorised Person's Name</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Reason</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={5}>Partner Details not available</td>
                                </tr>
                                {/* <tr>
                                    <td>12345</td>
                                    <td>12345</td>
                                    <td>12345</td>
                                    <td>12345</td>
                                    <td>12345</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>

                    <div className={`${styles.tableBtmWrap}`}>
                        <div className={`${styles.showingDataLbl}`}>Showing 1 to 3 of 3 entries</div>
                        <div className={`${styles.paginationStrip}`}>
                            <button className={`${styles.btn} ${styles.disabled}`}>Previous</button>
                            <div className={`${styles.pages}`}>
                                <a href="" className={`${styles.page}`}>1</a>
                                <a href="" className={`${styles.page}`}>2</a>
                                <a href="" className={`${styles.page} ${styles.active}`}>3</a>
                                <a href="" className={`${styles.page}`}>4</a>
                                <a href="" className={`${styles.page}`}>5</a>
                            </div>
                            <button className={`${styles.btn}`}>Next</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AccountOfDisciplinaryReasonsSec
