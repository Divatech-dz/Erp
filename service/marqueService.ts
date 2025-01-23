import axiosInstance from "@/lib/axios";

import Cookies from "js-cookie";

export const getMarque = async () => {
   
    
    try {
        const { data } = await axiosInstance.get("/tiers/Fournisseur/", {
           
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