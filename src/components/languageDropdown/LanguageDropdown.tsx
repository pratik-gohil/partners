import React from 'react'
import styles from "./LanguageDropdown.module.scss";
function LangguageDropdown() {
    const handleClick = () => {
        //setPage('hi-IN'); // Assuming 'setPage' is a function that handles setting the page
      };
    
    return (
        <>
            <div className={`${styles.languageUlBlock}`}>
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
                <ul className={`${styles.listUstyled}`}>
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
                        onClick={handleClick}
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
                        onClick={handleClick}
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
                    {/*<li id="liGu" onclick="setPage('gu-IN');" style=" background-color: white;">
                      <a href="/gu" style="color: #333333;  text-align: left; margin-left: 1px; width:100%; display: block;">&nbsp;&nbsp;Gujarati</a>
                  </li>
                  <li id="liTa" onclick="setPage('ta-IN');" style=" background-color: white;">
                      <a href="/ta" style="color: #333333; text-align: left; margin-left: 1px; width:100%; display: block;">&nbsp;&nbsp;Tamil</a>
                  </li> */}
                </ul>
            </div>

        </>
    )
}

export default LangguageDropdown
