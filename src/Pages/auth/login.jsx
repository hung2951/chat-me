import { LockOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import {HiOutlineMail} from 'react-icons/hi'
const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const validateMessages = {
    required: "${label} không được để trống!",
    types: {
      email: "${label} không đúng định dạng!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.form}>
          <h2>Đăng nhập</h2>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
            hasFeedback
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                },
              ]}
            >
              <Input prefix={<HiOutlineMail />} placeholder="E-mail" />
            </Form.Item>
            <Form.Item
            hasFeedback
              name="password"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!",
                },
                {min:6,message:"Mật khẩu phải tối thiểu 6 ký tự!"}
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Mật khẩu"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Nhớ tài khoản</Checkbox>
              </Form.Item>

              <NavLink className={styles.login_form_forgot} to={`#`}>
                Quên mật khẩu
              </NavLink>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Đăng nhập
              </Button>
              Bạn chưa có tài khoản?{" "}
              <NavLink to="/register">đăng ký tại đây!</NavLink>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
