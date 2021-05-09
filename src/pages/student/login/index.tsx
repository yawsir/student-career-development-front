/*
 * @Author: yuyang
 * @Date: 2021-05-05 20:04:29
 * @LastEditTime: 2021-05-09 16:33:49
 * @LastEditors: yuyang
 */
import React from 'react';
import { history } from 'umi';
import LoginForm, { LoginFormValues, ClientName } from '@/components/LoginForm';

const Login: React.FC = () => {
  const handleLogin = (values: LoginFormValues) => {
    console.log(values);
  };

  const handleSwitchClient = (currentClient: ClientName) => {
    if (currentClient === 'student') {
      history.push('/teacher/login');
    } else {
      history.push('/student');
    }
  };
  return (
    <div>
      <LoginForm
        clientName="student"
        onLogin={handleLogin}
        onSwitchClient={handleSwitchClient}
      />
    </div>
  );
};

export default Login;
