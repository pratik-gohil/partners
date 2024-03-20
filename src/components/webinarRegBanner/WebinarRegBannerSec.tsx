"use client";
import React, { useEffect, useState } from 'react'
import styles from "./WebinarRegBannerSec.module.scss";
import useUserAgent from '@/lib/hooks/useUserAgent';
import Image from 'next/image';

import BannerBgImgDesk from "../../../public/horizonatlbanners/horibanner_desktop.webp";
import BannerBgImgMob from "../../../public/horizonatlbanners/horibanner_mobile.webp";
import BannerDateIcon from "../../../public/horizonatlbanners/calicon.webp";
import BannerTimeIcon from "../../../public/horizonatlbanners/timeicon.webp";

import dynamic from 'next/dynamic';
import Modal from '@/components/Modal';
const WebinarRegModal = dynamic(() => import('@/components/webinarModalBox/WebinarModalBox'), { ssr: false });

const WebinarRegBannerSec = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const currentDevice = useUserAgent()

    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        setIsDesktop(currentDevice.isDesktop())
    }, [currentDevice])

    return (
        <>
            <div className={`${styles.webinarRegBannerSec}`}>
                {isDesktop ?
                    <Image priority={false} fill src={`${BannerBgImgDesk.src}`} className={`${styles.bannerBgImgDesk}`} alt="webinar" title="webinar" />
                    :
                    <Image priority={false} fill src={`${BannerBgImgMob.src}`} className={`${styles.bannerBgImgMob}`} alt="webinar" title="webinar" />
                }
                <div className={`${styles.webinarInnerBox}`}>
                    <div>
                        <p className={`${styles.bannerTitle}`}>Join the webinar to discover <span>Mirae Asset Partners Program</span></p>
                        <div className={`${styles.textCenter}`}>
                            <div className={`${styles.timerWrap}`}>
                                <Image width={20} height={20} src={`${BannerDateIcon.src}`} alt="Friday, 15th March, 2024" title="Friday, 15th March, 2024" />Friday, 15th March, 2024
                                <Image width={20} height={20} src={`${BannerTimeIcon.src}`} alt="4:30 to 6:00 pm" title="4:30 to 6:00 pm" className={`${styles.timeicon}`} />4:30 to 6:00 pm
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className={`${styles.btnBanner}`} onClick={() => setModalOpen(true)}>Register for Webinar Now</button>
                    </div>
                </div>
            </div>

            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                {(onClose) => (<WebinarRegModal onClose={onClose} />)}
            </Modal>
        </>
    )
}

export default WebinarRegBannerSec;

