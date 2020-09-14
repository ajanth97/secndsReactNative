import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";

import { connect } from "react-redux";

import Selecter from "./components/Selecter";

import { Input, Layout, Button } from "@ui-kitten/components";

import { updateListing } from "../../../redux/actions";

function ModalScreen(props) {
  const [form, setForm] = React.useState({
    title: "",
    description: "",
    price: "",
  });

  const category = ["Fashion", "Electronics", "Household", "Other"];
  const condition = ["Brand New", "Re-conditioned", "Used"];

  return (
    <Layout style={formStyling.layoutPadding}>
      <Text style={{ fontSize: 40, textAlign: "center" }}>Ad Listing</Text>
      <Layout style={formStyling.formPadding}>
        <View style={formStyling.inputPadding}>
          <Selecter data={category} />
        </View>
        <View style={formStyling.inputPadding}>
          <Selecter data={condition} />
        </View>
        <Input
          placeholder={"Title"}
          style={formStyling.inputPadding}
          onChangeText={(text) => setForm({ ...form, title: text })}
          value={form.title}
        />
        <Input
          multiline={true}
          placeholder={"Description"}
          style={formStyling.inputPadding}
          onChangeText={(text) => setForm({ ...form, description: text })}
        />
        <Input
          placeholder={"Price"}
          keyboardType={"numeric"}
          style={formStyling.inputPadding}
          onChangeText={(text) => setForm({ ...form, price: text })}
        />
        <Button
          style={formStyling.buttonPadding}
          onPress={() => props.updateListing(form)}
        >
          Add Listing
        </Button>
      </Layout>
    </Layout>
  );
}

export default connect(null, { updateListing: updateListing })(ModalScreen);

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
    marginTop: 10,
  },
});
