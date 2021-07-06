/*
 * @Author: yuyang
 * @Date: 2021-06-22 09:40:16
 * @LastEditTime: 2021-06-22 09:45:03
 * @LastEditors: yuyang
 */

export interface LoginInfo {
  username: string;
  token: string;
}
export interface UserRole {
  role: string;
  id: number;
}

export interface RegisterInfo {
  id: string;
  username: string;
  active: boolean;
  fullname: string;
  phone: string;
  email: string;
  userRoles: UserRole[];
}
