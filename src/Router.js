import React from "react";
import { Scene, Router } from "react-native-router-flux";
import App from "../App";
import Collection from "./components/Collection/Collection";
import CollectionsList from "./components/CollectionsList/CollectionsList";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="main" component={App} title="Dish Reviews" initial />
        <Scene
          leftTitle="Back"
          key="collectionPage"
          component={Collection}
          title="Collection"
        />
        <Scene
          leftTitle="Back"
          key="collectionsList"
          component={CollectionsList}
          title="Collections List"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
