/*
 * @Author: yuyang
 * @Date: 2021-07-09 09:45:43
 * @LastEditTime: 2021-09-30 15:03:01
 * @LastEditors: yuyang
 */
import React from 'react';
import { Tooltip } from 'antd';
import Logo from '@/components/Logo';
import { WechatOutlined } from '@ant-design/icons';

interface AProps {
  href?: string;
  target?: string;
  className?: string;
}

const A: React.FC<AProps> = ({ children, href, target, className }) => <a href={href} target={target} className={`text-title ${className}`}>{children}</a>;

const infos = ['粤ICP备XXXXXXXX号', '主办单位：深圳市教育科学研究院', '版权所有：深圳市教育科学研究院',
  '邮编：518001', '地址：深圳市罗湖区泥岗西路1068号', '电话：0755-82661331', '传真：0755-881', '网站标识码：4403000007', '粤公网安备：44030402001169号', '技术维护：深圳市慧生教育科技有限公司'];

const FooterContent: React.FC = () => (
  <div className="w-full">
    <div className="w-full p-8 bg-gradient-to-r from-bg-1 to-bg-2 flex flex-wrap justify-around text-title">
      <div className="w-full lg:w-3/5  box-border flex flex-wrap justify-start p-8 border-0 border-b-2 lg:border-r-2 lg:border-b-0 border-green-300 border-solid border-opacity-25">
        {
          infos.map((item) => (
            <p className="py-2 px-4 box-border text-left" style={{ minWidth: '50%' }} key={item}>
              <span>{item}</span>
            </p>
          ))
        }
      </div>
      <div className="w-full lg:w-1/5  box-border flex flex-wrap justify-start p-8 border-0 border-b-2 lg:border-r-2 lg:border-b-0 border-green-300 border-solid border-opacity-25">
        <p className="py-2 px-4 m-0 box-border text-left" style={{ minWidth: '100%' }}>快速链接</p>
        <p className="py-2 px-4 m-0 box-border text-left" style={{ minWidth: '50%' }}>
          <A href="/" target="_blank">深圳市教育科学研究院</A>
        </p>
        <p className="py-2 px-4 m-0 box-border text-left" style={{ minWidth: '50%' }}>
          <A href="/" target="_blank">深圳市教育局</A>
        </p>
      </div>
      <div className="w-full lg:w-1/5  box-border flex flex-col-reverse items-start pl-8">
        <p className="py-4">
          <Tooltip title="13311112222">
            <WechatOutlined className="text-3xl" />
          </Tooltip>
        </p>
      </div>
      <div className="w-full">
        <Logo title="深圳市学生生涯发展平台" />
        <p className="text-center text-title text-base my-6">Copyright © 2021.Company name All rights reserved</p>
      </div>
    </div>
  </div>
);

export default FooterContent;
