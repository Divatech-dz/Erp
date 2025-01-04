import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import Cookies from 'js-cookie';

// Interfaces
export interface StorePayload {
  store_id: number;
}

// Utility Function for Fetching with Auth
const fetchWithAuth = async (url: string, method: 'GET' | 'POST' = 'GET', data?: any) => {
  const token = Cookies.get('token');
  if (!token) {
    console.error('No token found');
    throw new Error('No token found');
  }

  try {
    const response = await axiosInstance({
      url,
      method,
      headers: { Authorization: `Bearer ${token}` },
      data,
    });
    return response.data;
  } catch (error: any) {
    console.error(`Error fetching ${url}:`, error);
    throw error;
  }
};

// API Functions
export const getAllStore = () => fetchWithAuth('/clientInfo/store');

export const getStoreById = (data: StorePayload
) =>
  fetchWithAuth('/clientInfo/selectstore/', 'POST', data);

// Hooks
export const useGetAllStore = () =>
  useQuery({
    queryKey: ['store'], 
    queryFn: getAllStore,
    staleTime: Infinity, 
    retry: false,
  });

export const useGetStoreById = (storePayload: StorePayload | undefined) =>
  useQuery({
    queryKey: ['store', storePayload?.store_id],
    queryFn: () => {
      if (!storePayload) {
        throw new Error('No store payload provided');
      }
      return getStoreById(storePayload);
    },
    staleTime: Infinity,
    retry: false,
    enabled: !!storePayload,
  });
