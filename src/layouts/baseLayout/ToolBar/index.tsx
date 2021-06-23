/*
 * @Author: yuyang
 * @Date: 2021-04-24 11:14:57
 * @LastEditTime: 2021-06-23 14:57:48
 * @LastEditors: yuyang
 */
import React from 'react';
import logo from '@/assets/logo.png';
import { Input, Row, Col, Form } from 'antd';
import styles from './index.less';

interface ToolBarProps {
  title?: string;
}

const ToolBar: React.FC<ToolBarProps> = (props) => {
  const { title } = props;
  return (
    <div className={styles.toolbar}>
      <div className={styles.platform}>
        <div className={styles.platform__logo}>
          <img src={logo} alt="" />
        </div>
        <h2 className={styles.platform__title}>{title}</h2>
      </div>

      <div className={styles.tools}>
        <Row justify="center" align="middle">
          <Col xl={24} lg={24} md={0} sm={0} xs={0}>
            <Form layout="inline">
              <Form.Item>
                <Input.Search />
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ToolBar;
