import axiosInstance from "@/lib/axios";
import Cookies from "js-cookie";

export const getReturnNotes = async ({queryKey}: { queryKey: [number, string, string, string, number] }) => {
    const page = queryKey[0];
    const search = queryKey[1];
    const startDate = queryKey[2];
    const endDate = queryKey[3];
    const userId = queryKey[4];

    try {
        const {data} = await axiosInstance.get("/inventory/BonRetour/", {
            params: {
                page: page,
                search: search,
                start_date: startDate,
                end_date: endDate,
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
}