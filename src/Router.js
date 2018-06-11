import React from "react";
import { Scene, Router } from "react-native-router-flux";
import App from "../App";
import Collections from "./components/Collections/Collections";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="main" component={App} title="Dish Reviews" initial />
        <Scene
          leftTitle="Back"
          //   rightTitle="Add New"
          //   onRight={() => {
          //     console.log("right!");
          //   }}
          key="collectionsPage"
          component={Collections}
          title="Collections"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
