import React, { ReactNode, useEffect, useRef, useState } from 'react'
import ClientPortal from './ClientPortal'
import styles from './Modal.module.scss'

function Modal({ children, open, onClose }: ({ open: boolean, onClose: () => void, children: (e: () => void) => ReactNode })) {
    const modalRef = useRef<HTMLDivElement>(null)
    const [close, setClose] = useState(false);

    const onCloseHandler = () => setTimeout(() => { setClose(false); onClose() }, 450);

    useEffect(() => {
        if (close) {
            onCloseHandler()
        }
    }, [close, onCloseHandler])

    return (
        <ClientPortal selector='modal-portal' show={open}>
            <div className={`${styles.modal} ${close && styles.out}`} onClick={(e) => { let target = e.target as Node; if (!modalRef.current?.contains(target)) { setClose(true) }; }}>
                <div className={`${styles.modalInner}`} ref={modalRef}>
                    {children(() => setClose(true))}
                </div>
            </div>
        </ClientPortal>
    )
}

export default Modal
