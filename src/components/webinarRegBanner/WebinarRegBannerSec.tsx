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

  useEffect(() => {
    setIsDesktop(currentDevice.isDesktop());
  }, [currentDevice]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
     try {
       const res = await http("/partners/getWebinarEvent", {
          method: "GET",
         headers: {
           "Content-Type": "application/json",
         },
        });
        // const data = {"message": "Success","status": 0,"data": {"id": 7,"title": "Join the webinar to discover <b>Mirae Asset Partners </b>Program","button": "Register for Webinar Now",
        // "date": "Friday, 15th March, 2024",
        // "time": "4:30 to 6:00 pm",
        // "url": null,
        // "isActive": true}}

       const data = await res.json();
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

    } catch (error) 
    {
      console.log("Error mssg is", error);
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
            <p className={`${styles.bannerTitle}`}>
              Join the webinar to discover{" "}
              <span>Mirae Asset Partners Program</span>
            </p>
            <div className={`${styles.textCenter}`}>
              <div className={`${styles.timerWrap}`}>
                <img
                  src={`${BannerDateIcon.src}`}
                  alt="Friday, 15th March, 2024"
                  title="Friday, 15th March, 2024"
                />
                Friday, 15th March, 2024
                <img
                  src={`${BannerTimeIcon.src}`}
                  alt="4:30 to 6:00 pm"
                  title="4:30 to 6:00 pm"
                  className={`${styles.timeicon}`}
                />
                4:30 to 6:00 pm
              </div>
            </div>
          </div>
          <div>
            {webLink && (
              <a
                id="link"
                href="https://events.teams.microsoft.com/event/8c5f96c9-b625-41c1-89e7-230df7ee9093@8525e18d-2cce-43ce-8106-64d085abd87a"
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
