import  axiosInstance from "@/lib/axios";

export const getProducts = async ({ queryKey }: { queryKey: [number] }) => {
    const page = queryKey[0];
    try {
        const { data } = await  axiosInstance.get("/Product/?page=", {
            params: {
                page: page
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