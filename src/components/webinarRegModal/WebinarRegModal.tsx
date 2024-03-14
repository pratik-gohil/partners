import React from 'react'
import styles from "./WebinarRegModal.module.scss";
 

function WebinarRegModal({ setIndex, onClose, setGrowthModalState }: any) {
    

    return (
        <div className={`${styles.formWrap}`}>
            <div className={`${styles.modalHeader}`}>
                <h2 className={`${styles.modaltitle}`}>Register For Webinar</h2>
                <button type="button" className={`${styles.closepp}`} aria-label="Close" onClick={onClose}>
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className={`${styles.modalBody}`}>
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur corrupti excepturi obcaecati impedit qui necessitatibus adipisci non aliquam repellendus quo iste eaque, libero quaerat, illo exercitationem tenetur? Deleniti, neque omnis. Eius, fugit rem. Magnam ad facere impedit, porro eaque vel ea corrupti deleniti nostrum ipsa id inventore, quam voluptas labore.
            </div>
        </div>
    )
}

export default WebinarRegModal
