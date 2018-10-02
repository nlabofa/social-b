import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import wizTest from "../../assets/img/wiztest.png";
import tiwaTest from "../../assets/img/tiwatest.png";
import Play from "../../assets/img/play.png";
import Read from "../../assets/img/read.png";
import SponsoredImage from "../../assets/img/sponsored.png";
//import LoadIcon from "../../assets/img/img_loader.png";

const NewsCard = ({ title, type, image, sponsored }) => {
  let sponsoredItem = null;
  let typeItem = Play;
  let imageItem = wizTest;

  if (sponsored) {
    sponsoredItem = (
      <Image source={SponsoredImage} style={styles.sponsoredImage} />
    );
  }
  if (type == "news") {
    typeItem = Read;
  }
  if (image == "tiwa") {
    imageItem = tiwaTest;
  }
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.cardContainer}>
        <Text style={styles.textStyle}>{title}</Text>
        {sponsoredItem}
        <Image source={typeItem} style={styles.readImage} />
        <Image
          source={imageItem}
          style={styles.cardImage}
          //loadingIndicatorSource={LoadIcon}
          //defaultSource={LoadIcon}
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = {
  cardContainer: {
    position: "relative",
    height: 180,
    width: 180,
    backgroundColor: "white",
    flexDirection: "column",
    marginRight: 10,
    borderRadius: 7,
    overflow: "hidden"
  },
  cardImage: {
    width: "100%",
    height: "100%"
  },
  textStyle: {
    color: "white",
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    zIndex: 100,
    position: "absolute",
    bottom: 20,
    left: 20,
    width: 85
  },
  readImage: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 20,
    height: 20,
    zIndex: 100
  },
  sponsoredImage: {
    position: "absolute",
    top: 10,
    width: 80,
    height: 22,
    right: 5,
    zIndex: 100
  }
};
export { NewsCard };
