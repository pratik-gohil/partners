import useUserAgent from '@/lib/hooks/useUserAgent'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function HandImage() {
    const currentDevice = useUserAgent()

    const [flag, setFlag] = useState(false)

    useEffect(() => {
        setFlag(currentDevice.isDesktop())
    }, [currentDevice])

    return (
        flag && <>
            <Image priority={true} width={466} height={210} src="/hand-img.webp" alt="hand-img" title="hand-img" />
        </>
    )
}

export default HandImage
