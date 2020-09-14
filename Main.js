import React from "react";

import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import firebase from "firebase";
import { firebaseConfig } from "./firebaseConfig";
firebase.initializeApp(firebaseConfig);

import { LoginStackNavigator } from "./navigators/LoginStackNavigator/LoginStackNavigator";
import AddStackNaviagtor from "./navigators/AddStackNavigator/AddStackNavigator";

import { connect } from "react-redux";

const MyTheme = {
  dark: false,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "white",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

function Main(props) {
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar barStyle="dark-content" />
      {props.loggedIn ? <AddStackNaviagtor /> : <LoginStackNavigator />}
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => ({
  loggedIn: state.login,
});
export default connect(mapStateToProps)(Main);
