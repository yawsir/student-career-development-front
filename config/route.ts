/*
 * @Author: yuyang
 * @Date: 2021-03-27 14:36:22
 * @LastEditTime: 2021-04-02 16:01:36
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
    title: '关于我们',
    link: '/about',
    key: 'about',
    children: [
      {
        title: '最新消息',
        link: '/about/news',
        key: 'news',
        children: [],
      },
      {
        title: '常见问题集锦',
        link: '/about/querys',
        key: 'querys',
        children: [],
      },
      {
        title: '相关链接',
        link: '/about/links',
        key: 'links',
        children: [],
      },
      {
        title: '联系我们',
        link: '/about/contactus',
        key: 'contactus',
        children: [],
      },
      {
        title: '发现',
        link: '/about/discovery',
        key: 'discovery',
        children: [],
      },
    ],
  },
  {
    title: '学生',
    link: '/student',
    key: '/student',
    children: [
      {
        title: '个人生涯档案',
        link: '/student/personal',
        key: 'personal',
        children: [],
      },
      {
        title: '自我认知测评',
        link: '/student/autognosis',
        key: 'autognosis',
        children: [],
      },
      {
        title: '个人简历与履历',
        link: '/student/resume',
        key: 'resume',
        children: [],
      },
      {
        title: '工作体验计划',
        link: '/student/work-experience',
        key: 'work-experience',
        children: [],
      },
    ],
  },
  {
    title: '教师',
    link: '/teacher',
    key: 'teacher',
    children: [
      {
        title: '生涯教师管理',
        link: '/teacher/teacher-career',
        key: 'teacher-career',
        children: [],
      },
      {
        title: '讲座与研讨会',
        link: '/teacher/lecture',
        key: 'lecture',
        children: [],
      },
      {
        title: '校企合作相关资源',
        link: '/teacher/resources',
        key: 'resources',
        children: [],
      },
      {
        title: '生涯教师职业发展资料库',
        link: '/teacher/materials',
        key: 'materials',
        children: [],
      },
      {
        title: '学生工作体验计划申报入口',
        link: '/teacher/declare',
        key: 'declare',
        children: [],
      },
    ],
  },
  {
    title: '家长',
    link: '/parents',
    key: 'parents',
    children: [
      {
        title: '前言',
        link: '/parents/preface',
        key: 'perface',
        children: [],
      },
      {
        title: '重点过程',
        link: '/parents/key-process',
        key: 'key-process',
        children: [],
      },
      {
        title: '家长职业资源导入管理',
        link: '/parents/resource-import',
        key: 'resource-import',
        children: [],
      },
      {
        title: '测评工具',
        link: '/parents/assessment-tools',
        key: 'assessment-tools',
        children: [],
      },
      {
        title: '影片/视频',
        link: '/parents/parents-movies',
        key: 'parents-movies',
        children: [],
      },
    ],
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
