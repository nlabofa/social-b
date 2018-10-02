import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Tag = props => (
  <TouchableOpacity>
    <View style={styles.content}>
      <Text
        style={{ color: "#191A1D", opacity: 0.8, fontFamily: "Roboto-Medium" }}
      >
        {"#" + props.label}
      </Text>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  content: {
    backgroundColor: "green",
    flexDirection: "row",
    marginHorizontal: 2,
    marginBottom: 10,
    flexWrap: "wrap",
    borderRadius: 30,
    padding: 10,
    borderWidth: 1,
    borderColor: "transparent",
    textAlign: "center",
    backgroundColor: "#D8D8D8"
  }
});
export { Tag };
