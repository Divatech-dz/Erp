import { UserAPI } from "@/lib/axios";

export const getUser = async () => {
    try {
        const { data } = await UserAPI.get("", {
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