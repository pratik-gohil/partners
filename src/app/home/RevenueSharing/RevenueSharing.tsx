import React from 'react'
import styles from './RevenueSharing.module.scss'
import Image from 'next/image'

function RevenueSharing() {
    return (
        <section className={styles["revenueSharingSec"]}>
            <div className={styles["maContainer"]}>
                <h2 className={`${styles["secTitle"]} `}>Unlimited, Unbelievable<span>Revenue Sharing</span></h2>
                <div className={styles["un100BrokerageWrap"]}>
                    <div className={styles["un100BrokBox"]}>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M67.6076 42.6773C67.5794 42.6068 67.537 42.5503 67.4947 42.4939C65.6741 40.2499 62.3858 39.9112 60.1277 41.7318C57.3052 44.0322 53.1983 47.3487 50.531 49.508C48.6539 51.018 46.3394 51.8789 43.9261 51.9636L36.7003 52.2035C36.4039 52.2176 36.1358 52.0624 35.9806 51.8225L35.1761 50.4394C35.035 50.2136 35.0209 49.9455 35.1338 49.7056C35.2467 49.4656 35.4584 49.2963 35.7124 49.2539L43.1781 47.8426C45.8031 47.3487 47.6378 44.8648 47.3414 42.1693C47.0592 39.5725 44.8576 37.6249 42.2608 37.6249C42.1902 37.6249 42.1056 37.6249 42.0068 37.6249L32.0289 37.2156C28.0491 37.0745 24.6338 37.8366 20.6398 39.7701L15.4181 42.2963C14.6842 40.7721 13.1459 39.7983 11.4523 39.7983H5.68016C3.26685 39.7842 1.30516 41.7318 1.29105 44.1451V65.639C1.30516 68.0523 3.26685 69.9999 5.68016 69.9999H11.4523C13.8656 69.9999 15.8132 68.0523 15.8273 65.639V64.1854L21.3737 63.1693C23.166 62.9011 24.2951 62.8023 26.2003 62.887L41.3717 63.5926C46.8334 63.8326 52.1822 62.0261 56.3737 58.5261L66.8878 49.8043L66.9019 49.7902C69.0048 47.9979 69.3152 44.8507 67.6076 42.6773ZM13.0048 65.639C13.0048 66.4858 12.3132 67.1773 11.4664 67.1773H5.65193C4.80516 67.1773 4.11363 66.4858 4.11363 65.639V44.1592C4.11363 43.3124 4.80516 42.6209 5.65193 42.6209H11.4664C12.3132 42.6209 13.0048 43.3124 13.0048 44.1592V65.639ZM65.0814 47.631L54.5814 56.3386C50.9261 59.387 46.2548 60.9535 41.4987 60.756L26.3273 60.0503C24.1963 59.9515 22.8979 60.0785 20.9362 60.3608C20.9221 60.3608 20.908 60.3608 20.8939 60.3749L15.8273 61.3064V45.2176L21.8677 42.2963C25.4241 40.5745 28.4302 39.8971 31.916 40.0241L41.9644 40.4334C42.0209 40.4334 42.0914 40.4334 42.1479 40.4334C42.162 40.4334 42.2185 40.4334 42.2608 40.4334C43.4181 40.4475 44.406 41.3084 44.5471 42.4656C44.6882 43.6793 43.8697 44.8084 42.6701 45.0483L35.2044 46.4596C33.2427 46.8265 31.9584 48.7318 32.3253 50.6935C32.41 51.1027 32.5511 51.4979 32.7628 51.8507L33.5673 53.2197C34.2447 54.3628 35.4866 55.0402 36.8132 54.9979L44.039 54.758C47.0592 54.6451 49.9664 53.5584 52.3233 51.6814C54.9906 49.5221 59.1116 46.2056 61.9342 43.9051C62.9503 43.1148 64.4039 43.2418 65.2648 44.2015C65.2931 44.258 65.3354 44.3144 65.3777 44.3709C66.1822 45.3447 66.0552 46.8124 65.0814 47.631Z" fill="#FF7518" /> <path d="M46.2124 0C36.037 0 27.7527 8.28428 27.7527 18.4597C27.7527 28.6351 36.037 36.9335 46.2124 36.9335C56.3878 36.9335 64.6721 28.6492 64.6721 18.4738C64.6721 8.29839 56.3878 0 46.2124 0ZM46.2265 34.1109C37.5894 34.1109 30.5753 27.1109 30.5753 18.4738C30.5753 18.4738 30.5753 18.4738 30.5753 18.4597C30.5894 9.8367 37.5753 2.83669 46.2124 2.82258C54.8495 2.82258 61.8636 9.82258 61.8636 18.4597C61.8636 27.0968 54.8636 34.1109 46.2265 34.1109Z" fill="#FF7518" /> <path d="M51.7291 14.1148H49.8379C49.6827 13.4091 49.4145 12.7458 49.0194 12.139H51.7291C52.5053 12.139 53.1404 11.5039 53.1404 10.7277C53.1404 9.95149 52.5053 9.31641 51.7291 9.31641H40.6928C39.9166 9.31641 39.2815 9.95149 39.2815 10.7277C39.2815 11.5039 39.9166 12.139 40.6928 12.139H43.8541C45.1807 12.139 46.3379 12.9858 46.8601 14.1148H40.6928C39.9166 14.1148 39.2815 14.7499 39.2815 15.5261C39.2815 16.3023 39.9166 16.9374 40.6928 16.9374H46.8601C46.6766 17.262 46.4649 17.5583 46.2109 17.8265C45.5758 18.4475 44.7291 18.7862 43.8541 18.7721H40.6928C39.9024 18.7862 39.2674 19.4212 39.2815 20.2116C39.2815 20.5926 39.4508 20.9596 39.719 21.2277L47.6081 28.6934C48.1726 29.2297 49.0617 29.2015 49.598 28.637C50.1343 28.0725 50.1061 27.1833 49.5416 26.6471L44.221 21.6087C45.717 21.5241 47.1283 20.9031 48.1867 19.8446C48.9912 19.0402 49.5557 18.0382 49.8379 16.9374H51.7291C52.5053 16.9374 53.1404 16.3023 53.1404 15.5261C53.1404 14.7499 52.5053 14.1148 51.7291 14.1148Z" fill="#FF7518" /> </svg>
                        <h3 className={styles["brokerageTitle"]}>Brokerage</h3>
                        <p className={styles["caption"]}><b>100%</b> sharing across all segments</p>
                    </div>
                    <div className={styles["midRsDivider"]}>
                        <span className={styles["dot1"]}></span>
                        <Image width={100} height={100} alt="Revenue Sharing" src="https://www.miraeassetpartners.com/asset/images/revenueSharing-midd.webp" />
                        <span className={styles["dot2"]}></span>
                    </div>
                    <div className={styles["un100BrokKeyPoints"]}>
                        <h3 className={styles["keyPointsTitle"]}>100% sharing across</h3>
                        <ul>
                            <li><span className={styles["keyPoint"]}><span></span></span> Account maintenance charges (AMC)</li>
                            <li><span className={styles["keyPoint"]}><span></span></span> Account opening fee</li>
                            <li><span className={styles["keyPoint"]}><span></span></span> DP sell transaction charges</li>
                            <li><span className={styles["keyPoint"]}><span></span></span>Pledge/unpledge charges</li>
                            <li><span className={styles["keyPoint"]}><span></span></span> Partner service fee (annual)</li>
                            <li><span className={styles["keyPoint"]}><span></span></span> Plan modification fee</li>
                        </ul>
                    </div>
                </div>
                <div className={styles["un2024MidText"]}>That&apos;s not all! Create recurring income with highest interest revenue sharing across,</div>
                <div className={styles["mtfPledge24"]}>
                    <ul>
                        <li>
                            <h4 className={styles["marginTitle"]}>MTF (eMargin)</h4>
                            <p><b>80%</b> sharing over 9.99%</p>
                        </li>
                        <li>
                            <h4 className={styles["marginTitle"]}>Margin Pledge</h4>
                            <p><b>80%</b> sharing over 11.99% </p>
                        </li>
                    </ul>
                    <div className={styles["midBro24"]}></div>
                </div>
                <div className={styles["midHoriDivider"]}>
                    <span className={styles["dot1"]}></span>
                    <span className={styles["dot2"]}></span>
                </div>
            </div>
        </section>
    )
}

export default RevenueSharing
