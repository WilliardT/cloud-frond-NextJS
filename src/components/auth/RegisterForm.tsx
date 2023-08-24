import React from 'react';
import styles from './LoginForm.module.scss'
import { Button, Form, Input, notification } from 'antd';
import { RegisterFormDTO } from '@/api/dto/auth.dto';

import * as Api from '@/api';
import { setCookie } from 'nookies';

const RegisterForm = () => {
  const onSubmit = async (values: RegisterFormDTO) => {
    try {
      const { token } = await Api.auth.register(values);

      notification.success({
        message: 'Успешно',
        description: 'Вы успешно зарегистрировались',
        duration: 2,
      })

      setCookie(null, '_token', token, {
        path: '/',
      })

      location.href='/dashboard'
      
    } catch (error) {
      console.warn('RegisterForm.tsx', error);

      notification.error({
        message: 'Ошибка',
        description: 'Неверный логин или пароль',
        duration: 2,
      })
    }
  }

  return (
    <div className={styles.formBlock}>

      <Form
        name='registerForm'
        labelCol={{ span: 8 }}
        onFinish={onSubmit}
      >
        <Form.Item
          label='e-mail'
          name='email'
          rules={[{ required: true, message: 'Укажите почту' }]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label='Полное имя'
          name='fullName'
          rules={[{ required: true, message: 'Укажите полное имя' }]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label='Пароль'
          name='password'
          rules={[{ required: true, message: 'Придумайте пароль' }]}
        >
          <Input.Password/>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Регистрация
          </Button>
        </Form.Item>
      </Form>

    </div>
  )
}

export default RegisterForm

function setCookies(arg0: null, arg1: string, token: string, arg3: { path: string; }) {
  throw new Error('Function not implemented.');
}
