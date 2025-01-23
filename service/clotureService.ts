import axiosInstance from "@/lib/axios";

import Cookies from "js-cookie";

export const getCloture = async ({ queryKey }: { queryKey: [number,number,number,string,string] }) => {
    const page = queryKey[0];
    const caisse = queryKey[1];
    const utilisateur = queryKey[2];
    const startDate = queryKey[3];
    const endDate = queryKey[4];
    try {
        const { data } = await axiosInstance.get("/comptoire/Cloture/", {
            params: {
                 page: page,
                 caisse: caisse === 0 ? "" : caisse,
                 utilisateur: utilisateur === 0 ? "" : utilisateur,
                 start_date: startDate,
                 end_date: endDate,
              
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });

        console.log('cloture data');
        console.log(data);
      
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};