import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Platform
} from "react-native";
import onboard1Logo from "../assets/img/onboard1.png";
import onboard2Logo from "../assets/img/onboard2.png";
import onboard3Logo from "../assets/img/onboard3.png";
import Logo from "../assets/img/papi-logo.png";
import Icon from "react-native-vector-icons/Ionicons";
import Swiper from "../components/common/Swiper";

export default class OnBoardingScreens extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <Swiper>
        {/* First screen */}
        <View style={[styles.slide, { backgroundColor: "#FFF" }]}>
          <View style={styles.topArea}>
            <Image source={Logo} style={styles.LogoStyle} />
            <Image source={onboard1Logo} style={styles.onboardStyle} />
          </View>

          <View style={styles.bottomArea1}>
            <Text style={styles.header}>Welcome</Text>
            <Text style={styles.text}>
              Find out what’s hot and trending around you
            </Text>
          </View>
        </View>
        {/* Second screen */}
        <View style={[styles.slide, { backgroundColor: "#FFF" }]}>
          <View style={styles.topArea}>
            <Image source={Logo} style={styles.LogoStyle} />
            <Image source={onboard2Logo} style={styles.onboard2Style} />
          </View>

          <View style={styles.bottomArea2}>
            <Text style={styles.header}>Create</Text>
            <Text style={styles.text}>
              Your own content and share to the world
            </Text>
          </View>
        </View>
        {/* Third screen */}
        <View style={[styles.slide, { backgroundColor: "#FFF" }]}>
          <View style={styles.topArea}>
            <Image source={Logo} style={styles.LogoStyle} />
            <Image source={onboard3Logo} style={styles.onboard3Style} />
          </View>

          <View style={styles.bottomArea3}>
            <Text style={styles.header}>Trivia</Text>
            <Text style={styles.text}>
              Trivias, sweepstakes and other competitions.
            </Text>
          </View>
        </View>
      </Swiper>
    );
  }
}
const iconStyles = {
  size: 100,
  color: "#FFFFFF"
};

const styles = StyleSheet.create({
  // Slide styles
  slide: {
    flex: 1, // Take up all screen
    justifyContent: "center", // Center vertically
    alignItems: "center" // Center horizontally
  },
  topArea: {
    justifyContent: "space-around",
    alignItems: "center",
    height: "60%",
    width: "100%"
  },
  bottomArea1: {
    backgroundColor: "#F0526F",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: "40%",
    alignItems: "center",
    width: "100%"
  },
  bottomArea2: {
    backgroundColor: "#3C73C6",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: "40%",
    alignItems: "center",
    width: "100%"
  },
  bottomArea3: {
    backgroundColor: "#0AF1BF",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: "40%",
    alignItems: "center",
    width: "100%"
  },
  onboardStyle: {
    width: 250,
    height: 250
  },
  onboard2Style: {
    width: 244,
    height: 200
  },
  onboard3Style: {
    width: 242,
    height: 215
  },
  LogoStyle: {
    width: 50,
    height: 50
  },
  // Header styles
  header: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 15
  },
  // Text below header
  text: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 20,
    marginHorizontal: 40,
    textAlign: "center"
  }
});
