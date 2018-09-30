import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const auth = () => {
  const {
    InputBox,
    IconText,
    IconViewLeft,
    IconViewRight,
    button,
    buttonText,
    authscreenBoldStyle,
    authScreen,
    authScreenFirstHead,
    authScreenTopStyle,
    authscreenSocial,
    SocialIcon,
    FacebookIcon,
    TwitterIcon,
    GoogleIcon,
    authScreenBottomStyle
  } = styles;
  return (
    <View style={authScreen}>
      <View style={authScreenFirstHead}>
        <Text style={authscreenBoldStyle}>LINK AN ACCOUNT</Text>
        <Text style={authScreenTopStyle}>
          Link a social media account to create
          {"\n"}
          and upload content
        </Text>
      </View>
      <View style={authscreenSocial}>
        <TouchableOpacity style={[SocialIcon, FacebookIcon]}>
          <View style={IconViewLeft}>
            <Icon name="logo-facebook" {...authIconLeftStyles} />
            <Text style={IconText}>Facebook</Text>
          </View>
          <View style={IconViewRight}>
            <Icon name="ios-arrow-forward" {...authIconRightStyles} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[SocialIcon, TwitterIcon]}>
          <View style={IconViewLeft}>
            <Icon name="logo-twitter" {...authIconLeftStyles} />
            <Text style={IconText}>Twitter</Text>
          </View>
          <View style={IconViewRight}>
            <Icon name="ios-arrow-forward" {...authIconRightStyles} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[SocialIcon, GoogleIcon]}>
          <View style={IconViewLeft}>
            <Icon name="logo-google" {...authIconLeftStyles} />
            <Text style={IconText}>Google</Text>
          </View>
          <View style={IconViewRight}>
            <Icon name="ios-arrow-forward" {...authIconRightStyles} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={authScreenBottomStyle}>
        <Text style={authScreenTopStyle}>Or create an account via Email</Text>
        <View style={InputBox}>
          <View style={styles.searchbox}>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="#212227"
              // value={this.state.query}
              //onChange={this._handleTextInput}
              underlineColorAndroid="transparent"
              //onSubmitEditing={() => this.onSend()}
            />
          </View>
        </View>
        <View style={InputBox}>
          <View style={styles.searchbox}>
            <TextInput
              secureTextEntry
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="#212227"
              // value={this.state.query}
              //onChange={this._handleTextInput}
              underlineColorAndroid="transparent"
              //onSubmitEditing={() => this.onSend()}
            />
          </View>
        </View>
        <TouchableOpacity style={button}>
          <Text style={buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const authIconLeftStyles = {
  size: 40,
  color: "white",
  paddingRight: 15
};
const authIconRightStyles = {
  size: 40,
  color: "white"
};
const styles = {
  authScreen: {
    backgroundColor: "white",
    flex: 1
  },
  InputBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 25
  },
  IconText: {
    color: "white",
    fontSize: 15,
    fontFamily: "Roboto-Regular",
    fontWeight: "500"
  },
  authScreenFirstHead: {
    marginTop: "10%"
  },
  IconViewLeft: {
    flexDirection: "row",
    width: "60%",
    alignItems: "center",
    justifyContent: "space-around"
  },
  IconViewRight: {
    flexDirection: "row",
    width: "40%",
    justifyContent: "flex-end",
    paddingRight: 20,
    alignItems: "center"
  },
  button: {
    backgroundColor: "#0AF1BF",
    marginTop: 20,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    borderRadius: 4, // Rounded border
    borderWidth: 2, // 2 point border widht
    borderColor: "transparent" // White colored border
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Roboto-Regular"
  },
  authscreenBoldStyle: {
    fontFamily: "Roboto-Regular",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    color: "#292929",
    marginBottom: 15
  },
  authScreenTopStyle: {
    fontFamily: "Roboto-Regular",
    fontSize: 15,
    textAlign: "center",
    color: "#191A1D"
  },
  authscreenSocial: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40
  },
  SocialIcon: {
    marginTop: 15,
    padding: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    borderRadius: 8, // Rounded border
    borderWidth: 2, // 2 point border widht
    borderColor: "transparent" // White colored border
  },
  FacebookIcon: {
    backgroundColor: "#3B5998"
  },
  TwitterIcon: {
    backgroundColor: "#1DA1F2"
  },
  GoogleIcon: {
    backgroundColor: "#DB4437"
  },
  authScreenBottomStyle: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  searchbox: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    paddingHorizontal: 30,
    paddingVertical: 8,
    opacity: 0.3,
    borderWidth: 1,
    borderColor: "#212227",
    borderRadius: 4
  },
  textInput: {
    fontFamily: "Roboto-Regular",
    width: "100%",
    color: "#212227",
    fontSize: 20,
    height: 35
  }
};
export default auth;
