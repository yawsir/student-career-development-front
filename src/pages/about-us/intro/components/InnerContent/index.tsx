/*
 * @Author: yuyang
 * @Date: 2021-05-05 17:10:45
 * @LastEditTime: 2021-05-05 17:13:54
 * @LastEditors: yuyang
 */
import React from 'react';
import styles from './index.less';

interface InnerContentProps {
  title?: string;
  content?: string;
}
const InnerContent: React.FC<InnerContentProps> = (props) => {
  const { title = '', content = '' } = props;
  return (
    <div className={styles['inner-content']}>
      <h4 className={styles['inner-content__title']}>{title}</h4>
      <p className={styles['inner-content__content']}>{content}</p>
    </div>
  );
};

export default InnerContent;
