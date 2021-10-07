/*
 * @Author: yuyang
 * @Date: 2021-05-08 08:49:31
 * @LastEditTime: 2021-09-30 15:19:42
 * @LastEditors: yuyang
 */
import React from 'react';

interface ContentProps {
  image?: string;
}
const Content: React.FC<ContentProps> = (props) => {
  const { children, image } = props;
  return (
    <div className="w-11/12 mx-auto flex flex-wrap border-primary border-solid bg-custom-white2 p-4" style={{ borderWidth: 16 }}>
      <div className="w-full lg:w-1/2 rounded-lg overflow-hidden transform  scale-95 hover:scale-100 transition-all">
        <img src={image} alt="" className="w-full h-full object-cover object-center" />
      </div>
      <div className="w-full lg:w-1/2 bg-custom-white p-4 leading-7">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Content;
