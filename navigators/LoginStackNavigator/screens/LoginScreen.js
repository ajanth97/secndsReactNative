import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Layout, Button } from "@ui-kitten/components";
import Constants from "expo-constants";

import { connect } from "react-redux";
import { updateLogin } from "../../../redux/actions";
import * as Google from "expo-google-app-auth";

import firebase from "firebase";

function LoginScreen(props) {
  useEffect(() => {
    checkIfLoggedIn();
  });

  const checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        //props.navigation.navigate("Main");
        props.updateLogin(true);
        console.log("logged In");
      }
    });
  };

  function isUserEqual(googleUser, firebaseUser) {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }

  function onSignIn(googleUser) {
    console.log("Google Auth Response", googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase
      .auth()
      .onAuthStateChanged(function (firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          firebase
            .auth()
            .signInWithCredential(credential)
            .then((result) => {
              console.log("User Signed In");

              firebase
                .firestore()
                .collection("users")
                .add({
                  email: googleUser.user.email,
                  first_name: googleUser.user.givenName,
                  last_name: googleUser.user.familyName,
                  profile_picture: googleUser.user.photoUrl,
                })
                .then(() => {
                  console.log("User added");
                });
            })
            .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        } else {
          console.log("User already signed-in Firebase.");
        }
      });
  }

  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "955655758016-ncjpgtjlm7n0si0glt91qtvctokvs4oc.apps.googleusercontent.com",
        iosClientId:
          "955655758016-jmd3hfmvlmf9j1jad6gjtba367rtmpob.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });
      if (result.type === "success") {
        onSignIn(result);
        return result.accessToken;
      } else {
        console.log("Cancelled");
        return { cancelled: true };
      }
    } catch (e) {
      console.log("Error !");
      return { error: true };
    }
  }

  return (
    <Layout style={formStyling.layoutPadding}>
      <Text style={{ fontSize: 40, textAlign: "center" }}>Log in</Text>

      <Layout style={formStyling.formPadding}>
        <Input style={formStyling.inputPadding} placeholder={"Email Address"} />

        <Input style={formStyling.inputPadding} placeholder={"Password"} />
        <Button
          style={formStyling.buttonPadding}
          onPress={() => alert("Default Log in")}
        >
          Log in
        </Button>
        <Button
          style={formStyling.buttonPadding}
          onPress={() => signInWithGoogleAsync()}
        >
          Sign in with Google
        </Button>
        <Button
          style={formStyling.buttonPadding}
          onPress={() => props.navigation.navigate("SignUp")}
        >
          Sign Up
        </Button>
      </Layout>
    </Layout>
  );
}

const formStyling = StyleSheet.create({
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
    marginTop: 15,
  },
});

export default connect(null, { updateLogin: updateLogin })(LoginScreen);
