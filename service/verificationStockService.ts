import axiosInstance from "@/lib/axios";

import Cookies from "js-cookie";

export const getVerificationStock = async () => {
    
    try {
        const { data } = await axiosInstance.get("/produits/StockState/", {
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