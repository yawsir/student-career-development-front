/*
 * @Author: yuyang
 * @Date: 2021-06-22 09:24:56
 * @LastEditTime: 2021-07-06 15:35:28
 * @LastEditors: yuyang
 */
import { axiosPost } from '@/utils/axios';
import { LoginInfo, RegisterInfo } from './auth.data';

export interface LoginParams {
  username: string;
  password: string;
}

export interface RegisterParams {
  email: string;
	fullname: string;
	password: string;
	phone: string;
	username: string;
}
const login = (params: LoginParams) => axiosPost<LoginInfo>('/api/auth/login', params);
const logout = () => axiosPost('/api/auth/logout', {});
const register = (params: RegisterParams) => axiosPost<RegisterInfo>('/api/auth/register', params);

export default {
  login,
  logout,
  register,
};
