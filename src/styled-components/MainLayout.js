import React from "react";

import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import Routes from "../routes";
import HeaderWrap from "./HeaderWrap";

const MainLayout = () => {
  return (
    <React.Fragment>
      <HeaderWrap>
        <header>
          <Menu id="menu">
            <Menu.Item>
              <NavLink exact to="/">
                Home
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink exact to="/About">
                About
              </NavLink>
            </Menu.Item>
          </Menu>
        </header>
      </HeaderWrap>
      <Routes />
    </React.Fragment>
  );
};

export default MainLayout;
