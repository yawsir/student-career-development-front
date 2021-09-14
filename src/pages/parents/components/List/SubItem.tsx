/*
 * @Author: yuyang
 * @Date: 2021-09-14 23:02:58
 * @LastEditTime: 2021-09-14 23:43:42
 * @LastEditors: yuyang
 */
import React from 'react';
import diamond from '@/assets/icons/diamond.svg';

interface SubItemProps {
  className?: string;
  style?: React.CSSProperties;
  title: string;
}
const SubItem: React.FC<SubItemProps> = (props) => {
  const { children, className, style, title } = props;
  return (
    <li className={` ml-6 mb-4  ${className}`} style={style}>
      <div className="text-primary mb-2">
        <img src={diamond} alt="" className="-mt-1 mr-1 h-3" />
        <span>{title}</span>
      </div>
      <span className="ml-4">{children}</span>
    </li>
  );
};

export default SubItem;
