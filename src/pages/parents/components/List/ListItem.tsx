/*
 * @Author: yuyang
 * @Date: 2021-09-14 23:02:38
 * @LastEditTime: 2021-09-14 23:18:50
 * @LastEditors: yuyang
 */
import React from 'react';
import arrow from '@/assets/icons/arrow.svg';

interface ListItemProps {
  className?: string;
  style?: React.CSSProperties;
}
const ListItem: React.FC<ListItemProps> = (props) => {
  const { children, className, style } = props;
  return (
    <li className={`mb-4 flex  ${className}`} style={style}>
      <img src={arrow} alt="" className="mt-1 mr-1 h-2 flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
};

export default ListItem;
