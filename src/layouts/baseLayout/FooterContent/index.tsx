/*
 * @Author: yuyang
 * @Date: 2021-07-09 09:45:43
 * @LastEditTime: 2021-08-28 16:01:11
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

const A: React.FC<AProps> = ({ children, href, target, className }) => <a href={href} target={target} className={`text-white ${className}`}>{children}</a>;

const infos = ['粤ICP备XXXXXXXX号', '主办单位：深圳市教育科学研究院', '版权所有：深圳市教育科学研究院',
  '邮编：518001', '地址：深圳市罗湖区泥岗西路1068号', '电话：0755-82661331', '传真：0755-881', '网站标识码：4403000007', '粤公网安备：44030402001169号', '技术维护：深圳市慧生教育科技有限公司'];

const FooterContent: React.FC = () => (
  <div className="w-full">
    <div className="p-8 bg-primary flex justify-around text-white">
      <div className="w-3/5 box-border flex flex-wrap justify-start p-8 border-0 border-r-2 border-green-300 border-solid border-opacity-25">
        {
          infos.map((item) => (
            <p className="py-2 px-4 text-left" style={{ minWidth: '50%' }} key={item}>
              <span>{item}</span>
            </p>
          ))
        }
      </div>
      <div className="w-1/5 box-border flex flex-wrap justify-start items-start p-8 border-0 border-r-2 border-green-300 border-solid border-opacity-25">
        <p className="py-2 px-4 text-left" style={{ minWidth: '100%' }}>快速链接</p>
        <p className="py-2 px-4 text-left" style={{ minWidth: '50%' }}>
          <A href="/" target="_blank">深圳市教育科学研究院</A>
        </p>
        <p className="py-2 px-4 text-left" style={{ minWidth: '50%' }}>
          <A href="/" target="_blank">深圳市教育局</A>
        </p>
      </div>
      <div className="w-1/5 box-border flex flex-col-reverse items-start pl-8">
        <p>
          <Tooltip title="13311112222">
            <WechatOutlined className="text-3xl" />
          </Tooltip>
        </p>
      </div>
    </div>
    <div className="bg-custom-gray-3 flex justify-between px-24">
      <Logo title="深圳市学生生涯发展平台" />
      <ul className="list-none flex justify-start items-center text-white m-0">
        <li><A href="/" className="p-2 m-1">关于我们</A></li>
        <li><A href="/" className="p-2 m-1">新闻资讯</A></li>
        <li><A href="/" className="p-2 m-1">产品中心</A></li>
        <li><A href="/" className="p-2 m-1">技术支持</A></li>
        <li><A href="/" className="p-2 m-1">招贤纳士</A></li>
        <li><A href="/" className="p-2 m-1">联系我们</A></li>
      </ul>
    </div>
  </div>
);

export default FooterContent;
