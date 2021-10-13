/* eslint-disable react/no-array-index-key */
/*
 * @Author: yuyang
 * @Date: 2021-07-09 09:45:43
 * @LastEditTime: 2021-10-13 13:46:19
 * @LastEditors: yuyang
 */
import React from 'react';
import Logo from '@/components/Logo';

interface AProps {
  href?: string;
  target?: string;
  className?: string;
}

const A: React.FC<AProps> = ({ children, href, target, className }) => <a href={href} target={target} className={`text-title ${className}`}>{children}</a>;

const links = [
  [
    {
      id: '1',
      name: '深圳市教育局',
      link: '',
    },
    {
      id: '2',
      name: '教育技术网',
      link: '',
    },
    {
      id: '3',
      name: '技术维护：深圳市慧生教育科技有限公司',
      link: '',
    },
    {
      id: '4',
      name: '粤ICP备xxxxxx号',
      link: '',
    },
  ],
  [
    {
      id: '5',
      name: '深圳市教育科学研究院',
      link: '',
    },
    {
      id: '6',
      name: '地  址：深圳市罗湖区泥岗西路1068号',
      link: '',
    },
    {
      id: '7',
      name: '电话：0755-82661331',
      link: '',
    },
    {
      id: '8',
      name: '邮  编：518001',
      link: '',
    },
  ],
];

const FooterContent: React.FC = () => (
  <div className="w-full">
    <div className="w-full p-8 bg-gradient-to-r from-bg-1 to-bg-2 flex-col items-center text-title">
      <div className="w-full">
        <Logo title="深圳市学生生涯发展平台" />
      </div>
      <div className="py-2">
        {
          links.map((line, i) => (
            <div className="text-center mb-4" key={i}>
              {
                line.map((item, idx) => (
                  <span key={item.id}>
                    <A key={item.id} href={item.link} target="_blank">{item.name}</A>
                    {(idx < (line.length - 1)) && <span className="px-2">|</span>}
                  </span>
                ))
              }
            </div>
          ))
        }
      </div>
      <div className="text-center text-title text-sm font-extralight">Copyright © 2021.Company name All rights reserved</div>
    </div>
  </div>
);

export default FooterContent;
