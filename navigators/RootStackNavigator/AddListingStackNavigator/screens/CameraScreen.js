import React, {useState, useEffect} from "react";
import {Text, View, TouchableOpacity, Dimensions} from "react-native";
import {Camera} from "expo-camera";
import {Avatar} from "react-native-elements";

const screenWidth = Dimensions.get('window').width;
const camViewHeight = (screenWidth / 22) * 16;
const screenHeight = Dimensions.get('window').height;

export default function CameraScreen({navigation}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    const shutter = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            navigation.navigate("Preview", {photo: photo});
        }
    };

    if (hasPermission === null) {
        return <View/>;
    }
    if (hasPermission === false) {
        return (
            <View style={{marginTop:300, alignSelf:"center"}}>
                <Text style={{fontSize:18, marginBottom:20}}>1. Go to Settings</Text>
                <Text style={{fontSize:18}}>2. Allow access to camera</Text>
            </View>
        );
    }
    return (
        <View style={{paddingTop: 200, alignItems: "center", height: screenHeight, backgroundColor: "black"}}>
            <Camera
                style={{height: camViewHeight, width: "100%"}}
                type={type}
                ref={(ref) => {
                    this.camera = ref;
                }}
            >
            </Camera>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}
            >
                <View style={{width: "33%"}}>

                </View>
                <View style={{width: "33%", alignItems: "center"}}>
                    {/*<Button onPress={() => shutter()}>Shutter</Button>*/}
                    <Avatar
                        rounded
                        size="xlarge"
                        icon={{name: 'circle', type: 'font-awesome', color: "white"}}
                        activeOpacity={0.7}
                        onPress={() => shutter()}
                    />
                    <Text style={{fontSize: 18, color: "white", top: -30}}>Capture</Text>
                </View>
                <View style={{width: "33%", alignItems: "center"}}>
                    <Avatar
                        rounded
                        size="large"
                        icon={{name: 'undo', type: 'font-awesome', color: "white"}}
                        activeOpacity={0.7}
                        containerStyle={{top: -11}}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}
                    />
                    {/*<Text style={{color:"white", top: -20}}>Flip</Text>*/}
                </View>
            </View>
        </View>
    );
}
