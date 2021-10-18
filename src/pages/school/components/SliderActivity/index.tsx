/* eslint-disable react/no-array-index-key */
/*
 * @Author: yuyang
 * @Date: 2021-10-18 10:11:11
 * @LastEditTime: 2021-10-18 11:06:26
 * @LastEditors: yuyang
 */
import React from 'react';
import BasicSlider from '@/components/BasicSlider';
import { activityList } from '@/data/school-news';

interface SliderActivityProps {

}
const SliderActivity: React.FC<SliderActivityProps> = () => (
  <div className="w-full mx-auto h-full pb-6 flex items-center justify-center">
    <div className="w-full flex-1 relative">
      <BasicSlider
        dots={false}
        autoplay={false}
        reverse
      >
        {
          activityList.map((activities, idx) => (
            <div key={idx}>
              <div className=" flex items-start justify-center px-16">
                {
                  activities.map((item) => (
                    <div className="w-1/2 flex items-start justify-center px-6 py-16" key={item.id}>
                      <div
                        className="mx-auto flex flex-nowrap flex-col justify-start items-center cursor-pointer overflow-hidden transition transform hover:-translate-y-3 shadow-hs2"
                        style={{ width: 555, height: 464 }}
                      >
                        <div style={{ width: 555, height: 317 }} className="rounded-t-xl overflow-hidden">
                          <img src={item.image} alt="" className="w-full h-full object-cover object-center" />
                        </div>
                        <div className="px-4 py-2 text-base hover:font-bold text-center text-title">
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
              </div>
            </div>
          ))
        }
      </BasicSlider>
    </div>

  </div>
);

export default SliderActivity;
