"use client";
import React, { useState } from 'react'
import WebinarRegFormModal from '../webinarRegFormModal/WebinarRegFormModal';
import ThankYouWebinarRegModal from '../thankYouWebinarRegModal/ThankYouWebinarRegModal';

const WebinarModalBox = ({ onClose }: { onClose: () => void }) => {
    const [index, setIndex] = useState(1);
    return (
        <>

            {index === 0 && (
                <WebinarRegFormModal onClose={onClose} setIndex={setIndex} />
            )}

            {index === 1 && (
                <ThankYouWebinarRegModal onClose={onClose} setIndex={setIndex} />
            )}
        </>
    )
}

export default WebinarModalBox;

