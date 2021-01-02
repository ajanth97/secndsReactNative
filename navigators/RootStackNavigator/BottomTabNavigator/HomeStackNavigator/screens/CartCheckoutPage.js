import React from "react";
import {View, Text, FlatList, Dimensions, TouchableOpacity, Image} from "react-native";
import {Avatar, Card, ListItem, Icon, Button, Overlay, Input, CheckBox} from "react-native-elements";


function CartCheckoutScreen({navigation}) {
    const list = [
        {title: 'Delivery Address', icon: 'local-shipping'}
    ];

    const itemList = [
        {name: "Fitbit Versa Smart watch", description: "Mildly used, Surface Scratches", price: 1000.00, availability: true },
        {name: "XD-100 Smart watch", description: "Mildly used, Surface Scratches", price: 900.00,availability: false},
    ];
    const [isOverlayVisible, setIsOverlayVisible] = React.useState(false);
    const [currentOverlay, setCurrentOverlay] = React.useState("");
    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    };
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;

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
                            checkedColor="#4f3098"
                        />
                        <CheckBox
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            iconLeft
                            checked={true}
                            title="Enter new Address"
                            checkedColor="#4f3098"
                        />
                        <Input
                            placeholder="Enter your Address"
                            leftIcon={{type: 'font-awesome', name: 'map-marker'}}
                            containerStyle={{marginTop: 0, marginLeft: 10, width: 300}}
                            inputStyle={{fontSize: 15}}
                        />
                        <Button type="outline" title={"Confirm"}
                                buttonStyle={{borderColor: "#4f3098", borderWidth: 1, backgroundColor: "#4f3098"}}
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
                            checkedColor="#4f3098"
                        />
                        <CheckBox
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            iconLeft
                            checked={true}
                            title="Card"
                            checkedColor="#4f3098"
                        />

                        <Button type="outline" title={"Confirm"}
                                buttonStyle={{borderColor: "#4f3098", borderWidth: 1, backgroundColor: "#4f3098"}}
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

            <Text style={{alignSelf:"flex-start", fontSize:16, fontWeight:"bold", marginLeft:20, marginTop:20}}>Confirm and Pay</Text>
            <Card containerStyle={{marginTop: 20, paddingTop: 10, paddingLeft:20,width: "90%"}}>
                <Text style={{alignSelf:"flex-start", fontSize:16, fontWeight:"bold"}}>Delivery Details</Text>
                {
                    list.map((item, i) => (
                        <ListItem key={i}
                                  onPress={() => {
                                      setCurrentOverlay("delivery-address");
                                      toggleOverlay();
                                  }}>
                            <Icon name={item.icon}/>
                            <ListItem.Content>
                                <Text style={{fontSize:15, fontWeight:"500"}}>{item.title}</Text>
                                <Text style={{fontWeight:"300"}}>134, Galle Road, Colombo-04</Text>
                            </ListItem.Content>
                            <ListItem.Chevron/>
                        </ListItem>
                    ))
                }
            </Card>


            {/*<View style={{flexDirection: "row", marginTop: 20}}>*/}
            {/*    <View style={{width: "70%", flexDirection: "row"}}>*/}
            {/*        <Text style={{alignSelf: "flex-start", fontWeight: "600", fontSize: 18, marginLeft: 20}}>Cart</Text>*/}
            {/*        <View style={{*/}
            {/*            backgroundColor: "#a30463",*/}
            {/*            width: 25,*/}
            {/*            height: 21,*/}
            {/*            borderRadius: 10,*/}
            {/*            alignItems: "center",*/}
            {/*            marginLeft: 3,*/}
            {/*            marginTop: 1*/}
            {/*        }}>*/}
            {/*            <Text style={{color: "white", fontSize: 16}}>2</Text>*/}
            {/*        </View>*/}
            {/*    </View>*/}
            {/*    <View style={{width: "30%"}}>*/}
            {/*        <TouchableOpacity>*/}
            {/*            <Text style={{alignSelf: "flex-start", fontWeight: "500", fontSize: 16, color: "#a30463"}}>Clear*/}
            {/*                Cart</Text>*/}
            {/*        </TouchableOpacity>*/}
            {/*    </View>*/}

            {/*</View>*/}

            {/*<Card containerStyle={{marginTop: 20, padding: 0, width: "90%"}}>*/}
            {/*    {*/}
            {/*        itemList.map((item, i) => (*/}
            {/*            <ListItem key={i} bottomDivider*/}
            {/*                      onPress={() => {*/}

            {/*                      }}>*/}
            {/*                <Image source={require('../screens/assets/6.png')}*/}
            {/*                       style={{alignSelf: "center", width: 110, height: 110, /*opacity:0.5*!/}/>*/}
            {/*                /!*<Text style={{position:"absolute", top:106, width:110, left:14,backgroundColor:"#1f8f93",*/}
            {/*                    textAlign:"center", color:"white", fontSize:20}}>SOLD</Text>*!/*/}

            {/*                <ListItem.Content>*/}
            {/*                    <Text style={{fontSize: 16, fontWeight: "500", marginBottom: 3}}>{item.name}</Text>*/}
            {/*                    <Text style={{fontSize: 13, marginBottom: 5}}>{item.description}</Text>*/}
            {/*                    <Text style={{fontWeight: "bold", fontSize: 16}}>LKR {item.price}</Text>*/}
            {/*                    <View style={{flexDirection:"row", marginTop:10}}>*/}
            {/*                        <Button type="outline" title={"See Similar"}*/}
            {/*                                buttonStyle={{*/}
            {/*                                    borderColor: "#4f3098",*/}
            {/*                                    padding: 4,*/}
            {/*                                    borderRadius: 30,*/}
            {/*                                    borderWidth: 1,*/}
            {/*                                    backgroundColor:"#4f3098"*/}
            {/*                                }}*/}
            {/*                                disabled={item.availability}*/}
            {/*                                disabledStyle={{backgroundColor:"white", borderColor:"white"}}*/}
            {/*                                disabledTitleStyle={{color:"white"}}*/}
            {/*                                titleStyle={{color: "white", fontSize: 13}}*/}
            {/*                                containerStyle={{width: "45%", marginLeft:"10%"}}*/}
            {/*                        />*/}
            {/*                        <Button type="outline" title={"Remove"}*/}
            {/*                                buttonStyle={{*/}
            {/*                                    borderColor: "#4f3098",*/}
            {/*                                    padding: 4,*/}
            {/*                                    borderRadius: 30,*/}
            {/*                                    borderWidth: 1*/}
            {/*                                }}*/}
            {/*                                titleStyle={{color: "#4f3098", fontSize: 13}}*/}
            {/*                                containerStyle={{width: "40%", marginLeft:"5%"}}*/}
            {/*                        />*/}
            {/*                    </View>*/}
            {/*                </ListItem.Content>*/}
            {/*            </ListItem>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</Card>*/}
            <Card containerStyle={{marginTop: 20, padding: 10, paddingLeft:20,width: "90%"}}>
                <Text style={{alignSelf:"flex-start", fontSize:16, fontWeight:"bold"}}>Price Details</Text>
                <View style={{marginTop:20, flexDirection:"row"}}>
                    <Text style={{ fontSize:15,width:"60%"}}>Item Price</Text>
                    <Text style={{fontSize:15}}>LKR 8000</Text>
                </View>
                <View style={{marginTop:10, flexDirection:"row"}}>
                    <Text style={{ fontSize:15,width:"60%"}}>Service Charge</Text>
                    <Text style={{fontSize:15}}>LKR 250</Text>
                </View>
                <View style={{marginTop:20, flexDirection:"row"}}>
                    <Text style={{ fontSize:15,width:"60%"}}>Total</Text>
                    <Text style={{fontSize:15, fontWeight:"bold"}}>LKR 8250</Text>
                </View>


            </Card>
            <Card containerStyle={{marginTop: 20, padding: 10, paddingLeft:20,width: "90%"}}>
                <Text style={{alignSelf:"flex-start", fontSize:16, fontWeight:"bold"}}>Payment Method</Text>
                {
                    list.map((item, i) => (
                        <ListItem key={i}
                                  onPress={() => {
                                      setCurrentOverlay("payment-type");
                                      toggleOverlay();
                                  }}>
                            <Icon name="credit-card"/>
                            <ListItem.Content>
                                <Text style={{fontSize:15, fontWeight:"500"}}>Card</Text>
                            </ListItem.Content>
                            <ListItem.Chevron/>
                        </ListItem>
                    ))
                }
            </Card>


            <Card containerStyle={{marginTop: 20, paddingTop: 10, paddingLeft:20,width: "90%", alignContent:"center"}}>
                <Text style={{alignSelf:"flex-start", fontSize:16, fontWeight:"bold"}}>
                    Return and Cancellation Policy</Text>
                <Text style={{marginTop:10}}>a asdim adimka slkn lakjnsa ajujn amkma</Text>
            </Card>

            <View style={{
                alignItems: "center", alignContent:"center",width: "90%", backgroundColor: "#4f3098",
                height: 50, borderRadius: 50, position: "absolute", top: screenHeight - 235, zIndex: 1000
            }}>
                    <Text style={{color: "white", fontSize: 18, marginTop:13}}>Confirm and Pay</Text>
            </View>

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

export default CartCheckoutScreen;
