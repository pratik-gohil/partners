import React, { useEffect, useMemo, useState } from 'react'
import styles from './SelectMenu.module.scss';
import Image from 'next/image';
import { validateName } from '@/lib/constants/common';

function SelectMenu({ options, onChange, contentEditable = false, register, name, required = true }: {
    options: string[],
    onChange: any,
    contentEditable: boolean,
    register: any,
    name: string,
    required: boolean | string
}) {
    const [showOptions, setShowOptions] = useState(false)
    const [selectedOption, setSelectedOption] = useState<null | number>(null)
    const [value, setValue] = useState(contentEditable ? "" : options[0]);
    const filteredOptions = useMemo(() => {
        return contentEditable ? (value.length > 2 ? options.filter((option: string) => option.toLowerCase().includes(value.toLowerCase())) : []) : options
    }, [contentEditable, value])
    const [flag, setFlag] = useState(false)

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
        if (!flag && contentEditable) {
            setFlag(true)
        }

        if (!contentEditable || (contentEditable && flag)) onChange(value)
    }, [value])

    useEffect(() => {
        register(name, {
            ...validateName,
            required: typeof required === "string" ? required : "Required",
        },)
    }, [register, name, options])

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

                    <Image alt='arrow' width={14} height={14} style={{ float: 'right', transform: showOptions ? 'rotate(180deg)' : "", marginTop: '.5rem' }} src="/down-arrow.png" />
                </div>
            }
            {showOptions && <ul className={`${styles.selResults} ${styles.selCity}`}>
                {
                    filteredOptions.map((option: string, i: number) => (
                        <li
                            key={option}
                            className={selectedOption === i ? styles.selected : ""}
                            tabIndex={0}
                            onClick={() => { setValue(option); setShowOptions(false) }}
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
