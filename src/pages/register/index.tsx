/*
 * @Author: yuyang
 * @Date: 2021-06-23 16:05:06
 * @LastEditTime: 2021-07-06 16:08:27
 * @LastEditors: yuyang
 */
import React from 'react';
import { useModel } from 'umi';
import { Form } from 'antd';
import RegisterForm, { RegisterFormValues } from '@/components/RegisterForm';

const Register: React.FC = () => {
  const authModel = useModel<'auth'>('auth');
  const [form] = Form.useForm<RegisterFormValues>();
  const handleRegister = (values: RegisterFormValues) => {
    authModel.register(values, () => form.setFieldsValue({
      confirmPassword: '',
      email: '',
      fullname: '',
      password: '',
      phone: '',
    }));
  };

  return (
    <div>
      <RegisterForm
        form={form}
        clientName="student"
        onRegister={handleRegister}
      />
    </div>
  );
};

export default Register;
