"use client";
import React, { useState } from 'react'
import GrowthModal from '@/components/growthModal/GrowthModal';
import ThankYouModal from '@/components/thankyouModal/ThankYouModal';
import PreRegisterMoad from '@/components/PreRegisterModal/PreRegisterMoad';

const FormModal = ({ onClose }: { onClose: () => void }) => {
    const [index, setIndex] = useState(0);
    const [growthModalState, setGrowthModalState] = useState();
    const [refCode, setRefCode] = useState();

    return (
        <>
            {index === 0 && (
                <PreRegisterMoad setGrowthModalState={setGrowthModalState} onClose={onClose} setIndex={setIndex} />
            )}

            {index === 1 && (
                <GrowthModal growthModalState={growthModalState} setRefCode={setRefCode} onClose={onClose} setIndex={setIndex} />
            )}

            {index === 2 && (
                <ThankYouModal onClose={onClose} refCode={refCode} />
            )}
        </>
    )
}

export default FormModal;

