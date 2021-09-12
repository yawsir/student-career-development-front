/*
 * @Author: yuyang
 * @Date: 2021-05-05 20:01:53
 * @LastEditTime: 2021-09-12 18:19:24
 * @LastEditors: yuyang
 */
import React from 'react';
import NewsContainer from '@/components/NewsContainer';
import NewsList from '@/components/NewsList';
import { tabs1, tabs2, tabs3 } from './news-list';

const Teacher: React.FC = () => (
  <NewsContainer>
    <div className="container mx-auto py-2">
      <div className="w-4/5 mx-auto py-4 border-2 border-solid border-gray-400 bg-white">
        <h3 className="border-0 border-b border-solid border-gray-400 text-center pb-8">
          <span className="inline-block px-16 py-2 text-3xl border-0 border-b-2 border-solid border-primary">名师专栏</span>
        </h3>
        <div className="w-full px-16">
          <div className="flex justify-start items-center">
            <div className="w-36 font-bold text-center bg-secondary text-xl rounded-lg mx-4 px-6 py-1">{tabs1[0].tabTitle}</div>
            <div className="w-4/5">
              <NewsList listStyle="square" tabs={tabs1} />
            </div>
          </div>
          <div className="border-0 border-b border-secondary border-solid w-3/4 mx-auto my-2" />
          <div className="flex justify-start items-center">
            <div className="w-36 text-center font-bold bg-secondary text-xl rounded-lg mx-4 px-6 py-1">{tabs2[0].tabTitle}</div>
            <div className="w-4/5">
              <NewsList listStyle="square" tabs={tabs2} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/5 mx-auto bg-white py-4 border-2 border-b-0 border-solid border-white">
        <h3 className="border-0 border-b border-solid border-gray-400 text-center pb-8">
          <span className="inline-block px-16 py-2 text-3xl border-0 border-b-2 border-solid border-primary">专业资料库</span>
          <div className="mx-auto" style={{ minHeight: 600 }}>
            <NewsList
              listStyle="square"
              tabs={tabs3}
              showDate
              tabBarStyle={{
                width: '33%',
              }}
            />
          </div>
        </h3>
      </div>
    </div>
  </NewsContainer>
);
export default Teacher;
