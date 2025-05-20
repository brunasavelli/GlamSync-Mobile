import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomeStackNavigator from "./navigation/HomeStackNavigator";
import MaquiagemFeed from "./screens/MaquiagemFeed"

export default function App() {
    return (
        <NavigationContainer>
            <MaquiagemFeed />
        </NavigationContainer>
    );
}