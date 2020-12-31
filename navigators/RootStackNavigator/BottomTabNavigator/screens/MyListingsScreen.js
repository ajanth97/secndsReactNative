import React from "react";
import {ListItem, Button} from 'react-native-elements'
import {View, Text, ScrollView, StyleSheet, Dimensions, Image} from "react-native";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const listingsArr = [
    {
        image: require('../HomeStackNavigator/screens/assets/6.png'),
        name: "Rayban Sunglass",
        total: "LKR 1300",
        listId: "8034",
        listedDate: "2020-12-15 20:23",
        status: "Sold"
    },
    {
        image: require('../HomeStackNavigator/screens/assets/6.png'),
        name: "IPhone X",
        total: "LKR 13000",
        listId: "8035",
        listedDate: "2020-12-15 20:23",
        status: "Sold"
    },
    {
        image: require('../HomeStackNavigator/screens/assets/6.png'),
        name: "Asus Vivobook",
        total: "LKR 85000",
        listId: "8034",
        listedDate: "2020-12-15 20:23",
        status: "Sold"
    },
    {
        image: require('../HomeStackNavigator/screens/assets/6.png'),
        name: "Canon E560 Printer ",
        total: "LKR 4000",
        listId: "8034",
        listedDate: "2020-12-15 20:23",
        status: "Sold"
    },

];

function MyListingsScreen({navigation}) {
    return (
        <View style={{marginBottom: 100, height: screenHeight}}>
            <ScrollView style={{backgroundColor: "#F6F7F7", paddingTop: 40, height: screenHeight}}>
                <View>
                    {
                        listingsArr.map((l, i) => (
                            <ListItem key={i} bottomDivider>
                                <ListItem.Content>
                                    <Text>List ID: <ListItem.Title>{l.listId}</ListItem.Title></Text>
                                    <Text>Listed Date: {l.listedDate}</Text>

                                    <View style={{flexDirection: "row", marginTop: 10}}>
                                        <View>
                                            <Image source={l.image} style={{width: 110, height: 80}}/>
                                        </View>
                                        <View style={{marginTop: 10, marginLeft: 20}}>
                                            <Text>{l.name}</Text>
                                            <ListItem.Subtitle style={{
                                                fontWeight: "bold",
                                                fontSize: 14,
                                                marginTop: 5,
                                                marginBottom: 5
                                            }}>{
                                                l.total}
                                            </ListItem.Subtitle>
                                            <Text>Status: <Text style={{color: "green"}}>{l.status}</Text></Text>

                                        </View>
                                    </View>
                                    <Button type="outline" title={"REMOVE LISTING"}
                                            buttonStyle={{borderColor: "red", borderWidth:1}}
                                            titleStyle={{color: "red", fontSize: 12}}
                                            containerStyle={{marginTop: 10, width: 200, height:30, alignSelf:"center"}}
                                    />
                                </ListItem.Content>

                            </ListItem>
                        ))
                    }
                </View>

            </ScrollView>
        </View>
    );
}

export default MyListingsScreen;
