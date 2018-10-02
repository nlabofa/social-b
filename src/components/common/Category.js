import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import TrendingIcon from "../../assets/img/trendingL.png";
import LifeStyleIcon from "../../assets/img/lifestyle.png";
import CosmoIcon from "../../assets/img/cosmo.png";
import FlixIcon from "../../assets/img//flix.png";
import UrbanIcon from "../../assets/img/urban.png";
import YouIcon from "../../assets/img/you.png";
import GameIcon from "../../assets/img/game.png";

const Category = props => {
  let imageIcon = null;
  let stylecss = null;
  if (props.label == "trending") {
    imageIcon = TrendingIcon;
    stylecss = styles.trendicon;
  } else if (props.label == "lifestyle") {
    imageIcon = LifeStyleIcon;
    stylecss = styles.lifestyleicon;
  } else if (props.label == "urban") {
    imageIcon = UrbanIcon;
    stylecss = styles.trendicon;
  } else if (props.label == "cosmo") {
    imageIcon = CosmoIcon;
    stylecss = styles.trendicon;
  } else if (props.label == "flix") {
    imageIcon = FlixIcon;
    stylecss = styles.trendicon;
  } else if (props.label == "you") {
    imageIcon = YouIcon;
    stylecss = styles.trendicon;
  } else if (props.label == "game") {
    imageIcon = GameIcon;
    stylecss = styles.trendicon;
  }
  return (
    <TouchableOpacity>
      <View style={styles.content}>
        <Image source={imageIcon} style={stylecss} />
        <Text style={styles.iconText}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  content: {
    width: 164,
    height: 170,
    backgroundColor: "#F3F6F7",
    flexDirection: "row",
    marginHorizontal: 2,
    marginBottom: 10,
    flexWrap: "wrap",
    borderRadius: 2,
    padding: 10,
    borderWidth: 1,
    borderColor: "transparent",
    position: "relative",
    flexDirection: "column"
  },
  trendicon: {
    position: "absolute",
    top: 50,
    left: 50,
    width: 65,
    height: 60
  },
  lifestyleicon: {
    position: "absolute",
    top: 50,
    left: 65,
    width: 34,
    height: 60
  },
  iconText: {
    marginTop: "80%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#191A1D",
    fontFamily: "Roboto-Bold",
    textAlign: "center",
    fontSize: 15,
    textTransform: "uppercase"
  }
});
export { Category };
