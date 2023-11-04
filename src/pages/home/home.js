import React, { useState } from "react";
import {
  HomeOutlined,
  CalendarOutlined,
  PushpinOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import LoginPage from "../Users/login";
import OrganizerList from "../Organizers/OrganizerLIst";
import EventsList from "../Event/ListEvents";
import EditSetting from "../Users/UserSetting";
const { Header, Content, Footer, Sider } = Layout;
const App = () => {
  const [selected, setSelected] = useState('1');
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const pages = [
    { label: "Home", icon: <HomeOutlined />, key: "1" },
    { label: "Organizers", icon: <CalendarOutlined />, key: "2" },
    { label: "Events", icon: <PushpinOutlined />, key: "3" },
    { label: "Settings", icon: <SettingOutlined />, key: "4" },
  ];
  const renderContent = ()=>{
    switch (selected){
      case '1':
        return <EventsList />
      case '2':
        return <OrganizerList />
      case '4':
        return <EditSetting />
    }
  }
  return (
    <Layout>
      <Sider
        style={{ height: "100vh", padding: "100px 0 0 0" }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <h1>Events.IO</h1>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={selected}
          items={pages}
          onSelect={(key) => {
            setSelected(key.key)
          }}
        ></Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {renderContent()}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
