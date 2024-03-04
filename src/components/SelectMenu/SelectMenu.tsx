import React, { useEffect, useState } from 'react'
import styles from './SelectMenu.module.scss';

function SelectMenu({ options }: any) {
    const [showOptions, setShowOptions] = useState(false)
    const [selectedOption, setSelectedOption] = useState(0);

    useEffect(() => {
        const switchOption = (e: KeyboardEvent) => {
            if (e.key === "ArrowUp") {
                selectedOption > 0 && setSelectedOption(selectedOption => selectedOption - 1)
            } else if (e.key === "ArrowDown") {
                selectedOption <= (3) && setSelectedOption(selectedOption => selectedOption + 1)
            }

        }
        window.addEventListener('keydown', switchOption)

        const close = () => setShowOptions((e) => e = false)
        setTimeout(() => {
            if (showOptions) window.addEventListener('click', close)
            else window.removeEventListener('click', close)
        }, 0)

        return () => { window.removeEventListener('click', close); window.removeEventListener("keydown", switchOption) }
    }, [showOptions])

    return (
        <>
            <div
                onKeyDown={(e) => e.key === "Enter" && setShowOptions(!showOptions)}
                onClick={() => setShowOptions(true)}
                className={`${styles.formControl}`}
                id="city"
                tabIndex={0}
            >
                {options[selectedOption]}
            </div>
            {showOptions && <ul className={`${styles.selResults} ${styles.selCity}`}>
                <li autoFocus={true} className={selectedOption === 0 ? styles.selected : ""} tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setSelectedOption(0)}
                    onClick={(e) => { setSelectedOption(0) }}
                >{options[0]}</li>
                <li className={selectedOption === 1 ? styles.selected : ""} tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setSelectedOption(1)}
                    onClick={(e) => { setSelectedOption(1) }}
                >{options[1]}</li>
                <li className={selectedOption === 2 ? styles.selected : ""} tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setSelectedOption(2)}
                    onClick={(e) => { setSelectedOption(2) }}
                >{options[2]}</li>
                <li className={selectedOption === 3 ? styles.selected : ""} tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setSelectedOption(3)}
                    onClick={(e) => { setSelectedOption(3) }}
                >{options[3]}</li>
            </ul >}
        </>
    )
}

export default SelectMenu
