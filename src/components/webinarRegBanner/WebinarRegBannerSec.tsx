"use client";
import React, { useEffect, useState } from "react";
import styles from "./WebinarRegBannerSec.module.scss";
import useUserAgent from "@/lib/hooks/useUserAgent";
import Image from "next/image";
import dynamic from "next/dynamic";
import Modal from "@/components/Modal";
import BannerBgImgDesk from "@/public/horizonatlbanners/horibanner_desktop.webp";
import BannerBgImgMob from "@/public/horizonatlbanners/horibanner_mobile.webp";
import BannerDateIcon from "@/public/horizonatlbanners/calicon.webp";
import BannerTimeIcon from "@/public/horizonatlbanners/timeicon.webp";

const WebinarRegModal = dynamic(
  () => import("@/components/webinarModalBox/WebinarModalBox"),
  { ssr: false }
);

const WebinarRegBannerSec = ({ isActive, webPop, webLink, bannerData, isDesktopSSR }: any) => {
  const [modalOpen, setModalOpen] = useState(false);
  const currentDevice = useUserAgent();
  const [isDesktop, setIsDesktop] = useState(isDesktopSSR);

  useEffect(() => {
    const updatedIsDesktop = currentDevice.isDesktop();
    if (updatedIsDesktop !== isDesktop) {
      setIsDesktop(updatedIsDesktop);
    }
  }, [currentDevice]);

  return (
    <>
      {isActive && (
        <div className={`${styles.webinarRegBannerSec}`}>
          {isDesktop ? (
            <Image
              priority={true}
              fill
              src={`${BannerBgImgDesk.src}`}
              className={`${styles.bannerBgImgDesk}`}
              alt="webinar"
              title="webinar"
            />
          ) : (
            <Image
              priority={true}
              fill
              src={`${BannerBgImgMob.src}`}
              className={`${styles.bannerBgImgMob}`}
              alt="webinar"
              title="webinar"
            />
          )}
          <div className={`${styles.webinarInnerBox}`}>
            <div>
              <p className={`${styles.bannerTitle}`}
                dangerouslySetInnerHTML={
                  { __html: bannerData.titleVal }
                }>
              </p>
              <div className={`${styles.textCenter}`}>
                <div className={`${styles.timerWrap}`}>
                  <img
                    src={`${BannerDateIcon.src}`}
                    alt={bannerData.dateVal}
                  />
                  {bannerData.dateVal}
                  <img
                    src={`${BannerTimeIcon.src}`}
                    alt={bannerData.timeVal}
                    className={`${styles.timeicon}`}
                  />
                  {bannerData.timeVal}
                </div>
              </div>
            </div>
            <div>
              {webLink && (
                <a
                  id="link"
                  href={bannerData.urlVal}
                  target="_blank"
                  className={`${styles.btnBanner}`}
                >
                  Register for Webinar Now
                </a>
              )}
              {webPop && (
                <button
                  id="webBut"
                  className={`${styles.btnBanner}`}
                  onClick={() => setModalOpen(true)}
                >
                  Register for Webinar Now
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        {(onClose) => <WebinarRegModal onClose={onClose} />}
      </Modal>
    </>
  );
};

export default WebinarRegBannerSec;
