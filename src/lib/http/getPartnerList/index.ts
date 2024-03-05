import http from "../http";

const getPartnerList = async () => {
    const res = await http('/partners/getPartnerList');
    const { data } = await res.json()

    return data;
}

export default getPartnerList;