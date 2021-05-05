/*
 * @Author: yuyang
 * @Date: 2021-05-05 20:01:53
 * @LastEditTime: 2021-05-05 20:42:43
 * @LastEditors: yuyang
 */
import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import styles from './index.less';

interface LoginFormProps {
  onLogin?: () => void;
}
const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { onLogin } = props;

  const handleFinish = () => {
    onLogin?.();
  };
  return (
    <div className={styles['login-form']}>
      <div className={styles['login-form__bg']}>
        <div className={styles['login-form__wrap']}>
          <Form
            onFinish={handleFinish}
          >
            <Form.Item
              name="username"
            >
              <Input prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
              name="password"
            >
              <Input.Password prefix={<KeyOutlined />} />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">登录</Button>
            </Form.Item>
          </Form>
        </div>

      </div>
    </div>
  );
};

export default LoginForm;
