/*
 * @Author: yuyang
 * @Date: 2021-05-08 08:49:31
 * @LastEditTime: 2021-05-08 08:53:33
 * @LastEditors: yuyang
 */
import React from 'react';
import styles from './index.less';

interface ContentProps {
  image?: string;
}
const Content: React.FC<ContentProps> = (props) => {
  const { children, image } = props;
  return (
    <div className={styles.journalism__content}>
      <div className={styles.journalism__content__image}>
        <img src={image} alt="" />
      </div>
      <div className={styles.journalism__content__text}>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Content;
