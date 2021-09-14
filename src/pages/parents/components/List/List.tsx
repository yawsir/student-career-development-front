/*
 * @Author: yuyang
 * @Date: 2021-09-14 22:58:56
 * @LastEditTime: 2021-09-14 23:10:21
 * @LastEditors: yuyang
 */
import React from 'react';

interface ListProps {
  className?: string;
  style?: React.CSSProperties;
}
const List: React.FC<ListProps> = (props) => {
  const { children, className, style } = props;
  return (
    <ul className={`text-xs list-none ${className}`} style={style}>
      {children}
    </ul>
  );
};

export default List;
