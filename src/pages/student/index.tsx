/*
 * @Author: yuyang
 * @Date: 2021-05-05 20:01:53
 * @LastEditTime: 2021-09-18 14:03:46
 * @LastEditors: yuyang
 */
import React from 'react';
import NewsContainer from '@/components/NewsContainer';
import NewsList from '@/components/NewsList';
import SliderNews from './components/SliderNews';
import { tabs1, tabs2, tabs3 } from './news-list';

const Index: React.FC = () => (
  <div className="w-full text-4xl">
    <NewsContainer>
      <div className="container mx-auto bg-white py-2">
        <div className="p-8 w-full">
          <SliderNews />
        </div>
        <div className="p-8 w-full flex justify-center items-start">
          <div className="w-1/2 border-0 border-r border-solid border-gray-400 p-8 pb-0">
            <NewsList listStyle="circle" barCentered tabs={tabs1} />
          </div>
          <div className="w-1/2 p-8">
            <NewsList listStyle="square" barCentered tabs={tabs2} />
          </div>
        </div>
        <div className="w-3/4 mx-auto p-4 border-2 border-solid border-gray-400">
          <h3 className="border-0 border-b border-solid border-gray-400 text-center pb-8">
            <span className="inline-block px-8 py-2 border-0 border-b-2 border-solid border-primary">高考资讯类</span>
          </h3>
          <div className="w-full">
            <NewsList listStyle="square" tabs={tabs3} showDate />
          </div>
        </div>
      </div>
    </NewsContainer>
  </div>
);

export default Index;
