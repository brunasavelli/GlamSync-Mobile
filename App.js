import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from "./navigation/TabNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}