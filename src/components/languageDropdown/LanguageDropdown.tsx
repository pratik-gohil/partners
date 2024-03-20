import React, { useEffect, useState } from 'react'
import styles from "./LanguageDropdown.module.scss";
import { usePathname, useRouter } from 'next/navigation';
import { translatePages } from '@/lib/constants/common';
import { removeLocale } from '@/lib/utils/removeLocale';

function LangguageDropdown() {
    const pathname = usePathname()
    const router = useRouter()

    const path = removeLocale(pathname) || "/"

    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        const close = () => setShowOptions((e) => e = false)
        setTimeout(() => {
            if (showOptions) window.addEventListener('click', close)
            else window.removeEventListener('click', close)
        }, 0)

        return () => { window.removeEventListener('click', close) }
    }, [showOptions])

    const switchLocale = (locale: string) => {
        document.cookie = "locale=" + locale;
        translatePages.includes(path) ? router.push(('/' + locale) + path) : router.push(path)
    }

    return translatePages.includes(path) && <>
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
                    onClick={() => switchLocale("en")}
                    id="liEn"
                    style={{ backgroundColor: "white", display: "list-item" }}
                >
                    &nbsp;&nbsp;English
                </li>
                <li
                    onClick={() => switchLocale("hi")}
                    id="liHi"
                    style={{ backgroundColor: "white", display: "list-item" }}
                >
                    &nbsp;&nbsp;Hindi
                </li>
            </ul>}
        </div>

    </>


}

export default LangguageDropdown
