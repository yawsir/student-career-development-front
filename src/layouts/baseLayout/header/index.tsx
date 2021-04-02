/*
 * @Author: yuyang
 * @Date: 2021-03-27 14:20:18
 * @LastEditTime: 2021-04-02 14:27:47
 * @LastEditors: yuyang
 */
import React from 'react';
import styles from './index.less';

const Header: React.FC = () => {
  return (
    <div className={styles.headercontent}>
      <div className={styles.headercontent__homebtn}>学生职业发展平台</div>
    </div>
  );
};
export default Header;
