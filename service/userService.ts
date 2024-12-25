// service/userService.ts
import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import axiosInstance from '../lib/axios';

export interface LoginPayload {
  username: string;
  password: string;
}

export const login = async (data: LoginPayload) => {
  const response = await axiosInstance.post('api/token/', data);
  return response.data; 
};
export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      Cookies.set('token', data.access, {
        expires: 7,
        sameSite: 'Lax',
      });
    },
    onError: (error) => {
      console.error('Login failed:', error);
    },
  });
};