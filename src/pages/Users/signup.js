import { useState, useEffect } from "react";
import { Row, Col, Form, Input, Button, Space, Typography } from "antd";
import "../styles/login.css";
const SignUp = () => {
  const { Title } = Typography;
  return (
    <div className="centered-container">
      <Form>
        <Title>Events IO</Title>
        <Form.Item name="username" label="username">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="password">
          <Input.Password />
        </Form.Item>
        <Form.Item name="phone" label="Phone Number">
          <Space.Compact>
            <Input
              style={{
                width: "20%",
              }}
              defaultValue="+2519"
            />
            <Input
              style={{
                width: "80%",
              }}
              defaultValue="26888888"
            />
          </Space.Compact>
        </Form.Item>
      </Form>
    </div>
  );
};
export default SignUp;
