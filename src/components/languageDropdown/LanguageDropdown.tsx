import React, { useEffect, useState } from 'react'
import styles from "./LanguageDropdown.module.scss";
import { usePathname, useRouter } from 'next/navigation';
import hasLocale from '@/lib/utils/hasLocale';

function LangguageDropdown() {
    const pathname = usePathname()
    const router = useRouter()

    const path = hasLocale(pathname) ? pathname.slice(3) : pathname

    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        const close = () => setShowOptions((e) => e = false)
        setTimeout(() => {
            if (showOptions) window.addEventListener('click', close)
            else window.removeEventListener('click', close)
        }, 0)

        return () => { window.removeEventListener('click', close) }
    }, [showOptions])

    return (
        <>
            <div className={`${styles.languageUlBlock}  ${showOptions === true ? styles['active'] : ''}`} onClick={() => setShowOptions(true)}>
                <span>Language</span>
                <label id="lblCurLang" className={`${styles.languageSelectLabel}`}>
                    English
                </label>
                <br />
                {showOptions && <ul className={`${styles.listUstyled}`}>
                    <li style={{ display: "list-item" }}>
                        <label className="language-select-labell">&nbsp;&nbsp;Select</label>
                    </li>
                    <li
                        onClick={() => router.push('/en' + path)}
                        id="liEn"
                        style={{ backgroundColor: "white", display: "list-item" }}
                    >
                        &nbsp;&nbsp;English
                    </li>
                    <li
                        onClick={() => router.push('/hi' + path)}
                        id="liHi"
                        style={{ backgroundColor: "white", display: "list-item" }}
                    >
                        &nbsp;&nbsp;Hindi
                    </li>
                </ul>}
            </div>

        </>
    )
}

export default LangguageDropdown
