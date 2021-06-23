/*
 * @Author: yuyang
 * @Date: 2021-06-22 09:24:56
 * @LastEditTime: 2021-06-23 13:49:59
 * @LastEditors: yuyang
 */
import { axiosPost } from '@/utils/axios';
import { LoginInfo, RegisterInfo } from './auth.data';

interface LoginParams {
  username: string;
  password: string;
}

interface RegisterParams {
  name: string;
  pw: string;
}
const login = (params: LoginParams) => axiosPost<LoginInfo>('/api/auth/login', params);
const logout = () => axiosPost('/api/auth/logout', {});
const register = (params: RegisterParams) => axiosPost<RegisterInfo>('/api/auth/register', params);

export default {
  login,
  logout,
  register,
};
