import React, { useEffect, useState } from 'react'
import styles from "./LanguageDropdown.module.scss";
import { usePathname } from 'next/navigation';
import { translatePages } from '@/lib/constants/common';
import { removeLocale } from '@/lib/utils/removeLocale';
import { language_locale } from '@/lib/utils/hasLocale';
import { getCookieClient } from '@/lib/utils/getCookieClient';
import RetainQueryLink from '../RetainQueryLink/RetainQueryLink';

function LangguageDropdown() {
    const pathname = usePathname()
    const path = removeLocale(pathname) || "/"
    const locale = getCookieClient("locale") || "en"
    const [language, setLanguage] = useState("English")

    useEffect(() => {
        // @ts-ignore
        setLanguage(language_locale[locale])
    }, [locale])

    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        const close = () => setShowOptions((e) => e = false)
        setTimeout(() => {
            if (showOptions) window.addEventListener('click', close)
            else window.removeEventListener('click', close)
        }, 0)

        return () => { window.removeEventListener('click', close) }
    }, [showOptions])

    return translatePages.includes(path) && <>
        <div className={`${styles.languageUlBlock}  ${showOptions === true ? styles['active'] : ''}`} onClick={(e) => { e.preventDefault(); setShowOptions(true) }}>
            <span>Language</span>
            <label className={`${styles.languageSelectLabel}`}>
                {/* @ts-ignore */}
                {language}
            </label>
            <br />
            {showOptions && <ul className={`${styles.listUstyled}`}>
                <li style={{ display: "list-item" }}>
                    <label className="language-select-labell">&nbsp;&nbsp;Select</label>
                </li>
                {Object.keys(language_locale).map(locale => (
                    <RetainQueryLink
                        onClick={() => { document.cookie = "locale=" + locale; }}
                        key={locale}
                        href={path}
                        forceLocale={locale}
                    >
                        <li
                            style={{ backgroundColor: "white", display: "list-item" }}
                        >
                            {/* @ts-ignore */}
                            &nbsp;&nbsp;{language_locale[locale]}
                        </li>
                    </RetainQueryLink>
                ))}
            </ul>}
        </div>
    </>
}

export default LangguageDropdown
