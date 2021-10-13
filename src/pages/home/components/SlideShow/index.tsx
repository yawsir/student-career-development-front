/* eslint-disable max-len */
/*
 * @Author: yuyang
 * @Date: 2021-05-04 16:25:33
 * @LastEditTime: 2021-10-13 12:50:08
 * @LastEditors: yuyang
 */
import React from 'react';
import slider1 from '@/assets/sliders/slider1.png';
import slider2 from '@/assets/sliders/slider2.png';
import slider3 from '@/assets/sliders/slider3.png';
import slider4 from '@/assets/sliders/slider4.png';
import BasicSlider from '@/components/BasicSlider';

const Home: React.FC = () => {
  const images = [slider1, slider2, slider3, slider4];
  return (
    <div className="flex w-full justify-center relative" style={{ height: 518 }}>
      <BasicSlider>
        {
          images.map((img) => (
            <div key={img}>
              <img src={img} alt="" className="w-full object-cover object-center" style={{ height: 518 }} />
            </div>
          ))
        }
      </BasicSlider>
    </div>
  );
};

export default Home;
