import React from "react";
import {Icon, ListItem} from 'react-native-elements'
import {View, Text, ScrollView, Dimensions, Image, TouchableOpacity} from "react-native";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const orderArr = [
    {
        image: require('../HomeStackNavigator/screens/assets/6.png'),
        name: "Rayban Sunglass",
        total: "LKR 1300",
        orderId: "8034",
        orderDate: "2020-12-15 20:23",
        status: "Delivered"
    },
    {
        image: require('../HomeStackNavigator/screens/assets/6.png'),
        name: "IPhone X",
        total: "LKR 13000",
        orderId: "8035",
        orderDate: "2020-12-15 20:23",
        status: "Delivered"
    },
    {
        image: require('../HomeStackNavigator/screens/assets/6.png'),
        name: "Asus Vivobook",
        total: "LKR 85000",
        orderId: "8034",
        orderDate: "2020-12-15 20:23",
        status: "Delivered"
    },
    {
        image: require('../HomeStackNavigator/screens/assets/6.png'),
        name: "Canon E560 Printer ",
        total: "LKR 4000",
        orderId: "8034",
        orderDate: "2020-12-15 20:23",
        status: "Delivered"
    },

];

function MyOrdersScreen({navigation}) {
    return (
        <View style={{marginBottom: 100, height: screenHeight}}>
            <ScrollView style={{backgroundColor: "#F6F7F7", paddingTop: 40, height: screenHeight}}>
                <View>
                    {
                        orderArr.map((l, i) => (

                            <ListItem key={i} bottomDivider>
                                <TouchableOpacity onPress={()=> navigation.navigate("Order Detail")} style={{width:"100%"}}>
                                <ListItem.Content>
                                    <Text>Order ID: <ListItem.Title>{l.orderId}</ListItem.Title></Text>
                                    <Text>Ordered Date: {l.orderDate}</Text>

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
                                </ListItem.Content>
                                </TouchableOpacity>
                            </ListItem>
                        ))
                    }
                </View>

            </ScrollView>
        </View>
    );
}


export default MyOrdersScreen;
