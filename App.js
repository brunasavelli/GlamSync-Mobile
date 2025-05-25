import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomeStackNavigator from "./navigation/HomeStackNavigator";
import MakeUpFeed from "./screens/MakeUpFeed"

export default function App() {
    return (
        <NavigationContainer>
            <MakeUpFeed />
        </NavigationContainer>
    );
}