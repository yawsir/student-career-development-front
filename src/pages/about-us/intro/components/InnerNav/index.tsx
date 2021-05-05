/*
 * @Author: yuyang
 * @Date: 2021-05-05 16:32:20
 * @LastEditTime: 2021-05-05 17:00:58
 * @LastEditors: yuyang
 */
import React from 'react';
import { Link, useLocation } from 'umi';
import styles from './index.less';

const NavItem = ({ text, to, active }: {
  text: string;
  to: string;
  active: boolean;
}) => (
  <li className={`${styles.nav__item} ${active ? styles['nav__item-active'] : ''}`}>
    <Link to={to}>{text}</Link>
  </li>
);
const Nav: React.FC = () => {
  const { pathname } = useLocation();
  const navs = [
    {
      text: '网站简介',
      to: '/about-us/intro',
    },
    {
      text: '平台发展大事件',
      to: '/about-us/platform-news',
    },
  ];

  return (
    <ul className={styles.nav}>
      {
        navs.map((item) => <NavItem text={item.text} to={item.to} active={pathname === item.to} key={item.to} />)
      }
    </ul>
  );
};

export default Nav;
