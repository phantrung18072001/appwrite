import React from "react";
import { Button, Card, Col, Form, Input, Row, Spin, Typography } from "antd";
import { useForm } from "antd/es/form/Form";
import { userHooks } from "../../hooks";

const Register: React.FC = () => {
  const [form] = useForm();
  const { loadingRegister, register } = userHooks.useAuth();
  return (
    <div className="register-wrap">
      <Card
        bordered
        className="register-card"
        title={<Typography.Title level={2}>Đăng ký</Typography.Title>}
      >
        {loadingRegister ? (
          <Spin />
        ) : (
          <Form form={form} layout="vertical" onFinish={register}>
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
            <Row justify="center">
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <Form.Item
                  name="name"
                  label="Họ và tên"
                  rules={[
                    {
                      required: true,
                      message: "Họ và tên không được để trống",
                    },
                  ]}
                >
                  <Input placeholder="Họ và tên" />
                </Form.Item>
              </Col>
            </Row>
            <Col span={24}>
              <Button htmlType="submit" style={{ marginRight: 24 }}>
                Đăng ký
              </Button>
              <Typography.Link href="/login">Quay về đăng nhập</Typography.Link>
            </Col>
          </Form>
        )}
      </Card>
    </div>
  );
};

export default Register;
