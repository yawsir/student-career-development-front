/*
 * @Author: yuyang
 * @Date: 2021-03-27 14:20:18
 * @LastEditTime: 2021-03-28 11:31:01
 * @LastEditors: yuyang
 */
import React from 'react';
import { Layout } from 'antd';
import Header1 from './header';
import MenuContent from './menu';
import styles from './index.less';
import { menusData } from '../../../config/route';

const { Header, Content } = Layout;

const BaseLayout: React.FunctionComponent = (props: any) => {
  const { children } = props;
  return (
    <Layout className={styles.container}>
      <Header className={styles.contentHeader}>
        <Header1 />
        <MenuContent menusData={menusData} />
      </Header>
      <Layout style={{ padding: 0 }}>
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </Layout>
  );
};
export default BaseLayout;
