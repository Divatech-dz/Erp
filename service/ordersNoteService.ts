import { bonsSortieAPI } from "@/lib/axios"

export const getDeliveryNotes = async () => {
    try {
        const { data } = await bonsSortieAPI.get("",{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
            }
        });
        return data;
    } catch (error) {
        console.error(error);
    }
};