import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import NewHomeScreen from "./screens/NewHomeScreen";
import ProductPage from "./screens/ProductPage";

const HomeStack = createStackNavigator();

function HomeStackNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen options={{headerShown: false}}  name="New Home" component={NewHomeScreen}/>
            <HomeStack.Screen name="Details" component={DetailsScreen}/>
            <HomeStack.Screen name="Home" component={HomeScreen}/>
            <HomeStack.Screen name="Product" component={ProductPage}/>
        </HomeStack.Navigator>
    );
}

export default HomeStackNavigator;
