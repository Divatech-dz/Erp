import {categoryAPI} from "@/lib/axios";
import Cookies from "js-cookie";

export const getCategory = async () => {

    try {
        const {data} = await categoryAPI.get("", {
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