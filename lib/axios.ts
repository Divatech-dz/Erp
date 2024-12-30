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

export const factureAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_FACTURE_API_URL,
});

export const BonRetourAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BR_API_URL,
});

export const ClientAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CLIENT_API_URL,
});

export const UserAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_USER_API_URL,
})