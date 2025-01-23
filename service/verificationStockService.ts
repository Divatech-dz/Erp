import axiosInstance from "@/lib/axios";

import Cookies from "js-cookie";

export const getVerificationStock = async ({ queryKey }: { queryKey: [number,number,number] }) => {
  const page = queryKey[0];
  const category = queryKey[1];
  const entrepot = queryKey[2];
 // const decale = queryKey[3];
  
    try {
        const { data } = await axiosInstance.get("/produits/StockState", {
          params: {
            page: page,
            category: category === 0 ? "" : category,
            entrepot: entrepot === 0 ? "" : entrepot,
         //   decale: decale,
          
         
       },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};