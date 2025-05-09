import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomeStackNavigator from "./navigation/HomeStackNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <HomeStackNavigator />
        </NavigationContainer>
    );
}