/*
 * @Author: yuyang
 * @Date: 2021-05-05 20:04:29
 * @LastEditTime: 2021-06-15 15:51:12
 * @LastEditors: yuyang
 */
import React from 'react';
import { Row, Col, Image } from 'antd';
import BannerImg from '@/assets/yay.jpg';
import styles from './index.less';

const Img = ({ width = 128, height = 128 }) => (
  <Image
    preview={false}
    src="https://cn.vuejs.org/images/logo.png"
    width={width}
    height={height}
  />
);

const ItemName: React.FC = ({ children }) => (
  <p className={styles.shome__content__list__title}>{children}</p>
);

const Shome: React.FC = () => (
  <div className={styles.shome}>
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

export default Shome;
