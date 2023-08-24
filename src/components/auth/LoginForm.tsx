import React from "react";
import styles from "./LoginForm.module.scss";
import { Button, Form, Input, notification } from "antd";
import { LoginFormDTO } from "@/api/dto/auth.dto";
import * as Api from "@/api";
import { setCookie } from "nookies";

const LoginForm: React.FC = () => {
  const onSubmit = async (values: LoginFormDTO) => {
    try {
      const { token } = await Api.auth.login(values);

      notification.success({
        message: "Успешно",
        description: "Вы успешно авторизовались",
        duration: 2,
      });

      setCookie(null, "_token", token, {
        path: "/",
      });

      location.href = "/dashboard";

    } catch (error) {
      console.warn("LoginForm.tsx", error);

      notification.error({
        message: "Ошибка",
        description: "Неверный логин или пароль",
        duration: 2,
      })
    }
  };

  return (
    <div className={styles.formBlock}>
      <Form name="basic" labelCol={{ span: 8 }} onFinish={onSubmit}>
        <Form.Item
          label="e-mail"
          name="email"
          rules={[{ required: true, message: "Укажите почту" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="пароль"
          name="password"
          rules={[{ required: true, message: "Укажите пароль" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
