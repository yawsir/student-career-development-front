/*
 * @Author: yuyang
 * @Date: 2021-05-04 16:25:33
 * @LastEditTime: 2021-07-06 17:05:49
 * @LastEditors: yuyang
 */
import React from 'react';
import { Carousel } from 'antd';
import slider1 from '@/assets/sliders/slider1.jpeg';
import slider2 from '@/assets/sliders/slider2.jpg';
import slider3 from '@/assets/sliders/slider3.jpeg';
import slider4 from '@/assets/sliders/slider4.jpg';
import slider5 from '@/assets/sliders/slider5.jpg';
import styles from './index.less';

const Home: React.FC = () => {
  const images = [slider1, slider2, slider3, slider4, slider5];
  return (
    <Carousel
      autoplay
      dots={{
        className: styles.dots,
      }}
    >
      {
        images.map((img) => (
          <div key={img} className={styles.imagewrap}>
            <img src={img} alt="" className={styles.image} />
          </div>
        ))
      }
    </Carousel>
  );
};

export default Home;
