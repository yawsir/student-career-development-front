/*
 * @Author: yuyang
 * @Date: 2021-05-05 20:04:29
 * @LastEditTime: 2021-07-08 18:01:31
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
    <div className="container h-full mx-auto flex p-2">
      <div className="flex flex-col p-2">
        <div>
          <LoginForm
            onLogin={handleLogin}
            onResetPassword={handleResetPassword}
          />
        </div>
        <div className="bg-red-200 h-96">资讯</div>
        <div className="bg-green-200  h-96">资讯</div>
      </div>
      <div className="bg-blue-200 h-screen">
        资讯
      </div>
    </div>
  );
};

export default Login;
