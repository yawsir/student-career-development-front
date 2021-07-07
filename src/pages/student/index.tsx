/*
 * @Author: yuyang
 * @Date: 2021-05-05 20:01:53
 * @LastEditTime: 2021-07-07 13:45:25
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
          : <Redirect to="/login" />
      }
    </>
  );
};

export default Index;
