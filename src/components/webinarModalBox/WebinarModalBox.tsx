"use client";
import React, { useState } from 'react'
import WebinarRegFormModal from '@/components/webinarRegFormModal/WebinarRegFormModal';
import ThankYouWebinarRegModal from '@/components/thankYouWebinarRegModal/ThankYouWebinarRegModal';

const WebinarModalBox = ({ onClose }: { onClose: () => void }) => {
    const [index, setIndex] = useState(0);
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

