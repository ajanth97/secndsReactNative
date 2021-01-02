import React from "react";
import {View, Text, Dimensions, TouchableOpacity, Image} from "react-native";
import {Avatar, Card, ListItem, Button, Overlay, Input, CheckBox} from "react-native-elements";


function CartScreen({navigation}) {
    const list = [
        {title: 'Delivery Address', icon: 'local-shipping'}
    ];

    const itemList = [
        {name: "Fitbit Versa Smart watch", description: "Mildly used, Surface Scratches", price: 1000.00, availability: true },
        {name: "XD-100 Smart watch", description: "Mildly used, Surface Scratches", price: 900.00,availability: true},
    ];
    const [isOverlayVisible, setIsOverlayVisible] = React.useState(false);
    const [currentOverlay, setCurrentOverlay] = React.useState("");
    const [cartTotal, setCartTotal] = React.useState(calculateTotal);

    const [cartItemList, setCartItemList] = React.useState(itemList);
    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    };
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;

    function calculateTotal() {
        let total = 0;
        for (let i=0; i< itemList.length; i++) {
            total += itemList[i].price;
        }
        return total;
    }

    function returnCurrentOverlayView() {
        switch (currentOverlay) {
            case "delivery-address":
                return (
                    <View style={{height: 350}}>
                        <Text style={{alignSelf: "center", fontSize: 16, fontWeight: "bold", marginBottom: 30}}>Select
                            Delivery Address</Text>

                        <CheckBox
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            iconLeft
                            checked={false}
                            title="Default Address"
                        />
                        <CheckBox
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            iconLeft
                            checked={true}
                            title="Enter new Address"
                        />
                        <Input
                            placeholder="Enter your Address"
                            leftIcon={{type: 'font-awesome', name: 'map-marker'}}
                            containerStyle={{marginTop: 0, marginLeft: 10, width: 300}}
                            inputStyle={{fontSize: 15}}
                        />
                        <Button type="outline" title={"Confirm"}
                                buttonStyle={{borderColor: "green", borderWidth: 1, backgroundColor: "green"}}
                                titleStyle={{color: "white", fontWeight: "bold"}}
                                containerStyle={{marginTop: 10, width: 150, alignSelf: "center"}}
                                onPress={() => {
                                    toggleOverlay()
                                }}
                        />
                    </View>
                );
            case "payment-type":
                return (
                    <View style={{height: 260}}>
                        <Text style={{alignSelf: "center", fontSize: 16, fontWeight: "bold", marginBottom: 30}}>Select
                            Payment Method</Text>

                        <CheckBox
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            iconLeft
                            checked={false}
                            title="Cash"
                        />
                        <CheckBox
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            iconLeft
                            checked={true}
                            title="Card"
                        />

                        <Button type="outline" title={"Confirm"}
                                buttonStyle={{borderColor: "green", borderWidth: 1, backgroundColor: "green"}}
                                titleStyle={{color: "white", fontWeight: "bold"}}
                                containerStyle={{marginTop: 30, width: 150, alignSelf: "center"}}
                                onPress={() => {
                                    toggleOverlay()
                                }}
                        />
                    </View>
                );
        }
    }

    const overlayViewElement = returnCurrentOverlayView();

    return (
        <View style={{flex: 1, alignItems: "center"}}>
            <View style={{flexDirection: "row", marginTop: 20}}>
                <View style={{width: "70%", flexDirection: "row"}}>
                    <Text style={{alignSelf: "flex-start", fontWeight: "600", fontSize: 18, marginLeft: 20}}>Cart</Text>
                    <View style={{
                        backgroundColor: "#a30463",
                        width: 25,
                        height: 21,
                        borderRadius: 10,
                        alignItems: "center",
                        marginLeft: 3,
                        marginTop: 1
                    }}>
                        <Text style={{color: "white", fontSize: 16}}>{cartItemList.length}</Text>
                    </View>
                </View>
                <View style={{width: "30%"}}>
                    <TouchableOpacity onPress={() => {
                        setCartTotal(0)
                        setCartItemList([]);
                    }}>
                        <Text style={{alignSelf: "flex-start", fontWeight: "500", fontSize: 16, color: "#a30463"}}>Clear
                            Cart</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <Card containerStyle={{marginTop: 20, padding: 0, width: "90%"}}>
                {
                    cartItemList.map((item, i) => (
                        <ListItem key={i} bottomDivider
                                  onPress={() => {

                                  }}>
                            <Image source={require('../screens/assets/6.png')}
                                   style={{alignSelf: "center", width: 110, height: 110,/* opacity:0.5*/}}/>
                            {/*{<Text style={{position:"absolute", top:106, width:110, left:14,backgroundColor:"#1f8f93",*/}
                            {/*    textAlign:"center", color:"white", fontSize:20}}>SOLD</Text>}*/}

                            <ListItem.Content>
                                <Text style={{fontSize: 16, fontWeight: "500", marginBottom: 3}}>{item.name}</Text>
                                <Text style={{fontSize: 13, marginBottom: 5}}>{item.description}</Text>
                                <Text style={{fontWeight: "bold", fontSize: 16}}>LKR {item.price}</Text>
                                <View style={{flexDirection:"row", marginTop:10}}>
                                    <Button type="outline" title={"See Similar"}
                                            buttonStyle={{
                                                borderColor: "#4f3098",
                                                padding: 4,
                                                borderRadius: 30,
                                                borderWidth: 1,
                                                backgroundColor:"#4f3098"
                                            }}
                                            disabled={item.availability}
                                            disabledStyle={{backgroundColor:"white", borderColor:"white"}}
                                            disabledTitleStyle={{color:"white"}}
                                            titleStyle={{color: "white", fontSize: 13}}
                                            containerStyle={{width: "45%", marginLeft:"10%"}}
                                    />
                                    <Button type="outline" title={"Remove"}
                                            buttonStyle={{
                                                borderColor: "#4f3098",
                                                padding: 4,
                                                borderRadius: 30,
                                                borderWidth: 1
                                            }}
                                            titleStyle={{color: "#4f3098", fontSize: 13}}
                                            containerStyle={{width: "40%", marginLeft:"5%"}}
                                            onPress={calculateTotal}
                                    />
                                </View>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </Card>

            <TouchableOpacity style={{
                alignItems: "center", width: "90%", flexDirection: "row", backgroundColor: "#4f3098",
                height: 50, borderRadius: 50, position: "absolute", top: screenHeight - 235, zIndex: 1000
            }} onPress={() => navigation.navigate("CartCheckout")}>
                <View style={{width: "60%"}}>
                    <Text style={{color: "white", marginLeft: "15%", fontSize: 18}}>LKR {cartTotal}</Text>
                </View>
                <View style={{marginLeft: "10%", width: "40%"}}>
                    <Text style={{color: "white", fontSize: 18}}>Checkout</Text>
                </View>
            </TouchableOpacity>

            <Overlay isVisible={isOverlayVisible} onBackdropPress={toggleOverlay}>
                <View style={{width: (screenWidth * 0.8)}}>
                    <Avatar
                        rounded
                        size="medium"
                        icon={{name: 'times-circle', type: 'font-awesome', color: "black"}}
                        onPress={toggleOverlay}
                    />
                    {overlayViewElement}
                </View>
            </Overlay>
        </View>
    );
}

export default CartScreen;
