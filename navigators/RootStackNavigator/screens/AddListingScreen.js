import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Constants from "expo-constants";
import {useFirestore} from "react-redux-firebase";
import firebase from "firebase";
import Selecter from "./components/Selecter";
import {number, string, object, reach} from "yup";
import {Input, Layout, Button} from "@ui-kitten/components";
import {Avatar} from "react-native-elements";

export default function AddListingScreen({navigation}) {
    const [form, setForm] = React.useState({});
    const [formValid, updateFormValid] = React.useState({});
    const [masterFormValid, updateMasterFormValid] = React.useState(false);
    const firestore = useFirestore();

    //updateField
    const updateField = (inputField, value) => {
        setForm({...form, [inputField]: value});
        const field = reach(listingSchema, inputField);
        field.isValid(value).then((valid) => {
            if (!valid) {
                console.log("Error");
                updateFormValid({...formValid, [inputField]: false});
                masterValidation();
                field.validate(value).catch((err) => {
                    console.log(err);
                });
            } else {
                updateFormValid({...formValid, [inputField]: true});
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
            <Text style={{fontSize: 38, textAlign: "center"}}>Let's list your Item!</Text>
            <Layout style={formStyling.formPadding}>
                <Avatar
                    rounded
                    size="large"
                    icon={{name: 'camera', type: 'font-awesome', color: "black"}}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate("Camera")}
                />
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

                <View style={{flexDirection: "row", alignSelf:"center", marginTop: 50}}>
                    <Text style={{fontSize:18, color: "darkgrey", paddingTop:8, width: "30%",
                        marginBottom:40}}>Category: </Text>
                    <View style={{width:"60%"}}>
                        <Selecter data={category}/>
                    </View>
                </View>
                <View style={{flexDirection: "row", alignSelf:"center"}}>
                    <Text style={{fontSize:18, color: "darkgrey", paddingTop:8, width: "30%",
                        marginBottom:40}}>Condition:</Text>
                    <View style={{width:"60%"}}>
                        <Selecter data={condition}/>
                    </View>
                </View>

                <Button
                    style={{marginTop: 30, width:"90%", alignSelf:"center"}}
                    onPress={() => addListing()}
                    disabled={!masterFormValid}
                >
                    List Item
                </Button>
            </Layout>
        </Layout>
    );
}

const formStyling = StyleSheet.create({
    layoutPadding: {
        paddingTop: Constants.statusBarHeight + 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
    formPadding: {
        paddingTop: 25,
    },
    inputPadding: {
        paddingBottom: 15,
    },
    buttonPadding: {
        marginTop: 10,
    },
});
