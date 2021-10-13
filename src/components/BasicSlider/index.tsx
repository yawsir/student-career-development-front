/* eslint-disable max-len */
/*
 * @Author: yuyang
 * @Date: 2021-05-04 16:25:33
 * @LastEditTime: 2021-10-13 11:45:50
 * @LastEditors: yuyang
 */
import React, { useRef } from 'react';
import { Carousel, CarouselProps } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from './index.less';

export interface BasicSliderProps extends CarouselProps{
  reverse?: boolean;
}

const BasicSlider: React.FC<BasicSliderProps> = (props) => {
  const { children, reverse = false, ...rest } = props;
  const carouselRef = useRef<any>();
  const handlePrev = () => {
    if (reverse) {
      carouselRef.current.next();
    } else {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (reverse) {
      carouselRef.current.prev();
    } else {
      carouselRef.current.next();
    }
  };
  return (
    <>
      <div className="w-full">
        <Carousel
          autoplay
          dots={{
            className: styles.dots,
          }}
          className={styles.imagewrap}
          ref={carouselRef}
          {...rest}
        >
          {
            children
          }
        </Carousel>
      </div>
      <div
        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-4xl bg-black text-center text-white align-middle flex justify-center items-center cursor-pointer rounded-3xl opacity-50 w-14 h-24"
        onClick={handlePrev}
      >
        <LeftOutlined />
      </div>
      <div
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-4xl bg-black flex-1 text-center text-white align-middle flex justify-center items-center cursor-pointer rounded-3xl opacity-50 w-14 h-24"
        onClick={handleNext}
      >
        <RightOutlined />
      </div>
    </>
  );
};

export default BasicSlider;
