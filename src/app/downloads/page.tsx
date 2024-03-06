import DownloadsLinksSec from "./DownloadsLinksSec/DownloadsLinksSec";
import OtpModal from "@/components/otpModal/OtpModal";
import ThankYouOtpModal from "@/components/thankYouOtpModal/ThankYouOtpModal";

export default function DownloadsPage() {
  return (
    <>

      <DownloadsLinksSec />
      <OtpModal />
      <ThankYouOtpModal/>
    </>
  );
}
