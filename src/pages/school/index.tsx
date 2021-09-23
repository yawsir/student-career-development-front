/*
 * @Author: yuyang
 * @Date: 2021-08-31 17:24:02
 * @LastEditTime: 2021-09-23 20:46:57
 * @LastEditors: yuyang
 */
import React from 'react';
import NewsContainer from '@/components/NewsContainer';
import NewsList from '@/components/NewsList';
import Tables from './components/Tables';
import { tabs1 } from './news-list';

interface SchoolProps {

}

const School: React.FC<SchoolProps> = () => (
  <NewsContainer>
    <div className="container mx-auto text-4xl bg-white py-2">
      <div className="w-5/6 mx-auto p-4">
        <h3 className="border-0 border-b border-solid border-gray-400 text-center pb-8">
          <span className="inline-block px-8 py-2 border-0 border-b-2 border-solid border-primary">学校总体生涯教育设计案例</span>
        </h3>
        <div className="w-full border-0 border-b border-solid border-gray-400">
          <NewsList listStyle="square" tabs={tabs1} textCentered />
        </div>
      </div>
      
      <div className="w-5/6 mx-auto p-4">
        <h3 className="border-0 border-b border-solid border-gray-400 text-center pb-8">
          <span className="inline-block px-8 py-2 border-0 border-b-2 border-solid border-primary">政策文件解读</span>
        </h3>
        <Tables />
      </div>
    </div>
  </NewsContainer>
);

export default School;
