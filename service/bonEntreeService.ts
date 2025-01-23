import axiosInstance from "@/lib/axios";

import Cookies from "js-cookie";

export const getBonEntree = async ({ queryKey }: { queryKey: [number, string,string,string,number,number] }) => {
    const page = queryKey[0];
    const search = queryKey[1];
    const startDate = queryKey[2];
    const endDate = queryKey[3];
    const marque = queryKey[4];
    const entrepot = queryKey[5];
    try {
        const { data } = await axiosInstance.get("/inventory/BonEntry/", {
            params: {
                page: page,
                search: search,
                start_date: startDate,
                end_date: endDate,
                entrepot: entrepot === 0 ? "" : entrepot,
                marque: marque === 0 ? "" : marque,
           
              
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