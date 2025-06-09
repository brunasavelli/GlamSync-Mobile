import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//import TabNavigator from "./navigation/TabNavigator";
import DrawerNavigator from "./navigation/DrawerNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
}