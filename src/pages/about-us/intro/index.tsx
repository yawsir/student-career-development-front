/*
 * @Author: yuyang
 * @Date: 2021-05-04 19:36:25
 * @LastEditTime: 2021-05-05 17:22:01
 * @LastEditors: yuyang
 */
import React from 'react';
import banner from '@/assets/loginbg.png';
import { Row, Col } from 'antd';
import Nav from './components/InnerNav';
import Content from './components/InnerContent';
import styles from './index.less';

const AboutUs: React.FC = () => (
  <div className={styles.intro}>
    <Row justify="center" align="top">
      <Col xxl={16} xl={16} lg={16} md={24} className={styles.intro__col}>
        <img src={banner} alt="" className={styles.intro__col__banner} />
        <h3 className={styles.intro__col__title}>关于我们</h3>
      </Col>
    </Row>
    <Row justify="center" align="top">
      <Col xxl={6} xl={6} lg={6} md={6} sm={0} xs={0} className={styles.intro__nav}>
        <Nav />
      </Col>
      <Col xxl={10} xl={10} lg={10} md={10} sm={24} xs={24} className={styles.intro__content}>
        <Content title="网站简介" content="反龙卷风龙江路" />
      </Col>
    </Row>
  </div>
);

export default AboutUs;
