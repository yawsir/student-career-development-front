/*
 * @Author: yuyang
 * @Date: 2021-03-27 14:36:22
 * @LastEditTime: 2021-09-18 12:53:36
 * @LastEditors: yuyang
 */
import type { ComponentType } from 'react';

interface MenuData {
  title: string;
  link: string;
  key: string;
  icon?: ComponentType;
  iconType?: string;
  outLink?: boolean;
  target?: string;
  children: MenuData[] | [];
}

const menusData: MenuData[] = [
  {
    title: '首页',
    link: '/home',
    key: 'home',
    children: [],
  },
  {
    title: '平台介绍',
    link: '/about-us',
    key: 'about-us',
    children: [],
  },
  {
    title: '学生',
    link: '/student',
    key: 'student',
    children: [
      {
        title: '个人测评',
        link: 'http://measure.huishengedu.cn/',
        key: 'measure',
        outLink: true,
        children: [],
      },
    ],
  },
  {
    title: '教师社区',
    link: '/teacher',
    key: 'teacher',
    children: [],
  },
  {
    title: '学校',
    link: '/school',
    key: 'school',
    children: [],
  },
  {
    title: '家长',
    link: '/parents',
    key: 'parents',
    children: [],
  },
  {
    title: '职业信息库',
    link: '/career',
    key: 'career',
    children: [],
  },
  {
    title: '社会实践',
    link: '/social-practice',
    key: 'social-practice',
    children: [],
  },
];

export { menusData, MenuData };
