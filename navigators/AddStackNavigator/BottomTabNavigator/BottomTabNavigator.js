import React from "react";

import { Button } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStackNavigator from "./HomeStackNavigator/HomeStackNavigator";
import SettingsScreen from "./screens/SettingsScreen";

import Ionicons from "react-native-vector-icons/Ionicons";

const AddListing = () => null;

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ tabBarBadge: 5 }}
      />
      <Tab.Screen
        name="Add"
        component={AddListing}
        options={{
          tabBarButton: () => (
            <Button
              title="Add Listing"
              onPress={() => navigation.navigate("Modal")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarBadge: 10 }}
      />
    </Tab.Navigator>
  );
}
