/*
 * @Author: yuyang
 * @Date: 2021-05-04 16:25:33
 * @LastEditTime: 2021-05-04 16:37:53
 * @LastEditors: yuyang
 */
import React from 'react';
import { Carousel } from 'antd';
import slider1 from '@/assets/sliders/slider1.jpg';
import slider2 from '@/assets/sliders/slider2.jpg';
import slider3 from '@/assets/sliders/slider3.jpg';
import slider4 from '@/assets/sliders/slider4.jpg';
import styles from './index.less';

const Home: React.FC = () => {
  const images = [slider1, slider2, slider3, slider4];
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
