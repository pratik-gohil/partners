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
                    <div className={`${styles.formInputsContainer}`} id="inputsContainer">
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
                                                    {/* <img src="/icon-delete.svg" alt="" /> */}
<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="448" height="512"><path fill-rule="evenodd"   d="m438.1 81.2c2 0.8 3.7 2 5.2 3.5c1.5 1.5 2.7 3.2 3.5 5.2c0.8 1.9 1.2 4 1.2 6.1v16c0 2.1-0.4 4.2-1.2 6.1c-0.8 2-2 3.7-3.5 5.2c-1.5 1.5-3.2 2.7-5.2 3.5c-1.9 0.8-4 1.2-6.1 1.2h-16v336c0 6.3-1.2 12.5-3.7 18.4c-2.4 5.8-5.9 11.1-10.4 15.5c-4.4 4.5-9.7 8-15.5 10.4c-5.9 2.5-12.1 3.7-18.4 3.7h-288c-6.3 0-12.5-1.2-18.4-3.7c-5.8-2.4-11.1-5.9-15.5-10.4c-4.5-4.4-8-9.7-10.4-15.5c-2.5-5.9-3.7-12.1-3.7-18.4v-336h-16c-2.1 0-4.2-0.4-6.1-1.2c-2-0.8-3.7-2-5.2-3.5c-1.5-1.5-2.7-3.2-3.5-5.2c-0.8-1.9-1.2-4-1.2-6.1v-16c0-2.1 0.4-4.2 1.2-6.1c0.8-2 2-3.7 3.5-5.2c1.5-1.5 3.2-2.7 5.2-3.5c1.9-0.8 4-1.2 6.1-1.2h82.4l34-56.7c2.2-3.5 4.7-6.8 7.7-9.7c2.9-2.9 6.2-5.3 9.8-7.4c3.6-2 7.5-3.6 11.5-4.6c4-1.1 8.1-1.6 12.2-1.6h100.8c4.1 0 8.3 0.5 12.2 1.6c4 1 7.9 2.6 11.5 4.6c3.6 2.1 6.9 4.5 9.8 7.4c3 2.9 5.6 6.2 7.7 9.7l34 56.7h82.4c2.1 0 4.2 0.4 6.1 1.2zm-70.1 46.8h-288v336h288zm-213.6-48h139.2l-17.5-29.1q-0.4-0.7-0.9-1.2q-0.6-0.5-1.2-0.9q-0.7-0.4-1.5-0.6q-0.7-0.2-1.5-0.2h-94q-0.8 0-1.5 0.2q-0.8 0.2-1.5 0.6q-0.6 0.4-1.2 0.9q-0.6 0.5-1 1.2zm109.1 335.1c-1.5-0.6-2.8-1.5-3.9-2.6c-1.1-1.1-2-2.4-2.6-3.9c-0.6-1.5-1-3-1-4.6v-216c0-1.6 0.4-3.1 1-4.6c0.6-1.4 1.5-2.8 2.6-3.9c1.1-1.1 2.4-2 3.9-2.6c1.4-0.6 3-0.9 4.5-0.9h24c1.6 0 3.2 0.3 4.6 0.9c1.5 0.6 2.8 1.5 3.9 2.6c1.1 1.1 2 2.5 2.6 3.9c0.6 1.5 0.9 3 0.9 4.6v216c0 1.6-0.3 3.1-0.9 4.6c-0.6 1.5-1.5 2.8-2.6 3.9c-1.1 1.1-2.4 2-3.9 2.6c-1.4 0.6-3 0.9-4.6 0.9h-24c-1.5 0-3.1-0.3-4.5-0.9zm-112 0c-1.5-0.6-2.8-1.5-3.9-2.6c-1.1-1.1-2-2.4-2.6-3.9c-0.6-1.5-1-3-1-4.6v-216c0-1.6 0.4-3.1 1-4.6c0.6-1.4 1.5-2.8 2.6-3.9c1.1-1.1 2.4-2 3.9-2.6c1.4-0.6 3-0.9 4.5-0.9h24c1.6 0 3.2 0.3 4.6 0.9c1.5 0.6 2.8 1.5 3.9 2.6c1.1 1.1 2 2.5 2.6 3.9c0.6 1.5 0.9 3 0.9 4.6v216c0 1.6-0.3 3.1-0.9 4.6c-0.6 1.5-1.5 2.8-2.6 3.9c-1.1 1.1-2.4 2-3.9 2.6c-1.4 0.6-3 0.9-4.6 0.9h-24c-1.5 0-3.1-0.3-4.5-0.9z" /></svg> </div>
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
                        <a onClick={addField} className={`${styles.addBtn}`}> <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M64 0C28.7082 0 0 28.7082 0 64C0 99.2918 28.7082 128 64 128C99.2918 128 128 99.2868 128 64C128 28.7132 99.2918 0 64 0ZM64 118.085C34.1812 118.085 9.91475 93.8237 9.91475 64C9.91475 34.1763 34.1812 9.91475 64 9.91475C93.8188 9.91475 118.085 34.1763 118.085 64C118.085 93.8237 93.8237 118.085 64 118.085Z" fill="#F08200" /> <path d="M88.7854 58.5917H68.9559V38.7622C68.9559 36.0257 66.7399 33.8047 63.9984 33.8047C61.2569 33.8047 59.0409 36.0257 59.0409 38.7622V58.5917H39.2114C36.4699 58.5917 34.2539 60.8127 34.2539 63.5492C34.2539 66.2857 36.4699 68.5067 39.2114 68.5067H59.0409V88.3362C59.0409 91.0727 61.2569 93.2937 63.9984 93.2937C66.7399 93.2937 68.9559 91.0727 68.9559 88.3362V68.5067H88.7854C91.5269 68.5067 93.7429 66.2857 93.7429 63.5492C93.7429 60.8127 91.5269 58.5917 88.7854 58.5917Z" fill="#F08200" /> </svg> Add</a>
                        <a onClick={handleFormSubmit}  className={`${styles.referBtn}`}>Refer Now</a>
                    </div>
                </form>

            </div>
        </section>
    )
}

export default StartPartnerReferringSec
