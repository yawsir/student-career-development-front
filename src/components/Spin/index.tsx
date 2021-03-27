/*
 * @Author: yuyang
 * @Date: 2021-03-27 14:45:19
 * @LastEditTime: 2021-03-27 14:58:53
 * @LastEditors: yuyang
 */
import React from 'react';
import { Spin } from 'antd';
import type { SpinProps } from 'antd';

interface LoadingProps extends SpinProps {}
const Loading: React.FC<LoadingProps> = (props) => {
  const { children, spinning } = props;
  let loading;
  if (spinning) {
    loading = true;
  }
  return <Spin spinning={loading}>{children}</Spin>;
};

export default Loading;
