import { useState, useEffect } from "react";
import { Row, Col, Form, Input,Button } from "antd";
import FormItem from "antd/es/form/FormItem";
import '../../styles/login.css'
const LoginPage = () => {
  return (
    <div className="centered-container">
    <Row>
      <Col >
        <Form>
          <Form.Item name="username" label="Username">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="password">
            <Input.Password />
          </Form.Item>
        </Form>
        <Form.Item>
            <Button >Submit</Button>
        </Form.Item>
      </Col>
      <Col>
        <h1>HEllow</h1>
      </Col>
    </Row>

    </div>
  );
};
export default LoginPage;
