/*
 * @Author: yuyang
 * @Date: 2021-07-09 14:14:18
 * @LastEditTime: 2021-07-09 14:16:35
 * @LastEditors: yuyang
 */
import React from 'react';
import Logo from '@/components/Logo';

interface AdminLayoutProps {

}
const AdminLayout: React.FC<AdminLayoutProps> = (props) => {
  const { children } = props;
  React.useEffect(() => {});
  return (
    <div className="w-full">
      <div className="flex bg-black">
        <Logo title="生涯网站管理" />
      </div>
      <div>
        {
          children
        }
      </div>
    </div>
  );
};

export default AdminLayout;
