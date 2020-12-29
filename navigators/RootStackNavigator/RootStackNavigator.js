import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AddListingStackNavigator from "./AddListingStackNavigator/AddListingStackNavigator"
import BottomTabNavigator from "./BottomTabNavigator/BottomTabNavigator";

const RootStack = createStackNavigator();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="AddListing"
        component={AddListingStackNavigator}
        options={{ headerShown: false }}
      />
      
    </RootStack.Navigator>
  );
}
