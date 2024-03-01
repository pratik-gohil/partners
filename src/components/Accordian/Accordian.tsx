import React, { ReactNode } from 'react'
import styles from './Accordian.module.scss'

type AccordianItem = {
    queryNumber: string,
    query: string,
    answer?: string,
    component?: ReactNode
}

function Accordian({ items, active, setActive }: { items: AccordianItem[], active: number | null, setActive: React.Dispatch<React.SetStateAction<number | null>> }) {
    const handleChange = (panel: number) => {
        setActive(active !== panel ? panel : null);
    };

    return (
        <div className={`${styles.accordionHolder}`}>
            {items.map((v, i) => {
                return (<div className={styles["accCard"]} key={i}>
                    <div className={`${styles["accTitle"]} ${(active === i && styles["active"])}`} onClick={() => handleChange(i)}>
                        <h3 className={`${styles.queryTxt}`}>{v.query}</h3>
                    </div>
                    <div className={`${styles["accPanel"]} ${(active === i ? styles["expanded"] : styles["collapsed"])}`}>
                        <div className={`${styles.accPanelBox}`}>
                            {
                                v.answer
                            }
                            {
                                v.component && (v.component)
                            }
                        </div>
                    </div>
                </div>);
            })}
        </div>
    )
}

export default Accordian
