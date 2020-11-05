import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useFirestore } from "react-redux-firebase";

import { Camera } from "expo-camera";

import firebase from "firebase";

import Selecter from "./components/Selecter";

import { number, string, object, reach } from "yup";

import { Input, Layout, Button } from "@ui-kitten/components";

export default function ModalScreen({ navigation }) {
  const [form, setForm] = React.useState({});

  const [formValid, updateFormValid] = React.useState({});
  const [masterFormValid, updateMasterFormValid] = React.useState(false);
  const firestore = useFirestore();

  //updateField
  const updateField = (inputField, value) => {
    setForm({ ...form, [inputField]: value });
    const field = reach(listingSchema, inputField);
    field.isValid(value).then((valid) => {
      if (!valid) {
        console.log("Error");
        updateFormValid({ ...formValid, [inputField]: false });
        masterValidation();
        field.validate(value).catch((err) => {
          console.log(err);
        });
      } else {
        updateFormValid({ ...formValid, [inputField]: true });
      }
    });
  };

  const masterValidation = () => {
    console.log(formValid);
    listingSchema.isValid(form).then((valid) => {
      if (!valid) {
        updateMasterFormValid(false);
      } else {
        updateMasterFormValid(true);
      }
    });
  };

  const getFieldStatus = (inputField) => {
    const fieldValidity = formValid[inputField];
    if (fieldValidity === true) {
      return "success";
    } else if (fieldValidity === false) {
      return "danger";
    } else {
      return "";
    }
  };

  const listingSchema = object().shape({
    title: string().required(),
    description: string().required(),
    price: number().required(),
  });

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
        <Button
          onPress={() => navigation.navigate("Camera")}
          style={{ marginBottom: 15 }}
        >
          Take Picture
        </Button>
        <View style={formStyling.inputPadding}>
          <Selecter data={category} />
        </View>
        <View style={formStyling.inputPadding}>
          <Selecter data={condition} />
        </View>

        <Input
          placeholder={"Title"}
          style={formStyling.inputPadding}
          onChangeText={(value) => updateField("title", value)}
          status={getFieldStatus("title")}
          value={form.title}
        />
        <Input
          multiline={true}
          value={form.description}
          placeholder={"Description"}
          status={getFieldStatus("description")}
          style={formStyling.inputPadding}
          onChangeText={(value) => updateField("description", value)}
        />

        <Input
          placeholder={"Price"}
          keyboardType={"numeric"}
          style={formStyling.inputPadding}
          status={getFieldStatus("price")}
          onChangeText={(value) => updateField("price", value)}
        />

        <Button
          style={formStyling.buttonPadding}
          onPress={() => addListing()}
          disabled={!masterFormValid}
        >
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
