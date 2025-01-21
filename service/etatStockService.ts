import axiosInstance from "@/lib/axios";

import Cookies from "js-cookie";

export const getEtatStock = async ({ queryKey }: { queryKey: [number,string,string,string,number ] }) => {

  const page = queryKey[0];
  const search = queryKey[1];
  const startDate = queryKey[2];
  const endDate = queryKey[3];
  const category = queryKey[4];
  
    try {
        const { data } = await axiosInstance.get("/produits/EtatStockViewset/", {
          params: {
            page: page,
            search: search,
            start_date: startDate,
            end_date: endDate,
            category: category === 0 ? "" : category,
                     
          
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