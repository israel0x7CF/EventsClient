import { DatePicker, Input, Select, Space } from "antd";
import { useState, useEffect } from "react";
import { Form} from "antd";

// private String name;
// private Integer estimatedArrival;
// private LocalDate date;
// private String description;
const NewEvent = () => {
    const {TextArea} = Input
  return (
    
      <Form layout="vertical"
      style={{ maxWidth: 600 }}
      >
        <Form.Item
          label="Name"
          rules={[
            {
              required: true,
              message: "Name Is Required",
            },
          ]}
        >
          <Input placeholder="Your Event Must Have A Unique Name" />
        </Form.Item>
        <Form.Item label="Describe Your Event">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Date">
          <DatePicker />
        </Form.Item>
      </Form>
  
  );
};

export default NewEvent;