'use client'
import React, { useState } from 'react'
import styles from './advantage.module.scss'
import { DeferedImage } from '@/components/DeferImage'

const interActiveTabs = [
    {
        id: 1,
        name: 'Single integrated dashboard',
        imageURL: '/single-integrated-dashboard.webp'
    },
    {
        id: 2,
        name: 'Onboard your clients in a few clicks',
        imageURL: '/onboard-in-few-clicks.webp'
    },
    {
        id: 3,
        name: `Customise brokerage plans as per guide client's trading behaviour`,
        imageURL: '/customize-plan-img.webp'
    },
    {
        id: 4,
        name: 'View & monitor client&apos;s portfolio and LIVE positions',
        imageURL: '/view-portfolio-img.webp'
    },
    {
        id: 5,
        name: 'Access to smart reports',
        imageURL: '/smart-reports.webp'
    },
    {
        id: 6,
        name: 'Dedicated BA excellence desk - online and offline support',
        imageURL: '/dedicated-BA.webp'
    }
]

function Advantage() {
    const [activeTab, setActiveTab] = useState(1)


    return (
        <>
            <section className={styles["maAdvantageSec"]}>
                <div className={styles["maContainer"]}>
                    <h2 className={styles["secTitle"]}><span>The &apos;Mirae Asset&apos;</span>advantage</h2>
                    <p className={styles["captionTxt"]}>Partnering with us has a lot of advantages for your business. See, what&apos;s in it for you. </p>

                    <div className={styles["advantages-numbar"]}>
                        <h3 className={styles["advantages-head"]}>
                            <span>1</span> <b>Customise pricing for your clients</b>
                        </h3>
                        <p className={styles["advantages-prag"]}>Create customised brokerage plans as a one-time activity, for all future onboarding of your clients. Choose from <span> Discount, Traditional </span> or<span> Hybrid </span> models. Customise<span> interest rates, DP charges </span>
                            and more, for your clients&apos; varied needs and maximise your earnings.</p>
                        <h3 className={styles["advantages-head"]}><span>2</span> <b>Run your business through interactive dashboard</b></h3>
                        <div className={styles["advantage-tabmain"]}>
                            <ul className={`${styles["nav"]} ${styles["nav-tabs"]}`} id="myTab" role="tablist">
                                {
                                    interActiveTabs.map((tab, i) => {
                                        return (
                                            <li key={i} className={styles["nav-item"]} role="presentation" onClick={() => setActiveTab(tab.id)}>
                                                <a className={`${styles['nav-link']} ${activeTab === tab.id ? styles['active'] : ''}`} data-toggle="tab"
                                                    role="tab" aria-controls="advantage-tab1" aria-selected="true" >
                                                    <span role="presentation"></span>{tab.name}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className={styles["tab-content"]} id="myTabContent">
                                <div className={styles["tab-pane fade show active"]} id="advantage-tab1" role="tabpanel"
                                    aria-labelledby="advantage1">
                                    <div className={styles["tab-run-business-img"]}>
                                        <DeferedImage src={interActiveTabs.find(tab => tab.id === activeTab)!.imageURL} alt="dashboard" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 className={styles["advantages-head"]}><span>3</span> <b>Onboard your clients in minutes</b></h3>
                        <div className={styles["advantage-onboad"]}>
                            <ul>
                                <li>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_0_839" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                                            <path d="M0 3.8147e-06H40V40H0V3.8147e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_0_839)">
                                            <path d="M35.7031 38.8281H4.29687C2.57102 38.8281 1.17188 37.4291 1.17188 35.7031V16.9531C1.17188 15.2272 2.57102 13.8281 4.29687 13.8281H35.7031C37.429 13.8281 38.8281 15.2272 38.8281 16.9531V35.7031C38.8281 37.4291 37.429 38.8281 35.7031 38.8281Z" stroke="#FF7518" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M22.3438 3.51562C22.3438 4.81 21.2944 5.85938 20 5.85938C18.7056 5.85938 17.6562 4.81 17.6562 3.51562C17.6562 2.22125 18.7056 1.17188 20 1.17188C21.2944 1.17188 22.3438 2.22125 22.3438 3.51562Z" stroke="#FF7518" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9.0625 21.6503V30.8633" stroke="#FF7518" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.5036 26.3281C15.5036 28.9112 14.0699 30.9553 11.7954 30.9949C11.0383 31.0082 9.08148 31.0156 9.08148 31.0156C9.08148 31.0156 9.0693 27.6198 9.0693 26.3178C9.0693 25.2484 9.0625 21.6406 9.0625 21.6406H11.7177C14.2125 21.6406 15.5036 23.745 15.5036 26.3281Z" stroke="#FF7518" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M24.9727 21.6404L27.9673 26.2266L30.9372 21.6641" stroke="#FF7518" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M27.957 31.0156L27.9688 26.2268" stroke="#FF7518" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M20 21.6406V31.0156" stroke="#FF7518" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M18.1892 4.98688L7.5 13.8281" stroke="#FF7518" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M32.5 13.8281L21.8108 4.98688" stroke="#FF7518" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                    <p>
                                        <b>Do it for your client</b>
                                        <span>on their behalf and share link with<br /> them only for documentation</span>
                                    </p>
                                </li>
                                <li>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.11 27.7248L25.1828 27.7661L25.2362 27.7017C26.6036 26.0557 28.664 25.006 30.9653 25.006C35.0706 25.006 38.4108 28.3472 38.4107 32.4537C38.4107 36.5593 35.0705 39.8998 30.9651 39.8998C26.8592 39.8998 23.5186 36.5594 23.5186 32.4537C23.5186 31.5815 23.6706 30.7444 23.9473 29.9661L23.9754 29.887L23.9025 29.8456L14.8901 24.7285L14.8173 24.6872L14.7638 24.7516C13.3966 26.3971 11.3366 27.4465 9.03581 27.4465C4.92934 27.4465 1.58828 24.1061 1.58828 20.0004C1.58828 15.8944 4.92935 12.5541 9.03581 12.5541C11.3366 12.5541 13.3968 13.6034 14.7639 15.2491L14.8174 15.3135L14.8902 15.2722L23.9025 10.1539L23.9754 10.1124L23.9473 10.0334C23.6706 9.25504 23.5188 8.41817 23.5188 7.54612C23.5188 3.44038 26.8593 0.1 30.9653 0.1C35.0706 0.1 38.4108 3.44037 38.4105 7.54629C38.4105 11.6535 35.0703 14.9949 30.9649 14.9949C28.6634 14.9949 26.6027 13.9448 25.2356 12.2983L25.1821 12.2338L25.1092 12.2752L16.0975 17.3933L16.0246 17.4347L16.0527 17.5138C16.3292 18.292 16.4812 19.1287 16.4812 20.0005C16.4812 20.8726 16.3292 21.7093 16.0527 22.4875L16.0246 22.5665L16.0976 22.6079L25.11 27.7248ZM35.9702 7.54612C35.9702 4.78599 33.7251 2.54066 30.9653 2.54066C28.2049 2.54066 25.9594 4.78597 25.9594 7.54612C25.9594 10.3076 28.2049 12.5541 30.9653 12.5541C33.7251 12.5541 35.9702 10.3076 35.9702 7.54612ZM4.02912 20.0005C4.02912 22.7605 6.27517 25.006 9.03599 25.006C11.7956 25.006 14.0407 22.7605 14.0407 20.0005C14.0407 17.2402 11.7958 14.9949 9.03599 14.9949C6.27517 14.9949 4.02912 17.2402 4.02912 20.0005ZM25.9594 32.4539C25.9594 35.2138 28.2049 37.4593 30.9653 37.4593C33.7251 37.4593 35.9702 35.2138 35.9702 32.4539C35.9702 29.6929 33.7251 27.4467 30.9653 27.4467C28.2049 27.4467 25.9594 29.6929 25.9594 32.4539Z" fill="#FF7518" stroke="white" strokeWidth="0.2" />
                                    </svg>

                                    <p>
                                        <b>Share joining link</b>
                                        <span>with your clients and let <br />them do it themselves</span>
                                    </p>
                                </li>
                                <li>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_0_827)">
                                            <path d="M29.0582 17.3156V9.74577C29.0582 9.5291 28.9581 9.32891 28.8165 9.17052L20.3296 0.258484C20.1712 0.0918578 19.946 0 19.7211 0H6.26528C3.78116 0 1.79691 2.02575 1.79691 4.51019V29.9542C1.79691 32.4386 3.78116 34.4311 6.26528 34.4311H16.8866C18.8956 37.7658 22.5473 39.9999 26.7071 39.9999C33.0264 39.9999 38.1869 34.8645 38.1869 28.5369C38.1955 23.0096 34.227 18.3911 29.0582 17.3156ZM20.5548 2.92633L26.2488 8.92028H22.5555C21.4551 8.92028 20.5548 8.01177 20.5548 6.91131V2.92633ZM6.26528 32.7636C4.70645 32.7636 3.46438 31.513 3.46438 29.9542V4.51019C3.46438 2.94281 4.70645 1.66748 6.26528 1.66748H18.8873V6.91131C18.8873 8.93706 20.5298 10.5878 22.5555 10.5878H27.3907V17.0987C27.1408 17.0904 26.9406 17.0654 26.7239 17.0654C23.8144 17.0654 21.1383 18.1827 19.1208 19.9334H8.53304C8.07436 19.9334 7.6993 20.3085 7.6993 20.7669C7.6993 21.2256 8.07436 21.6006 8.53304 21.6006H17.5702C16.9782 22.4344 16.4862 23.2681 16.1029 24.1851H8.53304C8.07436 24.1851 7.6993 24.5602 7.6993 25.0189C7.6993 25.4773 8.07436 25.8526 8.53304 25.8526H15.5609C15.3525 26.6864 15.2442 27.6117 15.2442 28.5369C15.2442 30.0375 15.5359 31.5216 16.0611 32.7722H6.26528V32.7636ZM26.7157 38.341C21.3135 38.341 16.9199 33.9474 16.9199 28.5452C16.9199 23.143 21.3049 18.7494 26.7157 18.7494C32.1261 18.7494 36.5112 23.143 36.5112 28.5452C36.5112 33.9474 32.1179 38.341 26.7157 38.341Z" fill="#FF7518" />
                                            <path d="M8.53299 17.4253H16.9781C17.4368 17.4253 17.8118 17.0499 17.8118 16.5916C17.8118 16.1329 17.4368 15.7578 16.9781 15.7578H8.53299C8.07431 15.7578 7.69925 16.1329 7.69925 16.5916C7.69925 17.0499 8.07431 17.4253 8.53299 17.4253Z" fill="#FF7518" />
                                            <path d="M27.3067 22.3917C27.1483 22.2251 26.9316 22.125 26.6982 22.125C26.4647 22.125 26.248 22.2251 26.0897 22.3917L21.2041 27.6356C20.8873 27.9691 20.9124 28.5026 21.2459 28.8111C21.5795 29.1279 22.1212 29.1028 22.4379 28.7696L25.8895 25.0764V34.18C25.8895 34.6387 26.2645 35.0138 26.7232 35.0138C27.1816 35.0138 27.5569 34.6387 27.5569 34.18V25.0764L30.9831 28.7696C31.1501 28.9444 31.3668 29.0363 31.592 29.0363C31.7919 29.0363 31.9921 28.9612 32.1587 28.8111C32.4922 28.4943 32.5173 27.9691 32.2005 27.6356L27.3067 22.3917Z" fill="#FF7518" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_0_827">
                                                <rect width="40" height="40" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <p>
                                        <b>Upload list for bulk onboarding</b>
                                        <span>and get multiple clients onboarded <br />in one go</span>
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className={styles["listof-advant"]}>
                            <ul>
                                <li>
                                    <h3 className={styles["advantages-head"]}><span>4</span> <b>Global trusted brand</b></h3>
                                    <p className={styles["advantages-prag"]}>with 25+ years of experience across 19 countries</p>
                                </li>
                                <li>
                                    <h3 className={styles["advantages-head"]}><span>5</span> <b>Disruptive Business Model</b></h3>
                                    <p className={styles["advantages-prag"]}>with best brokerages and interest rate plans</p>
                                </li>
                                <li>
                                    <h3 className={styles["advantages-head"]}><span>6</span> <b>Transparent Model</b></h3>
                                    <p className={styles["advantages-prag"]}>
                                        with zero disparity irrespective of your business size
                                    </p>
                                </li>
                                <li>
                                    <h3 className={styles["advantages-head"]}><span>7</span> <b>High payouts</b></h3>
                                    <p className={styles["advantages-prag"]}>across 9 income generating streams</p>
                                </li>
                                <li>
                                    <h3 className={styles["advantages-head"]}><span>8</span> <b>Establish your brand</b></h3>
                                    <p className={styles["advantages-prag"]}>with visibility on clients app and web trading platforms</p>
                                </li>
                                <li>
                                    <h3 className={styles["advantages-head"]}><span>9</span> <b>Dedicated service desk</b></h3>
                                    <p className={styles["advantages-prag"]}>for you</p>
                                </li>
                                <li>
                                    <h3 className={styles["advantages-head"]}><span>10</span> <b>Stable platforms</b></h3>
                                    <p className={styles["advantages-prag"]}>clocking 25 lakh+ trades per day</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Advantage
