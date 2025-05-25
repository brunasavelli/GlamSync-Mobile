import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomeStackNavigator from "./navigation/HomeStackNavigator";
import InitialFeed from "./screens/InitialFeed"

export default function App() {
    return (
        <NavigationContainer>
            <InitialFeed />
        </NavigationContainer>
    );
}