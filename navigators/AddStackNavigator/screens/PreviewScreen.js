import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Button } from "@ui-kitten/components";
import Constants from "expo-constants";
import AutoHeightImage from "react-native-auto-height-image";

export default function PreviewScreen({ navigation, route }) {
  const { photo } = route.params;
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  console.log(photo);
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground style={{ flex: 1 }} source={{ uri: photo.uri }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <View style={{ marginTop: 50, marginLeft: 10 }}>
            <Button onPress={() => navigation.goBack()}>Retake</Button>
          </View>
          <View
            style={{
              marginTop: 720,
              marginLeft: 140,
            }}
          >
            <Button>Use</Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const formStyling = StyleSheet.create({
  layoutPadding: {
    paddingTop: Constants.statusBarHeight + 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
