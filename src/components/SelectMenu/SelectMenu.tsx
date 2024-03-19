import React, { useEffect, useMemo, useState } from 'react'
import styles from './SelectMenu.module.scss';

function SelectMenu({ options, onChange, contentEditable = false }: {
    options: string[],
    onChange: any,
    contentEditable: boolean
}) {
    const [showOptions, setShowOptions] = useState(false)
    const [selectedOption, setSelectedOption] = useState<null | number>(null)
    const [value, setValue] = useState(contentEditable ? "" : options[0]);
    const filteredOptions = useMemo(() => {
        return contentEditable ? options.filter((option: string) => option.toLowerCase().includes(value.toLowerCase())) : options
    }, [contentEditable, value])

    useEffect(() => {
        const switchOption = (e: KeyboardEvent) => {
            if (e.key === "ArrowUp") {
                setSelectedOption(selectedOption => selectedOption !== null ? ((selectedOption > 0) ? selectedOption - 1 : selectedOption || 0) : 0)
            } else if (e.key === "ArrowDown") {
                setSelectedOption(selectedOption => selectedOption !== null ? ((selectedOption < (filteredOptions.length - 1)) ? selectedOption + 1 : selectedOption) : 0)
            }

            if (e.key === "Enter") {
                setValue(selectedOption !== null ? filteredOptions[selectedOption] : value)
            }
        }

        window.addEventListener('keydown', switchOption)

        const close = () => setShowOptions((e) => e = false)
        setTimeout(() => {
            if (showOptions) window.addEventListener('click', close)
            else window.removeEventListener('click', close)
        }, 0)

        return () => { window.removeEventListener('click', close); window.removeEventListener("keydown", switchOption) }
    }, [showOptions, filteredOptions])

    useEffect(() => {
        setSelectedOption(0)
        onChange(value)
    }, [value])

    return (
        <>
            {contentEditable ?
                <input
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && setShowOptions(!showOptions)}
                    onClick={e => { e.preventDefault(); e.stopPropagation() }}
                    onFocus={() => setShowOptions(true)}
                    className={`${styles.formControl}`}
                    tabIndex={0}
                    value={value}

                />
                :
                <div
                    style={{ whiteSpace: 'nowrap' }}
                    onKeyDown={(e) => e.key === "Enter" && setShowOptions(!showOptions)}
                    onClick={e => { e.preventDefault(); e.stopPropagation() }}
                    onFocus={() => setShowOptions(true)}
                    className={`${styles.formControl}`}
                    tabIndex={0}
                >
                    {value}
                </div>
            }
            {showOptions && <ul className={`${styles.selResults} ${styles.selCity}`}>
                {
                    filteredOptions.map((option: string, i: number) => (
                        <li
                            key={option}
                            className={selectedOption === i ? styles.selected : ""}
                            tabIndex={0}
                            onClick={() => setValue(option)}
                            onKeyDown={(e) => {
                                e.stopPropagation();
                                if (e.key === "Enter") { setValue(option); setShowOptions(false) }
                            }}
                        >
                            {option}
                        </li>
                    ))
                }
            </ul >}
        </>
    )
}

export default SelectMenu
