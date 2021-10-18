/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/*
 * @Author: yuyang
 * @Date: 2021-09-10 14:27:31
 * @LastEditTime: 2021-10-15 13:48:43
 * @LastEditors: yuyang
 */
import React from 'react';
import BasicSlider from '@/components/BasicSlider';
import studentNewsList from '@/data/student-news';

const SliderNews: React.FC = () => {
  React.useEffect(() => {}, []);
  return (
    <div className=" h-full px-28 relative">
      <BasicSlider
        dots={false}
        autoplay={false}
        reverse
      >
        {
          studentNewsList.map((newsList, idx) => (
            <div className="w-full" key={idx}>
              <div className="w-full px-4 py-8 flex items-center justify-between">
                {
                  newsList.map((item) => (
                    <div className="w-1/3 mr-4" key={item.id}>
                      <div className="w-60 h-80 mx-auto flex flex-nowrap flex-col justify-start items-center rounded-t-xl shadow-hs2 overflow-hidden transform transition hover:-translate-y-2">
                        <div className="w-60 h-40">
                          <img src={item.image} alt="" className="w-full h-full object-cover object-center" />
                        </div>
                        <div className="px-4 py-2 text-xs text-title bg-forth">
                          <span>{item.title}</span>
                        </div>
                        <div className="px-4 flex-1 text-xs leading-loose">
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
  );
};

export default SliderNews;
