import  axiosInstance from "@/lib/axios";
import Cookies from 'js-cookie';
export const getProducts = async ({ queryKey }: { queryKey: [number, string, number ] }) => {
    const page = queryKey[0];
    const search  = queryKey[1];
    const category = queryKey[2];

    try {
        const { data } = await  axiosInstance.get("/produits/Product/", {
            params: {
                page: page,
                search: search,
                category: category === 0 ? "" : category,
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

