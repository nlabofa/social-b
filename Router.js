import React from "react";
import { Image, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Scene, Router, Actions } from "react-native-router-flux";
import OnBoardingScreen from "./src/containers/OnBoardingScreen";
import Auth from "./src/containers/Auth/Auth";
import Home from "./src/containers/Home";
import Shows from "./src/containers/Shows";
import Explore from "./src/assets/img/ex.png";
import ExploreAct from "./src/assets/img/ex-active.png";
import Categories from "./src/assets/img/cat.png";
import CategoriesAct from "./src/assets/img/cat-active.png";
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
        <Scene
          key="tabbar"
          tabs={true}
          hideNavBar="true"
          tabBarStyle={styles.tabBarstyle}
          labelStyle={styles.labelStyle}
          initial
          tabbars
          activeTintColor="#0AF1BF"
          inactiveTintColor="#212227"
        >
          <Scene
            key="Home"
            icon={BaseIcon}
            component={Home}
            initial={true}
            hideNavBar="true"
            title="Home"
          />
          <Scene
            key="Explore"
            icon={BaseImage}
            component={Shows}
            hideNavBar="true"
            title="Explore"
          />
          <Scene
            key="Categories"
            icon={BaseImage}
            component={Shows}
            hideNavBar="true"
            title="Categories"
          />
          <Scene
            key="You"
            icon={BaseIcon}
            component={Shows}
            hideNavBar="true"
            title="You"
          />
        </Scene>
      </Scene>
    </Router>
  );
};
/*const iconHome = () => <Icon color="#636368" name="md-home" size={25} />;
const iconExplore = () => <Image source={Explore} width={50} />;
const iconCat = () => <Image source={Categories} width={50} />;
const iconYou = () => <Icon color="#636368" name="md-person" size={25} />;*/

const BaseIcon = ({ title, focused }) => {
  let color;
  switch (title) {
    case "Home":
      color = focused ? "#0AF1BF" : "#636368";
      name = "md-home";
      break;
    case "You":
      color = focused ? "#0AF1BF" : "#636368";
      name = "md-person";
      break;
  }

  return <Icon color={color} name={name} size={25} />;
};
const BaseImage = ({ title, focused }) => {
  let imgTag;
  switch (title) {
    case "Explore":
      imgTag = focused ? ExploreAct : Explore;
      break;
    case "Categories":
      imgTag = focused ? CategoriesAct : Categories;
      break;
  }

  return <Image source={imgTag} width={50} />;
};

const styles = {
  tabBarstyle: {
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 0
  },
  labelStyle: {
    fontFamily: "Roboto-Medium",
    fontSize: 10
  }
};
export default RouterComponent;
