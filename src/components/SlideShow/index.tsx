/*
 * @Author: yuyang
 * @Date: 2021-05-04 16:25:33
 * @LastEditTime: 2021-08-28 10:53:11
 * @LastEditors: yuyang
 */
import React, { useRef } from 'react';
import { Carousel } from 'antd';
import slider1 from '@/assets/sliders/slider1.jpg';
import slider2 from '@/assets/sliders/slider2.jpg';
import slider3 from '@/assets/sliders/slider3.jpg';
import styles from './index.less';

const Home: React.FC = () => {
  const images = [slider1, slider2, slider3];
  const carouselRef = useRef<any>();
  return (
    <div className="flex w-full justify-center" style={{ height: 518 }}>
      <div
        className="h-full bg-custom-gray flex-1 text-5xl text-center text-white align-middle flex justify-center items-center cursor-pointer"
        onClick={() => carouselRef.current.prev()}
      >
        &lt;
      </div>
      <div className="w-5/6">
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
        className="h-full bg-custom-gray flex-1 text-5xl text-center text-white align-middle flex justify-center items-center cursor-pointer"
        onClick={() => carouselRef.current.next()}
      >
        &gt;
      </div>
    </div>
  );
};

export default Home;
