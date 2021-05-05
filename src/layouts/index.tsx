/*
 * @Author: yuyang
 * @Date: 2021-03-27 14:20:18
 * @LastEditTime: 2021-05-05 20:25:57
 * @LastEditors: yuyang
 */
import React from 'react';
import { useLocation } from 'umi';
import BaseLayout from './baseLayout';

const Layout: React.FunctionComponent = (props) => {
  // 你可以把它替换成你自己的登录认证规则（比如判断 token 是否存在）
  // const isLogin = window.localStorage.getItem('user') || true;
  const { children } = props;
  const { pathname } = useLocation();

  if (pathname === '/student/login' || pathname === '/teacher/login') {
    return <>{children}</>;
  }

  return <BaseLayout>{children}</BaseLayout>;
};
export default Layout;
