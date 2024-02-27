import React from 'react'
import styles from './StartPartnerReferringSec.module.scss' 

function StartPartnerReferringSec() {
    return (
        <section className={`${styles.startPartnerReferringSec}`}>
            <div className={`${styles.maContainer}`}>
                <h1 className={`${styles.secTitle}`}>Start Partner<span>Referring</span></h1>
        
                <div className={`${styles.formHolder}`}>
                    <div className={`${styles.referrbarInpupat}`} id="inputsContainer">
                        <div className={`${styles.flex} ${styles.formFieldWrap}`}> 
                            <div className={`${styles.formGroup}`}>
                                <input type="text" id="ProspectName" className={`${styles.formControl}`} placeholder="Your Name" />
                            </div> 
                            <div className={`${styles.formGroup}`}>
                                <input type="text" id="ProspectNumber" className={`${styles.formControl} ${styles.inputBox}`} placeholder="Your Mobile No." />
                            </div> 
                        </div>
                        <div className={`${styles.flex} ${styles.formFieldWrap}`}>  
                            <div className={`${styles.formGroup}`}>
                                <input type="text" id="RefereeName" className={`${styles.formControl}`} placeholder="Reference Name" />
                            </div> 
                            <div className={`${styles.formGroup}`}>
                                <input type="text" id="RefereeNumber" className={`${styles.formControl} ${styles.inputBox}`} placeholder="Reference Mobile No." />
                            </div>
                        </div>
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
                        <a href="javascript:void(0)" > <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M64 0C28.7082 0 0 28.7082 0 64C0 99.2918 28.7082 128 64 128C99.2918 128 128 99.2868 128 64C128 28.7132 99.2918 0 64 0ZM64 118.085C34.1812 118.085 9.91475 93.8237 9.91475 64C9.91475 34.1763 34.1812 9.91475 64 9.91475C93.8188 9.91475 118.085 34.1763 118.085 64C118.085 93.8237 93.8237 118.085 64 118.085Z" fill="#F08200"/> <path d="M88.7854 58.5917H68.9559V38.7622C68.9559 36.0257 66.7399 33.8047 63.9984 33.8047C61.2569 33.8047 59.0409 36.0257 59.0409 38.7622V58.5917H39.2114C36.4699 58.5917 34.2539 60.8127 34.2539 63.5492C34.2539 66.2857 36.4699 68.5067 39.2114 68.5067H59.0409V88.3362C59.0409 91.0727 61.2569 93.2937 63.9984 93.2937C66.7399 93.2937 68.9559 91.0727 68.9559 88.3362V68.5067H88.7854C91.5269 68.5067 93.7429 66.2857 93.7429 63.5492C93.7429 60.8127 91.5269 58.5917 88.7854 58.5917Z" fill="#F08200"/> </svg> Add</a>
                        <a href="javascript:void(0)">Refer Now</a>
                    </div>
                </div>    
                     





            </div>
        </section>
    )
}

export default StartPartnerReferringSec
 