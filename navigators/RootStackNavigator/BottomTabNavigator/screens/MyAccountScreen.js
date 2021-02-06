import React from "react";
import {View, Text, Image, StyleSheet, ScrollView, Dimensions} from "react-native";
import {Avatar, Card, ListItem, Icon, Input, Button, Overlay} from "react-native-elements";

function MyAccountScreen({navigation}) {
    const [isOverlayVisible, setIsOverlayVisible] = React.useState(false);
    const [currentOverlay, setCurrentOverlay] = React.useState("");
    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    };
    const list = [
        {title: 'Shipping Address', icon: 'local-shipping'},
        {title: 'Payment', icon: 'payment'},
        {title: 'Settings', icon: 'settings'},
    ];

    const list2 = [
        {title: 'Report Issue'},
        {title: 'Rate Secnds'},
        {title: 'Frequently Asked Questions'},
        {title: 'Privacy Policy'},
        {title: 'Legal Information'}
    ];
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;

    function returnCurrentOverlayView() {
        switch (currentOverlay) {
            case "Shipping Address":
                return (
                    <View>
                        <Text style={{alignSelf: "center", fontSize: 16}}>{currentOverlay}</Text>
                        <Input
                            placeholder="Enter your Address"
                            leftIcon={{type: 'font-awesome', name: 'map-marker'}}
                            containerStyle={{marginTop: 20}}
                        />
                        <Button type="outline" title={"SAVE"}
                                buttonStyle={{borderColor: "green", borderWidth: 1}}
                                titleStyle={{color: "green"}}
                                containerStyle={{marginTop: 30, width: 150, alignSelf: "center"}}
                        />
                    </View>
                );
            case "Payment":
                return (
                    <View>
                        <Text style={{alignSelf: "center"}}>{currentOverlay}</Text>
                    </View>
                );
            case "Settings":
                return (
                    <View>
                        <Text style={{alignSelf: "center"}}>{currentOverlay}</Text>
                    </View>
                );
            case "Report Issue":
                return (
                    <View>
                        <Text style={{alignSelf: "center"}}>{currentOverlay}</Text>
                    </View>
                );
            case "Rate Secnds":
                return (
                    <View>
                        <Text style={{alignSelf: "center"}}>{currentOverlay}</Text>
                    </View>
                );
            case "Frequently Asked Questions":
                return (
                    <View>
                        <Text style={{alignSelf: "center"}}>{currentOverlay}</Text>
                    </View>
                );
            case "Privacy Policy":
                return (
                    <View>
                        <Text style={{alignSelf: "center"}}>{currentOverlay}</Text>
                    </View>
                );
            case "Legal Information":
                return (
                    <View>
                        <Text style={{alignSelf: "center"}}>{currentOverlay}</Text>
                    </View>
                );
        }
    }

    const overlayViewElement = returnCurrentOverlayView();

    return (
        <ScrollView>
            <View style={{flex: 1, alignItems: "center", marginTop: 50}}>
                {/*Profile Picture, Name, Membership Type*/}
                <View style={{flexDirection: "row"}}>
                    <Avatar size="large" rounded source={require('../HomeStackNavigator/screens/assets/profilepic.jpg')}
                            avatarStyle={{alignSelf: "center"}}/>
                    <View style={{marginLeft: 15, width: "65%", marginTop: 10}}>
                        <Text style={{fontWeight: "bold", fontSize: 25}}>Firstname Lastname</Text>
                        <View style={{flexDirection: "row"}}>
                            <Text style={{fontSize: 15, marginTop: 3, marginLeft: 2, color: "grey"}}>View Profile</Text>
                        </View>
                    </View>
                </View>

                {/*MyOrder, MyListings, Favourites and MyInterests Buttons*/}
                <View style={{marginTop: 10, flexDirection: "row"}}>
                    <View style={styles.topAvatarButtonContainer}>
                        <Avatar
                            rounded
                            size="small"
                            icon={{name: 'history', type: 'font-awesome', color: "white"}}
                            activeOpacity={0.7}
                            containerStyle={styles.avatarContainerStyle}
                            onPress={() => navigation.navigate("My Orders")}
                        />
                        <Text style={styles.topAvatarButtonText}>My Orders</Text>
                    </View>
                    <View style={styles.topAvatarButtonContainer}>
                        <Avatar
                            rounded
                            size="small"
                            icon={{name: 'list', type: 'font-awesome', color: "white"}}
                            activeOpacity={0.7}
                            containerStyle={styles.avatarContainerStyle}
                            onPress={() => navigation.navigate("My Listings")}
                        />
                        <Text style={styles.topAvatarButtonText}>My Listings</Text>
                    </View>
                    <View style={styles.topAvatarButtonContainer}>
                        <Avatar
                            rounded
                            size="small"
                            icon={{name: 'heart', type: 'font-awesome', color: "white"}}
                            activeOpacity={0.7}
                            containerStyle={styles.avatarContainerStyle}
                            onPress={() => navigation.navigate("Favourites")}
                        />
                        <Text style={styles.topAvatarButtonText}>Favourites</Text>
                    </View>
                    <View style={styles.topAvatarButtonContainer}>
                        <Avatar
                            rounded
                            size="small"
                            icon={{name: 'star', type: 'font-awesome', color: "white"}}
                            activeOpacity={0.7}
                            containerStyle={styles.avatarContainerStyle}
                            onPress={() => navigation.navigate("My Interests")}
                        />
                        <Text style={styles.topAvatarButtonText}>My Interests</Text>
                    </View>
                </View>

                {/*Card 1*/}
                {/*<View style={{marginTop: 20, padding: 0, width: "80%"}}>*/}
                {/*    {*/}
                {/*        list.map((item, i) => (*/}
                {/*            <ListItem key={i} bottomDivider*/}
                {/*                      onPress={() => {*/}
                {/*                          setCurrentOverlay(item.title);*/}
                {/*                          toggleOverlay();*/}
                {/*                      }}>*/}
                {/*                <Icon name={item.icon}/>*/}
                {/*                <ListItem.Content>*/}
                {/*                    <ListItem.Title>{item.title}</ListItem.Title>*/}
                {/*                </ListItem.Content>*/}
                {/*                <ListItem.Chevron/>*/}
                {/*            </ListItem>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</View>*/}
                {/*<View style={{padding: 0, width: "80%"}}>*/}
                {/*    {*/}
                {/*        list2.map((item, i) => (*/}
                {/*            <ListItem key={i} bottomDivider*/}
                {/*                      onPress={() => {*/}
                {/*                          setCurrentOverlay(item.title);*/}
                {/*                          toggleOverlay();*/}
                {/*                      }}>*/}
                {/*                <ListItem.Content>*/}
                {/*                    <ListItem.Title>{item.title}</ListItem.Title>*/}
                {/*                </ListItem.Content>*/}
                {/*                <ListItem.Chevron/>*/}
                {/*            </ListItem>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</View>*/}

                {/*<View style={{padding: 0, width: "80%"}}>*/}
                {/*    <Text style={{marginLeft: 7, marginTop: 30, marginBottom: 10, fontWeight:"bold"}}>MARKETPLACE</Text>*/}
                {/*    <ListItem bottomDivider>*/}
                {/*        <ListItem.Content>*/}
                {/*            <ListItem.Title>Listings</ListItem.Title>*/}
                {/*        </ListItem.Content>*/}
                {/*        <ListItem.Chevron/>*/}
                {/*    </ListItem>*/}
                {/*    <ListItem bottomDivider>*/}
                {/*        <ListItem.Content>*/}
                {/*            <ListItem.Title>Purchases</ListItem.Title>*/}
                {/*        </ListItem.Content>*/}
                {/*        <ListItem.Chevron/>*/}
                {/*    </ListItem>*/}
                {/*    <ListItem bottomDivider>*/}
                {/*        <ListItem.Content>*/}
                {/*            <ListItem.Title>Bids and Offers</ListItem.Title>*/}
                {/*        </ListItem.Content>*/}
                {/*        <ListItem.Chevron/>*/}
                {/*    </ListItem>*/}
                {/*    <ListItem bottomDivider>*/}
                {/*        <ListItem.Content>*/}
                {/*            <ListItem.Title>Marketplace Guidlines</ListItem.Title>*/}
                {/*        </ListItem.Content>*/}
                {/*        <ListItem.Chevron/>*/}
                {/*    </ListItem>*/}
                {/*</View>*/}
                <View style={{padding: 0, width: "80%"}}>
                    <Text style={{marginLeft: 7, marginTop: 30, marginBottom: 10, fontWeight:"bold"}}>ACCOUNT SETTINGS</Text>
                    <ListItem bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>Personal Information</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                    <ListItem bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>Payment Method</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                    <ListItem bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>Address Book</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                    <ListItem bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>Notifications</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                </View>
                <View style={{padding: 0, width: "80%"}}>
                    <Text style={{marginLeft: 7, marginTop: 30, marginBottom: 10, fontWeight:"bold"}}>SUPPORT</Text>
                    <ListItem bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>How Secnds works</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                    <ListItem bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>Help Center</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                    <ListItem bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>Contact Customer Support</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                    <ListItem bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>Give us feedback</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                </View>

                <View style={{padding: 0, width: "80%"}}>
                    <Text style={{marginLeft: 7, marginTop: 30, marginBottom: 10, fontWeight:"bold"}}>LEGAL</Text>
                    <ListItem bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>Terms of Service</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                    <ListItem bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>Privacy Policy</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                    <ListItem bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>Download Updated App</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                    <ListItem bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>Logout</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                </View>
                {/*<Button type="outline" title={"Sign out"}*/}
                {/*        buttonStyle={{borderColor: "red"}}*/}
                {/*        titleStyle={{color: "red"}}*/}
                {/*        containerStyle={{marginTop: 20, width: 200}}*/}
                {/*/>*/}
                {/*<Image style={{marginTop: 30, width: 100, height: 20}}*/}
                {/*       source={require('../HomeStackNavigator/screens/assets/homeLogo.png')}/>*/}
                {/*<Text style={{marginTop: 5, fontSize: 10}}>©2020 Secnds.com</Text>*/}

                <Text style={{marginTop: 20}}>Version 0.1.0</Text>

                <Overlay isVisible={isOverlayVisible} onBackdropPress={toggleOverlay}>
                    <View style={{width: (screenWidth * 0.8), height: (screenHeight * 0.7)}}>
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    topAvatarButtonContainer: {
        alignItems: "center",
        width: "20%"
    },
    topAvatarButtonText: {
        fontSize: 12,
        marginTop: 5
    },
    avatarContainerStyle: {
        shadowOpacity: 0.3,
        backgroundColor:"#4f3098"
    }
});

export default MyAccountScreen;
