import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import OnBoardingScreen from "./src/containers/OnBoardingScreen";
import Auth from "./src/containers/Auth/Auth";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="onboardingscreen"
          component={OnBoardingScreen}
          hideNavBar="true"
        />
        <Scene key="authscreen" component={Auth} hideNavBar="true" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
