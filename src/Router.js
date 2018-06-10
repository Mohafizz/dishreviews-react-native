import React from "react";
import { Scene, Router } from "react-native-router-flux";
import App from "../App";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="main" component={App} title="Dish Reviews" initial />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
