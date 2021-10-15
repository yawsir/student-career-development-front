/*
 * @Author: yuyang
 * @Date: 2021-10-15 10:54:20
 * @LastEditTime: 2021-10-15 13:46:44
 * @LastEditors: yuyang
 */
import React from 'react';
import BasicSlider from '@/components/BasicSlider';
import { celebrityList1, celebrityList2 } from '@/data/student-news';

const SliderStudents: React.FC = () => (
  <div className=" h-full px-6 pb-6 flex items-center justify-center">
    <div className="w-full flex">
      <div className="w-1/2 flex items-center justify-center px-6 mr-16">
        <div className="px-3 mr-8 h-28 text-title text-xl bg-gradient-to-r from-bg-1 to-bg-2 rounded-lg text-center flex justify-center items-center font-bold"><span>讲堂</span></div>
        <div className="w-full flex-1 relative">
          <BasicSlider
            dots={false}
            autoplay={false}
          >
            {
              celebrityList2.map((item) => (
                <div className="w-1/3 mr-4" key={item.id}>
                  <div style={{ width: 555, height: 464 }} className="mx-auto flex flex-nowrap flex-col justify-start items-center overflow-hidden">
                    <div style={{ width: 555, height: 317 }}>
                      <img src={item.image} alt="" className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="px-4 py-2 text-base font-bold text-center text-title">
                      <span>{item.title}</span>
                    </div>
                    <div className="w-full px-4 flex-1 text-xs text-left text-secondary leading-loose">
                      {item.date}
                    </div>
                    <div className="px-4 flex-1 text-sm leading-loose">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))
            }
          </BasicSlider>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center px-6">
        <div className="w-full flex-1 relative">
          <BasicSlider
            dots={false}
            autoplay={false}
          >
            {
              celebrityList1.map((item) => (
                <div className="w-1/3 mr-4" key={item.id}>
                  <div style={{ width: 555, height: 464 }} className="mx-auto flex flex-nowrap flex-col justify-start items-center overflow-hidden">
                    <div style={{ width: 555, height: 317 }}>
                      <img src={item.image} alt="" className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="px-4 py-2 text-base font-bold text-center text-title">
                      <span>{item.title}</span>
                    </div>
                    <div className="w-full px-4 flex-1 text-xs text-left text-secondary leading-loose">
                      {item.date}
                    </div>
                    <div className="px-4 flex-1 text-sm leading-loose">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))
            }
          </BasicSlider>
        </div>
        <div className="px-3 ml-8 h-28 text-title text-xl bg-gradient-to-r from-bg-1 to-bg-2 rounded-lg text-center flex justify-center items-center font-bold"><span>人物</span></div>
      </div>
    </div>
  </div>
);

export default SliderStudents;
