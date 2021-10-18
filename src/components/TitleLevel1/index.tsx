/*
 * @Author: yuyang
 * @Date: 2021-10-18 10:06:28
 * @LastEditTime: 2021-10-18 10:07:41
 * @LastEditors: yuyang
 */
import React from 'react';

interface TitleLevel1Props {
  topText: string;
  bottomText: string;
}
const TitleLevel1: React.FC<TitleLevel1Props> = ({ topText, bottomText }) => (
  <h2 className="w-full border-0 border-b-2 bg-gradient-to-r py-2 from-bg-1 to-bg-2 text-white">
    <div className="text-lg font-bold transform ml-8 translate-x-1/4">{topText}</div>
    <div className="text-4xl font-bold transform translate-x-1/4">{bottomText}</div>
  </h2>
);

export default TitleLevel1;
