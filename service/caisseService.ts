import axiosInstance from "@/lib/axios";

import Cookies from "js-cookie";

export const getCaisse = async ({ queryKey }: { queryKey: [number, string] }) => {
    const page = queryKey[0];
    const search = queryKey[1];
    
    try {
        const { data } = await axiosInstance.get("/comptoire/Cloture/", {
            params: {
                page: page,
                search: search,
           
              
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