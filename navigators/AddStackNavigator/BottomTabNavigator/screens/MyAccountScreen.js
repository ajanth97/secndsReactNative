import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";
import {Avatar, Card, ListItem, Icon, Button} from "react-native-elements";

function MyAccountScreen({navigation}) {
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

    return (
        <View style={{flex: 1, alignItems: "center", marginTop: 50}}>
            {/*Profile Picture, Name, Membership Type*/}
            <View style={{flexDirection: "row"}}>
                <Avatar size="large" rounded source={require('../HomeStackNavigator/screens/assets/profilepic.jpg')}
                        avatarStyle={{alignSelf: "center"}}/>
                <View style={{marginLeft: 15, width: "65%", marginTop: 10}}>
                    <Text style={{fontWeight: "bold", fontSize: 25}}>Firstname Lastname</Text>
                    <View style={{flexDirection: "row"}}>
                        <Icon name='star' color={"gold"}/>
                        <Text style={{fontSize: 15, marginTop: 3, marginLeft: 5}}>Gold Member</Text>
                    </View>
                </View>
            </View>

            {/*MyOrder, MyListings, Favourites and MyInterests Buttons*/}
            <View style={{marginTop: 10, flexDirection: "row"}}>
                <View style={styles.topAvatarButtonContainer}>
                    <Avatar
                        rounded
                        size="small"
                        icon={{name: 'history', type: 'font-awesome', color: "black"}}
                        activeOpacity={0.7}
                        containerStyle={styles.avatarContainerStyle}
                    />
                    <Text style={styles.topAvatarButtonText}>My Orders</Text>
                </View>
                <View style={styles.topAvatarButtonContainer}>
                    <Avatar
                        rounded
                        size="small"
                        icon={{name: 'list', type: 'font-awesome', color: "black"}}
                        activeOpacity={0.7}
                        containerStyle={styles.avatarContainerStyle}
                    />
                    <Text style={styles.topAvatarButtonText}>My Listings</Text>
                </View>
                <View style={styles.topAvatarButtonContainer}>
                    <Avatar
                        rounded
                        size="small"
                        icon={{name: 'heart', type: 'font-awesome', color: "black"}}
                        activeOpacity={0.7}
                        containerStyle={styles.avatarContainerStyle}
                    />
                    <Text style={styles.topAvatarButtonText}>Favourites</Text>
                </View>
                <View style={styles.topAvatarButtonContainer}>
                    <Avatar
                        rounded
                        size="small"
                        icon={{name: 'star', type: 'font-awesome', color: "black"}}
                        activeOpacity={0.7}
                        containerStyle={styles.avatarContainerStyle}
                    />
                    <Text style={styles.topAvatarButtonText}>My Interests</Text>
                </View>
            </View>

            {/*Card 1*/}
            <Card containerStyle={{marginTop: 20, padding: 0, width: "80%"}}>
                {
                    list.map((item, i) => (
                        <ListItem key={i} bottomDivider>
                            <Icon name={item.icon}/>
                            <ListItem.Content>
                                <ListItem.Title>{item.title}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron/>
                        </ListItem>
                    ))
                }

            </Card>
            <Card containerStyle={{padding: 0, width: "80%"}}>
                {
                    list2.map((item, i) => (
                        <ListItem key={i} bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title>{item.title}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron/>
                        </ListItem>
                    ))
                }
                <ListItem bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>Version</ListItem.Title>
                    </ListItem.Content>
                    <Text>0.1.0</Text>
                </ListItem>
            </Card>
            <Button type="outline" title={"Sign out"}
                    buttonStyle={{borderColor: "red"}}
                    titleStyle={{color: "red"}}
                    containerStyle={{marginTop: 20, width: 200}}
            />
            <Image style={{marginTop: 30, width: 100, height: 20}}
                   source={require('../HomeStackNavigator/screens/assets/homeLogo.png')}/>
            <Text style={{marginTop: 5, fontSize: 10}}>©2020 Secnds.com</Text>
        </View>
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
        backgroundColor: 'white',
        shadowOpacity: 0.3
    }
});

export default MyAccountScreen;
