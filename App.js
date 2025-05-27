import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//import InitialFeed from "./screens/InitialFeed"
//import Profile from "./screens/Profile";
// import HomeStackNavigator from "./navigation/HomeStackNavigator";
// import Home from "./screens/Home";
//import FeedStackNavigator from "./navigation/FeedStackNavigator";
// import Chats from "./screens/Chats";
import TabNavigator from "./navigation/TabNavigator";
// import Login from "./screens/Login";

export default function App() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}