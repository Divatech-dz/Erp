import { UserListAPI } from "@/lib/axios";
import Cookies from "js-cookie";

export const getUsersList = async () => {
    try {
        const { data } = await UserListAPI.get("", {
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
