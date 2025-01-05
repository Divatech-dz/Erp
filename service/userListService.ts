import axiosInstance from "@/lib/axios";
import Cookies from "js-cookie";

export const getUsersList = async () => {
    try {
        const response = await axiosInstance.get('/user/costumeruser', {
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};
