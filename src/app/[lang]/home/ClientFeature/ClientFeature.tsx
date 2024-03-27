'use client'
import React, { useState } from 'react'
import styles from './clientfeature.module.scss'

import { DeferedImage } from '@/components/DeferImage'



export default function ClientFeature({dictionary}: any) {
    const [activeTab, setActiveTab] = useState(1)

    const clientTabs = [
        {
            id: 1,
            name: dictionary["clientTitle1"],
            imageURL: '/sidemenu.webp'
        },
        {
            id: 2,
            name: dictionary["clientTitle2"],
            imageURL: '/home_dashboard.webp'
        },
        {
            id: 3,
            name: dictionary["clientTitle3"],
            imageURL: '/mobile-left-img3.webp'
        },
        {
            id: 4,
            name: dictionary["clientTitle4"],
            imageURL: '/fund-transfer.webp'
        },
        {
            id: 5,
            name: dictionary["clientTitle5"],
            imageURL: '/mobile-left-img5.webp'
        },
        {
            id: 6,
            name: dictionary["clientTitle6"],
            imageURL: '/mobile-left-img6.webp'
        },
        {
            id: 7,
            name: dictionary["clientTitle7"],
            imageURL: '/detail-order-form.webp'
        }
    ]

    return (
        <>
            <section className={styles["whatsInitClientsSec"]}>
                <div className={styles["maContainer"]}>
                    <h2 className={styles["secTitle"]} dangerouslySetInnerHTML={
                                       { __html: dictionary["clientTitle"]}
                                    }></h2>

                    <div className={styles["technolbar-ta"]}>
                        <div className={styles["tab-content"]}>
                            <div id="technology1" className={styles["tab-pane active"]}>
                                <div className={styles["tab-run-business-img"]}>
                                    <DeferedImage src={clientTabs.find(tab => tab.id === activeTab)!.imageURL} />
                                </div>
                            </div>
                        </div>

                        <ul className={`${styles["nav"]} ${styles["nav-tabs"]}`} role="tablist">
                            {
                                clientTabs.map((tab, i) => {
                                    return (
                                        <li key={i} className={styles["nav-item"]} role="tab" onClick={() => setActiveTab(tab.id)}>
                                            <div className={`${styles["nav-link"]} ${tab.id == activeTab ? `${styles['active']}` : ''}`}
                                                data-toggle="tab">
                                                <i>
                                                    {tab.id}
                                                </i>
                                                <span></span>
                                                {tab.name}
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
