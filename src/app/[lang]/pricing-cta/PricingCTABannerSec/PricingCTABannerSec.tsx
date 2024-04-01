"use client";
import React from "react";
import styles from "./PricingCTABannerSec.module.scss";
import Image from "next/image";
import RetainQueryLink from "@/components/RetainQueryLink/RetainQueryLink";
import { validatePhone } from "@/lib/constants/common";
import { useForm } from "react-hook-form";
import { registerPartnerAPI } from "@/lib/utils/registerPartnerAPI";
import { useSearchParams } from "next/navigation";

function PricingCTABannerSec() {
  type FormData = { mobile: string; agree: boolean };
  const { register, handleSubmit, watch, setValue, formState: { errors }, } = useForm<FormData>({ mode: "onBlur" });
  const watchAgree = watch("agree", true);
  const searchParams = useSearchParams()
  const {
    utm_source,
    utm_medium,
    utm_campaign,
    utm_adgroup,
    utm_creative,
    utm_device,
    utm_content,
    utm_term,
    gclid,
  } = Object.fromEntries(searchParams)

  const onSubmit = async ({ mobile }: any) => {
    const res = await registerPartnerAPI({
      mobile,
      leadSquaredDetails: {
        utmSource: utm_source || "",
        utmMedium: utm_medium || "",
        utmCampaign: utm_campaign || "",
        utmAdgroup: utm_adgroup || "",
        utmTerm: utm_term || "",
        utmContent: utm_content || "",
        utmCreative: utm_creative || "",
        utmDevice: utm_device || "",
        url: utm_medium || "",
        gclid: gclid || "",
        fromPage: "pricing-cta"
      }
    });

    const { data } = await res.json()
    if (data.url) {
      window.open(data.url)
    }
  };

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
                  onInput={(e: any) => setValue("mobile", e.target.value.replace(/([a-zA-Z]|\W)+/g, ""))}
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
