/*
 * @Author: yuyang
 * @Date: 2021-04-24 11:14:57
 * @LastEditTime: 2021-04-24 11:16:57
 * @LastEditors: yuyang
 */
import React from 'react';

interface ToolBarProps {
  title?: string;
}
const ToolBar: React.FC<ToolBarProps> = (props) => {
  const { title } = props;
  return <div>{title}</div>;
};

export default ToolBar;
