import http from "../http/http";

export const registerPartnerAPI = async (data: any) => {
  const res = await http("/partners/registerPartner", {
    method: "POST",
    body: JSON.stringify(
      data
    ),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res;
}