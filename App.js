import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomeStackNavigator from "./navigation/HomeStackNavigator";
import FeedStackNavigator from "./navigation/FeedStackNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <FeedStackNavigator />
        </NavigationContainer>
    );
}