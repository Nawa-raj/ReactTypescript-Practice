import React, { FC, useState } from "react";
import { Layout, Menu } from "antd";
import { Link, NavLink } from "react-router-dom";

const { Header } = Layout;

const NabBar = () => {
  const [activeKey, setActiveKey] = useState<string>("1");
  return (
    <Header>
      <div className="logo" />
      <Menu
        activeKey={activeKey}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="1">
          <NavLink to="/todo-list">Todo List</NavLink>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/form">Form</Link>
        </Menu.Item>

        <Menu.Item key="3">Data</Menu.Item>
      </Menu>
    </Header>
  );
};

export default NabBar;
