/*
 * @Author: yuyang
 * @Date: 2021-03-27 14:20:18
 * @LastEditTime: 2021-07-09 11:26:31
 * @LastEditors: yuyang
 */
import React from 'react';
import { Layout, Row, Col, BackTop } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import Logo from '@/components/Logo';
import MenuContent from './MenuContent';
import FooterContent from './FooterContent';
import styles from './index.less';
import { menusData } from '../../../config/route';

const { Header, Content } = Layout;
const BaseLayout: React.FunctionComponent = (props: any) => {
  const { children } = props;
  return (
    <Layout className={styles.container}>
      <Header className={styles.header}>
        <Row className={styles.header__menu} justify="center" align="middle">
          <Col xl={5} lg={7} md={10} sm={19} xs={20}>
            <Logo title="深圳市学生生涯发展支持平台" />
          </Col>
          <Col xl={18} lg={16} md={12} sm={4} xs={3}>
            <MenuContent menusData={menusData} />
          </Col>
        </Row>
      </Header>
      <Layout>
        <Row justify="center">
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Content className={styles.content}>{children}</Content>
            <FooterContent />
          </Col>
        </Row>
        <BackTop>
          <div className="h-10 w-10 leading-10 rounded text-white bg-blue-500 text-center text-sm">
            <ArrowUpOutlined />
          </div>
        </BackTop>
      </Layout>
    </Layout>
  );
};
export default BaseLayout;
