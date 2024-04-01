"use client"

import Script from "next/script";
import { useEffect, useState } from "react";

function GTM() {
    const [userInteracted, setUserInteracted] = useState<boolean>(false);

    useEffect(() => {
        const handleInteraction = () => { setUserInteracted(true); }

        document.addEventListener('click', handleInteraction, true)
        document.addEventListener('scroll', handleInteraction, true)
    }, [])

    return userInteracted ? <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
            __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', "GTM-NTX7SZZG");
      `,
        }}
    /> : null
}

export default GTM
