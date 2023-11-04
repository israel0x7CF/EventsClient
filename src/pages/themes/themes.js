//for admin purpose only

import { createTheme } from "@ant-design/cssinjs";
import { Button, Form, Input, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { newTheme } from "../../api/themes";
// private String name;
// private String Discrpiton;
const CreateNewTheme = () => {
  const [theme, setTheme] = useState({
    theme: "",
    Discrpiton: " ",
  });
  const onFormChange = (e) => {
    setTheme({
      ...theme,
      [e.target.name]: e.target.value,
    });
  };
  const onButtonClick = () => {
    newTheme(theme)
  };
  return (
    <Space align="center">
      <Form>
        <Form.Item label="Theme Name" >
          <Input onChange={onFormChange} name="theme"/>
        </Form.Item>
        <Form.Item label="What Is The Vibe Like" >
          <TextArea rows={4} onChange={onFormChange} name="Discrpiton"/>
        </Form.Item>
        <Space>
          <Button onClick={onButtonClick}>Submit Theme</Button>
          <Button>Cancel</Button>
        </Space>
      </Form>
    </Space>
  );
};
export default CreateNewTheme;
