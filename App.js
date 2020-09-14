import "react-native-gesture-handler";

import * as React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";

import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import Main from "./Main";

const checkIfLoggedIn = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      //props.navigation.navigate("Main");
      loggedIn = true;

      console.log("logged In");
    } else {
      loggedIn = false;
    }
  });
};

export default function App() {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Main />
      </ApplicationProvider>
    </Provider>
  );
}
