/*
 * @Author: yuyang
 * @Date: 2021-03-27 14:20:18
 * @LastEditTime: 2021-05-04 15:26:17
 * @LastEditors: yuyang
 */
import React from 'react';
import { Layout, Row, Col } from 'antd';
import ToolBar from './ToolBar';
import styles from './index.less';
import { menusData } from '../../../config/route';
import MenuContent from './Menu';

const { Header, Content } = Layout;
const BaseLayout: React.FunctionComponent = (props: any) => {
  const { children } = props;
  return (
    <Layout className={styles.container}>
      <Header className={styles.header}>
        <Row className={styles.header__toolbar} justify="center" align="middle">
          <Col xl={20} lg={18} md={18} sm={20} xs={20}>
            <ToolBar title="深圳市学生生涯发展支持平台" />
          </Col>
        </Row>
        <Row className={styles.header__menu} justify="center" align="middle">
          <Col xl={20} lg={18} md={18} sm={20} xs={20}>
            <MenuContent menusData={menusData} />
          </Col>
        </Row>
      </Header>
      <Layout>
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </Layout>
  );
};
export default BaseLayout;
