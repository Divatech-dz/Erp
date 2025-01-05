import axiosInstance from "@/lib/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
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
export const getAllStore = () => fetchWithAuth('/clientInfo/store/');

export const getStoreById = async(data: StorePayload = { store_id: 1 }) =>{
  const token = Cookies.get('token');
  if (!token) {
    console.error('No token found');
    throw new Error('No token found');
  }

  try {
    const response = await axiosInstance.post('/clientInfo/selectstore/', data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    
    return response.data;
  } catch (error: any) {
    
    throw error;
  }

}
 export const getProduit=async()=>{
  const token = Cookies.get('token');
  if (!token) {
    console.error('No token found');
    throw new Error('No token found');
  }

  try {
    const response = await axiosInstance.get('/produits/Product')
    
    return response.data;
  } catch (error: any) {
    
    throw error;
  }
  
 }

// Hooks
export const useGetAllStore = () =>
  useQuery({
    queryKey: ['store'], 
    queryFn: getAllStore,
    staleTime: Infinity, 
    retry: false,
  });
  export const useGetAllProduits = () =>
    useQuery({
      queryKey: ['Produit'], 
      queryFn: getProduit,
      staleTime: Infinity, 
      retry: false,
    });
  export const useGetStoreById = () => {
    return useMutation({
      mutationFn:getStoreById, 
      onError: (error: any) => {
        console.error('Error fetching store:', error);
      },
      onSuccess: (data: any) => {
        console.log('Store data fetched successfully:', data);
      },
    });
  };
