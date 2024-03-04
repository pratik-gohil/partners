import React, { useEffect, useState } from 'react'
import styles from "./LanguageDropdown.module.scss";
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
            <div className={`${styles.languageUlBlock}`} onClick={() => setShowOptions(true)}>
                <span>Language</span>
                <label id="lblCurLang" className={`${styles.languageSelectLabel}`}>
                    English
                </label>
                <img
                    src="https://www.miraeassetpartners.com/asset/images/down-arrow.png"
                    alt="mstock"
                    width={12}
                    height={6}
                    className={`${styles.arrowImgMargin}`}
                />
                <br />
                {showOptions && <ul className={`${styles.listUstyled}`}>
                    <li style={{ display: "list-item" }}>
                        <label className="language-select-labell">&nbsp;&nbsp;Select</label>
                        <img
                            src="https://www.miraeassetpartners.com/asset/images/down-arrow.png"
                            alt="mstock"
                            width={12}
                            height={6}
                            style={{ transform: "rotate(180deg)" }}
                            className={`${styles.arrowImgMargin}`}
                        />
                    </li>
                    <li
                        id="liEn"
                        style={{ backgroundColor: "white", display: "list-item" }}
                    >
                        <a
                            href="/"
                            style={{
                                color: "#333333",
                                textAlign: "left",
                                marginLeft: 1,
                                width: "100%",
                                display: "block"
                            }}
                        >
                            {" "}
                            &nbsp;&nbsp;English
                        </a>
                    </li>
                    <li
                        id="liHi"
                        style={{ backgroundColor: "white", display: "list-item" }}
                    >
                        <a
                            href="/hi"
                            style={{
                                color: "#333333",
                                textAlign: "left",
                                marginLeft: 1,
                                width: "100%",
                                display: "block"
                            }}
                        >
                            {" "}
                            &nbsp;&nbsp;Hindi
                        </a>
                    </li>
                </ul>}
            </div>

        </>
    )
}

export default LangguageDropdown
