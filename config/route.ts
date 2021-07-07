/*
 * @Author: yuyang
 * @Date: 2021-03-27 14:36:22
 * @LastEditTime: 2021-07-07 11:28:17
 * @LastEditors: yuyang
 */
import type { ComponentType } from 'react';
import { HomeOutlined } from '@ant-design/icons';

interface MenuData {
  title: string;
  link: string;
  key: string;
  icon?: ComponentType;
  iconType?: string;
  children: MenuData[] | [];
}

const menusData: MenuData[] = [
  {
    title: '首页',
    link: '/home',
    key: 'home',
    icon: HomeOutlined,
    children: [],
  },
  {
    title: '平台介绍',
    link: '/about-us',
    key: 'about-us',
    iconType: 'icon-pingtai',
    children: [
      {
        title: '网站简介',
        link: '/about-us/intro',
        key: 'intro',
        children: [],
      },
      {
        title: '平台发展大事件',
        link: '/about-us/platform-news',
        key: 'platform-news',
        children: [],
      },
    ],
  },
  {
    title: '学生',
    link: '/student',
    key: '/student',
    iconType: 'icon-xuesheng',
    children: [],
  },
  {
    title: '教师社区',
    link: '/teacher',
    key: 'teacher',
    iconType: 'icon-jiaoshi1',
    children: [],
  },
  {
    title: '家长',
    link: '/parents',
    key: 'parents',
    iconType: 'icon-jiachang',
    children: [],
  },
  {
    title: '职业信息库',
    link: '/career',
    key: 'career',
    iconType: 'icon-zhiye',
    children: [],
  },
  {
    title: '社会实践',
    link: '/social-practice',
    key: 'social-practice',
    iconType: 'icon-shijianxiangmu',
    children: [],
  },
];

export { menusData, MenuData };
