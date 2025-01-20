import axiosInstance from "@/lib/axios";

import Cookies from "js-cookie";

export const getStock= async ({ queryKey }: { queryKey: [number, string,number] }) => {
    const page = queryKey[0];
    const search = queryKey[1];
    const entrepot = queryKey[2];
     
    try {
        const { data } = await axiosInstance.get("/inventory/Stock/", {
            params: {
                page: page,
                search: search,
                entrepot:entrepot
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