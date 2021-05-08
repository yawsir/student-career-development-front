/*
 * @Author: yuyang
 * @Date: 2021-05-08 08:49:57
 * @LastEditTime: 2021-05-08 08:59:07
 * @LastEditors: yuyang
 */
import React from 'react';
import styles from './index.less';

interface JournalismProps {
  title?: string;
}
const Journalism: React.FC<JournalismProps> = (props) => {
  const { title, children } = props;
  return (
    <div className={styles.journalism}>
      <h5 className={styles.journalism__title}>
        <span className={styles.journalism__title__deco} />
        {title}
      </h5>
      {children}
    </div>
  );
};

export default Journalism;
