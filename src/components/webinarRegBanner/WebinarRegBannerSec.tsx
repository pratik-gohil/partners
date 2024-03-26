"use client";
import React, { useEffect, useState } from "react";
import styles from "./WebinarRegBannerSec.module.scss";
import useUserAgent from "@/lib/hooks/useUserAgent";
import Image from "next/image";
import http from "@/lib/http/http";
import BannerBgImgDesk from "../../../public/horizonatlbanners/horibanner_desktop.webp";
import BannerBgImgMob from "../../../public/horizonatlbanners/horibanner_mobile.webp";
import BannerDateIcon from "../../../public/horizonatlbanners/calicon.webp";
import BannerTimeIcon from "../../../public/horizonatlbanners/timeicon.webp";
import dynamic from "next/dynamic";
import Modal from "@/components/Modal";


const WebinarRegModal = dynamic(
  () => import("@/components/webinarModalBox/WebinarModalBox"),
  { ssr: false }
);

const WebinarRegBannerSec = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const currentDevice = useUserAgent();
  const [webLink, setwebLink] = useState(false);
  const [webPop, setwebPop] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [webinarBanner,setwebinarBanner]=useState(false);
  const [bannerData,setBannerData]=useState({titleVal:'',dateVal:'',timeVal:'',urlVal:''})


  useEffect(() => {
    setIsDesktop(currentDevice.isDesktop());
  }, [currentDevice]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    
       const res = await http("/partners/getWebinarEvent", {
          method: "GET",
         headers: {
           "Content-Type": "application/json",
         },
        });
       

       const data = await res.json();
       setBannerData({...bannerData,titleVal:data.data.title,dateVal:data.data.date,timeVal:data.data.time,urlVal:data.data.url})
      if(data.data.isActive==true)
      {
        setwebinarBanner(true);
        if (data.data.url == "" || data.data.url == null) 
        {
            setwebPop(true);
        } 
        else 
        {
            setwebLink(true);
        }
      }
      else
      {
        setwebinarBanner(false);
      }      
    
  };

  return (
    <>
      {webinarBanner &&(<div className={`${styles.webinarRegBannerSec}`}>
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
              { __html: bannerData.titleVal}
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
      </div>)}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        {(onClose) => <WebinarRegModal onClose={onClose} />}
      </Modal>
    </>
  );
};

export default WebinarRegBannerSec;
