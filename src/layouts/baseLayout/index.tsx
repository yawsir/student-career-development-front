/*
 * @Author: yuyang
 * @Date: 2021-03-27 14:20:18
 * @LastEditTime: 2021-04-02 14:55:34
 * @LastEditors: yuyang
 */
import React from 'react';
import { Layout, Row, Col } from 'antd';
import HeaderContent from './header';
import styles from './index.less';
import { menusData } from '../../../config/route';
import MenuContent from './menu';

const { Header, Content } = Layout;
const BaseLayout: React.FunctionComponent = (props: any) => {
  const { children } = props;
  return (
    <Layout className={styles.container}>
      <Header className={styles.contentHeader}>
        <Row className={styles.contentHeaderWrap}>
          <Col xl={8} lg={6} md={6} sm={20} xs={20}>
            <HeaderContent />
          </Col>
          <Col xl={16} lg={18} md={18} sm={4} xs={4}>
            <MenuContent menusData={menusData} />
          </Col>
        </Row>
      </Header>
      <Layout style={{ padding: 0 }}>
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </Layout>
  );
};
export default BaseLayout;
