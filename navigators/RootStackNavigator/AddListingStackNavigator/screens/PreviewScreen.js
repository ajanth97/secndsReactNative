import React from "react";
import {View, ImageBackground, Dimensions} from "react-native";
import {Button} from "@ui-kitten/components";
import {Avatar} from "react-native-elements";

export default function PreviewScreen({navigation, route}) {
    const {photo} = route.params;
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const camViewHeight = (screenWidth / 22) * 16;
    console.log(photo);
    return (
        <View style={{paddingTop: 60, height: screenHeight, backgroundColor: "black"}}>
            <Avatar
                rounded
                size="medium"
                icon={{name: 'chevron-left', type: 'font-awesome', color: "white"}}
                activeOpacity={0.7}
                onPress={() => navigation.goBack()}
            />
            <ImageBackground style={{
                width: screenWidth, marginTop: 50,
                height: camViewHeight
            }} source={{uri: photo.uri}}>
            </ImageBackground>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 30,
                    marginBottom: 20
                }}
            >
                <View style={{width: "33%", alignItems: "center"}}>
                </View>
                <View style={{width: "33%", alignItems: "center"}}>
                    <Button style={{backgroundColor: "black", borderColor: "white"}}>Use Image</Button>
                </View>
                <View style={{width: "33%"}}>
                </View>
            </View>
        </View>
    );
}
