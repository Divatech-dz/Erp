import { useMutation, useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import axiosInstance from '../lib/axios';

// Interfaces
export interface LoginPayload {
  username: string;
  password: string;
}

// API Functions
export const login = async (data: LoginPayload) => {
  try {
    const response = await axiosInstance.post('/api/token/', data);
    return response.data;
  } catch (error) {
    console.error('Login request failed:', error);
    throw new Error('Unable to log in. Please check your credentials.');
  }
};
export const getUser = async () => {

  const token = Cookies.get('token'); 
  if (!token) {
    console.log('No token found');
    throw new Error('No token found');
  }
  const response = await axiosInstance.get('/user/UserActuel', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Hooks
export const useLogin = () =>
  useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      Cookies.set('token', data.access, {
        expires: 7, 
        sameSite: 'Lax',
      });
      console.log('Login successful. Token saved.');
    },
    onError: (error) => {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials.');
    },
  });

  export const useGetUser = () => {
    return useQuery({
      queryKey: ['user'], 
      queryFn: getUser,
      staleTime: Infinity, 
      retry: false,
    });
  };
  
