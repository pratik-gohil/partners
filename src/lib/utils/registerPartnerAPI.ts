import http from "../http/http";

export const registerPartnerAPI = async (data: any, urlString: string, fromPage: string) =>
{
    const pageURL = new URL(urlString);
    const res = await http("/partners/registerPartner", {
        method: "POST",
        body: JSON.stringify({
          mobile: data.mobile,
          leadSquaredDetails: {
            utmSource: pageURL.searchParams.get("utm_source") || "",
            utmMedium: pageURL.searchParams.get("utm_medium") || "",
            utmCampaign: pageURL.searchParams.get("utm_campaign") || "",
            utmAdgroup: pageURL.searchParams.get("utm_adgroup") || "",
            utmTerm: pageURL.searchParams.get("utm_term") || "",
            utmContent: pageURL.searchParams.get("utm_content") || "",
            utmCreative: pageURL.searchParams.get("utm_creative") || "",
            utmDevice: pageURL.searchParams.get("utm_device") || "",
            fromPage: fromPage || "",
            url: pageURL.searchParams.get("utm_medium") || "",
            gclid: pageURL.searchParams.get("gclid") || "",
          },
        }),
       
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res;
}