import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//import HomeStackNavigator from "./navigation/HomeStackNavigator";
//import InitialFeed from "./screens/InitialFeed"
import Profile from "./screens/Profile";

export default function App() {
    return (
        <NavigationContainer>
            <Profile />
        </NavigationContainer>
    );
}