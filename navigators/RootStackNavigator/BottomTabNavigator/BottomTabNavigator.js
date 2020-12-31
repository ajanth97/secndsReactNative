import React from "react";
import {Button} from "react-native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeStackNavigator from "./HomeStackNavigator/HomeStackNavigator";
import MyAccountScreen from "./screens/MyAccountScreen";
import AddListingScreen from "../screens/AddListingScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import SearchScreen from "./screens/SearchScreen";
import MyOrdersScreen from "./screens/MyOrders";
import FavouritesScreen from "./screens/FavouritesScreen";
import MyInterestsScreen from "./screens/MyInterestsScreen";
import MyListingsScreen from "./screens/MyListingsScreen";

const Tab = createBottomTabNavigator();
const MyAccountStack = createStackNavigator();

function MyAccountStackScreen() {

    return (
        <MyAccountStack.Navigator>
            <MyAccountStack.Screen options={{headerShown: false}} name="My Account" component={MyAccountScreen}/>
            <MyAccountStack.Screen name="My Orders"
                                   component={MyOrdersScreen}/>
            <MyAccountStack.Screen name="Favourites" component={FavouritesScreen}/>
            <MyAccountStack.Screen name="My Listings" component={MyListingsScreen}/>
            <MyAccountStack.Screen name="My Interests" component={MyInterestsScreen}/>
        </MyAccountStack.Navigator>
    );
}

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
                component={AddListingScreen}
                options={{
                    tabBarButton: () => (
                      <Button
                        title="Add"
                        onPress={() => navigation.navigate("AddListing")}
                      />
                    ),
                  }}
            />
            <Tab.Screen
                name="Notifications"
                component={NotificationsScreen}
            />
            <Tab.Screen
                name="My Account"
                component={MyAccountStackScreen}
            />
        </Tab.Navigator>
    );
}
