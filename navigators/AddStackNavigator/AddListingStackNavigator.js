import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AddListingScreen from "./screens/AddListingScreen";

import BottomTabNavigator from "./BottomTabNavigator/BottomTabNavigator";

const AddStack = createStackNavigator();

export default function AddStackNavigator() {
  return (
    <AddStack.Navigator mode="modal">
      <AddStack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <AddStack.Screen
        name="Modal"
        component={AddListingScreen}
        options={{ headerShown: false }}
      />
    </AddStack.Navigator>
  );
}
