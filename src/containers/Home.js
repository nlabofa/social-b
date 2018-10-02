import React from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity
} from "react-native";
import { SearchBox, NewsCard } from "../components/common";
import papiLogo from "../assets/img/papi-logo.png";
import trending from "../assets/img/trending.png";
import Icon from "react-native-vector-icons/Ionicons";
import Slack from "../assets/img/slack.png";
import Play from "../assets/img/play.png";
const home = () => {
  const {
    container,
    daily10View,
    logostyle,
    trendingImage,
    trendingView,
    slackstyle,
    playstyle,
    trendingtext,
    listHeading,
    listHeadingLeft,
    listHeadingRight,
    entertainment,
    sports,
    music
  } = styles;
  return (
    <ScrollView style={container}>
      <SearchBox placeholder="Search for  videos and articles" />
      <View style={daily10View}>
        <Text
          style={{
            fontSize: 14,
            color: "#F84671",
            textTransform: "uppercase",
            fontFamily: "Roboto-Bold"
          }}
        >
          Your daily 10
        </Text>
        <Image source={papiLogo} style={logostyle} />
      </View>
      <TouchableWithoutFeedback>
        <View style={trendingView}>
          <Image source={Slack} style={slackstyle} />
          <Text style={trendingtext}>
            Trending in Music, Arts,
            {"\n"} Entertainment...
          </Text>
          <Image source={trending} style={trendingImage} />
          <Image source={Play} style={playstyle} />
        </View>
      </TouchableWithoutFeedback>
      <View>
        <View style={listHeading}>
          <Text style={[listHeadingLeft, entertainment]}>Entertainment</Text>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Text style={listHeadingRight}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <NewsCard
            title="Wizkid Coachella festival highlights."
            type="video"
            image="wiz"
            sponsored
          />
          <NewsCard
            title="Tiwa Savage concert highlights.."
            type="news"
            image="tiwa"
          />
          <NewsCard
            title="Wizkid Coachella festival highlights."
            type="video"
            image="wiz"
            sponsored
          />
          <NewsCard
            title="Tiwa Savage concert highlights.."
            type="news"
            image="tiwa"
          />
        </ScrollView>
      </View>
      <View>
        <View style={listHeading}>
          <Text style={[listHeadingLeft, sports]}>Sports</Text>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Text style={listHeadingRight}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <NewsCard
            title="Real Madrid vs. Roma match..."
            type="video"
            image="wiz"
            sponsored
          />
          <NewsCard
            title="Ronaldo to Juve: Full contract details"
            type="news"
            image="tiwa"
          />
          <NewsCard
            title="Wizkid Coachella festival highlights."
            type="video"
            image="wiz"
            sponsored
          />
          <NewsCard
            title="Tiwa Savage concert highlights.."
            type="news"
            image="tiwa"
          />
        </ScrollView>
      </View>
      <View>
        <View style={listHeading}>
          <Text style={[listHeadingLeft, music]}>Music</Text>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Text style={listHeadingRight}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <NewsCard
            title="Real Madrid vs. Roma match..."
            type="video"
            image="wiz"
            sponsored
          />
          <NewsCard
            title="Ronaldo to Juve: Full contract details"
            type="news"
            image="tiwa"
          />
          <NewsCard
            title="Wizkid Coachella festival highlights."
            type="video"
            image="wiz"
            sponsored
          />
          <NewsCard
            title="Tiwa Savage concert highlights.."
            type="news"
            image="tiwa"
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
};
const styles = {
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: "5%"
  },
  logostyle: {
    width: 40,
    height: 40,
    position: "absolute",
    right: 0,
    top: -25
  },
  daily10View: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between"
  },
  trendingView: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "transparent",
    height: 135,
    width: "100%",
    marginTop: 15,
    position: "relative"
  },
  trendingImage: {
    width: "100%",
    height: "100%"
  },
  slackstyle: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 20,
    height: 20,
    zIndex: 100
  },
  playstyle: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 20,
    height: 20,
    zIndex: 100
  },
  trendingtext: {
    color: "white",
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    zIndex: 100,
    position: "absolute",
    top: 50,
    left: 20
  },
  listHeading: {
    //paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 13,
    marginTop: 20
  },
  listHeadingLeft: {
    fontSize: 14,
    fontFamily: "Roboto-Bold",
    textTransform: "uppercase"
  },
  listHeadingRight: {
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    color: "#191A1D",
    textTransform: "uppercase"
  },
  entertainment: {
    color: "#5CD8FF"
  },
  sports: {
    color: "#5B89FF"
  },
  music: {
    color: "#EB6FFF"
  }
};

export default home;
