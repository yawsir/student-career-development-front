/*
 * @Author: yuyang
 * @Date: 2021-06-23 16:05:06
 * @LastEditTime: 2021-06-23 16:41:36
 * @LastEditors: yuyang
 */
import React from 'react';
import { useModel } from 'umi';
import RegisterForm, { RegisterFormValues } from '@/components/RegisterForm';

const Register: React.FC = () => {
  const authModel = useModel<'auth'>('auth');

  const handleRegister = (values: RegisterFormValues) => {
    const { username, password } = values;
    authModel.register({ username, password });
  };

  return (
    <div>
      <RegisterForm
        clientName="student"
        onRegister={handleRegister}
      />
    </div>
  );
};

export default Register;
