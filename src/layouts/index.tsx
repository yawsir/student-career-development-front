/*
 * @Author: yuyang
 * @Date: 2021-03-27 14:20:18
 * @LastEditTime: 2021-06-23 16:01:31
 * @LastEditors: yuyang
 */
import React from 'react';
import { useLocation } from 'umi';
import BaseLayout from './baseLayout';

const Layout: React.FunctionComponent = (props) => {
  const { children } = props;
  const { pathname } = useLocation();

  if (pathname.includes('/student/') || pathname.includes('/teacher/')) {
    return <>{children}</>;
  }

  return <BaseLayout>{children}</BaseLayout>;
};
export default Layout;
