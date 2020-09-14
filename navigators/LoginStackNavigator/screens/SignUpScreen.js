import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Layout, Button } from "@ui-kitten/components";
import Constants from "expo-constants";

export function SignUpScreen() {
  return (
    <Layout style={formStyling.layoutPadding}>
      <Text style={{ fontSize: 40, textAlign: "center" }}>Sign Up</Text>

      <Layout style={formStyling.formPadding}>
        <Input style={formStyling.inputPadding} placeholder={"Email Address"} />

        <Input style={formStyling.inputPadding} placeholder={"Password"} />
        <Input
          style={formStyling.inputPadding}
          placeholder={"Password Confirm"}
        />

        <Button style={formStyling.buttonPadding}>Sign Up</Button>
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
