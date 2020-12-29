import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import FormScreen from "./screens/FormScreen"

const AddListingStack = createStackNavigator();

export default function AddListingStackNavigator() {
    return(
        <AddListingStack.Navigator>
            <AddListingStack.Screen name="Form" component={FormScreen} options={{ headerShown: false }}/>
            
        </AddListingStack.Navigator>   
    )
}