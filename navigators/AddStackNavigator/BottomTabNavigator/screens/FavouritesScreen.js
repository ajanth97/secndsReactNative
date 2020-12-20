import React from "react";
import {ListItem, Icon} from 'react-native-elements'
import {View, Text, ScrollView, Dimensions, Image} from "react-native";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const favouritesArr = [
    {image: require('../HomeStackNavigator/screens/assets/6.png'), name: "Rayban Sunglass", total: "LKR 1300", orderId: "8034", orderDate:"2020-12-15 20:23", status: "Delivered"},
    {image: require('../HomeStackNavigator/screens/assets/6.png'), name: "IPhone X", total: "LKR 13000", orderId: "8035", orderDate:"2020-12-15 20:23", status: "Delivered"},
    {image: require('../HomeStackNavigator/screens/assets/6.png'), name: "Asus Vivobook", total: "LKR 85000", orderId: "8034", orderDate:"2020-12-15 20:23", status: "Delivered"},
    {image: require('../HomeStackNavigator/screens/assets/6.png'), name: "Canon E560 Printer ", total: "LKR 4000", orderId: "8034", orderDate:"2020-12-15 20:23", status: "Delivered"},
];

function FavouritesScreen({navigation}) {
    return (
        <View style={{marginBottom: 100, height: screenHeight}}>
            <ScrollView style={{backgroundColor: "#F6F7F7", paddingTop: 40, height: screenHeight}}>
                <View>
                    {
                        favouritesArr.map((l, i) => (
                            <ListItem key={i} bottomDivider>
                                <Image source={l.image} style={{width:110, height:80}}/>
                                <ListItem.Content>
                                    <Text style={{fontSize:16}}>{l.name}</Text>
                                    <Text style={{fontWeight:"bold", fontSize:14, marginTop:10}}>{l.total}</Text>
                                </ListItem.Content>
                                <Icon name="delete" color={"red"}/>
                            </ListItem>
                        ))
                    }
                </View>

            </ScrollView>
        </View>
    );
}

export default FavouritesScreen;
