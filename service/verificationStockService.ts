import axiosInstance from "@/lib/axios";

import Cookies from "js-cookie";

export const getVerificationStock = async () => {
    
    try {
<<<<<<< HEAD
        const { data } = await axiosInstance.get("/produits/StockState", {
            
=======
        const { data } = await axiosInstance.get("/produits/StockState/", {
>>>>>>> c89b2b2370c7c070f44a558397fc027eaddbed54
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