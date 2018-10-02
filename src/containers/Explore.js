import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import { SearchBox, Tag } from "../../src/components/common";
import Icon from "react-native-vector-icons/Ionicons";
class Explore extends Component {
  state = {
    controls: [
      { label: "shakushaku", type: "shakushaku" },
      { label: "bollybanty", type: "new" },
      { label: "mooChallenge", type: "davido" },
      { label: "shakushaku", type: "shakushaku" },
      { label: "new", type: "new" },
      { label: "Davido", type: "davido" },
      { label: "new", type: "new" },
      { label: "shakushaku", type: "shakushaku" },
      { label: "new", type: "new" },
      { label: "Davido", type: "davido" },
      { label: "shakushaku", type: "shakushaku" },
      { label: "new", type: "new" },
      { label: "Davido", type: "davido" },
      { label: "shakushaku", type: "shakushaku" },
      { label: "bollybanty", type: "new" },
      { label: "mooChallenge", type: "davido" },
      { label: "shakushaku", type: "shakushaku" },
      { label: "new", type: "new" }
    ]
  };

  render() {
    let renderTags = this.state.controls.map((ctrl, index) => (
      <Tag key={index} label={ctrl.label} />
    ));

    const { container, TagView, tagsText, refreshIcon, refreshView } = styles;
    return (
      <ScrollView style={container}>
        <SearchBox placeholder="Search for  videos and articles" />
        <View style={{ flexDirection: "column", marginTop: 20 }}>
          <Text style={tagsText}>Tags</Text>
          <View style={TagView}>{renderTags}</View>
          <TouchableOpacity style={refreshView}>
            <Image
              source={require("../assets/img/refresh.png")}
              style={refreshIcon}
            />
            <Text
              style={{
                color: "#191a1d",
                paddingTop: 10,
                fontFamily: "Roboto-Regular"
              }}
            >
              Refresh Tags
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    flexWrap: "wrap"
  },
  tagsText: {
    fontFamily: "Roboto-Bold",
    fontSize: 17,
    color: "#191a1d",
    marginBottom: 17
  },
  refreshView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },
  refreshIcon: {
    width: 55,
    height: 55
    //margin: "auto"
  }
});
export default Explore;
