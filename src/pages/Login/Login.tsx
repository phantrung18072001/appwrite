import React from "react";
import { Button, Card, Col, Form, Input, Row, Spin, Typography } from "antd";
import { useForm } from "antd/es/form/Form";
import "./Login.css";
import { userHooks } from "../../hooks";

const Login: React.FC = () => {
  const [form] = useForm();
  const { login, loadingLogin } = userHooks.useAuth();

  return (
    <div className="login-wrap">
      <Card
        bordered
        className="login-card"
        title={<Typography.Title level={2}>Đăng nhập</Typography.Title>}
      >
        {loadingLogin ? (
          <Spin />
        ) : (
          <Form form={form} layout="vertical" onFinish={login}>
            <Row justify="center" gutter={[16, 16]}>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <Form.Item
                  name="email"
                  label={"Email"}
                  rules={[
                    {
                      required: true,
                      message: "Email không được để trống",
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="center">
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <Form.Item
                  name="password"
                  label="Mật khẩu"
                  rules={[
                    {
                      required: true,
                      message: "Mật khẩu không được để trống",
                    },
                  ]}
                >
                  <Input.Password placeholder="Mật khẩu" />
                </Form.Item>
              </Col>
            </Row>
            <Col span={24}>
              <Button htmlType="submit" style={{ marginRight: 24 }}>
                Đăng nhập
              </Button>
              <Typography.Link href="/register">Đăng ký</Typography.Link>
            </Col>
          </Form>
        )}
      </Card>
    </div>
  );
};

export default Login;
