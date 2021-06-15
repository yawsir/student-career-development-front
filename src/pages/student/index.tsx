/*
 * @Author: yuyang
 * @Date: 2021-05-05 20:01:53
 * @LastEditTime: 2021-06-15 14:09:32
 * @LastEditors: yuyang
 */
import React from 'react';
import { Redirect } from 'umi';

const Index: React.FC = () => {
  const isLogin = true;

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
