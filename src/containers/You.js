import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import testImage from "../assets/img/ray.png";
import Icon from "react-native-vector-icons/Ionicons";
import UploadContent from "../assets/img/upload-symbol.png";
import Favorites from "../assets/img/star-outline.png";
import Challenges from "../assets/img/swords-crossed.png";
import Logout from "../assets/img/logout.png";
class You extends Component {
  state = {
    controls: [
      { label: "shakushaku", type: "shakushaku" },
      { label: "bollybanty", type: "new" },
      { label: "mooChallenge", type: "davido" }
    ]
  };

  render() {
    /* let renderTags = this.state.controls.map((ctrl, index) => (
      <Tag key={index} label={ctrl.label} />
    ));*/

    const {
      container,
      TagView,
      tagsText,
      userIcon,
      imageView,
      leftView,
      headText,
      rightView,
      contestHead
    } = styles;
    return (
      <View style={container}>
        <View style={{ flexDirection: "column", marginTop: "15%" }}>
          <Text style={headText}>YOU</Text>
          <TouchableOpacity style={TagView}>
            <View style={leftView}>
              <View style={imageView}>
                <Image source={testImage} resizeMode="cover" style={userIcon} />
              </View>
              <Text style={tagsText}>Account Settings</Text>
            </View>
            <View style={rightView}>
              <Icon name="ios-arrow-forward" color="#191a1d" size={30} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={TagView}>
            <View style={leftView}>
              <Image style={{ width: 30, height: 30 }} source={UploadContent} />

              <Text style={tagsText}>Upload Content</Text>
            </View>
            <View style={rightView}>
              <Icon name="ios-arrow-forward" color="#191a1d" size={30} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={TagView}>
            <View style={leftView}>
              <Image style={{ width: 30, height: 30 }} source={Favorites} />

              <Text style={tagsText}>Your Favorites</Text>
            </View>
            <View style={rightView}>
              <Icon name="ios-arrow-forward" color="#191a1d" size={30} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "column", marginTop: "10%" }}>
          <View style={contestHead}>
            <Text style={headText}>Contests</Text>
          </View>
          <TouchableOpacity style={TagView}>
            <View style={leftView}>
              <Image style={{ width: 30, height: 30 }} source={Challenges} />

              <Text style={tagsText}>Challenges</Text>
            </View>
            <View style={rightView}>
              <Icon name="ios-arrow-forward" color="#191a1d" size={30} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[TagView, { marginTop: "15%" }]}>
            <View style={leftView}>
              <Image style={{ width: 30, height: 30 }} source={Logout} />

              <Text style={tagsText}>Logout</Text>
            </View>
            <View style={rightView}>
              <Icon name="ios-arrow-forward" color="#191a1d" size={30} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: "5%"
  },
  TagView: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: 30
  },
  leftView: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center"
  },
  rightView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "20%"
  },
  tagsText: {
    fontFamily: "Roboto-Regular",
    fontSize: 17,
    color: "#000",
    lineHeight: 20,
    paddingLeft: 15
  },
  headText: {
    fontFamily: "Roboto-Bold",
    fontSize: 17,
    color: "#191a1d"
  },
  userIcon: {
    width: 35,
    height: 35,
    borderWidth: 1,
    borderColor: "transparent"
  },
  imageView: {
    //marginTop: 10,
    borderColor: "#e8e8e8",
    width: 35,
    height: 35,
    borderWidth: 1,
    borderRadius: 150,
    overflow: "hidden"
  },
  contestHead: {
    backgroundColor: "#fbfbfb",
    minHeight: 40,
    justifyContent: "center"
  }
});
export default You;
