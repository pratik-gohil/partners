"use client";
import React, { useState } from 'react'
import GrowthModal from '../growthModal/GrowthModal';
import ThankYouModal from '../thankyouModal/ThankYouModal';
import PreRegisterMoad from '../PreRegisterModal/PreRegisterMoad';

const FormModal = ({ onClose }: { onClose: () => void }) => {
    const [index, setIndex] = useState(0);
    const [growthModalState, setGrowthModalState] = useState();
    return (
        <>
            {index === 0 && (
                <PreRegisterMoad setGrowthModalState={setGrowthModalState} onClose={onClose} setIndex={setIndex} />
            )}

            {index === 1 && (
                <GrowthModal growthModalState={growthModalState} onClose={onClose} setIndex={setIndex} />
            )}

            {index === 2 && (
                <ThankYouModal onClose={onClose} />
            )}
        </>
    )
}

export default FormModal;

