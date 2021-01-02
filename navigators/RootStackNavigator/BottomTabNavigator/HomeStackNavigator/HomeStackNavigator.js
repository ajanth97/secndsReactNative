import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import NewHomeScreen from "./screens/NewHomeScreen";
import ProductPage from "./screens/ProductPage";
import CartScreen from "./screens/CartPage";
import CartCheckoutScreen from "./screens/CartCheckoutPage";

const HomeStack = createStackNavigator();

function HomeStackNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen options={{headerShown: false}}  name="New Home" component={NewHomeScreen}/>
            <HomeStack.Screen name="Details" component={DetailsScreen}/>
            <HomeStack.Screen name="Home" component={HomeScreen}/>
            <HomeStack.Screen name="Product" component={ProductPage}/>
            <HomeStack.Screen name="Cart" component={CartScreen}/>
            <HomeStack.Screen name="CartCheckout" component={CartCheckoutScreen}/>
        </HomeStack.Navigator>
    );
}

export default HomeStackNavigator;
