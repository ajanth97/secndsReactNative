import React from "react";
import {View, Text} from "react-native";

function NotificationsScreen({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontSize: 40}}>Notifications!</Text>
        </View>
    );
}

export default NotificationsScreen;
