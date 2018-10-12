import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import Router from "./Router";

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return <Router />;
  }
}
