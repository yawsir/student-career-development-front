/*
 * @Author: yuyang
 * @Date: 2021-03-27 14:36:22
 * @LastEditTime: 2021-05-04 19:38:21
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
    title: '教师',
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
    title: '学校',
    link: '/school',
    key: 'school',
    children: [
      {
        title: '学生生涯发展介绍',
        link: '/school/student-career-development',
        key: 'student-career-development',
        children: [],
      },
      {
        title: '生涯发展教育与就业指导原则',
        link: '/school/education-employment',
        key: 'education-employment',
        children: [],
      },
      {
        title: '宣传通知',
        link: '/school/promotion-notice',
        key: 'promotion-notice',
        children: [],
      },
      {
        title: '校企合作资源板块',
        link: '/school/coop-resource',
        key: 'coop-resource',
        children: [],
      },
      {
        title: '影片/视频',
        link: '/school/school-movies',
        key: 'school-movies',
        children: [],
      },
    ],
  },
  {
    title: '职业咨询',
    link: '/career-counseling',
    key: 'career-counseling',
    children: [
      {
        title: '职业信息库',
        link: '/career/info-base',
        key: 'info-base',
        children: [],
      },
      {
        title: '行业动态',
        link: '/career/industry-trends',
        key: 'industry-trends',
        children: [],
      },
      {
        title: '求职指导',
        link: '/career/job-guidance',
        key: 'job-guidance',
        children: [],
      },
      {
        title: '创业咨讯',
        link: '/career/business-information',
        key: 'business-information',
        children: [],
      },
    ],
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
