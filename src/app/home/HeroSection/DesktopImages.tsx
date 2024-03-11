"use client"

import useUserAgent from '@/lib/hooks/useUserAgent'
import React, { useEffect, useState } from 'react'
import BannerBgImg from "../../../../public/bannerBgImg.png";
import BackBgLeftImg from "../../../../public/backBgLeftImg.png";

function DesktopImages({ styles }: any) {
    const currentDevice = useUserAgent()

    const [flag, setFlag] = useState(false)

    useEffect(() => {
        setFlag(currentDevice.isDesktop())
    }, [currentDevice])

    return (
        flag && <>
            <div className={`${styles.fImg} ${styles.deskView}`}><img src={BannerBgImg.src} alt="" /></div>
            <div className={`${styles.sImg} ${styles.deskView}`}><img src={BackBgLeftImg.src} alt="" /></div>
        </>
    )
}

export default DesktopImages
