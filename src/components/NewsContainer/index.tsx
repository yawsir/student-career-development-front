/*
 * @Author: yuyang
 * @Date: 2021-09-10 09:35:05
 * @LastEditTime: 2021-09-10 14:21:02
 * @LastEditors: yuyang
 */
import React from 'react';
import styles from './index.less';

interface NewsContainerProps {

}
const NewsContainer: React.FC<NewsContainerProps> = (props) => {
  const { children } = props;
  return (
    <div className={styles.newsContainer}>
      <div className={styles.bg} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default NewsContainer;
