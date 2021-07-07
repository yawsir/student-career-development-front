/*
 * @Author: yuyang
 * @Date: 2021-03-27 14:20:18
 * @LastEditTime: 2021-07-07 13:47:52
 * @LastEditors: yuyang
 */
import React from 'react';
import { useLocation } from 'umi';
import BaseLayout from './baseLayout';

const Layout: React.FunctionComponent = (props) => {
  const { children } = props;
  const { pathname } = useLocation();

  if (pathname.includes('/student/') || pathname.includes('/teacher/') || pathname.includes('/login') || pathname.includes('/register')) {
    return <>{children}</>;
  }

  return <BaseLayout>{children}</BaseLayout>;
};
export default Layout;
