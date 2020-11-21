import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeStackNavigator from "./HomeStackNavigator/HomeStackNavigator";
import MyAccountScreen from "./screens/MyAccountScreen";
import ModalScreen from "../screens/AddListingScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import SearchScreen from "./screens/SearchScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator({navigation}) {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = focused
                            ? "ios-home"
                            : "ios-home";
                    } else if (route.name === "My Account") {
                        iconName = focused ? "ios-person" : "ios-person";
                    } else if (route.name === "Cart") {
                        iconName = focused ? "ios-cart" : "ios-cart";
                    } else if (route.name === "Add") {
                        iconName = focused ? "ios-add-circle" : "ios-add-circle";
                    } else if (route.name === "Notifications") {
                        iconName = focused ? "ios-notifications" : "ios-notifications";
                    } else if (route.name === "Search") {
                        iconName = focused ? "ios-search" : "ios-search";
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
            })}
            tabBarOptions={{
                activeTintColor: "black",
                inactiveTintColor: "gray",
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
            />
            <Tab.Screen
                name="Add"
                component={ModalScreen}
            />
            <Tab.Screen
                name="Notifications"
                component={NotificationsScreen}
            />
            <Tab.Screen
                name="My Account"
                component={MyAccountScreen}
            />
        </Tab.Navigator>
    );
}
