import React, { ReactNode, useEffect, useRef, useState } from 'react'
import ClientPortal from './ClientPortal'
import styles from './Modal.module.scss'

function Modal({ children, open, onClose }: ({ open: boolean, onClose: () => void, children: (e: () => void) => ReactNode })) {
    const modalRef = useRef<HTMLDivElement>(null)
    const [close, setClose] = useState(false);
    const [mouseDown, setMouseDown] = useState(false);
    const [mouseMove, setMouseMove] = useState(false);

    const onCloseHandler = () => setTimeout(() => { setClose(false); onClose() }, 450);
    const onCloseHandle = () => setClose(true);

    useEffect(() => {
        if (close) {
            onCloseHandler()
        }
    }, [close, onCloseHandler])

    return (
        <ClientPortal selector='modal-portal' show={open}>
            <div className={`${styles.modal} ${close && styles.out}`} onMouseMove={() => mouseDown && setMouseMove(true)} onMouseDown={() => setMouseDown(true)} onMouseUp={(e) => { setMouseDown(false); if (!mouseMove) { let target = e.target as Node; if (!modalRef.current?.contains(target)) { onCloseHandle(); setMouseMove(false); setMouseDown(false) }; } else { setMouseMove(false); } }}>
                <div className={`${styles.modalInner}`} ref={modalRef}>
                    {children(() => onCloseHandle())}
                </div>
            </div>
        </ClientPortal>
    )
}

export default Modal
