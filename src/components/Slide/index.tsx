/*
 * @Author: haoyh
 * @Date: 2021-10-18 17:27:01
 * @LastEditTime: 2021-10-19 10:32:08
 * @LastEditors: yuyang
 */
import React from 'react';
import styles from './index.less';

interface SlideProps {
  imgUrl:string;
  text?: React.ReactNode;
  maskDirection?: 'top-bottom' | 'bottom-top';

}
const Slide: React.FC<SlideProps> = (props) => {
  const { imgUrl, text, maskDirection = 'bottom-top', children } = props;

  return (
    <>
      <div
        className={`${styles.slideOutside} transition transform hover:-translate-y-2 cursor-pointer`}
      >
        <div
          className={`${styles.slideBox} ${maskDirection === 'top-bottom' ? 'bottom-full' : '-bottom-full'}`}
        >
          <div className="font-bold">{text ?? children}</div>
        </div>
        <img
          src={imgUrl}
          alt={imgUrl}
        />
      </div>
    </>
  );
};

export default Slide;
