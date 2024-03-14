"use client"

import useUserAgent from '@/lib/hooks/useUserAgent'
import React, { useEffect, useState } from 'react'
import BackBgLeftImg from "../../../../public/backBgLeftImg.webp";
import Image from 'next/image';

function DesktopImages({ styles }: any) {
    const currentDevice = useUserAgent()

    const [flag, setFlag] = useState(false)

    useEffect(() => {
        setFlag(currentDevice.isDesktop())
    }, [currentDevice])

    return (
        flag && <> 
             <div className={`${styles.sImg} ${styles.deskView}`}><Image fill src={BackBgLeftImg.src} alt="Stars" /></div>
        </>
    )
}

export default DesktopImages
