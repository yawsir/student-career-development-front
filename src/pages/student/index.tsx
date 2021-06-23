/*
 * @Author: yuyang
 * @Date: 2021-05-05 20:01:53
 * @LastEditTime: 2021-06-23 14:17:11
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
          ? <Redirect to="/student/shome" />
          : <Redirect to="/student/login" />
      }
    </>
  );
};

export default Index;
