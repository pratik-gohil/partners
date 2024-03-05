'use client'
import React, { FormEvent, useState } from 'react'
import styles from './StartPartnerReferringSec.module.scss'
import { nunito } from '@/styles/fonts'

function StartPartnerReferringSec() {

    const [btnDisable, setBtnDisable] = useState(false)
    const [pErr, setPerr] = useState({
        name: '', number: ''
    })
    const [partner, setPartner] = useState({
        name: '', number: ''
    })
    const [agree, setAgree] = useState(false)

    const [reference, setReference] = useState([{
        name: '', number: '', name_err: '', number_err: ''
    }])

    const handlePartnerInput = (e: FormEvent) => {
        let { name, value } = e?.target as HTMLInputElement
        if (name == 'name') {
            let n_value = value

            let n = new RegExp(/^[A-Za-z]{2,}(?: [A-Za-z]{2,})*$/)
            let test = n.test(n_value)

            if (n_value.length < 3) {
                setPerr(prev => ({ ...prev, name: 'minimum 3 character required' }))
            } else if (!test) {
                setPerr(prev => ({ ...prev, name: 'Enter a valid Full Name' }))
            }
            else if (test && Object.entries(pErr).some(([key, value]) => value !== '')) {
                setPerr(prev => ({ ...prev, name: '' }))
            }
            setPartner(prev => ({ ...prev, [name]: value }))
        }
        if (name == 'number') {
            let n_value = value
            let n = new RegExp(/^[2-9]{2}[0-9]{8}$/)
            let test = n.test(n_value)

            if (!test) {
                setPerr(prev => ({ ...prev, number: 'Enter a valid Number' }))
            }
            else if (test && Object.entries(pErr).some(([key, value]) => value !== '')) {
                setPerr(prev => ({ ...prev, number: '' }))
            }
            setPartner(prev => ({ ...prev, [name]: value }))
        }
    }

    const handleInputChange = (e: FormEvent, i: number) => {

        interface IRefData {
            name: string;
            number: string;
            name_err: string;
            number_err: string;
            [key: string]: string;
        }
        let refData: IRefData[] = [...reference]
        let { name, value } = e?.target as HTMLInputElement

        if (name === 'name') {
            let nameRegex = /^[A-Za-z]{2,}(?: [A-Za-z]{2,})*$/;
            let isValidName = nameRegex.test(value);
            if (value.length < 3) {
                // refData[i][name] = value
                refData[i]['name_err'] = 'minimum 3 character required'
                setReference(refData)
            } else if (!isValidName) {
                refData[i]['name_err'] = 'Enter a valid Full Name'
                setReference(refData)
            }
            else if (isValidName) {
                refData[i]['name_err'] = ''
                setReference(refData)
            }
            refData[i][name] = value
        }
        if (name === 'number') {
            let n = new RegExp(/^[2-9]{2}[0-9]{8}$/)
            let num_test = n.test(value)


            if (!num_test) {
                refData[i]['number_err'] = 'Enter a valid Phone number'
                // setReference(refData)
            }
            else if (num_test) {
                refData[i]['number_err'] = ''
                // refData[i][name] = value
                // setReference(refData)
            }
            refData[i][name] = value
        }

        // refData[i][name] = value
        setReference(refData)
    }



    const removeReference = (ind: number) => {
        let data = [...reference]
        data.splice(ind, 1)
        setReference(data)
    }

    const handleFormSubmit = () => {

        if (Object.entries(partner).some(([key, value]) => value == '')) {
            return setPerr(prev => ({ ...prev, name: !partner.name ? 'name is required' : '', number: !partner.number ? 'number is required' : '' }))
        }
        else if (reference.map((ref, i) => {
            let refData = [...reference]
            if (!ref.name) {
                refData[i]['name_err'] = 'required'
            }
            if (!ref.number) {
                refData[i]['number_err'] = 'required'
            }
            return setReference(refData)
        }))

            if (reference.some(ref => ref.name_err !== '') || reference.some(ref => ref.number_err !== '')) {
                return
            }

        return console.log({
            partner, reference
        })


    }


    const addField = () => {
        let newRef = {
            name: '', number: '', name_err: '', number_err: ''
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
                                {
                                    pErr.name && (
                                        <p className={styles.error}> {pErr.name}</p>
                                    )
                                }

                            </div>
                            <div className={`${styles.formGroup}`}>
                                <input
                                    type="text"
                                    required
                                    maxLength={10}
                                    name='number' id="ProspectNumber" className={`${styles.formControl} ${styles.inputBox}`} placeholder="Your Mobile No." value={partner.number} onChange={handlePartnerInput}
                                />
                                {
                                    pErr.number && (
                                        <p className={styles.error}> {pErr.number}</p>
                                    )
                                }
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
                                            {
                                                p.name_err && (
                                                    <p className={styles.error} >{p.name_err} </p>
                                                )
                                            }
                                        </div>

                                        <div className={`${styles.formGroup}`}>
                                            <input
                                                type='text'
                                                required
                                                maxLength={10}
                                                id="RefereeNumber"
                                                className={`${styles.formControl} ${styles.inputBox}`} placeholder="Reference Mobile No." value={p.number} name='number'
                                                onChange={(e) => handleInputChange(e, ind)}

                                            />
                                            {
                                                p.number_err && (
                                                    <p className={styles.error}>{p.number_err} </p>
                                                )
                                            }
                                        </div>

                                        {
                                            ind !== 0 && (
                                                <div className={styles["deletB-ad"]} onClick={() => removeReference(ind)} >
                                                    <img src="/icon-delete.svg" alt="" style={{ width: '16px' }} />
                                                </div>
                                            )
                                        }
                                    </div>

                                )
                            })
                        }
                    </div>


                    <div className={`${styles.tncCheckBoxWrap}`}>
                        <label><input type="checkbox" onChange={() => setAgree(!agree)} checked={agree} name="ckbx_tnc" id="ckBxTnc" /><span className={`${styles.iconCheck}`} ></span>By proceeding, I agree with <a href="">T&C</a></label>
                        <span className={`${styles.errorCkBxLine}`}>Please agree to Terms & Conditions</span>
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
