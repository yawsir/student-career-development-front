/*
 * @Author: yuyang
 * @Date: 2021-04-24 11:14:57
 * @LastEditTime: 2021-07-08 18:10:32
 * @LastEditors: yuyang
 */
import React from 'react';
import logo from '@/assets/logo.png';
import styles from './index.less';

interface ToolBarProps {
  title?: string;
}

const ToolBar: React.FC<ToolBarProps> = (props) => {
  const { title } = props;
  return (
    <div className={styles.toolbar}>
      <div className={styles.platform}>
        <div className={styles.platform__logo}>
          <img src={logo} alt="" />
        </div>
        <h2 className={styles.platform__title}>{title}</h2>
      </div>
    </div>
  );
};

export default ToolBar;
