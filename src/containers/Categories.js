import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import { SearchBox, Category } from "../../src/components/common";
class Categories extends Component {
  state = {
    controls: [
      { label: "trending", type: "trending" },
      { label: "lifestyle", type: "lifestyle" },
      { label: "urban", type: "urban" },
      { label: "cosmo", type: "cosmo" },
      { label: "flix", type: "flix" },
      { label: "you", type: "you" },
      { label: "game", type: "game" }
    ]
  };

  render() {
    const { container, TagView } = styles;
    return (
      <ScrollView style={container}>
        <SearchBox placeholder="Look around, Find something new!" />
        <View style={{ flexDirection: "column", marginTop: 20 }}>
          <View style={TagView}>
            <FlatList
              numColumns={2}
              data={this.state.controls}
              renderItem={({ item }) => <Category label={item.label} />}
              keyExtractor={item => item.label}
            />
          </View>
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
  }
});
export default Categories;
