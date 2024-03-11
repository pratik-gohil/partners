import { useLayoutEffect, useState } from 'react'

const getUserAgentDetect = (userAgent: NavigatorID['userAgent']) => {
    const isAndroid = () => Boolean(userAgent.match(/Android/i))
    const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i))
    const isOpera = () => Boolean(userAgent.match(/Opera Mini/i))
    const isWindows = () => Boolean(userAgent.match(/IEMobile/i))
    const isSSR = () => Boolean(userAgent.match(/SSR/i))
    const isMobile = () => Boolean(isAndroid() || isIos() || isOpera() || isWindows())
    const isDesktop = () => Boolean(!isMobile() && !isSSR())
    return {
        isMobile,
        isDesktop,
        isAndroid,
        isIos,
        isSSR,
    }
}

const useUserAgent = () => {
    const [userAgent, setUserAgent] = useState(typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent)

    useLayoutEffect(() => {
        function updateSize() {
            setUserAgent(typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return getUserAgentDetect(userAgent)
}

export default useUserAgent
