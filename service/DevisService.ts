import axiosInstance from "@/lib/axios";
import Cookies from "js-cookie";

export const getDevis = async ({queryKey}:{queryKey:[number, string, number]}) => {
    const page = queryKey[0];
    const search = queryKey[1];
    const userId = queryKey[2];
    try{
        const {data} = await axiosInstance.get('/ventes/BonDevis/', {
            params: {
                page: page,
                search: search,
                user: userId === 0 ? "" : userId
            },
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Cookies.get('token')}`
            }
        })
        return data;
    }
    catch(error){
        console.error(error);
        return [];
    }
}