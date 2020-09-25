import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useFirestore } from "react-redux-firebase";

import firebase from "firebase";

import Selecter from "./components/Selecter";

import { Input, Layout, Button } from "@ui-kitten/components";

export default function ModalScreen({ navigation }) {
  const [form, setForm] = React.useState({
    title: "",
    description: "",
    price: "",
  });

  const firestore = useFirestore();

  //Add Listing Function
  const addListing = () => {
    const listing = firestore.collection("listings").doc();
    //getting the unique id of this listing
    const id = listing.id;
    console.log(id);
    listing.set({
      ...form,
      id: id,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    return navigation.navigate("Main");
  };

  const category = ["Fashion", "Electronics", "Household", "Other"];
  const condition = ["Brand New", "Re-conditioned", "Used"];

  return (
    <Layout style={formStyling.layoutPadding}>
      <Text style={{ fontSize: 40, textAlign: "center" }}>Add Listing</Text>
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
        <Button style={formStyling.buttonPadding} onPress={() => addListing()}>
          Add Listing
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
    marginTop: 10,
  },
});
