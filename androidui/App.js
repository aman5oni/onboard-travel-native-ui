import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "one",
    title: "JUST TRAVEL",
    text: "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("./images/1.png")
  },
  {
    key: "two",
    title: "TAKE A BREAK",
    text: "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("./images/2.png")
  },
  {
    key: "three",
    title: "ENJOY YOUR JOURNEY",
    text: "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("./images/3.png")
  }
];

const Item = ({ item }) => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={item.image}
        style={{
          resizeMode: "cover",
          height: "73%",
          width: "100%"
        }}
      />
      <Text
        style={{
          paddingTop: 25,
          paddingBottom: 10,
          fontSize: 23,
          fontWeight: "bold",
          color: "#21465b",
          alignSelf: "center"
        }}
      >
        {item.title}
      </Text>

      <Text
        style={{
          textAlign: "center",
          color: "#b5b5b5",
          fontSize: 15,
          paddingHorizontal: 30
        }}
      >
        {item.text}
      </Text>
    </View>
  );
};

const App = () => {
  
  const [state, setState] = useState({ showHomePage: false });

  if (state.showHomePage) {
    return <App />;
  } else
    return (
      <AppIntroSlider
        renderItem={Item}
        data={slides}
        activeDotStyle={{
          backgroundColor: "#21465b",
          width: 30
        }}
      />
    );
};

export default App;
