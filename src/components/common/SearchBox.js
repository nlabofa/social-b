import React from "react";
import { View, TextInput, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const SearchBox = ({ placeholder, secureTextEntry }) => {
  const { InputBox, searchbox, textInput } = styles;
  return (
    <View style={searchbox}>
      <Icon name="md-search" color="#212227" size={30} />
      <TextInput
        style={textInput}
        placeholder={placeholder}
        placeholderTextColor="#212227"
        // value={this.state.query}
        //onChange={this._handleTextInput}
        underlineColorAndroid="transparent"
        //onSubmitEditing={() => this.onSend()}
      />
    </View>
  );
};

styles = {
  searchbox: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
    // paddingVertical: 8,
    opacity: 0.3
    // borderWidth: 1,
    // borderColor: "#212227",
    // borderRadius: 4
  },
  textInput: {
    paddingLeft: 5,
    fontFamily: "Roboto-Regular",
    width: "100%",
    color: "#212227",
    fontSize: 14,
    height: 16
  }
};
export { SearchBox };
