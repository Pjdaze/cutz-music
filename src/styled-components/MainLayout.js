import React from "react";

import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import Routes from "../routes";

function MainLayout() {
  return (
    <React.Fragment>
      <header>
        <Menu>
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

      <Routes />
    </React.Fragment>
  );
}

export default MainLayout;
