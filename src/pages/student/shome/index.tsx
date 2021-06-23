/*
 * @Author: yuyang
 * @Date: 2021-05-05 20:04:29
 * @LastEditTime: 2021-06-23 15:49:35
 * @LastEditors: yuyang
 */
import React from 'react';
import { Row, Col, Image } from 'antd';
import { useModel } from 'umi';
import BannerImg from '@/assets/yay.jpg';
import exampleImg from '@/assets/example.jpeg';
import Header from '../components/Header';
import styles from './index.less';

const Img = ({ width = 128, height = 128 }) => (
  <Image
    preview={false}
    src={exampleImg}
    width={width}
    height={height}
  />
);

const ItemName: React.FC = ({ children }) => (
  <p className={styles.shome__content__list__title}>{children}</p>
);

const Shome: React.FC = () => {
  const authModel = useModel('auth');
  const handleLogout = () => {
    authModel.logout();
  };
  return (
    <div className={styles.shome}>
      <Header
        title="深圳市学生生涯发展支持平台"
        onLogout={handleLogout}
      />
      <div className={styles.shome__banner}>
        <img src={BannerImg} alt="" />
      </div>
      <section className={styles.shome__content}>
        <h4 className={styles.shome__content__title}>
          学生主页
        </h4>
        <Row
          className={styles.shome__content__list}
          style={{ padding: '0 48px', marginBottom: 24 }}
        >
          <Col>
            <Img />
            <ItemName>自 我 认 知</ItemName>
          </Col>
          <Col>
            <Img />
            <ItemName>职 业 探 索</ItemName>
          </Col>
          <Col>
            <Img />
            <ItemName>生 涯 发 展</ItemName>
          </Col>
        </Row>
        <Row className={styles.shome__content__list}>
          <Col>
            <Img width={162} height={162} />
            <ItemName>霍兰德测评</ItemName>
          </Col>
          <Col>
            <Img width={162} height={162} />
            <ItemName>价值观测评</ItemName>
          </Col>
          <Col>
            <Img width={162} height={162} />
            <ItemName>个 人 档 案</ItemName>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Shome;
