/*
 * @Author: yuyang
 * @Date: 2021-03-28 10:57:56
 * @LastEditTime: 2021-03-28 11:07:49
 * @LastEditors: yuyang
 */
import React from 'react';
import { useAccess, Access } from 'umi';
import AccessComponent from '@/components/access';

const Authority: React.FC = () => {
  const access = useAccess();
  return (
    <div style={{ height: '100vh' }}>
      <Access accessible={access.canReadFoo} fallback={AccessComponent()}>
        <h1>权限控制</h1>
      </Access>
      1331312
    </div>
  );
};
export default Authority;
