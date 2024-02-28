import React, { useEffect, useState } from 'react'
import ClientPortal from './ClientPortal'
import styles from './Modal.module.scss'

function Modal({ children, open, onClose }: React.PropsWithChildren<{ open: boolean, onClose: () => void }>) {
    const [close, setClose] = useState(false);
    useEffect(() => {
        if (close) {
            setTimeout(() => { setClose(false); onClose() }, 400);

        }
    }, [close])

    return (
        <ClientPortal selector='modal-portal' show={open}>
            <div className={`${styles.modal} ${close && styles.out}`} onClick={function () { setClose(true); }} style={{ height: '100vh', width: '100vw', zIndex: 10, position: 'absolute', inset: 0, background: 'rgba(0,0,0,.5)' }}>
                <div onClick={e => e.stopPropagation()} style={{ position: 'absolute', bottom: '0%', left: '50%', transform: 'translateX(-50%) translateY(-50%)' }}>
                    {children}
                </div>
            </div>
        </ClientPortal>
    )
}

export default Modal
