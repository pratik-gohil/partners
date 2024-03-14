import React, { useEffect, useState } from 'react'
import styles from "./LanguageDropdown.module.scss";
import RetainQueryLink from '../RetainQueryLink/RetainQueryLink';
function LangguageDropdown() {
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
            <div className={`${styles.languageUlBlock} ${styles.active}`} onClick={() => setShowOptions(true)}>
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
                        id="liEn"
                        style={{ backgroundColor: "white", display: "list-item" }}
                    >
                        <RetainQueryLink
                            href="/"
                        >
                            &nbsp;&nbsp;English
                        </RetainQueryLink>
                    </li>
                    <li
                        id="liHi"
                        style={{ backgroundColor: "white", display: "list-item" }}
                    >
                        <RetainQueryLink
                            href="/hi"
                        >
                            &nbsp;&nbsp;Hindi
                        </RetainQueryLink>
                    </li>
                </ul>}
            </div>

        </>
    )
}

export default LangguageDropdown
