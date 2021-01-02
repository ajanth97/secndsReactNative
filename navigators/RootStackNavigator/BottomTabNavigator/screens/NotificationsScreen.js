import React from "react";
import {View, Text, ScrollView} from "react-native";
import {Avatar, ListItem} from "react-native-elements";

function NotificationsScreen({navigation}) {
    const list = [
        {title: 'Payment Successful!', message: 'We have received your payment for Order #8034', icon: 'settings'},
        {title: 'Your Order is placed', message: 'The Order #8034 is confirmed.', icon: 'local-shipping'},
        {
            title: 'Only 30 minutes to Check out!',
            message: "You have added Item #234 to your Cart. You have 30 minutes to Checkout!",
            icon: 'payment'
        },
        {title: 'Payment Successful!', message: 'We have received your payment for Order #8034', icon: 'settings'},
        {title: 'Your Order is placed', message: 'The Order #8034 is confirmed.', icon: 'local-shipping'},
        {
            title: 'Only 30 minutes to Check out!',
            message: "You have added Item #234 to your Cart. You have 30 minutes to Checkout!",
            icon: 'payment'
        },
    ];

    return (
        <ScrollView style={{flex: 1}}>
            <Text style={{
                alignSelf: "flex-start",
                marginLeft: 20,
                fontWeight: "bold",
                fontSize: 18,
                marginBottom: 10,
                marginTop: 50
            }}>New</Text>
            <View style={{width: "100%"}}>
                {
                    list.map((item, i) => (
                        <ListItem key={i} onPress={() => {
                        }} containerStyle={{backgroundColor: "#e9f5f8"}}>
                            {/*<Icon name={item.icon}/>*/}
                            <Avatar size="large" rounded source={require('../HomeStackNavigator/screens/assets/6.png')}
                                    avatarStyle={{alignSelf: "center"}}/>
                            <ListItem.Content>
                                <Text style={{fontWeight: "bold", fontSize: 16}}>{item.title}</Text>
                                <Text>{item.message}</Text>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </View>
            <Text style={{
                alignSelf: "flex-start", marginLeft: 20, fontWeight: "bold", fontSize: 18, marginBottom: 10,
                marginTop: 30
            }}>Earlier</Text>
            <View style={{width: "100%"}}>
                {
                    list.map((item, i) => (
                        <ListItem key={i} onPress={() => {
                        }}>
                            {/*<Icon name={item.icon}/>*/}
                            <Avatar size="large" rounded source={require('../HomeStackNavigator/screens/assets/6.png')}
                                    avatarStyle={{alignSelf: "center"}}/>
                            <ListItem.Content>
                                <Text style={{fontWeight: "bold", fontSize: 16}}>{item.title}</Text>
                                <Text>{item.message}</Text>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </View>
        </ScrollView>

    );
}

export default NotificationsScreen;
