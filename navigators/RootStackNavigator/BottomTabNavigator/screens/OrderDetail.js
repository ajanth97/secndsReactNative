import React from "react";
import {ListItem, Card} from 'react-native-elements'
import {View, Text, ScrollView, Dimensions, Image} from "react-native";

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
    }
];

function OrderDetailScreen({navigation}) {
    return (
        <View style={{marginBottom: 50, height: screenHeight}}>
            <ScrollView style={{backgroundColor: "#F6F7F7", paddingTop: 5, height: screenHeight}}>
                <View>
                    <Card>
                        <Text style={{padding: 5}}>Status: <Text
                            style={{color: "green"}}>{orderArr[0].status}</Text></Text>
                        <Text style={{padding: 5}}>Order
                            ID: <ListItem.Title>{orderArr[0].orderId}</ListItem.Title></Text>
                        <Text style={{padding: 5}}>Ordered Date: {orderArr[0].orderDate}</Text>
                    </Card>

                    <Card>
                        <Text style={{fontWeight: "bold", marginBottom: 10}}>Order Items</Text>
                        <View style={{flexDirection: "row", marginTop: 10}}>
                            <View>
                                <Image source={orderArr[0].image} style={{width: 110, height: 80}}/>
                            </View>
                            <View style={{marginTop: 10, marginLeft: 20}}>
                                <Text>{orderArr[0].name}</Text>
                                <ListItem.Subtitle style={{
                                    fontWeight: "bold",
                                    fontSize: 14,
                                    marginTop: 5,
                                    marginBottom: 5
                                }}>{
                                    orderArr[0].total}
                                </ListItem.Subtitle>
                            </View>
                        </View>
                    </Card>

                    <Card>
                        <Text style={{fontWeight: "bold", marginBottom: 10}}>Order Summary</Text>
                        <Text style={{padding: 5}}>Payment Type: <Text>Cash</Text></Text>
                        <Text style={{padding: 5}}>Paid on: {orderArr[0].orderDate}</Text>
                    </Card>

                    <Card>
                        <Text style={{fontWeight: "bold", marginBottom: 10}}>Payment Information</Text>
                        <View style={{flexDirection: "row"}}>
                            <Text style={{padding: 5, width: 100}}>Subtotal:</Text>
                            <Text style={{padding: 5}}>1300</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <Text style={{padding: 5, width: 100}}>Delivery Fee:</Text>
                            <Text style={{padding: 5}}>300</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <Text style={{padding: 5, width: 100, fontWeight: "700"}}>Total:</Text>
                            <Text style={{padding: 5}}>1600</Text>
                        </View>
                    </Card>

                    <Card>
                        <Text style={{fontWeight: "bold", marginBottom: 10}}>Delivery Information</Text>
                        <Text style={{padding: 5}}>Delivery Address: <Text>101, Alex Road, Colombo-03</Text></Text>
                        <Text style={{padding: 5}}>Delivered Date: {orderArr[0].orderDate}</Text>
                    </Card>
                </View>
            </ScrollView>
        </View>
    );
}

export default OrderDetailScreen;
