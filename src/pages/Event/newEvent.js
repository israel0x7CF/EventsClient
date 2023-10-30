import {
  Button,
  DatePicker,
  Popover,
  Input,
  Select,
  Space,
  Typography,
  InputNumber,
  Row,
  Divider,
  Col,
} from "antd";
import { useState, useEffect } from "react";
import { Form } from "antd";
import { createEvent } from "../../api/Events";


// private String name;
// private Integer estimatedArrival;
// private LocalDate date;
// private String description;
const NewEvent = () => {
  const [event,setEvent] = useState({
    "name":"",
    "description":"",
    "eventDate":"",
    "estimatedArrival":""

  })
  const { TextArea } = Input;
  const { Title } = Typography;
  const handleClick=()=>{
    const response = createEvent(event)
    console.log(response)
  }
  const onInputChange = (e) =>{
    setEvent({
      ...event,
      [e.target.name]:e.target.value
    })
  }
  const onDateChange=(date,datestring)=>{

    setEvent({
      ...event,
      eventDate:datestring
    })
  }
  const getCapacity=(value)=>{
    setEvent({
      ...event,
      estimatedArrival:value
    })
  }
  return (
    <Space align="center">
      <Form layout="Horizontal" style={{ width: 600 }}>
        <Title>New Event</Title>

        <Form.Item
          label="Name"
          
          rules={[
            {
              required: true,
              message: "Name Is Required",
            },
          ]}
        >
          <Input placeholder="Your Event Must Have A Unique Name" name = "name" value={event.name} onChange={onInputChange}/>
        </Form.Item>

        <Form.Item label="Capacity">
          <InputNumber style={{ width: "100%" }} name="estimatedArrival" onChange={getCapacity}/>
        </Form.Item>
        <Form.Item label="Date">
          <DatePicker style={{ width: "100%", margin: "0 0 2% 0" }} name="date" value={event.date} onChange={onDateChange}/>
        </Form.Item>

        <Form.Item label="Vibe">
        <Popover content="What is your event gonna be like !" >
          <Select
            mode="multiple"
            allowClear  
            style={{
              width: "100%",
            }}
            placeholder="Please select"
            
            />
            </Popover>
        </Form.Item>

        <Form.Item label="Describe Your Event">
          <TextArea rows={4} name="description" value={event.description} onChange={onInputChange}/>
        </Form.Item>
        <Form.Item >
          <Space>
            <Button onClick={()=>{handleClick()}}>Create</Button>
            <Button>Cancel</Button>
          </Space>
        </Form.Item>
      </Form>
    </Space>
  );
};

export default NewEvent;
