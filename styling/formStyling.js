import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const formStyling = StyleSheet.create({
  layoutPadding: {
    paddingTop: Constants.statusBarHeight + 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  formPadding: {
    paddingTop: 45,
  },
  inputPadding: {
    paddingBottom: 15,
  },
  buttonPadding: {
    marginTop: 10,
  },
});
