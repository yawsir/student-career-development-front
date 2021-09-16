/*
 * @Author: yuyang
 * @Date: 2021-03-27 14:20:18
 * @LastEditTime: 2021-09-16 10:42:45
 * @LastEditors: yuyang
 */
import React from 'react';
import type { ComponentType } from 'react';
import { Link, useLocation, history } from 'umi';
import { Menu } from 'antd';
import queryKeysByPath from '@/utils/utils';
import Icon, { MenuOutlined, createFromIconfontCN } from '@ant-design/icons';
import { MenuData } from '../../../../config/route';
import styles from './index.less';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_2656812_o3jyrni8fc.js'],
  extraCommonProps: {
    style: {
      marginRight: '4px',
      fontSize: '16px',
    },
  },
});

const { SubMenu, Item } = Menu;

export interface BasicLayoutProps {
  menusData: MenuData[];
}

const MenuContent: React.FunctionComponent<BasicLayoutProps> = (props: BasicLayoutProps) => {
  const { menusData } = props;
  const location = useLocation();

  const renderTitle = (title: string, icon?: ComponentType, iconType?: string, link?: string) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span className={styles['menuitem-outside']} onClick={() => link && history.push(link)}>
        {icon && <Icon component={icon} />}
        {iconType && <IconFont type={iconType} />}
        {title}
      </span>
    </div>
  );
  function renderMenu(data: any = [], isInside = false) {
    const rows = Array.isArray(data) ? data : [];
    return rows.map((row) => {
      if (row === undefined) return false;
      const { title, link = '', key, icon, iconType, children, outLink, ...restState } = row;

      if (children && children.length > 0) {
        const subMenu = renderMenu(children, true);
        return (
          <SubMenu key={key} title={renderTitle(title, icon, iconType, link)} popupClassName={styles.submenu}>
            {subMenu}
          </SubMenu>
        );
      }
      return (
        <Item key={key} title={title}>
          {
            outLink
              ? (
                <a href={link} target="_blank" rel="noreferrer">
                  <span className={isInside ? styles['menuitem-inside'] : styles['menuitem-outside']}>
                    {icon && <Icon component={icon} className={styles.alignMiddle} />}
                    {iconType && <IconFont type={iconType} />}
                    {title}
                  </span>
                </a>
              )
              : (
                <Link to={{ pathname: link, state: { ...restState, key } }}>
                  <span className={isInside ? styles['menuitem-inside'] : styles['menuitem-outside']}>
                    {icon && <Icon component={icon} className={styles.alignMiddle} />}
                    {iconType && <IconFont type={iconType} />}
                    {title}
                  </span>
                </Link>
              )
          }
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
      theme="dark"
      overflowedIndicator={<MenuOutlined />}
      className={styles.menuwrap}
    >
      {renderMenu(menusData)}
    </Menu>
  );
};

export default MenuContent;
