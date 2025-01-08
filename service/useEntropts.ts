import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import Cookies from 'js-cookie';

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

const getWearHouses=() => fetchWithAuth('/inventory/Entrepot/');
export const useGetWearHouses = () =>
  useQuery({
    queryKey: ['stock'], 
    queryFn: getWearHouses,
    staleTime: Infinity, 
    retry: false,
  });