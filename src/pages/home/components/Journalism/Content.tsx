/*
 * @Author: yuyang
 * @Date: 2021-05-08 08:49:31
 * @LastEditTime: 2021-08-27 15:38:28
 * @LastEditors: yuyang
 */
import React from 'react';

interface ContentProps {
  image?: string;
}
const Content: React.FC<ContentProps> = (props) => {
  const { children, image } = props;
  return (
    <div className="w-11/12 mx-auto flex" style={{ height: 570 }}>
      <div className="flex-1">
        <img src={image} alt="" className="w-full h-full object-cover object-center" />
      </div>
      <div className="flex-1 bg-custom-white p-4 text-xs leading-7">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Content;
