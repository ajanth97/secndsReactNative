import "react-native-gesture-handler";

import * as React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import firebase from "firebase";
import { firebaseConfig } from "./firebaseConfig";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
firebase.initializeApp(firebaseConfig);
// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore

import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import Main from "./Main";

// react-redux-firebase config
const reactReduxFirebaseConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// react-redux-firebase props
const reactReduxFirebaseProps = {
  firebase,
  config: reactReduxFirebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

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
      <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <Main />
        </ApplicationProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}
