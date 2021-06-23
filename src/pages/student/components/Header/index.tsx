/*
 * @Author: yuyang
 * @Date: 2021-06-23 14:47:57
 * @LastEditTime: 2021-06-23 16:52:00
 * @LastEditors: yuyang
 */
import React from 'react';
import { Dropdown, Menu } from 'antd';
import { UserOutlined, DownOutlined, PoweroffOutlined } from '@ant-design/icons';
import storege, { storageKeys } from '@/utils/localStorage';
import logo from '@/assets/logo.png';
import styles from './index.less';

interface HeaderProps {
  onLogout?: () => void;
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { onLogout, title } = props;
  const username = storege.getItem(storageKeys.USERNAME_KEY_NAME);

  const menu = (
    <Menu>
      <Menu.Item icon={<UserOutlined />}>
        个人中心
      </Menu.Item>
      <Menu.Item icon={<PoweroffOutlined />} onClick={onLogout}>
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={styles.header}>
      <div className={styles.platform}>
        <div className={styles.platform__logo}>
          <img src={logo} alt="" />
        </div>
        <h2 className={styles.platform__title}>{title}</h2>
      </div>

      <Dropdown
        overlay={menu}
        className={styles.personal}
        trigger={['click']}
      >
        <div className={styles.personal__username}>
          {username}
          &nbsp;
          <DownOutlined />
        </div>
      </Dropdown>
    </div>
  );
};

export default Header;
