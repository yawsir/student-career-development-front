/*
 * @Author: yuyang
 * @Date: 2021-06-23 16:05:06
 * @LastEditTime: 2021-06-23 16:48:27
 * @LastEditors: yuyang
 */
import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'umi';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import logo from '@/assets/logo.png';
import styles from './index.less';

export type ClientName = 'student' | 'teacher';
export interface RegisterFormValues {
  username: string;
  password: string;
  confirmPassword: string;
}
interface RegisterProps {
  clientName: ClientName;
  onResetPassword?: () => void;
  onRegister?: (values: RegisterFormValues) => void;
  onSwitchClient?: (currentClient: ClientName) => void
}
const Register: React.FC<RegisterProps> = (props) => {
  const { clientName, onResetPassword, onRegister } = props;
  const [form] = Form.useForm();
  const title = clientName === 'student' ? '学生注册 Student Register' : '教师注册 Teacher Register';
  const handleFinish = (values: RegisterFormValues) => {
    onRegister?.(values);
  };
  const handleResetPassword = () => {
    onResetPassword?.();
  };

  return (
    <div className={styles['register-form']}>
      <div className={styles['register-form__bg']} />
      <div className={styles['register-form__wrap']}>
        <div className={styles['register-form__logo']}>
          <div className={styles['register-form__logo__image']}>
            <img src={logo} alt="" />
          </div>
          <p className={styles['register-form__logo__text']}>深圳学生生涯发展支持平台</p>
        </div>

        <div className={styles['register-form__content']}>
          <h5 className={styles['register-form__content__title']}>{title}</h5>
          <div className={styles['register-form__content__form']}>
            <Form
              onFinish={handleFinish}
              form={form}
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
                  prefix={<UserOutlined className={styles['register-form__content__form__icon']} />}
                  className={styles['register-form__content__form__input']}
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
                  prefix={<KeyOutlined className={styles['register-form__content__form__icon']} />}
                  className={styles['register-form__content__form__input']}
                  placeholder="密码"
                  onChange={() => form.validateFields()}
                />
              </Form.Item>
              <Form.Item
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: '请输入确认密码',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('两次输入的密码不一致'));
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<KeyOutlined className={styles['register-form__content__form__icon']} />}
                  className={styles['register-form__content__form__input']}
                  placeholder="确认密码"
                />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" type="primary" className={styles['register-form__content__form__btn']}>注册</Button>
              </Form.Item>
              <Form.Item>
                <div className={styles['register-form__content__form__links']}>
                  <div className={styles['register-form__content__form__links__group']}>
                    <span
                      className={styles['register-form__content__form__links__link']}
                      onClick={handleResetPassword}
                    >
                      忘记密码
                    </span>
                  </div>
                  <div className={styles['register-form__content__form__links__group']}>
                    <span
                      className={styles['register-form__content__form__links__link']}
                    >
                      <Link to={`/${clientName}/login`}>
                        立即登录
                      </Link>
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

export default Register;
