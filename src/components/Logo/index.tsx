/*
 * @Author: yuyang
 * @Date: 2021-04-24 11:14:57
 * @LastEditTime: 2021-08-25 11:22:38
 * @LastEditors: yuyang
 */
import React from 'react';
import logo from '@/assets/logo.png';

interface ToolBarProps {
  title?: string;
}

const ToolBar: React.FC<ToolBarProps> = (props) => {
  const { title } = props;
  return (
    <div className="flex justify-around items-center">
      <div className="flex py-0 px-4 justify-center items-center">
        <div className="mr-4">
          <img src={logo} className="w-24 h-24" alt={title} />
        </div>
        <h2 className="text-white text-4xl m-0 whitespace-nowrap">{title}</h2>
      </div>
    </div>
  );
};

export default ToolBar;
