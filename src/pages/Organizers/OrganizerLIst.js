import React, { useState, useEffect } from "react";
import { List, Space } from "antd";
import {
  LikeOutlined,
  MessageOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

const IconText = ({ icon, text, onClick }) => {

  return(
  <Space onClick={onClick} style={{ cursor: 'pointer' }}>
    {React.createElement(icon)}
    {text}
  </Space>

  )
};

const OrganizerList = ({ data }) => {
  const handleClick =()=>{
    console.log("add follower")
  }
  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={item.name}
            actions={[
              <IconText icon={PlusCircleOutlined} text={item.followers} onClick={()=>handleClick()}/>,
            ]}
          >
            <List.Item.Meta title={item.name} description={item.description} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default OrganizerList;
