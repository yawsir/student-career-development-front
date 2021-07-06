/*
 * @Author: yuyang
 * @Date: 2021-03-27 14:36:22
 * @LastEditTime: 2021-07-06 17:13:45
 * @LastEditors: yuyang
 */
import type { ComponentType } from 'react';

interface MenuData {
  title: string;
  link: string;
  key: string;
  icon?: ComponentType;
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
    children: [],
  },
  {
    title: '教师社区',
    link: '/teacher',
    key: 'teacher',
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
    title: '升学咨询',
    link: '/entrance-counseling',
    key: 'entrance-counseling',
    children: [
      {
        title: '高考专业选择匹配测试',
        link: '/entrance/match-testing',
        key: 'match-testing',
        children: [],
      },
      {
        title: '高校专业信息库',
        link: '/entrance/campus-info',
        key: 'campus-info',
        children: [],
      },
      {
        title: '高考相关最新资讯',
        link: '/college/university-news',
        key: 'university-news',
        children: [],
      },
    ],
  },
  {
    title: '校企合作',
    link: '/school-enterprise-coop',
    key: 'school-enterprise-coop',
    children: [],
  },
];

export { menusData, MenuData };
