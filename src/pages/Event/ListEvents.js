import React, { useState, useEffect } from "react";
import { List, Space } from "antd";
import {
  LikeOutlined,
  MessageOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { getEvents } from "../../api/Events";

const IconText = ({ icon, text, onClick }) => {
  return (
    <Space onClick={onClick} style={{ cursor: "pointer" }}>
      {React.createElement(icon)}
      {text}
    </Space>
  );
};

const EventsList = ({ data }) => {
    const [events,setEvents]  = useState({})
    useEffect(()=>{
        setEvents(getEvents)
    },[])
    const test_data = [
      { name: "Kebero", desc: "music" },
      { name: "Kebero", desc: "music" },
      { name: "Kebero", desc: "music" },
      { name: "Kebero", desc: "music" },
    ];
    const handleClick = () => {
    console.log("add follower");
  };
  return (
    <div>
      <List
        style={{cursor:'pointer'}}
        itemLayout="vertical"
        size="large"
        dataSource={test_data}
        renderItem={(item) => (
          <List.Item
            key={item.name}
            // actions={[<IconText onClick={() => handleClick()} />]}
            onClick={() => {
              console.log(events);
            }}
          >
            <List.Item.Meta title={item.name} description={item.desc} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default EventsList;
