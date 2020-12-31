import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Constants from "expo-constants";
import {useFirestore} from "react-redux-firebase";
import firebase from "firebase";
import Selecter from "./components/Selecter";
import {number, string, object, reach} from "yup";
import {Input, Layout, Button} from "@ui-kitten/components";
import {Avatar} from "react-native-elements";
import { Formik } from 'formik';


export default function FormScreen({navigation}) {
    const firestore = useFirestore();

    const listingSchema = object().shape({
        title: string().required('Required !'),
        description: string().required('Required !'),
        price: number().required('Required !'),
    });

    //Add Listing Function
    const addListing = (values) => {
        const listing = firestore.collection("listings").doc();
        //getting the unique id of this listing
        const id = listing.id;
        console.log(id);
        listing.set({
            ...values,
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
            <Formik 
                    initialValues={{ title: '', description: '', price : ''}}
                    validationSchema={listingSchema}
                    onSubmit={values => addListing(values)}
            >                       
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
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
                    caption={touched.title ? errors.title : null}
                    style={formStyling.inputPadding}
                    onChangeText={(handleChange('title'))}
                    onBlur={handleBlur('title')}
                    value={values.title}
                />
                <Input
                    multiline={true}
                    value={values.description}
                    placeholder={"Description"}
                    caption={touched.description ? errors.description : null}
                    style={formStyling.inputPadding}
                    onChangeText={handleChange('description')}
                    onBlur={handleBlur('description')}
                />
                <Input
                    placeholder={"Price"}
                    keyboardType={"numeric"}
                    caption={touched.price ? errors.price : null}
                    style={formStyling.inputPadding}
                    value={values.price}
                    onChangeText={handleChange('price')}
                    onBlur={handleBlur('price')}
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
                    onPress={handleSubmit}
                    disabled={Object.keys(errors).length === 0 ? false : true}
                    
                >
                    List Item
                </Button>
            </Layout>)}
            </Formik>
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
