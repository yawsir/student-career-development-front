/*
 * @Author: yuyang
 * @Date: 2021-03-27 14:20:18
 * @LastEditTime: 2021-10-13 10:31:28
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
    <Layout className="container mx-auto overflow-x-hidden" style={{ minWidth: '1200px' }}>
      <Header className={styles.header}>
        <Row className="w-full" justify="start" align="middle">
          <Col span={6}>
            <div className="flex justify-items-start pl-32 text-3xl">
              <Logo title="" />
            </div>
          </Col>
          <Col span={18}>
            <MenuContent menusData={menusData} />
          </Col>
        </Row>
      </Header>
      <Layout>
        <div className="w-full">
          <Content className={styles.content}>{children}</Content>
          <FooterContent />
        </div>
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
