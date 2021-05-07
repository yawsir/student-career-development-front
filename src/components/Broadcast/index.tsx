/*
 * @Author: yuyang
 * @Date: 2021-05-07 16:25:08
 * @LastEditTime: 2021-05-07 16:43:31
 * @LastEditors: yuyang
 */
import React from 'react';
import { NotificationOutlined } from '@ant-design/icons';
import styles from './index.less';

interface BroadcastProps {
  scrolling?: boolean;
}
const Broadcast: React.FC<BroadcastProps> = (props) => {
  const { children } = props;
  return (
    <div className={styles.broadcast}>
      <div className={styles.broadcast__wrap}>
        <span className={styles.broadcast__wrap__prefix}>
          最新通知&nbsp;
          <NotificationOutlined />
        </span>
        <p className={styles.broadcast__wrap__content}>{children}</p>
      </div>
    </div>
  );
};

export default Broadcast;
