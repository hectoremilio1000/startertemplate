import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  HomeOutlined,
  ProfileOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";

const Nav = props => {
  const { current } = props;
  return (
    <>
      <Menu selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home">
          <Link to={`/`}>
            <HomeOutlined />
            Inicio
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link to="/profile">
            <ProfileOutlined />
            LogIn
          </Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Nav;
