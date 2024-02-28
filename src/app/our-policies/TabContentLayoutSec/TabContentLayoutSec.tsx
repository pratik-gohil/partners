import React from 'react'
import styles from './TabContentLayoutSec.module.scss'

function TabContentLayoutSec() {
    return (
        <section className={`${styles.tabContentLayoutSec}`}>
            <div className={`${styles.maContainer}`}>
                <h2 className={`${styles.secTitle} ${nunito.className}`}>Tab Content will be here</h2>

            </div>
        </section>
    )
}

export default TabContentLayoutSec
