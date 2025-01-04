import axios from "axios";
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {

    const accessToken = Cookies.get('token');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(new Error('Failed to set authorization headers.'));
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      Cookies.remove('token');
      window.location.href = '/sign-in';
    }
    return Promise.reject(new Error('Failed to handle API response.'));
  }
);

export default axiosInstance;


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

export const UserListAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_USER_API_URL,
})