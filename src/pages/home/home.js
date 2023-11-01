import React from "react";
import {
  HomeOutlined,
  CalendarOutlined,
  PushpinOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const pages = [
    { name: "Home", icon: <HomeOutlined /> },
    { name: "Organizers", icon: <CalendarOutlined /> },
    { name: "Events", icon: <PushpinOutlined /> },
    { name: "Settings", icon: <SettingOutlined /> },
    
  ];
  const handleSelect = (e)=>{
    console.log(`SAY CHEESE${e.target}`)

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
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          onSelect={handleSelect}
          name="Deezz"
        >
          {
            pages.map((page,index)=>{
              return(
                <Menu.Item icon={page.icon} key={index} name={index}>{page.name}</Menu.Item>
              )
            })
          }
        </Menu>
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
            content
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
