"use client";
import React, { useState } from "react";
import styles from "./PricingCTABannerSec.module.scss";
import Image from "next/image";
import RetainQueryLink from "../../../components/RetainQueryLink/RetainQueryLink";
import { validatePhone, numericOnly } from "@/lib/constants/common";
import { useForm } from "react-hook-form";
import { registerPartnerAPI } from "@/lib/utils/registerPartnerAPI";
import http from "@/lib/http/http";





function PricingCTABannerSec() 
{ 
  type FormData = { mobile: string; agree: boolean };
  const {register,handleSubmit,watch,formState: { errors },} = useForm<FormData>({ mode: "all" });
  const watchAgree = watch("agree", true);
  
//   const[urlData,seturlData]=useState('');
  

  
//   function decorateUrl(a: any) {
//         var ga = window[window['GoogleAnalyticsObject']];
//         var tracker;
//         if (ga && typeof ga.getAll === 'function') {
//             tracker = ga.getAll()[0]; // Uses the first tracker created on the page
//             let urlString = (new window.gaplugins.Linker(tracker)).decorate(a);
//             console.log(urlString);
//             return urlString;
//         } else {
//             console.log('Google Analytics not available or properly initialized');
//             return a; // Return the original URL as is if Google Analytics is not available
//         }
//     }
    
  const onSubmit = async (data: any) => 
  {

    // console.log("Test" + window.location.href);
    // const pageURL = new URL(window.location.href);
    // console.log("UTM MEDIUM " + pageURL.searchParams.get("utm_medium"));
    // const res = await http("/partners/registerPartner", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     mobile: data.mobile,
    //     leadSquaredDetails: {
    //       utmSource: pageURL.searchParams.get("utm_source"),
    //       utmMedium: pageURL.searchParams.get("utm_medium"),
    //       utmCampaign: pageURL.searchParams.get("utm_campaign"),
    //       utmAdgroup: pageURL.searchParams.get("utm_adgroup"),
    //       utmTerm: pageURL.searchParams.get("utm_term"),
    //       utmContent: pageURL.searchParams.get("utm_content"),
    //       utmCreative: pageURL.searchParams.get("utm_creative"),
    //       utmDevice: pageURL.searchParams.get("utm_device"),
    //       fromPage: pageURL.searchParams.get("utm_medium"),
    //       url: pageURL.searchParams.get("utm_medium"),
    //     },
    //   }),
     
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    const res = registerPartnerAPI(data, window.location.href, "Pricing-cta");
    console.log(res);
    // res = 
    // const datares = await res.json();
    // const url = datares.data.url;
    // console.log(datares);
    // seturlData(url)
      
    // redirect(url);
    
   
  };

  function redirect(url: string) {
        window.location.href = url;
    }

   

  return (
    <>
      <section className={`${styles.pricingCTABannerSec}`}>
        <div className={`${styles.maContainer}`}>
          <div className={`${styles.pricingBannerBlock}`}>
            <div className={`${styles.listbanner2Li}`}>
              <ul>
                <li>Unlimited</li>
                <li>Unbelievable</li>
              </ul>
            </div>
            <div className={`${styles.flex} ${styles.imgWrap}`}>
              <div className={`${styles.pricingBannerImgBlock}`}>
                <Image
                  width={500}
                  height={500}
                  src="/pricing-banner-100-perce-img.webp"
                  alt="pricing"
                />
              </div>
              <div className={`${styles.pricingBannerRightBlock}`}>
                <div className={`${styles.brotextBr}`}>
                  Sharing Across <span>8</span>
                  <br />
                  Revenue Streams!
                </div>
              </div>
            </div>

            <div className={`${styles.formHolder}`}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                id="form-open-account"
                className={`${styles.formBox}`}
              >
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  id="txtMobileNo"
                  onKeyDown={numericOnly}
                  {...register("mobile", {
                    ...validatePhone,
                  })}
                  maxLength={10}
                />
                <button className={`${styles.submitButton}`} id="GetStarted">
                  Become a Partner{" "}
                </button>
              </form>
              {errors.mobile && (
                <span className={`${styles.errorCkBxLine}`}>
                  {errors.mobile.message}
                </span>
              )}
              <div className={`${styles.tncCheckBoxWrap}`}>
                <label>
                  <input
                    type="checkbox"
                    required
                    defaultChecked
                    {...register("agree", {
                      required: "Please agree to Terms & Conditions",
                    })}
                  />
                  <span className={`${styles.iconCheck}`}></span>I have read &
                  understood the{" "}
                  <RetainQueryLink href="/referral-terms-and-conditions">
                    T&C and privacy policy
                  </RetainQueryLink>
                </label>
                {!watchAgree && (
                  <span className={`${styles.errorCkBxLine}`}>
                    {" "}
                    {
                      <p>
                        Please agree to all Terms & Conditions and Privacy
                        Policy
                      </p>
                    }{" "}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PricingCTABannerSec;
