import { productsAPI } from "@/lib/axios";

export const getProducts = async ({ queryKey }: { queryKey: [number, string, number ] }) => {
    const page = queryKey[0];
    const search  = queryKey[1];
    const category = queryKey[2];

    try {
        const { data } = await productsAPI.get("", {
            params: {
                page: page,
                search: search,
                category: category === 0 ? "" : category,
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
