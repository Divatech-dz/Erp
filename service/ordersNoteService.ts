import {bonsSortieAPI} from "@/lib/axios"

export const getDeliveryNotes = async ({queryKey}: { queryKey: [number, string, string, string, number] }) => {
    const page = queryKey[0];
    const search = queryKey[1];
    const startDate = queryKey[2];
    const endDate = queryKey[3];
    const userId = queryKey[4];

    try {
        const {data} = await bonsSortieAPI.get("", {
            params: {
                page: page,
                search: search,
                start_date: startDate,
                end_date: endDate,
                user: userId === 0 ? "" : userId
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
            }
        });
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};