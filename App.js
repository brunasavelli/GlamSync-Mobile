import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Profile from "./screens/Profile";

export default function App() {
    return (
        <NavigationContainer>
            <Profile />
        </NavigationContainer>
    );
}