/*
 * @Author: yuyang
 * @Date: 2021-03-27 14:20:18
 * @LastEditTime: 2021-05-04 15:43:38
 * @LastEditors: yuyang
 */
import React from 'react';
import type { ComponentType } from 'react';
import { Link, useLocation } from 'umi';
import { Menu } from 'antd';
import queryKeysByPath from '@/utils/utils';
import Icon from '@ant-design/icons';
import { MenuData } from '../../../../config/route';
import styles from './index.less';

const { SubMenu, Item } = Menu;

export interface BasicLayoutProps {
  menusData: MenuData[];
}

const MenuContent: React.FunctionComponent<BasicLayoutProps> = (props: BasicLayoutProps) => {
  const { menusData } = props;
  const location = useLocation();

  const renderTitle = (title: string, icon?: ComponentType) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {icon && <Icon component={icon} />}
      <span>{title}</span>
    </div>
  );
  function renderMenu(data: any = [], isInside = false) {
    const rows = Array.isArray(data) ? data : [];
    return rows.map((row) => {
      if (row === undefined) return false;
      const { title, link = '', key, icon, children, ...restState } = row;

      if (children && children.length > 0) {
        const subMenu = renderMenu(children, true);
        return (
          <SubMenu key={key} title={renderTitle(title, icon)} popupClassName={styles.submenu}>
            {subMenu}
          </SubMenu>
        );
      }
      return (
        <Item key={key} title={title}>
          {icon && <Icon component={icon} />}
          <Link to={{ pathname: link, state: { ...restState, key } }}>
            <span className={isInside ? styles['menuitem-inside'] : styles['menuitem-outside']}>{title}</span>
          </Link>
        </Item>
      );
    });
  }

  const { openKey, selectKey } = queryKeysByPath(location.pathname);

  return (
    <Menu
      selectedKeys={[selectKey || '']}
      defaultOpenKeys={[openKey]}
      mode="horizontal"
      theme="light"
      className={styles.menuwrap}
    >
      {renderMenu(menusData)}
    </Menu>
  );
};

export default MenuContent;
