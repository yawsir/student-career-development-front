/*
 * @Author: yuyang
 * @Date: 2021-05-08 08:30:40
 * @LastEditTime: 2021-09-23 22:37:20
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
  visibleClassName?: string;
  invisibleClassName?: string;
}

const MultiPaneItem: React.FC<MultiPaneItemProps> = (props) => {
  const { children, name, visibleClassName, invisibleClassName } = props;
  const current = useContext(multiPaneContext);
  const visible = name === current;
  const cn = visible ? (visibleClassName || styles['multipane__item--show']) : (invisibleClassName || styles['multipane__item--hide']);
  return (
    <div className={cn}>
      {children}
    </div>
  );
};

export default MultiPaneItem;
