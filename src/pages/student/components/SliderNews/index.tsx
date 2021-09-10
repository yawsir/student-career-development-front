/*
 * @Author: yuyang
 * @Date: 2021-09-10 14:27:31
 * @LastEditTime: 2021-09-10 17:41:32
 * @LastEditors: yuyang
 */
import React, { useRef } from 'react';
import { Carousel } from 'antd';
import previous from '@/assets/icons/previous.svg';
import next from '@/assets/icons/next.svg';
import studentNews from './students-news';

const SliderNews: React.FC = () => {
  const carouselRef = useRef<any>();
  return (
    <div className="w-full relative">
      <div>
        <Carousel
          autoplay
          className="w-full mxauto"
          ref={carouselRef}
        >
          {
            studentNews.map((item) => {
              const d = new Date(item.date);
              return (
                <div key={item.id}>
                  <div className="w-full flex">
                    <div className="flex-1">
                      <img src={item.image} alt="" className="w-full h-full object-center object-cover" />
                    </div>
                    <div className="flex-1 p-8">
                      <h3 className="flex items-center text-xl pb-8 border-solid border-0 border-b border-primary">
                        <div className="w-28 h-28 text-center bg-secondary flex-shrink-0 p-2 text-white flex flex-col justify-center items-center">
                          <span className="text-center text-2xl font-bold m-0">{d.getDate()}</span>
                          <span className="text-center text-xl font-bold m-0">
                            {d.getFullYear()}
                            -
                            {d.getMonth() + 1}
                          </span>
                        </div>
                        <span className="text-4xl pl-2">{item.title}</span>
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
      <div className="flex absolute w-32 right-4 bottom-2" onClick={() => carouselRef.current.prev()}>
        <div className="cursor-pointer">
          <img src={previous} alt="" />
        </div>
        <div className="cursor-pointer ml-8" onClick={() => carouselRef.current.next()}>
          <img src={next} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SliderNews;
