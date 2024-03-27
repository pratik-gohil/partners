import React from 'react'
import styles from './EarnRewardsSec.module.scss'
import Image from 'next/image'

function EarnRewardsSec() {
  return (
    <section className={`${styles.earnRewardsSec}`}>
      <div className={`${styles.maContainer} ${styles.flex}`}>
        <div className={`${styles.lhsWrap}`}>
          <Image width={250} height={250} src="/referrals/reward-box-new.webp" alt="rewards" title="rewards" />
        </div>
        <div className={`${styles.rhsWrap}`}>
          <h2 className={`${styles.secTitle} `}>Share opportunity. Grow community.<span>Earn rewards!</span></h2>
          <ul className={`${styles.rewardsPlansBox}`}>
            <li>Refer <span>1</span> = Earn <span>₹6,000</span></li>
            <li>Refer <span>5</span> = Earn <span>₹30,000</span></li>
            <li>Refer <span>10</span> = Earn <span>₹60,000</span></li>
            <li>Refer <span>20</span> = Earn <span>₹1,20,000</span></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default EarnRewardsSec
