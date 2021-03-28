/*
 * @Author: yuyang
 * @Date: 2021-03-27 14:36:22
 * @LastEditTime: 2021-03-28 11:26:30
 * @LastEditors: yuyang
 */
import { HomeOutlined } from '@ant-design/icons';
import type { ComponentType } from 'react';

interface MenuData {
  title: string;
  link: string;
  key: string;
  icon?: ComponentType;
  children: MenuData | [];
}

const menusData: MenuData[] = [
  {
    title: 'bla',
    link: '/demo/access',
    key: 'bla',
    children: [],
    icon: HomeOutlined,
  },
];

export { menusData, MenuData };
