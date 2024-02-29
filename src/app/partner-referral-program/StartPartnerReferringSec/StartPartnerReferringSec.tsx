'use client'
import React, { FormEvent, useState } from 'react'
import styles from './StartPartnerReferringSec.module.scss'
import { nunito } from '@/styles/fonts'

function StartPartnerReferringSec() {


    const [reference, setReference] = useState([{
        name: '', number: ''
    }])
    const [partner, setPartner] = useState({
        name: '', number: ''
    })

    const handlePartnerInput = (e: FormEvent) => {
        let { name, value } = e?.target as HTMLInputElement
        setPartner(prev => ({ ...prev, [name]: value }))
    }

    const handleInputChange = (e: FormEvent, i: number) => {
        let { name, value } = e?.target as HTMLInputElement
        let refData = [...reference]
        // @ts-ignore
        refData[i][name] = value
        setReference(refData)
    }

    const removeReference = (ind: number) => {
        let data = [...reference]
        data.splice(ind, 1)
        setReference(data)
    }

    const handleFormSubmit = () => {
        console.log({
            partner: partner,
            ref: reference
        })
    }
    const addField = () => {
        let newRef = {
            name: '', number: ''
        }
        setReference(prev => [...prev, newRef])
    }

    return (
        <section className={`${styles.startPartnerReferringSec}`}>
            <div className={`${styles.maContainer}`}>
                <h1 className={`${styles.secTitle} ${nunito.className}`}>Start Partner<span>Referring</span></h1>

                <form className={`${styles.formHolder}`}
                    onSubmit={handleFormSubmit}
                >
                    <div className={`${styles.referrbarInpupat}`} id="inputsContainer">
                        <div className={`${styles.flex} ${styles.formFieldWrap}`}>
                            <div className={`${styles.formGroup}`}>
                                <input
                                    type="text"
                                    name='name'
                                    id="ProspectName"
                                    className={`${styles.formControl}`} placeholder="Your Name" value={partner.name}
                                    onChange={handlePartnerInput}
                                    required
                                />

                            </div>
                            <div className={`${styles.formGroup}`}>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    required
                                    maxLength={10}
                                    name='number' id="ProspectNumber" className={`${styles.formControl} ${styles.inputBox}`}
                                    placeholder="Your Mobile No."
                                    value={partner.number}
                                    onChange={handlePartnerInput}
                                />
                            </div>
                        </div>


                        {
                            reference.map((p, ind) => {
                                return (

                                    <div key={ind} className={`${styles.flex} ${styles.formFieldWrap}`}>
                                        <div className={`${styles.formGroup}`}>
                                            <input type="text" id="RefereeName" className={`${styles.formControl}`} placeholder="Reference Name" value={p.name} name='name' onChange={(e) => handleInputChange(e, ind)}
                                                required
                                            />
                                        </div>
                                        <div className={`${styles.formGroup}`}>
                                            <input type="text" id="RefereeNumber" className={`${styles.formControl} ${styles.inputBox}`} placeholder="Reference Mobile No." value={p.number} name='number' onChange={(e) => handleInputChange(e, ind)}
                                                required
                                            />
                                        </div>

                                        {
                                            ind !== 0 && (
                                                <div className={styles["deletB-ad"]} onClick={() => removeReference(ind)} >
                                                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="448" height="512" fill='#f58220'><path fillRule="evenodd" d="m438.1 81.2c2 0.8 3.7 2 5.2 3.5c1.5 1.5 2.7 3.2 3.5 5.2c0.8 1.9 1.2 4 1.2 6.1v16c0 2.1-0.4 4.2-1.2 6.1c-0.8 2-2 3.7-3.5 5.2c-1.5 1.5-3.2 2.7-5.2 3.5c-1.9 0.8-4 1.2-6.1 1.2h-16v336c0 6.3-1.2 12.5-3.7 18.4c-2.4 5.8-5.9 11.1-10.4 15.5c-4.4 4.5-9.7 8-15.5 10.4c-5.9 2.5-12.1 3.7-18.4 3.7h-288c-6.3 0-12.5-1.2-18.4-3.7c-5.8-2.4-11.1-5.9-15.5-10.4c-4.5-4.4-8-9.7-10.4-15.5c-2.5-5.9-3.7-12.1-3.7-18.4v-336h-16c-2.1 0-4.2-0.4-6.1-1.2c-2-0.8-3.7-2-5.2-3.5c-1.5-1.5-2.7-3.2-3.5-5.2c-0.8-1.9-1.2-4-1.2-6.1v-16c0-2.1 0.4-4.2 1.2-6.1c0.8-2 2-3.7 3.5-5.2c1.5-1.5 3.2-2.7 5.2-3.5c1.9-0.8 4-1.2 6.1-1.2h82.4l34-56.7c2.2-3.5 4.7-6.8 7.7-9.7c2.9-2.9 6.2-5.3 9.8-7.4c3.6-2 7.5-3.6 11.5-4.6c4-1.1 8.1-1.6 12.2-1.6h100.8c4.1 0 8.3 0.5 12.2 1.6c4 1 7.9 2.6 11.5 4.6c3.6 2.1 6.9 4.5 9.8 7.4c3 2.9 5.6 6.2 7.7 9.7l34 56.7h82.4c2.1 0 4.2 0.4 6.1 1.2zm-70.1 46.8h-288v336h288zm-213.6-48h139.2l-17.5-29.1q-0.4-0.7-0.9-1.2q-0.6-0.5-1.2-0.9q-0.7-0.4-1.5-0.6q-0.7-0.2-1.5-0.2h-94q-0.8 0-1.5 0.2q-0.8 0.2-1.5 0.6q-0.6 0.4-1.2 0.9q-0.6 0.5-1 1.2zm109.1 335.1c-1.5-0.6-2.8-1.5-3.9-2.6c-1.1-1.1-2-2.4-2.6-3.9c-0.6-1.5-1-3-1-4.6v-216c0-1.6 0.4-3.1 1-4.6c0.6-1.4 1.5-2.8 2.6-3.9c1.1-1.1 2.4-2 3.9-2.6c1.4-0.6 3-0.9 4.5-0.9h24c1.6 0 3.2 0.3 4.6 0.9c1.5 0.6 2.8 1.5 3.9 2.6c1.1 1.1 2 2.5 2.6 3.9c0.6 1.5 0.9 3 0.9 4.6v216c0 1.6-0.3 3.1-0.9 4.6c-0.6 1.5-1.5 2.8-2.6 3.9c-1.1 1.1-2.4 2-3.9 2.6c-1.4 0.6-3 0.9-4.6 0.9h-24c-1.5 0-3.1-0.3-4.5-0.9zm-112 0c-1.5-0.6-2.8-1.5-3.9-2.6c-1.1-1.1-2-2.4-2.6-3.9c-0.6-1.5-1-3-1-4.6v-216c0-1.6 0.4-3.1 1-4.6c0.6-1.4 1.5-2.8 2.6-3.9c1.1-1.1 2.4-2 3.9-2.6c1.4-0.6 3-0.9 4.5-0.9h24c1.6 0 3.2 0.3 4.6 0.9c1.5 0.6 2.8 1.5 3.9 2.6c1.1 1.1 2 2.5 2.6 3.9c0.6 1.5 0.9 3 0.9 4.6v216c0 1.6-0.3 3.1-0.9 4.6c-0.6 1.5-1.5 2.8-2.6 3.9c-1.1 1.1-2.4 2-3.9 2.6c-1.4 0.6-3 0.9-4.6 0.9h-24c-1.5 0-3.1-0.3-4.5-0.9z" /></svg>
                                                </div>
                                            )
                                        }
                                    </div>

                                )
                            })
                        }


                        {/* <div className={`${styles.flex} ${styles.formFieldWrap}`}>  
                            <div className={`${styles.formGroup}`}>
                                <input type="text" id="RefereeName" className={`${styles.formControl}`} placeholder="Reference Name" />
                            </div> 
                            <div className={`${styles.formGroup}`}>
                                <input type="text" id="RefereeNumber" className={`${styles.formControl} ${styles.inputBox}`} placeholder="Reference Mobile No." />
                            </div>
                        </div> */}

                        {/* <p id="redmsgErr1" className={`${styles.redmsgErr2}`}>Oops, this number is already registered with us, try adding another number</p>
                        <div className={`${styles.submimsgAl}`}>
                            <p id="greenmsgErr1" className={`${styles.greenmsgErr}`}>Your referral has been successfully added</p>
                        </div> */}
                    </div>
                    <div className={`${styles.btnparAddsub}`}>
                        <a onClick={addField} > <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M64 0C28.7082 0 0 28.7082 0 64C0 99.2918 28.7082 128 64 128C99.2918 128 128 99.2868 128 64C128 28.7132 99.2918 0 64 0ZM64 118.085C34.1812 118.085 9.91475 93.8237 9.91475 64C9.91475 34.1763 34.1812 9.91475 64 9.91475C93.8188 9.91475 118.085 34.1763 118.085 64C118.085 93.8237 93.8237 118.085 64 118.085Z" fill="#F08200" /> <path d="M88.7854 58.5917H68.9559V38.7622C68.9559 36.0257 66.7399 33.8047 63.9984 33.8047C61.2569 33.8047 59.0409 36.0257 59.0409 38.7622V58.5917H39.2114C36.4699 58.5917 34.2539 60.8127 34.2539 63.5492C34.2539 66.2857 36.4699 68.5067 39.2114 68.5067H59.0409V88.3362C59.0409 91.0727 61.2569 93.2937 63.9984 93.2937C66.7399 93.2937 68.9559 91.0727 68.9559 88.3362V68.5067H88.7854C91.5269 68.5067 93.7429 66.2857 93.7429 63.5492C93.7429 60.8127 91.5269 58.5917 88.7854 58.5917Z" fill="#F08200" /> </svg> Add</a>
                        <a onClick={handleFormSubmit}>Refer Now</a>
                    </div>
                </form>

            </div>
        </section>
    )
}

export default StartPartnerReferringSec
