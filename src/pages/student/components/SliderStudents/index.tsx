/* eslint-disable max-len */
/*
 * @Author: yuyang
 * @Date: 2021-09-10 14:27:31
 * @LastEditTime: 2021-10-14 12:59:11
 * @LastEditors: yuyang
 */
import React from 'react';
import BasicSlider from '@/components/BasicSlider';
import studentNews from './students-news';

const SliderStudents: React.FC = () => {
  React.useEffect(() => {}, []);
  return (
    <div className="bg-slide h-full px-6 flex items-center justify-center" style={{ height: 480 }}>
      <BasicSlider
        dots={false}
        autoplay={false}
      >
        {
          studentNews.map((item) => (
            <div key={item.id} className="h-full">
              <div className="w-4/5 mx-auto flex items-center justify-center">
                <div className="w-60 rounded-lg overflow-hidden transform scale-100 hover:scale-105 transition-all">
                  <img src={item.image} alt="" className="w-full object-center object-cover" />
                </div>
                <div className="flex-1 bg-white ml-8" style={{ height: 376 }}>
                  <h3 className="flex items-start justify-center text-lg p-0 pb-4 border-solid border-0 border-b border-primary relative">
                    <div className="absolute top-0 left-0 h-16 w-32 text-center bg-gradient-to-r from-bg-1 to-bg-2 flex-shrink-0 flex flex-col justify-center items-center">
                      <span className="text-center text-2xl font-bold m-0">少年风采</span>
                    </div>
                    <span className="text-center text-2xl pl-2 py-4">{item.title}</span>
                  </h3>
                  <div className="p-4 text-base leading-loose" dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
              </div>
            </div>
          ))
        }
      </BasicSlider>
    </div>
  );
};

export default SliderStudents;
