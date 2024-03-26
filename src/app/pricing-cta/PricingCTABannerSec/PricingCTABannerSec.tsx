"use client";
import React from "react";
import styles from "./PricingCTABannerSec.module.scss";
import Image from "next/image";
import RetainQueryLink from "../../../components/RetainQueryLink/RetainQueryLink";
import { validatePhone, numericOnly } from "@/lib/constants/common";
import { useForm } from "react-hook-form";
import http from "@/lib/http/http";


function PricingCTABannerSec() 
{ type FormData = { mobile: string; agree: boolean };
  const {register,handleSubmit,watch,formState: { errors },} = useForm<FormData>({ mode: "all" });
  const watchAgree = watch("agree", true);

  const onSubmit = async (data: any) => 
  {     
    const res = await http("/partners/registerPartner", {
      method: "POST",
      body: JSON.stringify({
        mobile: data.mobile,
        leadSquaredDetails: {
          utmSource: "",
          utmMedium: "",
          utmCampaign: "",
          utmAdgroup: "",
          utmTerm: "",
          utmContent: "",
          utmCreative: "",
          utmDevice: "",
          fromPage: "",
          url: "",
        },
      }),
     
      headers: {
        "Content-Type": "application/json",
      },
    });

    const datares = await res.json();
    const url = datares.data.url;
      
    redirect(url);
    
   
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
