/*
 * @Author: yuyang
 * @Date: 2021-05-05 20:04:29
 * @LastEditTime: 2021-07-07 13:52:49
 * @LastEditors: yuyang
 */
import React from 'react';
import { useModel } from 'umi';
import { Modal } from 'antd';
import LoginForm, { LoginFormValues } from '@/components/LoginForm';

const Login: React.FC = () => {
  const authModel = useModel<'auth'>('auth');

  const handleLogin = (values: LoginFormValues) => {
    authModel.login(values.username, values.password);
  };

  const handleResetPassword = () => {
    Modal.info({
      title: '个人密码如丢失，请联系您所在学校的生涯教育教师',
      okText: '确认',
    });
  };

  return (
    <div>
      <LoginForm
        onLogin={handleLogin}
        onResetPassword={handleResetPassword}
      />
    </div>
  );
};

export default Login;
