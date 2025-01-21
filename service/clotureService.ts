import axiosInstance from "@/lib/axios";

import Cookies from "js-cookie";

export const getCloture = async ({ queryKey }: { queryKey: [number, string,number,number,string,string] }) => {
    const page = queryKey[0];
    const search = queryKey[1];
    const caisse = queryKey[2];
    const user = queryKey[3];
    const startDate = queryKey[4];
    const endDate = queryKey[5];
    try {
        const { data } = await axiosInstance.get("/comptoire/Cloture/", {
            params: {
                page: page,
                search: search,
                caisse:caisse,
                user:user,
                startDate: startDate,
                endDate: endDate,
              
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