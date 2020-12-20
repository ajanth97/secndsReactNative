import React from "react";
import {ListItem, CheckBox} from 'react-native-elements'
import {View, ScrollView, Dimensions, Image} from "react-native";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const intererstsArray = [
    {image: require('../HomeStackNavigator/screens/assets/6.png'), categoryName: "Electronics"},
    {image: require('../HomeStackNavigator/screens/assets/6.png'), categoryName: "Fashion"},
    {image: require('../HomeStackNavigator/screens/assets/6.png'), categoryName: "Auto parts"},
    {image: require('../HomeStackNavigator/screens/assets/6.png'), categoryName: "Books"},
];

function MyInterestsScreen({navigation}) {
    return (
        <View style={{marginBottom: 100, height: screenHeight}}>
            <ScrollView style={{backgroundColor: "#F6F7F7", paddingTop: 40, height: screenHeight}}>
                <View>
                    {
                        intererstsArray.map((l, i) => (
                            <ListItem key={i} bottomDivider>
                                <Image source={l.image} style={{width: 110, height: 80}}/>
                                <ListItem.Title>
                                    {l.categoryName}
                                </ListItem.Title>
                                <ListItem.Content></ListItem.Content>
                                <CheckBox
                                    center
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    iconRight
                                    checked={true}
                                />
                            </ListItem>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    );
}

export default MyInterestsScreen;
