import http from "../http";

const getPartnerList = async () => {
    const res = await http('/partners/getPartnerList', {}, {ssr: true});
    const { data } = await res.json()

    return data;
}

export default getPartnerList;