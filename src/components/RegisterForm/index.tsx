/*
 * @Author: yuyang
 * @Date: 2021-06-23 16:05:06
 * @LastEditTime: 2021-07-06 16:14:21
 * @LastEditors: yuyang
 */
import React from 'react';
import { Form, Input, Button, FormInstance } from 'antd';
import { Link } from 'umi';
import { UserOutlined, KeyOutlined, MailOutlined, MobileOutlined, ContactsOutlined, PhoneOutlined } from '@ant-design/icons';
import logo from '@/assets/logo.png';
import styles from './index.less';

export type ClientName = 'student' | 'teacher';
export interface RegisterFormValues {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  phone: string;
  fullname: string;
}
interface RegisterProps {
  form?: FormInstance;
  clientName: ClientName;
  onResetPassword?: () => void;
  onRegister?: (values: RegisterFormValues) => void;
  onSwitchClient?: (currentClient: ClientName) => void;
}
const Register: React.FC<RegisterProps> = (props) => {
  const { clientName, onResetPassword, onRegister, form } = props;
  const formInstance = form || Form.useForm()[0];
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
            <Form<RegisterFormValues>
              onFinish={handleFinish}
              form={formInstance}
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
                name="email"
                rules={[
                  {
                    required: true,
                    message: '请输入邮箱',
                  },
                  {
                    pattern: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
                    message: '请输入正确的邮箱',
                  }
                ]}
              >
                <Input
                  prefix={<MailOutlined className={styles['register-form__content__form__icon']} />}
                  className={styles['register-form__content__form__input']}
                  placeholder="邮箱"
                />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: '请输入手机号',
                  },
                  {
                    pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57]|19[0-9])[0-9]{8}$/,
                    message: '请输入正确的手机号',
                  }
                ]}
              >
                <Input
                  prefix={<PhoneOutlined className={styles['register-form__content__form__icon']} />}
                  className={styles['register-form__content__form__input']}
                  placeholder="手机号"
                />
              </Form.Item>
              <Form.Item
                name="fullname"
                rules={[
                  {
                    required: true,
                    message: '请输入姓名',
                  },
                ]}
              >
                <Input
                  prefix={<ContactsOutlined className={styles['register-form__content__form__icon']} />}
                  className={styles['register-form__content__form__input']}
                  placeholder="姓名"
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
                  onChange={() => formInstance.validateFields()}
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
