/*
 * @Author: yuyang
 * @Date: 2021-05-08 08:49:31
 * @LastEditTime: 2021-10-13 11:34:39
 * @LastEditors: yuyang
 */
import React from 'react';

interface ContentProps {
  image?: string;
  title: string;
}
const Content: React.FC<ContentProps> = (props) => {
  const { children, image, title } = props;
  return (
    <div className="w-11/12 mx-auto flex-col items-center border-primary border-solid bg-custom-white2 p-4" style={{ borderWidth: 8 }}>
      <div className="">
        <h3 className="text-center text-xl">{title}</h3>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="w-96 h-52 rounded-lg overflow-hidden transform  scale-95 hover:scale-100 transition-all">
          <img src={image} alt="" className="w-full h-full object-cover object-center" />
        </div>
        <div className="w-1/2 bg-custom-white p-4 leading-7" style={{ minHeight: 380 }}>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
