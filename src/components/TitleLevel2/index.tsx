/*
 * @Author: yuyang
 * @Date: 2021-10-18 10:05:34
 * @LastEditTime: 2021-10-18 10:08:38
 * @LastEditors: yuyang
 */
import React from 'react';

interface TitleLevel2Props {
  title: string;
}
const TitleLevel2: React.FC<TitleLevel2Props> = ({ title }) => (
  <div className="flex justify-center items-center text-center mb-8">
    <span className="text-2xl px-16 py-4 rounded-md font-bold transition transform scale-100 hover:scale-110 bg-gradient-to-r from-bg-1 to-bg-2">
      {title}
    </span>
  </div>
);

export default TitleLevel2;
