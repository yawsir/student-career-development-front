/*
 * @Author: yuyang
 * @Date: 2021-03-27 14:20:18
 * @LastEditTime: 2021-07-08 18:13:04
 * @LastEditors: yuyang
 */
import React from 'react';
import { Layout, Row, Col } from 'antd';
import MenuContent from './MenuContent';
import styles from './index.less';
import Logo from './Logo';
import { menusData } from '../../../config/route';

const { Header, Content } = Layout;
const BaseLayout: React.FunctionComponent = (props: any) => {
  const { children } = props;
  return (
    <Layout className={styles.container}>
      <Header className={styles.header}>
        <Row className={styles.header__menu} justify="center" align="middle">
          <Col xl={5} lg={7} md={7} sm={5} xs={5}>
            <Logo title="深圳市学生生涯发展支持平台" />
          </Col>
          <Col xl={18} lg={16} md={16} sm={18} xs={18}>
            <MenuContent menusData={menusData} />
          </Col>
        </Row>
      </Header>
      <Layout>
        <Row justify="center">
          <Col xl={16} lg={18} md={18} sm={24} xs={24}>
            <Content className={styles.content}>{children}</Content>
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
};
export default BaseLayout;
