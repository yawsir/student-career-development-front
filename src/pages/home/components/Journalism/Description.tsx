/*
 * @Author: yuyang
 * @Date: 2021-05-08 08:49:24
 * @LastEditTime: 2021-05-08 09:52:24
 * @LastEditors: yuyang
 */
import React from 'react';
import styles from './index.less';

interface DescriptionProps {
  active?: boolean;
}
const Description: React.FC<DescriptionProps> = (props) => {
  const { children, active = false } = props;
  return (
    <div className={`${styles.journalism__description} ${active ? styles['journalism__description--active'] : ''}`}>
      <div className={styles.journalism__description__date}>
        <p className={styles.journalism__description__date__day}>08</p>
        <p className={styles.journalism__description__date__year}>2020-01</p>
      </div>
      <div className={styles.journalism__description__text}>
        {children}
      </div>
    </div>
  );
};

export default Description;
