import http from "@/lib/http/http";

const getPartnerList = async () => 
{
    console.log("func called");
    
       const res = await http("/partners/getPartnerList", {
        method: "GET",
        headers: 
        {
           "Content-Type": "application/json",
         },
       });

      const data = await res.json();
      console.log("44", data);
         return data 
      
  };



export default getPartnerList;