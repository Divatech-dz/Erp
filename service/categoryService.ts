import  axiosInstance from "@/lib/axios"

export const getCategory = async () => {
    try {
        const { data } = await  axiosInstance.get("/produits/Category",{
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