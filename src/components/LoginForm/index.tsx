/*
 * @Author: yuyang
 * @Date: 2021-05-05 20:01:53
 * @LastEditTime: 2021-07-07 13:55:11
 * @LastEditors: yuyang
 */
import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import logo from '@/assets/logo.png';
import styles from './index.less';

export interface LoginFormValues {
  username: string;
  password: string;
  verifyCode: string;
}
interface LoginFormProps {
  onLogin?: (values: LoginFormValues) => void;
  onResetPassword?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { onLogin, onResetPassword } = props;
  const handleFinish = (values: LoginFormValues) => {
    onLogin?.(values);
  };
  const handleResetPassword = () => {
    onResetPassword?.();
  };

  return (
    <div className={styles['login-form']}>
      <div className={styles['login-form__bg']} />
      <div className={styles['login-form__wrap']}>
        <div className={styles['login-form__logo']}>
          <div className={styles['login-form__logo__image']}>
            <img src={logo} alt="" />
          </div>
          <p className={styles['login-form__logo__text']}>深圳学生生涯发展支持平台</p>
        </div>

        <div className={styles['login-form__content']}>
          <h5 className={styles['login-form__content__title']}>登录 Login</h5>
          <div className={styles['login-form__content__form']}>
            <Form
              onFinish={handleFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: '请输入用户名',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className={styles['login-form__content__form__icon']} />}
                  className={styles['login-form__content__form__input']}
                  placeholder="用户名"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: '请输入密码',
                  },
                ]}
              >
                <Input.Password
                  prefix={<KeyOutlined className={styles['login-form__content__form__icon']} />}
                  className={styles['login-form__content__form__input']}
                  placeholder="密码"
                />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" type="primary" className={styles['login-form__content__form__btn']}>登录</Button>
              </Form.Item>
              <Form.Item>
                <div className={styles['login-form__content__form__links']}>
                  <div className={styles['login-form__content__form__links__group']}>
                    <span
                      className={styles['login-form__content__form__links__link']}
                      onClick={handleResetPassword}
                    >
                      忘记密码
                    </span>
                  </div>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
