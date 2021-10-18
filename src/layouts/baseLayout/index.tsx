/*
 * @Author: yuyang
 * @Date: 2021-03-27 14:20:18
 * @LastEditTime: 2021-10-18 16:26:42
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
    <div className="w-full mx-auto overflow-x-hidden" style={{ minWidth: '1200px' }}>
      <Header className={`${styles.header} w-full 3xl:w-11/12 mx-auto`}>
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
      <div className="w-full 2xl:container mx-auto">
        <div className="w-full">
          <Content className={styles.content}>{children}</Content>
          <FooterContent />
        </div>
        <BackTop>
          <div className="h-10 w-10 leading-10 rounded text-white bg-blue-500 text-center text-sm">
            <ArrowUpOutlined />
          </div>
        </BackTop>
      </div>
    </div>
  );
};
export default BaseLayout;
