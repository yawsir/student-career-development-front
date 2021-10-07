/* eslint-disable max-len */
/*
 * @Author: yuyang
 * @Date: 2021-09-10 14:27:31
 * @LastEditTime: 2021-10-07 15:56:30
 * @LastEditors: yuyang
 */
import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import studentNews from './students-news';

const SliderNews: React.FC = () => {
  const carouselRef = useRef<any>();
  return (
    <div className="w-full relative px-32 py-8">
      <div className="bg-slide px-6 py-8">
        <Carousel
          // autoplay
          className="w-full mxauto"
          ref={carouselRef}
        >
          {
            studentNews.map((item) => {
              const d = new Date(item.date);
              return (
                <div key={item.id}>
                  <div className="w-full flex">
                    <div className="flex-1 rounded-lg overflow-hidden transform  scale-100 hover:scale-95 transition-all">
                      <img src={item.image} alt="" className="w-full h-full object-center object-cover" />
                    </div>
                    <div className="flex-1  bg-white ml-8">
                      <h3 className="flex items-start text-lg p-0 pb-4 border-solid border-0 border-b border-primary">
                        <div className="w-20 h-16 text-center bg-gradient-to-r from-bg-1 to-bg-2 flex-shrink-0 flex flex-col justify-center items-center">
                          <span className="text-center text-2xl font-bold m-0">{d.getDate()}</span>
                          <span className="text-center text-base font-bold m-0">
                            {d.getFullYear()}
                            -
                            {d.getMonth() + 1}
                          </span>
                        </div>
                        <span className="text-2xl pl-2 py-4">{item.title}</span>
                      </h3>
                      <p className="text-lg" style={{ textIndent: '2em' }}>
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </Carousel>
      </div>
      <div
        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-4xl bg-black text-center text-white align-middle flex justify-center items-center cursor-pointer rounded-3xl opacity-50 w-14 h-24"
        onClick={() => carouselRef.current.prev()}
      >
        <LeftOutlined />
      </div>
      <div
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-4xl bg-black flex-1 text-center text-white align-middle flex justify-center items-center cursor-pointer rounded-3xl opacity-50 w-14 h-24"
        onClick={() => carouselRef.current.next()}
      >
        <RightOutlined />
      </div>
    </div>
  );
};

export default SliderNews;
