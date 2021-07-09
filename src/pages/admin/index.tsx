/*
 * @Author: yuyang
 * @Date: 2021-07-09 11:36:11
 * @LastEditTime: 2021-07-09 13:49:16
 * @LastEditors: yuyang
 */
import React from 'react';
import storage, { storageKeys } from '@/utils/localStorage';
import { Redirect } from 'umi';

const Index: React.FC = () => {
  const token = storage.getItem(storageKeys.IS_LOGED_KEY_NAME);
  const isLogin = token === 'T';
  return (
    <>
      {
        isLogin
          ? <Redirect to="/admin/ahome" />
          : <Redirect to="/admin/login" />
      }
    </>
  );
};

export default Index;
