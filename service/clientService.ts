import axiosInstance from "@/lib/axios";
import Cookies from "js-cookie";

export const getClients = async ({ queryKey }: { queryKey: [number, string, string, number] }) => {
    const page = queryKey[0];
    const search = queryKey[1];
    const clientType = queryKey[2];
    const userId = queryKey[3];
    try {
        const { data } = await axiosInstance.get("/tiers/Client/", {
            params: {
                page: page,
                search: search,
                clientType: clientType,
                user: userId === 0 ? "" : userId
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