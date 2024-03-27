"use client";
import React from 'react'
import ScoreModalData from '@/components/scoreDataModal/ScoreDataModal';

const ScoreModal = ({ onClose }: { onClose: () => void }) => {
    return (
        <>
            <ScoreModalData onClose={onClose} />
        </>
    )
}

export default ScoreModal;

