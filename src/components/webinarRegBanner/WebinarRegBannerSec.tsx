"use client";
import React, { useEffect, useState } from 'react'
import styles from "./WebinarRegBannerSec.module.scss"; 
import BannerBgImgDesk from "../../../public/horizonatlbanners/horibanner_desktop.webp";  
import BannerBgImgMob from "../../../public/horizonatlbanners/horibanner_desktop.webp";  
import BannerDateIcon from "../../../public/horizonatlbanners/calicon.webp";  
import BannerTimeIcon from "../../../public/horizonatlbanners/timeicon.webp";  
import useUserAgent from '@/lib/hooks/useUserAgent';

const WebinarRegBannerSec = () => { 
    const currentDevice = useUserAgent()

    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        setIsDesktop(currentDevice.isDesktop())
    }, [currentDevice])

    return (  
        <div className={`${styles.webinarRegBannerSec}`} style={{ background: `url('${isDesktop ? BannerBgImgDesk.src : BannerBgImgMob.src}')`}}>
            <div>
                <p className={`${styles.bannerTitle}`}>Join the webinar to discover <span>Mirae Asset Partners Program</span></p>
                <div className={`${styles.textCenter}`}>
                    <div className={`${styles.timerWrap}`}><img src={`${BannerDateIcon.src}`} />Friday, 15th March, 2024  <img src={`${BannerTimeIcon.src}`} className={`${styles.timeicon}`} />4:30 to 6:00 pm</div>
                </div>
            </div>
            <div>
                <a href="https://events.teams.microsoft.com/event/8c5f96c9-b625-41c1-89e7-230df7ee9093@8525e18d-2cce-43ce-8106-64d085abd87a" target="_blank" className={`${styles.btnBanner}`}>Register for Webinar Now</a>
            </div>
        </div> 
    )
}

export default WebinarRegBannerSec;

