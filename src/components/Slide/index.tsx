/*
 * @Author: haoyh
 * @Date: 2021-10-18 17:27:01
 * @LastEditTime: 2021-10-18 17:36:41
 * @LastEditors: haoyh
 */
import React from 'react';
import styles from './index.less';

interface SlideProps {
  imgUrl:string,
  text:string,
  bottom: string,

}
const Slide: React.FC<SlideProps> = (props) => {
  const [hover, setHover] = React.useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  const { imgUrl, text, bottom = '-100%' } = props;

  return (
    <>
      <div
        className={`${styles.slideOutside} transition transform ${hover ? '-translate-y-2' : '-translate-y-0'}`}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <div
          className={styles.slideBox}
          style={hover ? { bottom: 0 } : { bottom }}
        >
          <div>{text}</div>
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
