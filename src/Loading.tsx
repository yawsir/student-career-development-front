/*
 * @Author: yuyang
 * @Date: 2021-03-27 15:03:17
 * @LastEditTime: 2021-03-27 15:07:15
 * @LastEditors: yuyang
 */
import React from 'react';
import { Spin } from 'antd';

const Loading: React.FC = () => (
  <div>
    <Spin
      spinning={true}
      delay={300}
      style={{
        width: '100vw',
        height: '100vh',
        textAlign: 'center',
        lineHeight: '100vh',
      }}
    />
  </div>
);

export default Loading;
