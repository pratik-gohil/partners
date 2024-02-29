import React from 'react'
import styles from './EarnRewardsSec.module.scss'
import { nunito } from '@/styles/fonts'

function EarnRewardsSec() {
  return (
    <section className={`${styles.earnRewardsSec}`}>
      <div className={`${styles.maContainer} ${styles.flex}`}>
        <div className="lhsWrap">
          <img src="https://www.miraeassetpartners.com/asset/images/referrals/reward-box-new.webp" alt="rewards" title="rewards" />
        </div>
        <div className="rhsWrap">
          <h2 className={`${styles.secTitle} ${nunito.className}`}>Share opportunity. Grow community.<span>Earn rewards!</span></h2>
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
