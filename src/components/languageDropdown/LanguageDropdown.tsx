import React, { useEffect, useState } from 'react'
import styles from "./LanguageDropdown.module.scss";
import { usePathname } from 'next/navigation';
import { translatePages } from '@/lib/constants/common';
import { removeLocale } from '@/lib/utils/removeLocale';
import Link from 'next/link';

function LangguageDropdown() {
    const pathname = usePathname()
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
        return translatePages.includes(path) ? ((locale === "en" ? "" : '/' + locale) + path) : (path)
    }

    return translatePages.includes(path) &&
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
                    <Link
                        href={switchLocale("en")}
                    >
                        <li
                            style={{ backgroundColor: "white", display: "list-item" }}
                        >
                            &nbsp;&nbsp;English
                        </li>
                    </Link>
                    <Link
                        href={switchLocale("hi")}
                    >
                        <li
                            style={{ backgroundColor: "white", display: "list-item" }}
                        >
                            &nbsp;&nbsp;Hindi
                        </li>
                    </Link>
                </ul>}
            </div>
        </>
}

export default LangguageDropdown
