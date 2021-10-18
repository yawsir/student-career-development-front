/*
 * @Author: yuyang
 * @Date: 2021-09-14 23:02:58
 * @LastEditTime: 2021-10-18 17:00:41
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
    <li className={` ml-6 mb-4 text-base  ${className}`} style={style}>
      <div className="text-primary mb-2">
        <img src={diamond} alt="" className="-mt-1 mr-1 h-3" />
        <span className="text-title font-bold">{title}</span>
      </div>
      <span className="ml-4">{children}</span>
    </li>
  );
};

export default SubItem;
