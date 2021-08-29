/*
 * @Author: yuyang
 * @Date: 2021-03-27 14:20:18
 * @LastEditTime: 2021-08-29 11:40:42
 * @LastEditors: yuyang
 */
import React from 'react';
import { useLocation } from 'umi';
import BaseLayout from './baseLayout';
import AdminLayout from './adminLayout';

const Layout: React.FunctionComponent = (props) => {
  const { children } = props;
  const { pathname } = useLocation();

  if (pathname.includes('/login') || pathname.includes('/register')) {
    return <>{children}</>;
  }
  if (pathname.includes('/admin')) {
    return <AdminLayout />;
  }

  return <BaseLayout>{children}</BaseLayout>;
};
export default Layout;
