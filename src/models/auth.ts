/*
 * @Author: yuyang
 * @Date: 2021-06-22 09:23:32
 * @LastEditTime: 2021-06-23 16:41:09
 * @LastEditors: yuyang
 */
import { useState, useCallback } from 'react';
import { history } from 'umi';
import storage, { storageKeys } from '@/utils/localStorage';
import authService from '@/services/auth';
import { message } from 'antd';

export default function useAuthModel() {
  const [user, setUser] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const login = useCallback(async (username, password) => {
    setLoading(true);
    try {
      const data = await authService.login({ username, password });
      if (data.token) {
        storage.setItems({
          [storageKeys.IS_LOGED_KEY_NAME]: 'T',
          [storageKeys.USERNAME_KEY_NAME]: data.username,
        });
        history.push('/student');
      }
      setUser(data.username);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error('用户名或密码错误');
    }
  }, []);

  const logout = useCallback(async () => {
    setLoading(true);
    await authService.logout();
    storage.removeItems([storageKeys.IS_LOGED_KEY_NAME, storageKeys.USERNAME_KEY_NAME]);
    history.push('/');
    setLoading(false);
  }, []);

  const register = useCallback(async ({ username, password }) => {
    setLoading(true);
    const data = await authService.register({
      name: username,
      pw: password,
    });
    console.log(data);
  }, []);

  return {
    user,
    login,
    logout,
    register,
    loading,
  };
}
