import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, Image, ScrollView} from "react-native";
import Constants from "expo-constants";
import {useFirestore, useFirebase} from "react-redux-firebase";
import firebase from "firebase";
import Selecter from "./components/Selecter";
import {number, string, object, reach} from "yup";
import {Input, Layout, Button} from "@ui-kitten/components";
import {Avatar} from "react-native-elements";
import { Formik } from 'formik';
import * as ImagePicker from 'expo-image-picker';



export default function FormScreen({navigation}) {
    const firestore = useFirestore();
    const firebase = useFirebase();    
    const [image, setImage] = useState(null);
    const [listing, setListing] = useState(firestore.collection("listings").doc())
    const [imageNumber, setImageNumber] = useState(1);
    const [imageRef, setImageRef] = useState([]);
    
    const listingSchema = object().shape({
        title: string().required('Required !'),
        description: string().required('Required !'),
        price: number().required('Required !'),
    });

    console.log(listing.id);

    //Add Listing Function
    const addListing = (values) => {
        //getting the unique id of this listing        
        console.log(listing.id);
        /*uploadImage(image)*/
        listing.set({
            ...values,
            id: listing.id,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            listingImages: imageRef
        });
        return navigation.navigate("Main");
    };

    
    
    
    //Upload Image
    uploadImage = async (uri) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        const storageRef = firebase.storage().ref('Listing images/' + listing.id);           
        setImageNumber(imageNumber + 1);
        const imagePath = '/' + listing.id + '_' + imageNumber
        const listingImageRef = storageRef.child(imagePath);
        const task = listingImageRef.put(blob);
        task.on('state_changed', function(snapshot){
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
              case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
            }
          }, function(error) {
            // Handle unsuccessful uploads
            console.log("Upload Unsuccessful")
          }, function() {
            // Upload completed successfully, now we can get the download URL
                task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                console.log('File available at', downloadURL);
                setImageRef([...imageRef, downloadURL]);
                console.log("Upload Success");
            });
        }); 
    }

    useEffect(() => {
        console.log(imageRef)
    }, [imageRef])

    useEffect(() => {
        console.log(image)   
    }, [image])

    const category = ["Fashion", "Electronics", "Household", "Other"];
    const condition = ["Brand New", "Re-conditioned", "Used"];

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);
    
      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          allowsMultipleSelection:true,
          base64: false,
          aspect: [4, 3],
          quality: 1,
        });
    
    
        if (!result.cancelled) {
          setImage(result.uri);
          uploadImage(result.uri);
        }
      };

    return (
        <View>
        <ScrollView>
        <Layout style={formStyling.layoutPadding}>
            <Text style={{fontSize: 38, textAlign: "center"}}>Let's list your Item!</Text>
            <Formik 
                    initialValues={{ title: '', description: '', price : ''}}
                    validationSchema={listingSchema}
                    onSubmit={values => addListing(values)}
            >                       
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <Layout style={formStyling.formPadding}>
                <Button onPress={() => navigation.goBack()}>Close</Button>
                <Avatar
                    rounded
                    size="large"
                    icon={{name: 'camera', type: 'font-awesome', color: "black"}}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate("Camera")}
                />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                <Text>{}</Text>
                <View style={{paddingBottom: 10}}>
                    <Button onPress={pickImage}>Gallery</Button>
                </View>
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
        </ScrollView>
        </View>
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
