/*
 * @Author: yuyang
 * @Date: 2021-09-10 09:35:05
 * @LastEditTime: 2021-09-30 13:40:07
 * @LastEditors: yuyang
 */
import React from 'react';
import styles from './index.less';

interface NewsContainerProps {
  background?: string;
}
const NewsContainer: React.FC<NewsContainerProps> = (props) => {
  const { children, background } = props;
  return (
    <div className={styles.newsContainer}>
      <div className={styles.bg} style={{ backgroundImage: `url(${background})` }} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default NewsContainer;
