import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ModalScreen from "./screens/ModalScreen";

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
        component={ModalScreen}
        options={{ headerShown: false }}
      />
    </AddStack.Navigator>
  );
}
