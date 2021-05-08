/*
 * @Author: yuyang
 * @Date: 2021-05-08 08:30:40
 * @LastEditTime: 2021-05-08 08:33:44
 * @LastEditors: yuyang
 */
import React, { useContext } from 'react';
import { multiPaneContext } from './MultiPane';
import styles from './index.less';

interface MultiPaneItemProps {
  /**
   * @description 面板的名字
   */
  name: string;
}

const MultiPaneItem: React.FC<MultiPaneItemProps> = (props) => {
  const { children, name } = props;
  const current = useContext(multiPaneContext);
  const visible = name === current;
  return (
    <div className={`${visible ? styles['multipane__item--show'] : styles['multipane__item--hide']}`}>
      {children}
    </div>
  );
};

export default MultiPaneItem;
