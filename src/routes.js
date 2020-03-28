import React from "react";
import { Switch } from "react-router-dom";
import ScrollToTopRoute from "./History";
import Home from "./Pages/Home";
import About from "./Pages/About";

const Routes = props => (
  <Switch>
    <ScrollToTopRoute path="/" exact component={Home} />

    <ScrollToTopRoute path="/Home" component={Home} />
    <ScrollToTopRoute path="/About" exact component={About} />
  </Switch>
);

export default Routes;
