/*
 * @Author: yuyang
 * @Date: 2021-05-05 20:01:53
 * @LastEditTime: 2021-05-09 16:32:54
 * @LastEditors: yuyang
 */
import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import logo from '@/assets/logo.png';
import styles from './index.less';

export type ClientName = 'student' | 'teacher';
export interface LoginFormValues {
  username: string;
  password: string;
  verifyCode: string;
}
interface LoginFormProps {
  clientName: ClientName;
  onLogin?: (values: LoginFormValues) => void;
  onResetPassword?: () => void;
  onRegister?: () => void;
  onSwitchClient?: (currentClient: ClientName) => void
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { onLogin, clientName, onResetPassword, onRegister, onSwitchClient } = props;
  const title = clientName === 'student' ? '学生登录 Student Login' : '教师登录 Teacher Login';
  const switchBtnText = clientName === 'student' ? '教师端切换' : '学生端切换';
  const handleFinish = (values: LoginFormValues) => {
    onLogin?.(values);
  };
  const handleResetPassword = () => {
    onResetPassword?.();
  };

  const handleRegister = () => {
    onRegister?.();
  };

  const handleSwitchClient = () => {
    onSwitchClient?.(clientName);
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
          <h5 className={styles['login-form__content__title']}>{title}</h5>
          <div className={styles['login-form__content__form']}>
            <Form
              onFinish={handleFinish}
            >
              <Form.Item
                name="username"
              >
                <Input
                  prefix={<UserOutlined className={styles['login-form__content__form__icon']} />}
                  className={styles['login-form__content__form__input']}
                />
              </Form.Item>
              <Form.Item
                name="password"
              >
                <Input.Password
                  prefix={<KeyOutlined className={styles['login-form__content__form__icon']} />}
                  className={styles['login-form__content__form__input']}
                />
              </Form.Item>
              <Form.Item
                name="verifyCode"
              >
                <Input
                  className={styles['login-form__content__form__input']}
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
                  <div className={styles['login-form__content__form__links__group']}>
                    <span
                      className={styles['login-form__content__form__links__link']}
                      onClick={handleRegister}
                    >
                      立即注册

                    </span>
                    <span
                      className={`${styles['login-form__content__form__links__link']} ${styles['login-form__content__form__links__spec']}`}
                      onClick={handleSwitchClient}
                    >
                      {switchBtnText}

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
