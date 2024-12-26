import axios from "axios";

export const productsAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_PRODUCT_API_URL,
});

export const categoryAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CATEGORY_API_URL,
});

export const bonsSortieAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BS_API_URL,
});