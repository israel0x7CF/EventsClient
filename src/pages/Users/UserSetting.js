import { useState, useEffect } from "react";
import { Row, Col, Form, Input, Button, Space, Typography } from "antd";
import "../../styles/login.css";

//server side validation beacuse
const Edit = () => {
  const { Title } = Typography;

  return (
    <div className="centered-container">
      <Form>
        <Title>Your Account</Title>
        <Form.Item name="username" label="username">
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="password"
          rules={[{ required: true, message: "Enter Your Password" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "confirm password",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
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
export default Edit;
