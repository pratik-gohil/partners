'use client'
import React, { useState } from 'react'
import './index.scss'
import { defaultOverrides } from 'next/dist/server/require-hook'
import Image from 'next/image'
export default function ClientFeature() {
    const [activeTab, setActiveTab] = useState(1)
    const clientTabs = [
        {
            id: 1,
            name: 'Assurance of brand Mirae Assetdashboard',
            imageURL: 'https://www.miraeassetpartners.com/asset/images/sidemenu.webp'
        },
        {
            id: 2,
            name: 'Range of products on a single platform',
            imageURL: 'https://www.miraeassetpartners.com/asset/images/home_dashboard.webp'
        },
        {
            id: 3,
            name: `1-click order placement across products`,
            imageURL: 'https://www.miraeassetpartners.com/asset/images/mobile-left-img3.webp'
        },
        {
            id: 4,
            name: 'Stable platform for smooth processing',
            imageURL: 'https://www.miraeassetpartners.com/asset/images/fund-transfer.webp'
        },
        {
            id: 5,
            name: 'Fundamental data & technical charts',
            imageURL: 'https://www.miraeassetpartners.com/asset/images/mobile-left-img5.webp'
        },
        {
            id: 6,
            name: 'Single-view screen for complete portfolio',
            imageURL: 'https://www.miraeassetpartners.com/asset/images/mobile-left-img6.webp'
        },
        {
            id: 7,
            name: 'Advanced order placement options',
            imageURL: 'https://www.miraeassetpartners.com/asset/images/detail-order-form.webp'
        }
    ]




    return (
        <section className="whatsInitClientsSec">
            <div className="maContainer">
                <h2 className="secTitle"><span>What&apos;s in it</span>for your clients?</h2>

                <div className="technolbar-ta">
                    <div className="tab-content">
                        <div id="technology1" className="tab-pane active">
                            <div className="tab-run-business-img">
                                <Image width={160} height={360} src={clientTabs.find(tab => tab.id === activeTab)!.imageURL} alt="sidemenu" />
                            </div>
                        </div>
                    </div>

                    <ul className="nav nav-tabs" role="tablist">
                        {
                            clientTabs.map((tab, i) => {
                                return (
                                    <li key={i} className="nav-item" role="presentation" onClick={() => setActiveTab(tab.id)}>
                                        <a className={`nav-link ${tab.id == activeTab ? 'active' : ''}`}
                                            data-toggle="tab" >
                                            <i>
                                                {tab.id}
                                            </i>
                                            <span role="presentation"></span>
                                            {tab.name}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
