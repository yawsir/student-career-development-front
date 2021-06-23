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
  username: string;
  userRoles: UserRole[];
  active: boolean;
  id: number;
}
