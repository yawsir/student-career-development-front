/*
 * @Author: yuyang
 * @Date: 2021-05-08 08:30:40
 * @LastEditTime: 2021-05-08 08:30:52
 * @LastEditors: yuyang
 */
import React, { createContext } from 'react';
import styles from './index.less';

interface MultiPaneProps {
  /**
   * @description 当前展示的面板的name
   */
  current: string;
}

export const multiPaneContext = createContext('');

const MultiPane: React.FC<MultiPaneProps> = (props) => {
  const { current, children } = props;
  const { Provider } = multiPaneContext;
  return (
    <div className={styles.multipane}>
      <Provider value={current}>{children}</Provider>
    </div>
  );
};

export default MultiPane;
