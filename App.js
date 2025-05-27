import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//import InitialFeed from "./screens/InitialFeed"
//import Profile from "./screens/Profile";
//import HomeStackNavigator from "./navigation/HomeStackNavigator";
import FeedStackNavigator from "./navigation/FeedStackNavigator";
// import Chats from "./screens/Chats";

export default function App() {
    return (
        <NavigationContainer>
            <FeedStackNavigator />
        </NavigationContainer>
    );
}