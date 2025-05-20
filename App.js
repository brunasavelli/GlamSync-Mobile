import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomeStackNavigator from "./navigation/HomeStackNavigator";
import Notifications from "./screens/Notifications"

export default function App() {
    return (
        <NavigationContainer>
            <Notifications />
        </NavigationContainer>
    );
}