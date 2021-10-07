/* eslint-disable max-len */
/*
 * @Author: yuyang
 * @Date: 2021-05-04 16:25:33
 * @LastEditTime: 2021-10-07 15:20:19
 * @LastEditors: yuyang
 */
import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import slider1 from '@/assets/sliders/slider1.jpg';
import slider2 from '@/assets/sliders/slider2.jpg';
import slider3 from '@/assets/sliders/slider3.jpg';
import styles from './index.less';

const Home: React.FC = () => {
  const images = [slider1, slider2, slider3];
  const carouselRef = useRef<any>();
  return (
    <div className="flex w-full justify-center relative" style={{ height: 518 }}>
      <div className="w-full">
        <Carousel
          autoplay
          dots={{
            className: styles.dots,
          }}
          className={styles.imagewrap}
          ref={carouselRef}
        >
          {
            images.map((img) => (
              <div key={img}>
                <img src={img} alt="" className="w-full object-cover object-center" style={{ height: 518 }} />
              </div>
            ))
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

export default Home;
