/*
 * @Author: yuyang
 * @Date: 2021-04-24 11:14:57
 * @LastEditTime: 2021-09-17 09:35:19
 * @LastEditors: yuyang
 */
import React from 'react';
import logo from '@/assets/logo.png';
import { history } from 'umi';

interface ToolBarProps {
  title?: string;
}

const ToolBar: React.FC<ToolBarProps> = (props) => {
  const { title } = props;
  const handleClickLogo = () => history.push('/');
  return (
    <div className="flex justify-around items-center cursor-pointer" onClick={handleClickLogo}>
      <div className="flex py-0 px-4 justify-center items-center">
        <div className="mr-4">
          <img src={logo} style={{ width: 140, height: 60 }} className="object-center object-fit" alt={title} />
        </div>
        <h2 className="text-white m-0 whitespace-nowrap">{title}</h2>
      </div>
    </div>
  );
};

export default ToolBar;
